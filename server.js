const express = require('express');
const stripe = require('stripe')('sk_test_YOUR_STRIPE_SECRET_KEY'); // 替换为您的 Stripe 密钥
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 模拟数据库（实际应用中请用 MongoDB, PostgreSQL 等替换）
const usersDB = {}; 

// 1. 创建支付订单
app.post('/api/create-checkout-session', async (req, res) => {
  const { userId, priceId } = req.body;
  const YOUR_DOMAIN = 'http://localhost:5500'; // 替换为您前端部署的地址

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
      client_reference_id: userId, // 将用户 ID 绑定到订单
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. 验证支付状态 (前端回跳时调用)
app.get('/api/verify-session', async (req, res) => {
  const { session_id, userId } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    if (session.payment_status === 'paid' && session.client_reference_id === userId) {
      // 支付成功，在数据库中记录该用户已解锁
      usersDB[userId] = { isPro: true, paidAt: new Date() };
      res.json({ paid: true });
    } else {
      res.json({ paid: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. (可选) Webhook 接收异步通知
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'whsec_YOUR_WEBHOOK_SECRET');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    usersDB[session.client_reference_id] = { isPro: true };
  }
  res.json({received: true});
});

app.listen(3000, () => console.log('Server running on port 3000'));