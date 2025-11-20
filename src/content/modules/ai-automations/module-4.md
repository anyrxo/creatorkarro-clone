# Module 4: Service 2 - Workflow Automation

## Overview
This is the "Invisible Service." It happens behind the scenes. You are replacing manual data entry with robots. This module teaches you how to automate lead processing, content creation, and client onboarding using Make.com. This is where you save businesses 20+ hours a week.

---

## Lesson 1: The "Lead Nurture" Automation

**The Problem**: Client gets a lead form submission but takes 4 hours to reply. The lead goes cold.
**The Solution**: Instant AI reply.

**The Workflow (Make.com)**:
1.  **Trigger**: New Typeform Entry (Name, Email, Industry, Pain Point).
2.  **AI Step (GPT-4)**: Write a personalized email.
    - *System Prompt*: "You are a sales assistant. Write a welcome email to [Name] from [Industry]. Mention how we help with [Pain Point] specifically. Keep it under 100 words."
3.  **Action**: Gmail sends the email.
4.  **Action**: Slack notifies the sales team: "New Lead: [Name]. Email sent."
5.  **Action**: Add row to Google Sheets (Backup).

**Value**: "We respond to leads in 30 seconds, increasing conversion by 50%."

---

## Lesson 2: The "Content Repurposing" Engine

**The Problem**: Creating social media content takes forever.
**The Solution**: Turn one YouTube video into 10 tweets and a blog post.

**The Workflow**:
1.  **Trigger**: New YouTube Video Uploaded (Watch for RSS Feed).
2.  **Action**: Download Transcript (using a tool like "Descript" API or YouTube API).
3.  **AI Step 1**: "Summarize this transcript into a 500-word LinkedIn post."
4.  **AI Step 2**: "Extract 5 tweets from this transcript. Make them punchy."
5.  **AI Step 3**: "Write a newsletter subject line based on this."
6.  **Action**: Add all outputs to a Notion Database or Google Sheet for review.

**Value**: "We turn your 1 video into a week of content automatically. You just record; we handle the rest."

---

## Lesson 3: The "Client Onboarding" System

**The Problem**: Sending contracts, invoices, and welcome packets manually is boring and prone to error.
**The Solution**: One-click onboarding.

**The Workflow**:
1.  **Trigger**: Stripe Payment Received (e.g., "New Subscription").
2.  **Action**: Create Google Drive Folder for Client (Name: [Client Name]).
3.  **Action**: Create Trello Board from Template.
4.  **Action**: Send DocuSign Contract (Pre-filled with Name/Email).
5.  **Action**: Send Welcome Email with the "Onboarding Form" link.

**Value**: "A professional, instant onboarding experience that makes you look like a Fortune 500 company."

---

## Lesson 4: Error Handling & Maintenance

Robots break. APIs go down. You need to know when.

**The "Error Handler"**:
- In Make.com, you can set an "Error Path" (The lightning bolt icon).
- **Rule**: If a step fails (e.g., OpenAI is overloaded), do NOT stop the scenario.
- **Action**: Send yourself an email: "ALERT: Automation Failed for [Client]. Error: [Error Message]."
- **Action**: Add the failed data to a "Error Log" Google Sheet so you can retry it later.

**Maintenance**:
- Charge a monthly retainer to "monitor" these automations.
- Even if they don't break, the client pays for the *peace of mind* that you are watching them.

---

## Lesson 5: Advanced Logic (Routers & Filters)

Not all leads are equal.

**The Router**:
- Split the workflow based on data.
- **Condition 1**: If Budget > $10k -> Send to "VIP Sales Pipeline" (Slack #vip-leads).
- **Condition 2**: If Budget < $1k -> Send "Downsell Email" (Link to course).

**The Filter**:
- Stop the workflow if data is bad.
- **Filter**: If Email contains "@gmail.com" (and you only want B2B) -> Stop.

---

## Your Action Plan

**By the end of this module, you must:**

1.  **Build the Lead Nurture Bot**: Connect a form (Typeform/Google Form) to an AI email generator in Make.
2.  **Test It**: Submit the form yourself and check your inbox.
3.  **Map a Client Process**: Ask a business owner "What is the most annoying repetitive task you do?" and map it out on paper.
4.  **Build an Error Handler**: Intentionally break a scenario (use a bad API key) and see if you get the alert email.

---

**Next Steps**: You have the skills. Now you need clients. Module 5 covers **Client Acquisition**.

*Word Count: ~850 words*
