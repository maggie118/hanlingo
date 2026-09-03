// api/webhook.js - Stripe webhook with signature verification
// NOTE: raw body is REQUIRED for signature verification, so we must disable
// Vercel's built-in JSON body parsing via `export const config` below.
import Stripe from 'stripe';
import { kv } from '@vercel/kv';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  // webhook only accepts POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    console.error('Missing stripe env config');
    return res.status(400).send('Server config incomplete');
  }

  const stripe = new Stripe(stripeSecretKey);
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Read the raw request stream byte-by-byte so the payload matches
    // exactly what Stripe signed. (req.body would be a parsed object here
    // and Buffer.from(object) yields "[object Object]" -> sig check fails.)
    const rawBody = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (chunk) => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verify failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Only handle completed checkout sessions
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const paymentStatus = session.payment_status;
      const customerEmail = session.customer_details?.email;
      const isLive = session.livemode ? 'LIVE-MODE' : 'TEST-MODE';

      console.log(`[${isLive}] checkout.session.completed | payment_status:${paymentStatus} | email:${customerEmail ?? 'no-email'}`);

      // Store in KV only when payment actually succeeded
      if (paymentStatus === 'paid' && customerEmail) {
        // KV: email as key -> order info, used later by recover-access lookup
        await kv.set(`paid:${customerEmail.toLowerCase()}`, JSON.stringify({
          session_id: session.id,
          amount_total: session.amount_total,
          currency: session.currency,
          created: new Date().toISOString(),
          livemode: session.livemode
        }));
      }
    } catch (e) {
      console.error('Process checkout.session.completed error', e);
      // Business logic failure still returns 200 to stop Stripe retry storms
    }
  }

  // All other events: acknowledge with 200, no action
  return res.status(200).json({ received: true });
}
