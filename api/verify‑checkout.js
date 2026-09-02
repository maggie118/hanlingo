// api/verify‑checkout.js
import Stripe from 'stripe';

export default async function handler(req, res) {
    // 处理浏览器跨域预检 OPTIONS
    if(req.method === 'OPTIONS'){
        return res.status(204).end();
    }

    // 只允许POST请求
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
        return res.status(500).json({ ok: false, error: "Server config missing" });
    }

    const stripe = new Stripe(stripeSecret);

    let { session_id } = req.body || {};
    if (!session_id || !session_id.startsWith('cs_')) {
        return res.status(400).json({ ok: false, error: "Invalid session_id" });
    }

    try {
        // 请求Stripe后端读取结账会话真实状态
        const session = await stripe.checkout.sessions.retrieve(session_id);
        const isPaid = session.payment_status === 'paid';

        return res.status(200).json({
            ok: true,
            paid: isPaid,
            customer_email: session.customer_details?.email || null
        });

    } catch (err) {
        console.error("Stripe verify error:", err.message);
        return res.status(200).json({ ok: false, paid: false, error: "Session not found or invalid" });
    }
}


export default async function handler(req, res) {
    // 只允许POST请求
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
        return res.status(500).json({ ok: false, error: "Server config missing" });
    }

    const stripe = new Stripe(stripeSecret);

    let { session_id } = req.body || {};
    if (!session_id || !session_id.startsWith('cs_')) {
        return res.status(400).json({ ok: false, error: "Invalid session_id" });
    }

    try {
        // 请求Stripe后端读取结账会话真实状态
        const session = await stripe.checkout.sessions.retrieve(session_id);

        // 关键判断：必须支付完成
        const isPaid = session.payment_status === 'paid';

        return res.status(200).json({
            ok: true,
            paid: isPaid,
            customer_email: session.customer_details?.email || null
        });

    } catch (err) {
        console.error("Stripe verify error:", err.message);
        return res.status(200).json({ ok: false, paid: false, error: "Session not found or invalid" });
    }
}
