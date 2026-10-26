import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  enquiryType: string;
  requirements: string[];
  message?: string;
  website?: string; // Honeypot field
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

function generateEmailHtml(data: EnquiryPayload): string {
  const isSecurity = data.enquiryType.toLowerCase().includes("security");
  const accentColor = isSecurity ? "#EF1313" : "#4E0DBA";
  const badgeBg = isSecurity ? "#FFF0F0" : "#F4F0FD";

  const reqBadges =
    data.requirements && data.requirements.length > 0
      ? data.requirements
          .map(
            (r) =>
              `<span style="display:inline-block;padding:4px 10px;margin:2px 4px 2px 0;background:${badgeBg};color:${accentColor};border:1px solid ${accentColor}33;border-radius:999px;font-size:12px;font-weight:600;">${r}</span>`
          )
          .join("")
      : "<span style='color:#888;font-style:italic;'>None specified</span>";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>New BroadNet Enquiry</title>
    </head>
    <body style="margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#F8F8FC;color:#16143E;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(22,20,62,0.06);border:1px solid rgba(22,20,62,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#16143E;padding:28px 32px;text-align:left;">
            <div style="font-size:22px;font-weight:800;letter-spacing:1px;color:#ffffff;">
              BROAD<span style="color:#EF1313;">NET</span>
            </div>
            <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:4px;">
              New Customer Submission — ${data.enquiryType}
            </div>
          </td>
        </tr>

        <!-- Alert Bar -->
        <tr>
          <td style="background:${accentColor};padding:8px 32px;color:#ffffff;font-size:12px;font-weight:bold;letter-spacing:0.5px;text-transform:uppercase;">
            ⚡ Priority Lead Notification
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;line-height:22px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#6B6980;width:35%;font-weight:600;">Customer Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#16143E;font-weight:700;font-size:15px;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#6B6980;font-weight:600;">Contact Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;">
                  <a href="tel:${data.phone}" style="color:${accentColor};font-weight:700;text-decoration:none;">${data.phone}</a>
                </td>
              </tr>
              ${
                data.email
                  ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#6B6980;font-weight:600;">Email Address</td>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;">
                  <a href="mailto:${data.email}" style="color:${accentColor};text-decoration:none;">${data.email}</a>
                </td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#6B6980;font-weight:600;">Location / Area</td>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#16143E;">${data.location || "<span style='color:#999;'>Not provided</span>"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#6B6980;font-weight:600;">Enquiry Category</td>
                <td style="padding:10px 0;border-bottom:1px solid #ECECF4;color:#16143E;font-weight:600;">${data.enquiryType}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #ECECF4;color:#6B6980;font-weight:600;vertical-align:top;">Selected Services</td>
                <td style="padding:12px 0;border-bottom:1px solid #ECECF4;">${reqBadges}</td>
              </tr>
              <tr>
                <td style="padding:14px 0 6px 0;color:#6B6980;font-weight:600;vertical-align:top;" colspan="2">Client Notes / Requirements:</td>
              </tr>
              <tr>
                <td colspan="2" style="padding:12px 16px;background:#F9F9FD;border-radius:12px;border:1px solid #ECECF4;color:#2C2A4A;font-size:13.5px;line-height:22px;white-space:pre-wrap;">
                  ${data.message || "<span style='color:#999;font-style:italic;'>No additional notes provided.</span>"}
                </td>
              </tr>
            </table>

            <!-- Quick Action Buttons -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:28px;">
              <tr>
                <td align="center">
                  <a href="tel:${data.phone}" style="display:inline-block;padding:12px 24px;background:#16143E;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;font-size:13px;margin-right:10px;">
                    📞 Call Lead Directly
                  </a>
                  <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}" style="display:inline-block;padding:12px 24px;background:#25D366;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;font-size:13px;">
                    💬 WhatsApp Client
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F2F2FA;padding:18px 32px;text-align:center;font-size:12px;color:#8E8CA0;border-top:1px solid #ECECF4;">
            This email was automatically dispatched by the BroadNet Online Enquiry Engine.<br/>
            Delivered to: <strong style="color:#16143E;">admin@broadnet.in</strong>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

function generateCustomerConfirmationHtml(data: EnquiryPayload): string {
  const isSecurity = data.enquiryType.toLowerCase().includes("security");
  const accentColor = isSecurity ? "#EF1313" : "#4E0DBA";
  const badgeBg = isSecurity ? "#FFF0F0" : "#F4F0FD";

  const reqBadges =
    data.requirements && data.requirements.length > 0
      ? data.requirements
          .map(
            (r) =>
              `<span style="display:inline-block;padding:4px 10px;margin:2px 4px 2px 0;background:${badgeBg};color:${accentColor};border:1px solid ${accentColor}33;border-radius:999px;font-size:12px;font-weight:600;">${r}</span>`
          )
          .join("")
      : "<span style='color:#888;font-style:italic;'>General Consultation</span>";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>BroadNet Enquiry Confirmation</title>
    </head>
    <body style="margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#F8F8FC;color:#16143E;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(22,20,62,0.06);border:1px solid rgba(22,20,62,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#16143E;padding:28px 32px;text-align:left;">
            <div style="font-size:22px;font-weight:800;letter-spacing:1px;color:#ffffff;">
              BROAD<span style="color:#EF1313;">NET</span>
            </div>
            <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">
              Internet Services & ELV Security Integrations · Est. 2014
            </div>
          </td>
        </tr>

        <!-- Confirmation Banner -->
        <tr>
          <td style="background:${accentColor};padding:10px 32px;color:#ffffff;font-size:12px;font-weight:bold;letter-spacing:0.5px;text-transform:uppercase;">
            ✓ Enquiry Received · Certified Technician Assigned
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 12px 0;font-size:18px;color:#16143E;font-weight:700;">
              Hello ${data.name},
            </h2>
            <p style="margin:0 0 20px 0;font-size:14px;line-height:22px;color:#4E4C68;">
              Thank you for reaching out to <strong>BroadNet</strong>. We have received your enquiry for <strong>${data.enquiryType}</strong>. Our certified technical support desk in Avadi is reviewing your requirements.
            </p>

            <!-- Summary Box -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F9F9FD;border:1px solid #ECECF4;border-radius:14px;padding:16px 20px;font-size:13.5px;line-height:22px;margin-bottom:24px;">
              <tr>
                <td style="padding:6px 0;color:#6B6980;width:35%;font-weight:600;">Registered Name:</td>
                <td style="padding:6px 0;color:#16143E;font-weight:700;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#6B6980;font-weight:600;">Phone Number:</td>
                <td style="padding:6px 0;color:#16143E;font-weight:700;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#6B6980;font-weight:600;">Location / Area:</td>
                <td style="padding:6px 0;color:#16143E;">${data.location || "Avadi / Chennai"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6B6980;font-weight:600;vertical-align:top;">Requested Services:</td>
                <td style="padding:8px 0;">${reqBadges}</td>
              </tr>
            </table>

            <!-- Next Steps -->
            <div style="background:#FFFFFF;border-left:4px solid ${accentColor};padding:14px 18px;margin-bottom:26px;background:#F8F8FC;border-radius:0 12px 12px 0;">
              <div style="font-size:13px;font-weight:700;color:#16143E;margin-bottom:6px;">
                ⚡ What Happens Next?
              </div>
              <ul style="margin:0;padding-left:18px;font-size:13px;line-height:20px;color:#4E4C68;">
                <li><strong>&lt; 2-Hour Response SLA:</strong> An authorized engineer will call you to clarify layout details.</li>
                <li><strong>On-Site Survey &amp; Itemized Quote:</strong> If required, we will schedule a premises inspection with transparent, itemized pricing.</li>
                <li><strong>Direct Avadi Support:</strong> Genuine warranty cards and factory-sealed equipment provided on installation.</li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;">
              <tr>
                <td align="center">
                  <a href="https://wa.me/918681888111?text=Hello%20BroadNet%2C%20I%20just%20submitted%20an%20enquiry%20under%20the%20name%20${encodeURIComponent(data.name)}." style="display:inline-block;padding:12px 24px;background:#25D366;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;font-size:13px;margin-right:10px;">
                    💬 Chat on WhatsApp
                  </a>
                  <a href="tel:+918681888111" style="display:inline-block;padding:12px 24px;background:#16143E;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;font-size:13px;">
                    📞 Call 86818 88111
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F2F2FA;padding:20px 32px;text-align:center;font-size:12px;color:#8E8CA0;border-top:1px solid #ECECF4;line-height:18px;">
            <strong>Broadnet Internet Services &amp; Security Systems</strong><br/>
            1093, Fire Station Road, TNHB, Avadi, Chennai – 600 054<br/>
            Support Helpline: <a href="tel:+918681888111" style="color:#16143E;text-decoration:none;font-weight:600;">+91 86818 88111</a> · Email: <a href="mailto:admin@broadnet.in" style="color:#16143E;text-decoration:none;">admin@broadnet.in</a>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EnquiryPayload;

    // ── Honeypot spam protection ──────────────────────────────────────────
    if (body.website && body.website.trim().length > 0) {
      // Silently return success to confuse automated bot submissions
      return NextResponse.json({ success: true, mode: "bot_ignored" });
    }

    // ── Validation ──────────────────────────────────────────────────────────
    const trimmedName = body.name?.trim();
    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 80) {
      return NextResponse.json(
        { error: "Please provide a valid full name between 2 and 80 characters." },
        { status: 400 }
      );
    }

    const cleanPhone = body.phone?.replace(/[\s\-\(\)]/g, "") || "";
    const phoneValid = /^(?:\+?91|0)?[6-9]\d{9}$/.test(cleanPhone);
    if (!phoneValid) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit Indian phone number (e.g. 8681888111)." },
        { status: 400 }
      );
    }

    if (body.email && body.email.trim()) {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email.trim());
      if (!emailValid) {
        return NextResponse.json(
          { error: "Please provide a valid email address or leave the field blank." },
          { status: 400 }
        );
      }
    }

    if (body.location && body.location.length > 120) {
      return NextResponse.json(
        { error: "Location must be within 120 characters." },
        { status: 400 }
      );
    }

    if (body.message && body.message.length > 1000) {
      return NextResponse.json(
        { error: "Requirement notes must be within 1000 characters." },
        { status: 400 }
      );
    }

    // ── Send Email via SMTP ──────────────────────────────────────────────────
    const adminEmail = process.env.ADMIN_EMAIL || "admin@broadnet.in";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE !== "false";

    if (!smtpHost || !smtpUser || !smtpPass) {
      // SMTP not configured — return success so UX isn't broken, but flag it
      return NextResponse.json({
        success: true,
        message: "Enquiry received. Configure SMTP environment variables to enable email delivery.",
        mode: "no_smtp",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // 1. Dispatch internal Lead Notification to BroadNet Admin
    await transporter.sendMail({
      from: `"BroadNet Enquiries" <${smtpUser}>`,
      to: adminEmail,
      replyTo: body.email && body.email.trim() ? body.email.trim() : adminEmail,
      subject: `[BroadNet Lead] ${body.enquiryType}: ${body.name} (${body.phone})`,
      text: `New Enquiry\n\nName: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email || "N/A"}\nLocation: ${body.location || "N/A"}\nType: ${body.enquiryType}\nRequirements: ${body.requirements?.join(", ") || "None"}\nNotes: ${body.message || "None"}`,
      html: generateEmailHtml(body),
    });

    // 2. Dispatch Customer Confirmation Email (if customer provided their email)
    let customerNotified = false;
    if (body.email && body.email.trim()) {
      try {
        await transporter.sendMail({
          from: `"BroadNet Support" <${smtpUser}>`,
          to: body.email.trim(),
          replyTo: adminEmail,
          subject: `Enquiry Received: BroadNet ${body.enquiryType}`,
          text: `Dear ${body.name},\n\nThank you for reaching out to BroadNet. We have received your enquiry for "${body.enquiryType}".\n\nOur certified team is reviewing your requirements. An engineer will contact you at ${body.phone} within 2 hours.\n\nNeed immediate support? Call or WhatsApp us at +91 86818 88111.\n\nWarm regards,\nBroadNet Internet Services\n1093 Fire Station Road, TNHB, Avadi, Chennai – 600 054`,
          html: generateCustomerConfirmationHtml(body),
        });
        customerNotified = true;
      } catch (custErr) {
        console.error("[BroadNet Customer Email Warning]:", custErr);
        // Do not fail entire submission if only the customer auto-reply fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      mode: "production",
      customerNotified,
    });
  } catch (error) {
    console.error("[BroadNet Enquiry Error]:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
