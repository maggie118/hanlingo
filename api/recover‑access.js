import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    // 处理跨域预检
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // 仅允许 POST
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    try {
        const { email } = req.body || {};

        if (!email || typeof email !== 'string') {
            return res.status(400).json({ ok: false, error: "Email is required" });
        }

        // 统一小写，KV存储全部存小写邮箱
        const cleanEmail = email.trim().toLowerCase();

        // 查询KV，key格式 paid:xxx@xxx.com
        const recordRaw = await kv.get(`paid:${cleanEmail}`);

        if (!recordRaw) {
            // 无记录，不要区分“邮箱不存在”，避免被枚举探测邮箱
            return res.status(200).json({
                ok: true,
                hasPurchase: false,
                message: "No purchase record found for this email."
            });
        }

        // 存在付费记录
        return res.status(200).json({
            ok: true,
            hasPurchase: true,
            message: "Purchase record found. Please locate your Stripe purchase‑success email and open the success link to restore local access."
        });

    } catch (err) {
        console.error("recover‑access error:", err);
        return res.status(500).json({ ok: false, error: "Server error, please try again later." });
    }
}
