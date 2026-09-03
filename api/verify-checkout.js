// api/verify-checkout.js - server-side Checkout Session verification + access token issuance
import Stripe from 'stripe';
import { kv } from '@vercel/kv';
import crypto from 'crypto';

// HMAC-signed access token: base64url(payload) + '.' + base64url(hmac)
// Payload: { e: email, i: issuedAtUnix, l: livemode }
// The token has no expiry (lifetime product). Rotating HANLINGO_ACCESS_SECRET
// in Vercel invalidates every issued token at once.
function issueAccessToken(email, livemode) {
    const secret = process.env.HANLINGO_ACCESS_SECRET;
    const payload = Buffer.from(JSON.stringify({
        e: email, i: Math.floor(Date.now() / 1000), l: livemode ? 1 : 0
    })).toString('base64url');
    const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
    return payload + '.' + sig;
}

export default async function handler(req, res) {
    // CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // POST only
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
        return res.status(500).json({ ok: false, error: "Server config missing" });
    }

    const stripe = new Stripe(stripeSecret);

    const { session_id } = req.body || {};
    if (!session_id || !session_id.startsWith('cs_')) {
        return res.status(400).json({ ok: false, error: "Invalid session_id" });
    }

    try {
        // Retrieve the real session state from Stripe's backend
        const session = await stripe.checkout.sessions.retrieve(session_id);
        const isPaid = session.payment_status === 'paid';
        const email = session.customer_details?.email || null;

        // Self-healing backfill: the webhook used to fail signature checks,
        // so KV may lack records for already-paid customers. Every time a
        // paying user opens their success link we re-write the paid:email
        // record here, which makes recover-access work retroactively.
        // Idempotent and harmless on repeats.
        if (isPaid && email) {
            try {
                const key = `paid:${email.toLowerCase()}`;
                if (!(await kv.get(key))) {
                    await kv.set(key, JSON.stringify({
                        session_id: session.id,
                        amount_total: session.amount_total,
                        currency: session.currency,
                        created: new Date().toISOString(),
                        livemode: session.livemode,
                        source: 'verify-checkout'
                    }));
                }
            } catch (e) {
                // Backfill failure must not break the verification response
                console.error('KV backfill failed:', e.message);
            }
        }

        if (isPaid && email && !process.env.HANLINGO_ACCESS_SECRET) {
            // Refuse to hand out access without a real server-verified token
            console.error('HANLINGO_ACCESS_SECRET is not configured');
            return res.status(500).json({ ok: false, error: "Server config missing" });
        }

        return res.status(200).json({
            ok: true,
            paid: isPaid,
            customer_email: email,
            token: (isPaid && email) ? issueAccessToken(email, session.livemode) : null
        });

    } catch (err) {
        console.error('Stripe verify error:', err.message);
        return res.status(200).json({ ok: false, paid: false, error: "Session not found or invalid" });
    }
}
