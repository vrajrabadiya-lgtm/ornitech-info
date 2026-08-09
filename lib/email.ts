import nodemailer from "nodemailer"
import type { ContactInput, CollaborateInput } from "@/lib/forms"

// ─── Nodemailer Transport ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

// ─── User-Agent Parser (lightweight, no dependencies) ───────────────────────
function parseUserAgent(ua: string): { browser: string; os: string; device: string } {
  if (!ua) return { browser: "Unknown", os: "Unknown", device: "Unknown" }

  let browser = "Unknown"
  if (ua.includes("Edg/")) browser = "Microsoft Edge"
  else if (ua.includes("OPR/") || ua.includes("Opera")) browser = "Opera"
  else if (ua.includes("Chrome/") && !ua.includes("Edg/")) browser = "Google Chrome"
  else if (ua.includes("Safari/") && !ua.includes("Chrome")) browser = "Safari"
  else if (ua.includes("Firefox/")) browser = "Mozilla Firefox"
  else if (ua.includes("MSIE") || ua.includes("Trident/")) browser = "Internet Explorer"

  let os = "Unknown"
  if (ua.includes("Windows NT 10")) os = "Windows 10/11"
  else if (ua.includes("Windows")) os = "Windows"
  else if (ua.includes("Mac OS X")) os = "macOS"
  else if (ua.includes("Android")) os = "Android"
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS"
  else if (ua.includes("Linux")) os = "Linux"

  let device = "Desktop"
  if (ua.includes("Mobile") || ua.includes("Android") || ua.includes("iPhone")) device = "Mobile"
  else if (ua.includes("iPad") || ua.includes("Tablet")) device = "Tablet"

  return { browser, os, device }
}

// ─── Shared Brand Constants ──────────────────────────────────────────────────
const BRAND = {
  primary: "#2563EB",      // Electric Blue
  primaryDark: "#1D4ED8",
  accent: "#06B6D4",       // Cyan
  navy: "#0F172A",         // Rich Navy
  slate: "#475569",        // Body text
  lightSlate: "#94A3B8",
  border: "#E2E8F0",
  bg: "#FAFBFC",           // Soft white
  card: "#FFFFFF",
  softBlue: "#EFF6FF",
  softCyan: "#ECFEFF",
}

// ─── Reusable Card Row ───────────────────────────────────────────────────────
function detailRow(label: string, value: string, color: string = BRAND.primary) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="background:${color === BRAND.primary ? BRAND.softBlue : BRAND.softCyan};border-radius:12px;padding:16px 20px;border:1px solid ${color === BRAND.primary ? "rgba(37,99,235,0.12)" : "rgba(6,182,212,0.12)"};">
          <div style="font-size:11px;font-weight:600;color:${color};letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">${label}</div>
          <div style="font-size:16px;font-weight:600;color:${BRAND.navy};">${value}</div>
        </td>
      </tr>
    </table>`
}

// ─── Admin Notification HTML Template ────────────────────────────────────────
function buildAdminEmail(opts: {
  fullName: string
  email: string
  company?: string
  service?: string
  budget?: string
  projectType?: string
  website?: string
  phone?: string
  message: string
  submittedAt: string
  ip: string
  country: string
  browser: string
  os: string
  device: string
}): string {
  const { fullName, email, company, service, budget, projectType, website, phone, message, submittedAt, ip, country, browser, os, device } = opts
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>New Contact | Ornitech</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.navy};">

<!-- Wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};">
<tr><td align="center" style="padding:40px 16px;">

<!-- Container -->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Logo & Badge -->
  <tr><td align="center" style="padding-bottom:32px;">
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <img src="https://www.ornitech.in/transparent.png" alt="Ornitech Logo" style="display:block;height:56px;width:auto;outline:none;border:none;text-decoration:none;" />
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Label -->
  <tr><td align="center" style="padding-bottom:12px;">
    <span style="display:inline-block;background:${BRAND.softBlue};border:1px solid rgba(37,99,235,0.2);border-radius:20px;padding:6px 18px;font-size:11px;font-weight:600;letter-spacing:2px;color:${BRAND.primary};text-transform:uppercase;">⚡ New Contact Request</span>
  </td></tr>

  <!-- Title -->
  <tr><td align="center" style="padding-bottom:8px;">
    <h1 style="margin:0;font-size:28px;font-weight:800;color:${BRAND.navy};">Someone wants to build something amazing.</h1>
  </td></tr>

  <!-- Subtitle -->
  <tr><td align="center" style="padding-bottom:36px;">
    <p style="margin:0;font-size:14px;color:${BRAND.slate};line-height:1.6;">A visitor has submitted a new inquiry through the Ornitech website.</p>
  </td></tr>

  <!-- Main Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:32px;">

    ${detailRow("👤 Full Name", fullName, BRAND.primary)}
    ${detailRow("📧 Email Address", `<a href="mailto:${email}" style="color:${BRAND.primary};text-decoration:none;">${email}</a>`, BRAND.accent)}
    ${company ? detailRow("🏢 Company", company, BRAND.primary) : ""}
    ${phone ? detailRow("📞 Phone", phone, BRAND.accent) : ""}
    ${service ? detailRow("🛠 Service", service, BRAND.primary) : ""}
    ${projectType ? detailRow("🎯 Project Type", projectType, BRAND.accent) : ""}
    ${budget ? detailRow("💰 Budget", budget, BRAND.primary) : ""}
    ${website ? detailRow("🌐 Website", website, BRAND.accent) : ""}

    <!-- Message -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${BRAND.softBlue};border-radius:12px;padding:16px 20px;border:1px solid rgba(37,99,235,0.12);">
          <div style="font-size:11px;font-weight:600;color:${BRAND.primary};letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">💬 Message</div>
          <div style="font-size:14px;font-weight:400;color:${BRAND.slate};line-height:1.7;white-space:pre-wrap;">${message}</div>
        </td>
      </tr>
    </table>

  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Technical Details Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:28px 32px;">

    <div style="font-size:11px;font-weight:700;color:${BRAND.accent};letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;">🔍 Technical Details</div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.lightSlate};font-weight:500;">Submission Time</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.navy};text-align:right;font-weight:600;">${submittedAt}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.lightSlate};font-weight:500;">IP Address</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.navy};text-align:right;font-family:'Courier New',monospace;font-weight:600;">${ip}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.lightSlate};font-weight:500;">Country</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.navy};text-align:right;font-weight:600;">${country}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.lightSlate};font-weight:500;">Browser</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.navy};text-align:right;font-weight:600;">${browser}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:12px;color:${BRAND.lightSlate};font-weight:500;">Operating System</td>
        <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.navy};text-align:right;font-weight:600;">${os}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-size:12px;color:${BRAND.lightSlate};font-weight:500;">Device</td>
        <td style="padding:10px 0;font-size:13px;color:${BRAND.navy};text-align:right;font-weight:600;">${device}</td>
      </tr>
    </table>

  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Action Buttons -->
  <tr><td align="center" style="padding-bottom:12px;">
    <a href="mailto:${email}" style="display:inline-block;background:${BRAND.primary};color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:12px;letter-spacing:0.5px;">↩ Reply to Client</a>
  </td></tr>
  <tr><td align="center" style="padding-bottom:36px;">
    <a href="https://www.ornitech.in" style="display:inline-block;background:transparent;color:${BRAND.primary};font-size:13px;font-weight:600;text-decoration:none;padding:10px 28px;border-radius:10px;border:1px solid rgba(37,99,235,0.3);letter-spacing:0.5px;">🌐 Open Website</a>
  </td></tr>

  <!-- Divider -->
  <tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(37,99,235,0.2),rgba(6,182,212,0.2),transparent);"></td></tr>

  <!-- Footer -->
  <tr><td align="center" style="padding-top:32px;">
    <p style="margin:0 0 6px;font-size:11px;color:${BRAND.lightSlate};">This notification was automatically generated by the Ornitech Contact API.</p>
    <p style="margin:0 0 6px;font-size:11px;color:${BRAND.lightSlate};">Powered by <span style="color:${BRAND.primary};font-weight:600;">Ornitech AI Infrastructure</span></p>
    <p style="margin:0 0 12px;">
      <a href="https://www.ornitech.in" style="color:${BRAND.accent};font-size:11px;text-decoration:none;">www.ornitech.in</a>
      <span style="color:${BRAND.border};margin:0 8px;">|</span>
      <a href="mailto:support@ornitech.in" style="color:${BRAND.accent};font-size:11px;text-decoration:none;">support@ornitech.in</a>
    </p>
    <p style="margin:0;font-size:10px;color:${BRAND.lightSlate};">© 2026 Ornitech · Building Intelligent Software for the Future.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── User Thank You HTML Template ────────────────────────────────────────────
function buildThankYouEmail(opts: {
  fullName: string
  email: string
  company?: string
  service?: string
  budget?: string
  projectType?: string
  website?: string
  phone?: string
  message: string
}): string {
  const { fullName, email, company, service, budget, projectType, website, phone, message } = opts
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Thank You | Ornitech</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.navy};">

<!-- Wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};">
<tr><td align="center" style="padding:40px 16px;">

<!-- Container -->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Logo -->
  <tr><td align="center" style="padding-bottom:32px;">
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <img src="https://www.ornitech.in/transparent.png" alt="Ornitech Logo" style="display:block;height:56px;width:auto;outline:none;border:none;text-decoration:none;" />
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Heading -->
  <tr><td align="center" style="padding-bottom:8px;">
    <h1 style="margin:0;font-size:28px;font-weight:800;color:${BRAND.navy};">Thanks for reaching out, ${fullName}.</h1>
  </td></tr>

  <!-- Subtitle -->
  <tr><td align="center" style="padding-bottom:36px;">
    <p style="margin:0;font-size:14px;color:${BRAND.slate};line-height:1.6;">Your request has entered our innovation pipeline.</p>
  </td></tr>

  <!-- Hero Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:32px;">
    <p style="margin:0 0 8px;font-size:16px;color:${BRAND.navy};font-weight:600;">Hi ${fullName},</p>
    <p style="margin:0 0 16px;font-size:14px;color:${BRAND.slate};line-height:1.7;">Thank you for contacting <span style="color:${BRAND.primary};font-weight:600;">Ornitech</span>. We've successfully received your inquiry.</p>
    <p style="margin:0;font-size:14px;color:${BRAND.slate};line-height:1.7;">Our technical team is reviewing your requirements and we'll connect with you shortly.</p>
  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Submission Details Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:32px;">
    <div style="font-size:11px;font-weight:700;color:${BRAND.accent};letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;">📋 Your Submission</div>

    ${detailRow("👤 Name", fullName, BRAND.primary)}
    ${detailRow("📧 Email", email, BRAND.accent)}
    ${company ? detailRow("🏢 Company", company, BRAND.primary) : ""}
    ${phone ? detailRow("📞 Phone", phone, BRAND.accent) : ""}
    ${service ? detailRow("🛠 Service", service, BRAND.primary) : ""}
    ${projectType ? detailRow("🎯 Project Type", projectType, BRAND.accent) : ""}
    ${budget ? detailRow("💰 Budget", budget, BRAND.primary) : ""}
    ${website ? detailRow("🌐 Website", website, BRAND.accent) : ""}

    <!-- Requirement -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${BRAND.softBlue};border-radius:12px;padding:16px 20px;border:1px solid rgba(37,99,235,0.12);">
          <div style="font-size:11px;font-weight:600;color:${BRAND.primary};letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">💬 Requirement</div>
          <div style="font-size:14px;font-weight:400;color:${BRAND.slate};line-height:1.7;white-space:pre-wrap;">${message}</div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Progress Timeline Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:28px 32px;">
    <div style="font-size:11px;font-weight:700;color:${BRAND.primary};letter-spacing:2px;text-transform:uppercase;margin-bottom:24px;">🚀 Project Status</div>

    <!-- Step 1 - Active -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td width="40" valign="top">
          <div style="width:28px;height:28px;border-radius:50%;background:${BRAND.primary};text-align:center;line-height:28px;font-size:13px;color:#FFFFFF;font-weight:700;">✓</div>
        </td>
        <td valign="middle" style="padding-left:12px;">
          <div style="font-size:14px;font-weight:600;color:${BRAND.primary};">Request Received</div>
          <div style="font-size:11px;color:${BRAND.lightSlate};margin-top:2px;">Your inquiry has been logged</div>
        </td>
      </tr>
    </table>

    <!-- Connector -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr><td width="40" align="center"><div style="width:2px;height:20px;background:linear-gradient(180deg,${BRAND.primary},${BRAND.accent});margin:0 auto;"></div></td><td></td></tr>
    </table>

    <!-- Step 2 - In Progress -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td width="40" valign="top">
          <div style="width:28px;height:28px;border-radius:50%;background:${BRAND.accent};text-align:center;line-height:28px;font-size:13px;color:#FFFFFF;font-weight:700;">⟳</div>
        </td>
        <td valign="middle" style="padding-left:12px;">
          <div style="font-size:14px;font-weight:600;color:${BRAND.accent};">Technical Review</div>
          <div style="font-size:11px;color:${BRAND.lightSlate};margin-top:2px;">Our team is evaluating your requirements</div>
        </td>
      </tr>
    </table>

    <!-- Connector -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr><td width="40" align="center"><div style="width:2px;height:20px;background:${BRAND.border};margin:0 auto;"></div></td><td></td></tr>
    </table>

    <!-- Step 3 - Pending -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td width="40" valign="top">
          <div style="width:28px;height:28px;border-radius:50%;background:${BRAND.bg};border:1px solid ${BRAND.border};text-align:center;line-height:28px;font-size:13px;color:${BRAND.lightSlate};">3</div>
        </td>
        <td valign="middle" style="padding-left:12px;">
          <div style="font-size:14px;font-weight:600;color:${BRAND.slate};">Solution Planning</div>
          <div style="font-size:11px;color:${BRAND.lightSlate};margin-top:2px;">Architecture &amp; approach design</div>
        </td>
      </tr>
    </table>

    <!-- Connector -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr><td width="40" align="center"><div style="width:2px;height:20px;background:${BRAND.border};margin:0 auto;"></div></td><td></td></tr>
    </table>

    <!-- Step 4 - Pending -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      <tr>
        <td width="40" valign="top">
          <div style="width:28px;height:28px;border-radius:50%;background:${BRAND.bg};border:1px solid ${BRAND.border};text-align:center;line-height:28px;font-size:13px;color:${BRAND.lightSlate};">4</div>
        </td>
        <td valign="middle" style="padding-left:12px;">
          <div style="font-size:14px;font-weight:600;color:${BRAND.slate};">Our Team Will Contact You</div>
          <div style="font-size:11px;color:${BRAND.lightSlate};margin-top:2px;">Personalized consultation call</div>
        </td>
      </tr>
    </table>

    <!-- Expected Response -->
    <div style="background:${BRAND.softCyan};border-radius:10px;padding:12px 16px;border:1px solid rgba(6,182,212,0.12);text-align:center;">
      <span style="font-size:11px;color:${BRAND.lightSlate};">Expected Response Time: </span>
      <span style="font-size:12px;color:${BRAND.accent};font-weight:700;">Within 24 Business Hours</span>
    </div>

  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Action Buttons -->
  <tr><td align="center" style="padding-bottom:12px;">
    <a href="https://www.ornitech.in/services" style="display:inline-block;background:${BRAND.primary};color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:12px;letter-spacing:0.5px;">🚀 Explore Our Services</a>
  </td></tr>
  <tr><td align="center" style="padding-bottom:36px;">
    <a href="https://www.ornitech.in" style="display:inline-block;background:transparent;color:${BRAND.primary};font-size:13px;font-weight:600;text-decoration:none;padding:10px 28px;border-radius:10px;border:1px solid rgba(37,99,235,0.3);letter-spacing:0.5px;">🌐 Visit Website</a>
  </td></tr>

  <!-- Why Ornitech Card -->
  <tr><td style="background:${BRAND.card};border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 12px 36px -4px rgba(15,23,42,0.06);padding:28px 32px;">
    <div style="font-size:11px;font-weight:700;color:${BRAND.accent};letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;">💡 Why Ornitech?</div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding:6px 4px 6px 0;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">AI Powered Solutions</span></div>
        </td>
        <td width="50%" style="padding:6px 0 6px 4px;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">Custom Web Development</span></div>
        </td>
      </tr>
      <tr>
        <td style="padding:6px 4px 6px 0;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">SaaS Development</span></div>
        </td>
        <td style="padding:6px 0 6px 4px;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">Mobile Applications</span></div>
        </td>
      </tr>
      <tr>
        <td style="padding:6px 4px 6px 0;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">Cloud Infrastructure</span></div>
        </td>
        <td style="padding:6px 0 6px 4px;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">Automation</span></div>
        </td>
      </tr>
      <tr>
        <td style="padding:6px 4px 6px 0;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">UI/UX Design</span></div>
        </td>
        <td style="padding:6px 0 6px 4px;vertical-align:top;">
          <div style="font-size:13px;color:${BRAND.slate};">✔ <span style="color:${BRAND.navy};font-weight:500;">API Development</span></div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Spacer -->
  <tr><td style="height:24px;"></td></tr>

  <!-- Immediate Assistance -->
  <tr><td align="center" style="padding-bottom:24px;">
    <div style="background:${BRAND.softBlue};border:1px solid rgba(37,99,235,0.15);border-radius:12px;padding:16px 24px;display:inline-block;">
      <span style="font-size:13px;color:${BRAND.slate};">Need Immediate Assistance? </span>
      <a href="mailto:support@ornitech.in" style="color:${BRAND.primary};font-weight:600;font-size:13px;text-decoration:none;">support@ornitech.in</a>
    </div>
  </td></tr>

  <!-- Divider -->
  <tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(37,99,235,0.2),rgba(6,182,212,0.2),transparent);"></td></tr>

  <!-- Footer -->
  <tr><td align="center" style="padding-top:32px;">
    <img src="https://www.ornitech.in/transparent.png" alt="Ornitech Logo" style="display:block;height:32px;width:auto;margin:0 auto 12px;outline:none;border:none;text-decoration:none;" />
    <p style="margin:0 0 16px;font-size:12px;color:${BRAND.slate};">Building Intelligent Software for the Future.</p>
    <p style="margin:0 0 16px;">
      <a href="https://www.linkedin.com/company/ornitech-solution" style="color:${BRAND.accent};font-size:12px;text-decoration:none;font-weight:500;margin:0 10px;">LinkedIn</a>
      <a href="https://github.com/Ornitech-26" style="color:${BRAND.accent};font-size:12px;text-decoration:none;font-weight:500;margin:0 10px;">GitHub</a>
      <a href="https://www.instagram.com/ornitech_solution" style="color:${BRAND.accent};font-size:12px;text-decoration:none;font-weight:500;margin:0 10px;">Instagram</a>
    </p>
    <p style="margin:0 0 6px;">
      <a href="https://www.ornitech.in" style="color:${BRAND.primary};font-size:11px;text-decoration:none;">www.ornitech.in</a>
    </p>
    <p style="margin:0;font-size:10px;color:${BRAND.lightSlate};">© 2026 Ornitech · This email was generated automatically by the Ornitech Contact System.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Public Functions ────────────────────────────────────────────────────────
export interface EmailPayload {
  fullName: string
  email: string
  company?: string
  service?: string
  budget?: string
  projectType?: string
  website?: string
  phone?: string
  message: string
}

/**
 * Sends two emails:
 *  1. Admin notification → contact@ornitech.in (full details)
 *  2. Confirmation → user's email (thank you + submission copy)
 */
export async function sendSubmissionEmails(
  payload: EmailPayload,
  request?: Request
): Promise<void> {
  const headers = request?.headers ?? new Headers()
  const ip = (headers.get("x-forwarded-for")?.split(",")[0]?.trim()) || "Unknown"
  const country = headers.get("x-vercel-ip-country") || "Unknown"
  const userAgent = headers.get("user-agent") || ""
  const { browser, os, device } = parseUserAgent(userAgent)
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "medium" })

  const adminHtml = buildAdminEmail({ ...payload, submittedAt, ip, country, browser, os, device })
  const thankYouHtml = buildThankYouEmail(payload)

  const adminMail = {
    from: `"Ornitech Contact API" <${process.env.GMAIL_USER}>`,
    replyTo: payload.email,
    to: process.env.GMAIL_USER,
    subject: `🚀 New Project Inquiry from ${payload.fullName} | Ornitech`,
    html: adminHtml,
    text: `New Contact: ${payload.fullName} (${payload.email}) - Company: ${payload.company || "N/A"} - Message: ${payload.message}`,
  }

  const thankYouMail = {
    from: `"Ornitech" <${process.env.GMAIL_USER}>`,
    to: payload.email,
    subject: `Your Innovation Journey Starts Today 🚀 | Ornitech`,
    html: thankYouHtml,
    text: `Hi ${payload.fullName}, thank you for contacting Ornitech! We've received your inquiry and our team will get back to you within 24 business hours. - Team Ornitech`,
  }

  await transporter.sendMail(adminMail)
  await transporter.sendMail(thankYouMail)
}

export { transporter }
