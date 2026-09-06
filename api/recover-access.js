// api/recover-access.js - email-based purchase record lookup
import { get } from '@vercel/blob';

async function readDB() {
    try {
        const result = await get('purchases.json', { access: 'private' });
        if (result) return JSON.parse(result.text);
    } catch (e) {}
    return {};
}

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false, error: "Method not allowed" });

    try {
        const { email } = req.body || {};
        if (!email || typeof email !== 'string') return res.status(400).json({ ok: false, error: "Email is required" });

        const cleanEmail = email.trim().toLowerCase();
        const db = await readDB(); // 从 Blob 读取
        const recordRaw = db[`paid:${cleanEmail}`];

        if (!recordRaw) return res.status(200).json({ ok: true, hasPurchase: false, message: "No purchase record found for this email." });
        return res.status(200).json({ ok: true, hasPurchase: true, message: "Purchase record found..." });

    } catch (err) {
        console.error("recover-access error:", err);
        return res.status(500).json({ ok: false, error: "Server error, please try again later." });
    }
}