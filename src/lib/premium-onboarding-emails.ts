export const PremiumOnboardingEmails = {
  // Day 1: Welcome - Focus & Commitment
  day1Welcome: (name: string, dashboardUrl: string, firstModuleUrl: string, calendlyUrl: string) => `
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
                      <span style="color: #3b82f6; font-size: 20px;">Your AI Transformation Starts Now</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">Hey ${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      You just made a decision most people won't make.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      While everyone else is watching AI from the sidelines, you're about to master it.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      But here's the thing - having access to the platform isn't enough. You need to commit to the process.
                    </p>

                    <!-- Focus Section -->
                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%); border-left: 4px solid #3b82f6; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Here's what I need from you:</p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        <strong style="color: #3b82f6;">→</strong> Turn off notifications from other AI courses
                      </p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        <strong style="color: #3b82f6;">→</strong> Stop buying new AI tools for the next 30 days
                      </p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        <strong style="color: #3b82f6;">→</strong> Commit to implementing what you learn, not just consuming
                      </p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        <strong style="color: #3b82f6;">→</strong> Focus on ONE system at a time
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Why? Because scattered focus = zero results.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      You don't need 50 different AI strategies. You need ONE that works, implemented fully.
                    </p>

                    <!-- Action Items -->
                    <div style="background: rgba(139, 92, 246, 0.08); border-radius: 12px; padding: 30px; margin: 30px 0; border: 1px solid rgba(139, 92, 246, 0.2);">
                      <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 20px; font-weight: 800;">Your First Steps (Do These Today):</h3>
                      
                      <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 8px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 1:</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          <a href="${firstModuleUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Watch the first module →</a> Set aside 60 minutes. No distractions. Just you and the content.
                        </p>
                      </div>

                      <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 8px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 2:</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Block 30 minutes every day in your calendar for IImagined. Non-negotiable. Treat it like a meeting with your future self.
                        </p>
                      </div>

                      <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 8px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 3:</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Post on one social platform that you're committing to mastering AI. Make it public. Accountability works.
                        </p>
                      </div>

                      <div style="padding-left: 20px; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0 0 8px 0; color: #8b5cf6; font-size: 15px; font-weight: 700;">Step 4 (Optional but Powerful):</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Book a strategy call →</a> if you want personalized guidance on implementing AI in your specific business.
                        </p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Don't save these for later. Do them now.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      The people who take action in the first 24 hours are 3x more likely to actually finish the program.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Your transformation doesn't start when you feel ready. It starts when you decide to begin.
                    </p>

                    <!-- CTA Button -->
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
                      <strong style="color: #a1a1aa;">P.S.</strong> Everything you need is inside the platform. Don't overcomplicate it. Just follow the path.
                    </p>

                    <p style="margin: 15px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #a1a1aa;">P.P.S.</strong> Want 1-on-1 help implementing AI in your business? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Book a free strategy call →</a>
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

  // Day 2: Implementation Over Information
  day2Implementation: (name: string, firstModuleUrl: string, calendlyUrl: string) => `
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
                      Stop Collecting Information<br>
                      <span style="color: #ef4444; font-size: 20px;">Start Implementing</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Let me guess - you're excited to dive into the advanced modules. The AI automation strategies, the prompt engineering secrets, the revenue optimization tactics.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      I get it. That stuff is exciting.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      But here's what actually matters: Implementation beats information every single time.
                    </p>

                    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700;">The harsh truth:</p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        Most people will watch every module, take notes, feel motivated... and do absolutely nothing with it.
                      </p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        They'll stay in "learning mode" forever, never actually building anything.
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Don't be that person.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      The first module isn't just theory. It's the foundation that makes everything else work. Skip it, and you'll waste weeks trying to figure out why nothing's working.
                    </p>

                    <!-- Implementation Framework -->
                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
                      <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 20px; font-weight: 800;">The Implementation Framework:</h3>
                      
                      <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">1. Watch → Implement → Repeat</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Watch one lesson. Implement what you learned. Then move to the next. Don't binge-watch the entire course.
                        </p>
                      </div>

                      <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">2. Done > Perfect</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Your first AI automation doesn't need to be perfect. It just needs to exist. You'll improve it as you go.
                        </p>
                      </div>

                      <div>
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">3. Track Your Progress</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          Every time you implement something, document it. Screenshot it. Share it. Make it real.
                        </p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      <a href="${firstModuleUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 700; font-size: 17px;">Start with Module 1 →</a>
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Complete every action item before moving forward. I'm serious.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Knowledge without execution is just expensive entertainment.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> The difference between successful people and everyone else? They implement immediately, not eventually.
                    </p>

                    <p style="margin: 15px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #a1a1aa;">P.P.S.</strong> Stuck on implementation? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Let's talk →</a> I'll help you create a custom implementation plan.
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

  // Day 3: Results Over Activity
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
                      Being Busy ≠ Getting Results<br>
                      <span style="color: #8b5cf6; font-size: 20px;">Here's What Actually Moves The Needle</span>
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background: #0f0f0f; border-radius: 16px; padding: 40px; border: 1px solid #1f1f1f;">
                    
                    <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: 600;">${name},</p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Quick question: What's your goal with AI?
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Is it to "learn about AI"? Or is it to actually use AI to make more money, save time, and scale your business?
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Because there's a massive difference.
                    </p>

                    <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 24px; margin: 30px 0; border-radius: 12px;">
                      <p style="margin: 0 0 16px 0; color: #ffffff; font-size: 16px; font-weight: 700;">Here's what I see all the time:</p>
                      <p style="margin: 0 0 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        People spend hours watching tutorials, reading articles, testing tools... but their business doesn't change.
                      </p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        They're busy. They're "learning." But they're not getting results.
                      </p>
                    </div>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Activity without outcomes is just procrastination with extra steps.
                    </p>

                    <!-- Results Framework -->
                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
                      <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 20px; font-weight: 800;">Focus on These 3 Metrics:</h3>
                      
                      <div style="margin-bottom: 20px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">1. Time Saved</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          How many hours per week are you saving with AI automation?
                        </p>
                      </div>

                      <div style="margin-bottom: 20px; padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">2. Revenue Generated</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          How much additional revenue are you creating with AI?
                        </p>
                      </div>

                      <div style="padding: 16px; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; color: #3b82f6; font-size: 15px; font-weight: 700;">3. Systems Built</p>
                        <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                          How many AI systems have you actually implemented?
                        </p>
                      </div>
                    </div>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      If these numbers aren't moving, you're doing it wrong.
                    </p>

                    <p style="margin: 0 0 20px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      Don't measure your progress by how many lessons you've watched. Measure it by what you've built.
                    </p>

                    <p style="margin: 0 0 30px 0; color: #e5e5e5; font-size: 16px; line-height: 1.7;">
                      <a href="${dashboardUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 700; font-size: 17px;">Go to your dashboard →</a> and implement ONE thing today. Not tomorrow. Today.
                    </p>

                    <div style="background: rgba(59, 130, 246, 0.05); border-radius: 12px; padding: 24px; margin: 30px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
                      <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 16px; font-weight: 700;">Your challenge for this week:</p>
                      <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">
                        Build ONE AI automation that saves you at least 2 hours per week. Just one. Make it work. Then move to the next.
                      </p>
                    </div>

                    <p style="margin: 0 0 30px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      Results compound. Activity doesn't.
                    </p>

                    <p style="margin: 30px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6; padding-top: 30px; border-top: 1px solid #1f1f1f;">
                      <strong style="color: #a1a1aa;">P.S.</strong> Track your wins. Every automation you build, every hour you save, every dollar you make - write it down. Momentum builds on visible progress.
                    </p>

                    <p style="margin: 15px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #a1a1aa;">P.P.S.</strong> Need help identifying which AI systems will give you the biggest ROI? <a href="${calendlyUrl}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Let's build your roadmap →</a>
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
