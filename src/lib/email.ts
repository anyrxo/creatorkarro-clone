import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLicenseEmail(email: string, licenseKey: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'IImagined Access <access@notifications.iimagined.ai>', 
      to: [email],
      subject: 'Your VIP Access Key | IImagined',
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
              
              <!-- Header -->
              <div style="background: linear-gradient(90deg, #7e22ce 0%, #3b82f6 100%); padding: 2px;">
                <div style="background-color: #111111; padding: 30px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; background: linear-gradient(90deg, #a855f7, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; font-weight: 800;">IImagined</h1>
                </div>
              </div>

              <!-- Content -->
              <div style="padding: 40px 30px;">
                <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">Your Journey Begins Now.</h2>
                <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
                  Welcome to the elite circle. You have been granted full access to our premium learning ecosystem. Below is your personal, unique access key.
                </p>

                <!-- Key Box -->
                <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
                  <p style="color: #a855f7; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0; font-weight: 700;">Access License Key</p>
                  <p style="color: #ffffff; font-family: 'Courier New', monospace; font-size: 32px; letter-spacing: 2px; margin: 0; font-weight: bold; text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);">${licenseKey}</p>
                </div>

                <!-- CTA Button -->
                <div style="text-align: center; margin-bottom: 40px;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://iimagined.ai'}/learning" style="background: linear-gradient(90deg, #7e22ce, #3b82f6); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(126, 34, 206, 0.4);">
                    Activate Access &rarr;
                  </a>
                </div>

                <p style="color: #52525b; font-size: 14px; text-align: center; margin: 0;">
                  This key is linked exclusively to your email address. Do not share it.
                </p>
              </div>

              <!-- Footer -->
              <div style="background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #222222;">
                <p style="color: #52525b; font-size: 12px; margin: 0;">
                  © ${new Date().getFullYear()} IImagined AI. All rights reserved.<br>
                  Sent securely via notifications.iimagined.ai
                </p>
              </div>
            </div>
          </body>
        </html>
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

