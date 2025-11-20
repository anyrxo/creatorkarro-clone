
export const EmailTemplates = {
  licenseKey: (licenseKey: string, dashboardUrl: string) => `
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
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #7e22ce, #3b82f6); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(126, 34, 206, 0.4);">
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

  inactivityNudge: (daysInactive: number, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
          <div style="background: linear-gradient(90deg, #ef4444 0%, #f97316 100%); padding: 2px;">
            <div style="background-color: #111111; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: 800;">Momentum is Key.</h1>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">We haven't seen you in ${daysInactive} days.</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
              Success favors the consistent. Your competitors aren't taking a break. Jump back in and continue your progress before you lose your streak.
            </p>
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #ef4444, #f97316); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);">
                Resume Learning &rarr;
              </a>
            </div>
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

  congratulations: (courseName: string, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
          <div style="background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%); padding: 2px;">
            <div style="background-color: #111111; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; background: linear-gradient(90deg, #34d399, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; font-weight: 800;">Legendary.</h1>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">You crushed ${courseName}.</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
              Most people start. Few finish. You are among the few. But this is just the beginning. Apply what you've learned or start the next module to compound your growth.
            </p>
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #10b981, #3b82f6); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);">
                Start Next Module &rarr;
              </a>
            </div>
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
  `
}
