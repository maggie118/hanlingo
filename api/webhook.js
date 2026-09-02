import Stripe from 'stripe';
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // webhook 只接受 POST
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
    // 读取原始body，webhook必须用raw payload，不能json解析后的对象
    const rawBody = Buffer.from(req.body);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verify failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 只处理结账完成事件
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      const paymentStatus = session.payment_status;
      const customerEmail = session.customer_details?.email;
      const isLive = !session.livemode ? 'TEST?MODE' : 'LIVE?MODE';

      console.log(`[${isLive}] checkout.session.completed | payment_status:${paymentStatus} | email:${customerEmail ?? 'no?email'}`);

      // 仅支付成功才存入KV
      if (paymentStatus === 'paid' && customerEmail) {
        // KV存储：邮箱为key，保存订单信息，设置过期时间不限制；可以后续用来给用户发找回指引邮件
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
      // webhook内部业务出错依然返回200，防止Stripe无限重试
    }
  }

  // 其他事件直接200接收，不做处理
  return res.status(200).json({ received: true });
}
