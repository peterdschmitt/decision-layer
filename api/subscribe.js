// Vercel function: subscribe a reader and invite them to the private examples repo.
// POST fields: email, github (GitHub username), website (honeypot, must be empty).
// Environment (set in Vercel, never in code):
//   GITHUB_INVITE_TOKEN  fine-grained token, only the examples repo, Administration: read and write
//   RESEND_API_KEY, RESEND_FROM  optional, to email Peter each signup
//   SUBSCRIBE_NOTIFY_TO  optional, who gets the signup email
// Keys are read from the environment only and never logged or returned.

const REPO = process.env.EXAMPLES_REPO || 'peterdschmitt/decision-layer-examples';
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;
const GH_RE = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = typeof req.body === 'string' ? req.body : await new Promise((ok) => {
    let s = ''; req.on('data', (c) => { s += c; if (s.length > 4096) req.destroy(); }); req.on('end', () => ok(s));
  });
  try { return JSON.parse(raw); } catch { return Object.fromEntries(new URLSearchParams(raw)); }
}

function reply(req, res, status, body) {
  const wantsJson = (req.headers.accept || '').includes('application/json');
  if (wantsJson) return res.status(status).json(body);
  res.writeHead(303, { Location: `/subscribe/?status=${body.ok ? 'ok' : 'error'}&code=${encodeURIComponent(body.code)}` });
  res.end();
}

async function notifyPeter(email, github, outcome) {
  const key = process.env.RESEND_API_KEY, from = process.env.RESEND_FROM;
  if (!key || !from) return false;
  const to = process.env.SUBSCRIBE_NOTIFY_TO || 'peter@converselyai.com';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], subject: `New Decision Layer subscriber: ${github}`,
      text: `Email: ${email}\nGitHub: https://github.com/${github}\nRepo invite: ${outcome}\n` }),
  }).catch(() => null);
  return !!(r && r.ok);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false, code: 'method' }); }
  const b = await readBody(req);
  const email = String(b.email || '').trim().toLowerCase();
  const github = String(b.github || '').trim().replace(/^@/, '').replace(/^https?:\/\/github\.com\//i, '').replace(/\/.*$/, '');
  if (b.website) return reply(req, res, 200, { ok: true, code: 'queued' }); // bot filled the honeypot
  if (!EMAIL_RE.test(email)) return reply(req, res, 400, { ok: false, code: 'email' });
  if (!GH_RE.test(github)) return reply(req, res, 400, { ok: false, code: 'github' });

  const gh = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'decision-layer-subscribe' };
  const user = await fetch(`https://api.github.com/users/${github}`, { headers: gh }).catch(() => null);
  if (user && user.status === 404) return reply(req, res, 400, { ok: false, code: 'nouser' });

  const token = process.env.GITHUB_INVITE_TOKEN;
  let outcome = 'not sent: no GITHUB_INVITE_TOKEN set, invite them by hand';
  if (token) {
    const r = await fetch(`https://api.github.com/repos/${REPO}/collaborators/${github}`, {
      method: 'PUT', headers: { ...gh, Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ permission: 'pull' }),
    }).catch(() => null);
    if (r && r.status === 201) outcome = 'invite sent';
    else if (r && r.status === 204) outcome = 'already has access';
    else outcome = `failed (GitHub HTTP ${r ? r.status : 'no response'}), invite them by hand`;
  }
  const told = await notifyPeter(email, github, outcome);
  const invited = outcome === 'invite sent' || outcome === 'already has access';
  if (!invited && !told) return reply(req, res, 503, { ok: false, code: 'later' });
  return reply(req, res, 200, { ok: true, code: invited ? 'invited' : 'queued' });
}
