// api/verify-checkout.js - server-side Checkout Session verification + access token issuance
import Stripe from 'stripe';
import crypto from 'crypto';
import { put, get } from '@vercel/blob';

// Blob 辅助函数
async function readDB() {
    try {
        const result = await get('purchases.json', { access: 'private' });
        if (result) return JSON.parse(result.text);
    } catch (e) {}
    return {};
}
async function writeDB(data) {
    await put('purchases.json', JSON.stringify(data, null, 2), { access: 'private', allowOverwrite: true });
}

function issueAccessToken(email, livemode) {
    const secret = process.env.HANLINGO_ACCESS_SECRET;
    const payload = Buffer.from(JSON.stringify({
        e: email, i: Math.floor(Date.now() / 1000), l: livemode ? 1 : 0
    })).toString('base64url');
    const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
    return payload + '.' + sig;
}

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false, error: "Method not allowed" });

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) return res.status(500).json({ ok: false, error: "Server config missing" });
    const stripe = new Stripe(stripeSecret);

    const { session_id } = req.body || {};
    if (!session_id || !session_id.startsWith('cs_')) return res.status(400).json({ ok: false, error: "Invalid session_id" });

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id);
        const isPaid = session.payment_status === 'paid';
        const email = session.customer_details?.email || null;

        if (isPaid && email) {
            try {
                const key = `paid:${email.toLowerCase()}`;
                const db = await readDB();
                if (!db[key]) {
                    db[key] = JSON.stringify({
                        session_id: session.id,
                        amount_total: session.amount_total,
                        currency: session.currency,
                        created: new Date().toISOString(),
                        livemode: session.livemode,
                        source: 'verify-checkout'
                    });
                    await writeDB(db);
                }
            } catch (e) {
                console.error('Blob backfill failed:', e.message);
            }
        }

        if (isPaid && email && !process.env.HANLINGO_ACCESS_SECRET) {
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