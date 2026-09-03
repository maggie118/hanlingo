// api/verify-token.js - verify an HMAC-signed HanLingo access token
// POST { token } -> { ok: true, email } | { ok: false }
import crypto from 'crypto';

function verifyToken(token, secret) {
    if (!token || typeof token !== 'string' || token.length > 2048) return null;
    const dot = token.lastIndexOf('.');
    if (dot < 1 || dot === token.length - 1) return null;
    const payload = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    let expected;
    try {
        expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
    } catch (e) {
        return null;
    }
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    try {
        const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
        if (!data || typeof data.e !== 'string' || !data.e.includes('@')) return null;
        return data;
    } catch (e) {
        return null;
    }
}

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const secret = process.env.HANLINGO_ACCESS_SECRET;
    if (!secret) {
        return res.status(500).json({ ok: false, error: "Server config missing" });
    }

    const { token } = req.body || {};
    const data = verifyToken(token, secret);
    if (!data) {
        return res.status(200).json({ ok: false });
    }
    return res.status(200).json({ ok: true, email: data.e });
}
