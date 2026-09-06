// api/webhook.js - Stripe webhook with signature verification
import Stripe from 'stripe';
import { put } from '@vercel/blob';

export const config = { api: { bodyParser: false } };

// 读取并解析 Blob 中的 JSON 数据
async function readDB() {
    try {
        const result = await get('purchases.json', { access: 'private' });
        if (result) return JSON.parse(result.text);
    } catch (e) { /* 文件不存在则返回空对象 */ }
    return {};
}

// 将 JSON 数据写入 Blob
async function writeDB(data) {
    await put('purchases.json', JSON.stringify(data, null, 2), { access: 'private', allowOverwrite: true });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeSecretKey || !webhookSecret) return res.status(400).send('Server config incomplete');

  const stripe = new Stripe(stripeSecretKey);
  const sig = req.headers['stripe-signature'];
  let event;

  try {
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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    try {
      const paymentStatus = session.payment_status;
      const customerEmail = session.customer_details?.email;
      if (paymentStatus === 'paid' && customerEmail) {
        const key = `paid:${customerEmail.toLowerCase()}`;
        const db = await readDB(); // 读取当前数据
        db[key] = JSON.stringify({
          session_id: session.id,
          amount_total: session.amount_total,
          currency: session.currency,
          created: new Date().toISOString(),
          livemode: session.livemode
        });
        await writeDB(db); // 写入 Blob
      }
    } catch (e) {
      console.error('Process checkout.session.completed error', e);
    }
  }
  return res.status(200).json({ received: true });
}