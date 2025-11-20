import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLicenseEmail(email: string, licenseKey: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'CreatorKarro <onboarding@resend.dev>', // You should verify your domain in Resend for a custom 'from' address
      to: [email],
      subject: 'Your CreatorKarro Course Access Key',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #7e22ce; margin-bottom: 16px;">Welcome to CreatorKarro! 🚀</h2>
          <p style="color: #374151; font-size: 16px; line-height: 24px;">
            You've been granted access to our premium learning platform.
          </p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 24px 0; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Your Access Key</p>
            <p style="margin: 8px 0 0 0; font-family: monospace; font-size: 24px; font-weight: bold; color: #111827; letter-spacing: 2px;">${licenseKey}</p>
          </div>
          <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
            To get started, click the button below and enter your key when prompted:
          </p>
          <div style="text-align: center;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/learning" style="background-color: #7e22ce; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Access Learning Platform
            </a>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 32px; text-align: center;">
            If the button doesn't work, copy and paste this link:<br>
            ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/learning
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Email Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending exception:', error);
    return { success: false, error };
  }
}

