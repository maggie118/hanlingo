// api/recover-access.js - email-based purchase record lookup
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    // CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // POST only
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    try {
        const { email } = req.body || {};

        if (!email || typeof email !== 'string') {
            return res.status(400).json({ ok: false, error: "Email is required" });
        }

        // KV keys are always lowercase emails
        const cleanEmail = email.trim().toLowerCase();

        // Look up KV, key format: paid:xxx@xxx.com
        const recordRaw = await kv.get(`paid:${cleanEmail}`);

        if (!recordRaw) {
            // Do not distinguish "email not found" to prevent email enumeration
            return res.status(200).json({
                ok: true,
                hasPurchase: false,
                message: "No purchase record found for this email."
            });
        }

        // Paid record exists
        return res.status(200).json({
            ok: true,
            hasPurchase: true,
            message: "Purchase record found. Please locate your Stripe purchase-success email and open the success link to restore local access."
        });

    } catch (err) {
        console.error("recover-access error:", err);
        return res.status(500).json({ ok: false, error: "Server error, please try again later." });
    }
}
