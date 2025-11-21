export const EmailTemplates = {
  // Welcome email for new free users
  welcomeFree: (name: string, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); -webkit-font-smoothing: antialiased;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);">
          <tr>
            <td style="padding: 60px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <!-- Logo & Header -->
                <tr>
                  <td style="text-align: center; padding-bottom: 40px;">
                    <div style="display: inline-block; background: linear-gradient(90deg, #3b82f6, #8b5cf6); padding: 3px; border-radius: 16px;">
                      <div style="background: #0f0f0f; padding: 20px 40px; border-radius: 14px;">
                        <h1 style="margin: 0; font-size: 36px; font-weight: 900; background: linear-gradient(90deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -1px;">IImagined</h1>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Main Card -->
                <tr>
                  <td style="background: #0f0f0f; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1);">
                    
                    <!-- Hero Section with Gradient -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 50px 40px; text-align: center;">
                          <div style="font-size: 48px; margin-bottom: 16px;">🚀</div>
                          <h2 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; line-height: 1.2;">Welcome to the Future</h2>
                          <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 500;">Your journey starts now, ${name || 'Creator'}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Content Section -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 50px 40px;">
                          
                          <!-- Welcome Message -->
                          <p style="margin: 0 0 24px 0; color: #e5e5e5; font-size: 18px; line-height: 1.7;">
                            You've just unlocked access to <strong style="color: #ffffff; font-weight: 700;">IImagined</strong> — your personal AI-powered learning ecosystem.
                          </p>

                          <!-- Feature Cards -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                            <tr>
                              <td style="padding: 20px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%); border-left: 4px solid #3b82f6; border-radius: 12px; margin-bottom: 16px;">
                                <div style="font-size: 24px; margin-bottom: 8px;">💰</div>
                                <h3 style="margin: 0 0 8px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Earn 40% Commissions</h3>
                                <p style="margin: 0; color: #a1a1aa; font-size: 15px; line-height: 1.6;">Share your unique referral link and earn passive income from every sale.</p>
                              </td>
                            </tr>
                            <tr><td style="height: 16px;"></td></tr>
                            <tr>
                              <td style="padding: 20px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%); border-left: 4px solid #8b5cf6; border-radius: 12px;">
                                <div style="font-size: 24px; margin-bottom: 8px;">🎓</div>
                                <h3 style="margin: 0 0 8px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Premium Learning Access</h3>
                                <p style="margin: 0; color: #a1a1aa; font-size: 15px; line-height: 1.6;">Upgrade with a license key to unlock courses, AI tools, and exclusive content.</p>
                              </td>
                            </tr>
                          </table>

                          <!-- Progress Preview -->
                          <div style="margin: 40px 0; padding: 24px; background: rgba(255, 255, 255, 0.02); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <h3 style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Your Progress</h3>
                            <div style="margin-bottom: 12px;">
                              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="color: #a1a1aa; font-size: 14px;">Level 1</span>
                                <span style="color: #3b82f6; font-size: 14px; font-weight: 600;">0 / 100 XP</span>
                              </div>
                              <div style="background: rgba(255, 255, 255, 0.05); height: 8px; border-radius: 4px; overflow: hidden;">
                                <div style="background: linear-gradient(90deg, #3b82f6, #8b5cf6); width: 0%; height: 100%; border-radius: 4px;"></div>
                              </div>
                            </div>
                            <p style="margin: 16px 0 0 0; color: #71717a; font-size: 13px; text-align: center;">Complete lessons to earn XP and level up!</p>
                          </div>

                          <!-- CTA Button -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td align="center" style="padding: 20px 0;">
                                <a href="${dashboardUrl}" style="display: inline-block; background: linear-gradient(90deg, #3b82f6, #8b5cf6); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4); transition: all 0.3s ease;">
                                  Launch Dashboard →
                                </a>
                              </td>
                            </tr>
                          </table>

                          <!-- Quick Links -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 32px; padding-top: 32px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                            <tr>
                              <td align="center">
                                <p style="margin: 0 0 16px 0; color: #71717a; font-size: 14px;">Quick Links</p>
                                <p style="margin: 0;">
                                  <a href="https://iimagined.ai/learning" style="color: #3b82f6; text-decoration: none; font-size: 14px; margin: 0 12px;">Browse Courses</a>
                                  <span style="color: #3f3f46;">•</span>
                                  <a href="https://iimagined.ai/affiliate" style="color: #3b82f6; text-decoration: none; font-size: 14px; margin: 0 12px;">Get License Key</a>
                                  <span style="color: #3f3f46;">•</span>
                                  <a href="https://iimagined.ai/resources" style="color: #3b82f6; text-decoration: none; font-size: 14px; margin: 0 12px;">Resources</a>
                                </p>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 40px 20px 20px 20px; text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #52525b; font-size: 13px; line-height: 1.6;">
                      © ${new Date().getFullYear()} IImagined AI. All rights reserved.
                    </p>
                    <p style="margin: 0; color: #3f3f46; font-size: 12px;">
                      Sent from notifications.iimagined.ai
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,

  // Achievement Unlocked Email
  achievementUnlocked: (name: string, achievementName: string, achievementIcon: string, xpEarned: number, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);">
          <tr>
            <td style="padding: 60px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <!-- Celebration Header -->
                <tr>
                  <td style="text-align: center; padding-bottom: 30px;">
                    <div style="font-size: 80px; line-height: 1; margin-bottom: 20px; animation: bounce 1s ease infinite;">🎉</div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 900; letter-spacing: -1px;">Achievement Unlocked!</h1>
                  </td>
                </tr>

                <!-- Achievement Card -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 24px; padding: 50px 40px; text-align: center; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(251, 191, 36, 0.3);">
                    
                    <!-- Achievement Badge -->
                    <div style="display: inline-block; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 30px; border-radius: 50%; margin-bottom: 24px; box-shadow: 0 10px 40px rgba(251, 191, 36, 0.4);">
                      <div style="font-size: 64px; line-height: 1;">${achievementIcon}</div>
                    </div>

                    <!-- Achievement Name -->
                    <h2 style="margin: 0 0 12px 0; color: #fbbf24; font-size: 32px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">${achievementName}</h2>
                    
                    <!-- Congrats Message -->
                    <p style="margin: 0 0 32px 0; color: #e5e5e5; font-size: 18px; line-height: 1.6;">
                      Congratulations, <strong style="color: #ffffff;">${name}</strong>! You've earned this achievement.
                    </p>

                    <!-- XP Reward -->
                    <div style="display: inline-block; background: rgba(59, 130, 246, 0.1); border: 2px solid #3b82f6; border-radius: 16px; padding: 20px 40px; margin-bottom: 32px;">
                      <div style="color: #3b82f6; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">XP Earned</div>
                      <div style="color: #ffffff; font-size: 36px; font-weight: 900;">+${xpEarned} XP</div>
                    </div>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center">
                          <a href="${dashboardUrl}" style="display: inline-block; background: linear-gradient(90deg, #fbbf24, #f59e0b); color: #000000; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);">
                            View All Achievements →
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 40px 20px; text-align: center;">
                    <p style="margin: 0; color: #52525b; font-size: 13px;">
                      © ${new Date().getFullYear()} IImagined AI
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,

  // Streak Milestone Email
  streakMilestone: (name: string, streakDays: number, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);">
          <tr>
            <td style="padding: 60px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <!-- Fire Header -->
                <tr>
                  <td style="text-align: center; padding-bottom: 30px;">
                    <div style="font-size: 100px; line-height: 1; margin-bottom: 20px; filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.6));">🔥</div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 900; letter-spacing: -1px;">You're On Fire!</h1>
                  </td>
                </tr>

                <!-- Streak Card -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 24px; padding: 50px 40px; text-align: center; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(239, 68, 68, 0.3);">
                    
                    <!-- Streak Counter -->
                    <div style="display: inline-block; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 40px 60px; border-radius: 20px; margin-bottom: 32px; box-shadow: 0 10px 40px rgba(239, 68, 68, 0.4);">
                      <div style="color: rgba(255, 255, 255, 0.8); font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Current Streak</div>
                      <div style="color: #ffffff; font-size: 72px; font-weight: 900; line-height: 1;">${streakDays}</div>
                      <div style="color: rgba(255, 255, 255, 0.9); font-size: 24px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Days</div>
                    </div>

                    <!-- Message -->
                    <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 28px; font-weight: 800;">Incredible, ${name}!</h2>
                    <p style="margin: 0 0 32px 0; color: #e5e5e5; font-size: 18px; line-height: 1.6;">
                      You've maintained your learning streak for <strong style="color: #ef4444;">${streakDays} days straight</strong>. Consistency is the key to mastery.
                    </p>

                    <!-- Stats Grid -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                      <tr>
                        <td width="50%" style="padding: 20px; background: rgba(239, 68, 68, 0.1); border-radius: 12px; border-right: 8px solid transparent;">
                          <div style="color: #ef4444; font-size: 32px; font-weight: 900; margin-bottom: 8px;">+${streakDays * 10}</div>
                          <div style="color: #a1a1aa; font-size: 14px; font-weight: 600;">Bonus XP Earned</div>
                        </td>
                        <td width="50%" style="padding: 20px; background: rgba(59, 130, 246, 0.1); border-radius: 12px;">
                          <div style="color: #3b82f6; font-size: 32px; font-weight: 900; margin-bottom: 8px;">${Math.floor(streakDays / 7)}</div>
                          <div style="color: #a1a1aa; font-size: 14px; font-weight: 600;">Weeks Consistent</div>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center">
                          <a href="${dashboardUrl}" style="display: inline-block; background: linear-gradient(90deg, #ef4444, #dc2626); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);">
                            Keep The Streak Alive →
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 40px 20px; text-align: center;">
                    <p style="margin: 0; color: #52525b; font-size: 13px;">
                      © ${new Date().getFullYear()} IImagined AI
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,

  // Keep existing templates for backward compatibility
  welcome: (name: string, dashboardUrl: string) => EmailTemplates.welcomeFree(name, dashboardUrl),

  licenseKey: (licenseKey: string, dashboardUrl: string) => `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
          <div style="background: linear-gradient(90deg, #7e22ce 0%, #3b82f6 100%); padding: 2px;">
            <div style="background-color: #111111; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; background: linear-gradient(90deg, #a855f7, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; font-weight: 800;">IImagined</h1>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">Your Journey Begins Now.</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
              Welcome to the elite circle. You have been granted full access to our premium learning ecosystem. Below is your personal, unique access key.
            </p>
            <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
              <p style="color: #a855f7; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0; font-weight: 700;">Access License Key</p>
              <p style="color: #ffffff; font-family: 'Courier New', monospace; font-size: 32px; letter-spacing: 2px; margin: 0; font-weight: bold; text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);">${licenseKey}</p>
            </div>
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #7e22ce, #3b82f6); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(126, 34, 206, 0.4);">
                Activate Access &rarr;
              </a>
            </div>
            <p style="color: #52525b; font-size: 14px; text-align: center; margin: 0;">
              This key is linked exclusively to your email address. Do not share it.
            </p>
          </div>
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

  affiliateSale: (amount: number | string, dashboardUrl: string) => {
    const formattedAmount = typeof amount === 'number' ? `$${amount.toFixed(2)}` : amount;
    return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
          <div style="background: linear-gradient(90deg, #10b981 0%, #059669 100%); padding: 2px;">
            <div style="background-color: #111111; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; color: #10b981; font-weight: 800;">💰 Cha-Ching!</h1>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">You just made ${formattedAmount}.</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
              Someone just joined the Empire using your link. Your commission has been recorded and will be paid out in the next cycle. Keep up the momentum.
            </p>
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #10b981, #059669); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);">
                View Earnings &rarr;
              </a>
            </div>
          </div>
          <div style="background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #222222;">
            <p style="color: #52525b; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} IImagined AI. All rights reserved.<br>
              Sent securely via notifications.iimagined.ai
            </p>
          </div>
        </div>
      </body>
    </html>
  `},

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

  streakWarning: (dashboardUrl: string) => `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Inter', sans-serif; background-color: #000000; color: #ffffff; padding: 40px 0; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; border: 1px solid #333333;">
          <div style="background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%); padding: 2px;">
            <div style="background-color: #111111; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: 800;">⚠️ Streak At Risk</h1>
            </div>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 16px; font-weight: 600;">Don't break the chain.</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
              You've been consistent, but you haven't completed a lesson today. Complete one lesson now to keep your streak alive and earn your daily XP bonus.
            </p>
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="${dashboardUrl}" style="background: linear-gradient(90deg, #f59e0b, #d97706); color: #ffffff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);">
                Complete a Lesson &rarr;
              </a>
            </div>
          </div>
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
