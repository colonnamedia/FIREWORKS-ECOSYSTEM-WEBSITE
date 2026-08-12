import { Resend } from 'resend';

const resend = new Resend('re_Jxr3ePGT_PYdHgueHT32EoN2VwkEaKPaP');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;

  // ── WEBSITE BUILDER INTAKE ──
  if (body.type === 'website-builder') {
    const { fullName, email, siteType, goals, industry, vibe, business, phone, adminEmail, layout, notes } = body;

    await resend.emails.send({
      from: 'FireWorks Eco <noreply@fireworks-websitebuilder.com>',
      to: 'colonnamedia@gmail.com',
      subject: `🔥 New Website Build Request — ${business || fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f4f3ff;border-radius:12px;">
          <div style="background:#3d35c8;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
            <h1 style="color:#fff;margin:0;font-size:18px;">🔥 New Website Build Request</h1>
            <p style="color:rgba(255,255,255,.6);margin:4px 0 0;font-size:13px;">Via FireWorks Website Builder</p>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;">
            <tr style="background:#f0effe;"><td colspan="2" style="padding:10px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7b78a0;">Client Info</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;width:35%;border-bottom:1px solid #f0effe;">Name</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${fullName}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Business</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${business}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Email</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Phone</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${phone || '—'}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Admin Email</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;"><strong style="color:#3d35c8;">${adminEmail}</strong></td></tr>
            <tr style="background:#f0effe;"><td colspan="2" style="padding:10px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7b78a0;">Build Brief</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Site Type</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;"><strong style="color:#3d35c8;">${siteType}</strong></td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Goals</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${goals}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Industry</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${industry}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Vibe</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;">${vibe}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;color:#7b78a0;font-size:13px;border-bottom:1px solid #f0effe;">Layout Choice</td><td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f0effe;"><strong style="color:#ff5c35;">${layout}</strong></td></tr>
          </table>
          ${notes ? `<div style="margin-top:16px;background:#fff;border-radius:8px;padding:16px;"><p style="font-weight:600;color:#7b78a0;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">Additional Notes</p><p style="font-size:13px;color:#0d0c1d;line-height:1.6;">${notes}</p></div>` : ''}
          <p style="margin-top:20px;font-size:11px;color:#999;text-align:center;">Sent via FireWorks Website Builder intake form</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  }

  // ── CAREERS APPLICATION ──
  const { fullName, email, phone, position, experience, portfolio, whyJoin } = body;

  if (!fullName || !email || !position) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'FireWorks Eco <noreply@fireworks-websitebuilder.com>',
      to: 'colonnamedia@gmail.com',
      subject: `New Application: ${fullName} — ${position}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">
          <div style="background:#ef4444;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
            <h1 style="color:#fff;margin:0;font-size:20px;">🔥 New FireWorks Eco Application</h1>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;width:35%;font-size:13px;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;">${fullName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;font-size:13px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;font-size:13px;">Position</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;">${position}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;font-size:13px;">Experience</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;">${experience || 'Not provided'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#666;font-size:13px;">Portfolio</td><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-size:13px;">${portfolio || 'Not provided'}</td></tr>
          </table>
          ${whyJoin ? `<div style="margin-top:20px;"><p style="font-weight:600;color:#666;margin-bottom:8px;font-size:13px;">Why FireWorks Eco:</p><div style="background:#fff;border:1px solid #e5e5e5;border-radius:8px;padding:14px;color:#333;line-height:1.6;font-size:13px;">${whyJoin}</div></div>` : ''}
          <p style="margin-top:24px;font-size:12px;color:#999;text-align:center;">Sent via FireWorks Eco careers page</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
