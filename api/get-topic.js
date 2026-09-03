// api/get-topic.js - serve paid topic content (topics 05-15) to verified buyers
// POST { token, topic } -> { ok: true, topic, phrases } | { ok: false, error }
// The phrase objects match exactly what js/data.js + js/wordseg.js used to
// ship publicly, so the existing card renderer needs no changes.
import crypto from 'crypto';
import content from './topic-content.js';

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

    const { token, topic } = req.body || {};
    if (!verifyToken(token, secret)) {
        return res.status(200).json({ ok: false, error: "Invalid access token" });
    }

    if (!/^topic-(0[5-9]|1[0-5])$/.test(String(topic))) {
        return res.status(400).json({ ok: false, error: "Invalid topic" });
    }

    const phrases = content[topic];
    if (!phrases || !phrases.length) {
        return res.status(200).json({ ok: false, error: "Unknown topic" });
    }

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ ok: true, topic: topic, phrases: phrases });
}
