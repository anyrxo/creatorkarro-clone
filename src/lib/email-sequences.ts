// Free User Email Sequence - Convert to Paid
export const FreeUserEmails = {
    // Day 1: Welcome + Show What They're Missing
    day1Welcome: (name: string, dashboardUrl: string, pricingUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 900; line-height: 1.3;">
                      Welcome to IImagined<br>
                      <span style="color: #3b82f6; font-size: 20px;">You're In. Now What?</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">Hey ${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      You just created your IImagined account. Smart move.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Right now, you have access to the affiliate dashboard where you can earn 40% commissions. That's real money for every person you refer.
                    </p>

                    <!-- What You're Missing -->
                    <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%); border-left: 4px solid #ef4444; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px; font-weight: 700;">But here's what you're missing:</p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        → <strong style="color: #ffffff;">Instagram Ignited</strong> - The 0 to 500K follower system
                      </p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        → <strong style="color: #ffffff;">AI Influencers Academy</strong> - Build virtual models that make money
                      </p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        → <strong style="color: #ffffff;">Digital Products Empire</strong> - $500K+ automated income
                      </p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        → <strong style="color: #ffffff;">AI Automations</strong> - 6-figure agency model
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      These aren't just courses. They're complete business systems that people are using to make $10K-$50K/month.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      You can keep earning commissions... or you can build your own empire.
                    </p>

                    <!-- Social Proof -->
                    <div style="background: rgba(59, 130, 246, 0.05); border-radius: 12px; padding: 24px; margin: 30px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
                      <p style="margin: 0 0 12px 0; color: #71717a; font-size: 14px; font-style: italic;">"I went from 2K to 150K followers in 4 months using Instagram Ignited. Now I'm making $8K/month from brand deals."</p>
                      <p style="margin: 0; color: #a1a1aa; font-size: 13px;">- Sarah M., Content Creator</p>
                    </div>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="${pricingUrl}" style="display: inline-block; background: linear-gradient(90deg, #3b82f6, #8b5cf6); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);">
                            Unlock Full Access →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; text-align: center;">
                      One-time payment. Lifetime access. No subscriptions.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> Your affiliate dashboard is ready. <a href="${dashboardUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Check it out →</a>
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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

    // Day 2: Case Study + Urgency
    day2CaseStudy: (name: string, pricingUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 900; line-height: 1.3;">
                      How Marcus Went From $0 to $23K/Month<br>
                      <span style="color: #10b981; font-size: 20px;">In 90 Days</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Let me tell you about Marcus.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      3 months ago, he was exactly where you are. Free account. Thinking about upgrading. Not sure if it was worth it.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Today? He's making $23K/month with AI influencers.
                    </p>

                    <!-- Timeline -->
                    <div style="background: rgba(16, 185, 129, 0.05); border-radius: 12px; padding: 30px; margin: 30px 0; border: 1px solid rgba(16, 185, 129, 0.2);">
                      <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 16px; font-weight: 700;">Here's his timeline:</p>
                      
                      <div style="margin-bottom: 16px; padding-left: 20px; border-left: 3px solid #10b981;">
                        <p style="margin: 0 0 4px 0; color: #10b981; font-size: 14px; font-weight: 700;">Week 1</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 14px;">Created his first AI influencer using our templates</p>
                      </div>

                      <div style="margin-bottom: 16px; padding-left: 20px; border-left: 3px solid #10b981;">
                        <p style="margin: 0 0 4px 0; color: #10b981; font-size: 14px; font-weight: 700;">Week 3</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 14px;">Hit 10K followers, first brand deal: $500</p>
                      </div>

                      <div style="margin-bottom: 16px; padding-left: 20px; border-left: 3px solid #10b981;">
                        <p style="margin: 0 0 4px 0; color: #10b981; font-size: 14px; font-weight: 700;">Week 8</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 14px;">Launched OnlyFans alternative: $8K/month</p>
                      </div>

                      <div style="padding-left: 20px; border-left: 3px solid #10b981;">
                        <p style="margin: 0 0 4px 0; color: #10b981; font-size: 14px; font-weight: 700;">Week 12</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 14px;">3 AI models, multiple income streams: $23K/month</p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      The difference between you and Marcus?
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      He upgraded. You haven't. Yet.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Every day you wait is a day someone else is building what you're thinking about.
                    </p>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="${pricingUrl}" style="display: inline-block; background: linear-gradient(90deg, #10b981, #059669); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);">
                            Start Your 90-Day Journey →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> Marcus started with zero followers and zero experience. If he can do it, so can you.
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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

    // Day 3: Last Chance + Scarcity
    day3LastChance: (name: string, pricingUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 900; line-height: 1.3;">
                      The Price Is Going Up<br>
                      <span style="color: #ef4444; font-size: 20px;">This Is Your Last Chance At $99</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      I'm going to be direct with you.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      IImagined is currently $99 for lifetime access. That's not going to last.
                    </p>

                    <!-- Price Comparison -->
                    <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%); border-radius: 12px; padding: 30px; margin: 30px 0; border: 1px solid rgba(239, 68, 68, 0.3);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px; text-decoration: line-through;">Current Price</p>
                            <p style="margin: 0; color: #ef4444; font-size: 32px; font-weight: 900;">$99</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 20px;">
                            <p style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 14px;">New Price (Soon)</p>
                            <p style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 900;">$297</p>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Why the increase? Because the value keeps growing. We're adding new courses, new tools, new features every month.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Early members who lock in at $99 get everything forever. No price increases. No subscriptions. Just lifetime access.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      But you need to decide now.
                    </p>

                    <!-- What You Get -->
                    <div style="background: rgba(59, 130, 246, 0.05); border-radius: 12px; padding: 24px; margin: 30px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700;">For $99, you get:</p>
                      <p style="margin: 0 0 8px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">✓ 4 Complete Business Systems</p>
                      <p style="margin: 0 0 8px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">✓ 24 Modules of Training</p>
                      <p style="margin: 0 0 8px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">✓ AI Tools & Templates</p>
                      <p style="margin: 0 0 8px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">✓ Private Community Access</p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">✓ All Future Updates (Forever)</p>
                    </div>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="${pricingUrl}" style="display: inline-block; background: linear-gradient(90deg, #ef4444, #dc2626); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);">
                            Lock In $99 Lifetime Access →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; text-align: center;">
                      One payment. Lifetime access. No risk.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> This isn't a sales tactic. The price is actually going up. Don't pay $297 for what you could get for $99 today.
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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
  `
}

// Paid User Email Sequence - Onboard & Activate
export const PaidUserEmails = {
    // Day 1: Welcome + Quick Wins
    day1Welcome: (name: string, dashboardUrl: string, calendlyUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 900; line-height: 1.3;">
                      Welcome to IImagined<br>
                      <span style="color: #3b82f6; font-size: 20px;">Your Empire Starts Today</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">Hey ${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      You just made a decision most people won't make.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      While everyone else is watching from the sidelines, you're about to build something real.
                    </p>

                    <!-- Quick Start Guide -->
                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%); border-left: 4px solid #3b82f6; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Your First 24 Hours:</p>
                      
                      <div style="margin-bottom: 16px; padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 4px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 1 (Do This First):</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          <a href="${dashboardUrl}/instagram-ignited" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Start Instagram Ignited →</a> Watch Module 1. Take notes. This is your foundation.
                        </p>
                      </div>

                      <div style="margin-bottom: 16px; padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 4px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 2:</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Pick ONE course to focus on. Don't try to do all 4 at once. Master one system, then move to the next.
                        </p>
                      </div>

                      <div style="padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 4px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 3 (Optional but Powerful):</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Book a strategy call →</a> Get personalized guidance on which course to start with based on your goals.
                        </p>
                      </div>
                    </div>

                    <!-- What's Inside -->
                    <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px; font-weight: 700;">What You Have Access To:</p>
                    
                    <div style="margin-bottom: 12px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px; border-left: 3px solid #ef4444;">
                      <p style="margin: 0 0 4px 0; color: #ef4444; font-size: 15px; font-weight: 700;">Instagram Ignited</p>
                      <p style="margin: 0; color: #a1a1aa; font-size: 14px;">0 to 500K followers. Viral content. Monetization.</p>
                    </div>

                    <div style="margin-bottom: 12px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px; border-left: 3px solid #ec4899;">
                      <p style="margin: 0 0 4px 0; color: #ec4899; font-size: 15px; font-weight: 700;">AI Influencers Academy</p>
                      <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Virtual models. Faceless income. $10K-$50K/month.</p>
                    </div>

                    <div style="margin-bottom: 12px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px; border-left: 3px solid #10b981;">
                      <p style="margin: 0 0 4px 0; color: #10b981; font-size: 15px; font-weight: 700;">Digital Products Empire</p>
                      <p style="margin: 0; color: #a1a1aa; font-size: 14px;">$500K+ automated business. Build once, sell forever.</p>
                    </div>

                    <div style="padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px; border-left: 3px solid #f97316;">
                      <p style="margin: 0 0 4px 0; color: #f97316; font-size: 15px; font-weight: 700;">AI Automations</p>
                      <p style="margin: 0; color: #a1a1aa; font-size: 14px;">6-figure agency. High-ticket retainers. Chatbots & workflows.</p>
                    </div>

                    <p style="margin: 30px 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Don't overthink it. Just start. Pick one. Go deep.
                    </p>

                    <!-- CTA -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="${dashboardUrl}" style="display: inline-block; background: linear-gradient(90deg, #3b82f6, #8b5cf6); color: #ffffff; padding: 18px 48px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);">
                            Access Your Dashboard →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> The people who get results fast are the ones who start immediately. Not tomorrow. Today.
                    </p>

                    <p style="margin: 15px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #a1a1aa;">P.P.S.</strong> Need help choosing which course to start with? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Book a free call →</a>
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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

    // Day 2: Implementation Focus
    day2Implementation: (name: string, dashboardUrl: string, calendlyUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 900; line-height: 1.3;">
                      Stop Learning, Start Building<br>
                      <span style="color: #ef4444; font-size: 20px;">Implementation Beats Information</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Quick check: Have you started implementing yet?
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      If not, you're making the same mistake 90% of people make - they consume content but never build anything.
                    </p>

                    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700;">The harsh truth:</p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        Watching every module won't make you money. Building ONE system will.
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Here's what to do today:
                    </p>

                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
                      <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">1. Pick Your First Win</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Choose the easiest course for you to implement. Instagram? AI Influencer? Digital Product? Pick one.
                        </p>
                      </div>

                      <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">2. Set a 7-Day Goal</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          What can you build in 7 days? First Instagram post? First AI model? First product? Make it specific.
                        </p>
                      </div>

                      <div>
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">3. Block Implementation Time</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          30 minutes every day. Non-negotiable. Not for watching. For building.
                        </p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      <a href="${dashboardUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 700; font-size: 17px;">Go to your dashboard →</a> and build something today.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Done > Perfect. Always.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> Stuck? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Book a call →</a> and I'll help you create a custom implementation plan.
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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

    // Day 3: Results & Accountability
    day3Results: (name: string, dashboardUrl: string, calendlyUrl: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000000; color: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #000000;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 900; line-height: 1.3;">
                      Track Your Progress<br>
                      <span style="color: #8b5cf6; font-size: 20px;">What Gets Measured Gets Done</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      You've been inside IImagined for 3 days now.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Time for a reality check: What have you built?
                    </p>

                    <!-- Progress Tracker -->
                    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
                      <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Your 3-Day Checklist:</p>
                      
                      <div style="margin-bottom: 16px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          ☐ Watched at least 1 complete module
                        </p>
                      </div>

                      <div style="margin-bottom: 16px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          ☐ Created your first piece of content/product
                        </p>
                      </div>

                      <div style="padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          ☐ Set up your first system/automation
                        </p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      If you haven't checked all three boxes, you're falling behind.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      But it's not too late. Here's how to catch up:
                    </p>

                    <div style="background: rgba(59, 130, 246, 0.05); border-radius: 12px; padding: 24px; margin: 30px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700;">This Week's Goal:</p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        Build ONE complete system from start to finish. Instagram account? AI influencer? Digital product? Pick one and finish it.
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      <a href="${dashboardUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 700; font-size: 17px;">Go to your dashboard →</a> and make progress today.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Remember: You didn't pay $99 to watch videos. You paid to build a business.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> Track your wins. Every small step forward is progress. Write it down.
                    </p>

                    <p style="margin: 15px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #a1a1aa;">P.P.S.</strong> Need accountability? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Let's build your roadmap →</a>
                    </p>

                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 20px; text-align: center;">
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
  `
}
