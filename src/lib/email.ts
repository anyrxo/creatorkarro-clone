import { Resend } from 'resend';
import { EmailTemplates } from './email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLicenseEmail(email: string, licenseKey: string) {
  try {
    const dashboardUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iimagined.ai';
    const { data, error } = await resend.emails.send({
      from: 'IImagined Access <access@notifications.iimagined.ai>', 
      to: [email],
      subject: 'Your VIP Access Key | IImagined',
      html: EmailTemplates.licenseKey(licenseKey, `${dashboardUrl}/learning`),
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
