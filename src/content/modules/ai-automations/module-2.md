# Module 2: The Tech Stack

## Overview
You don't need to learn Python. You don't need a Computer Science degree. You just need to master "Low-Code" tools. This module introduces the "Holy Trinity" of AI automation: **Make.com** (The Glue), **OpenAI API** (The Brain), and **Voiceflow** (The Interface). We will also cover database tools like Airtable.

---

## Lesson 1: Make.com (Formerly Integromat)

This is the backbone of your agency. It connects App A to App B. If Zapier is a bicycle, Make is a Ferrari.

**Key Concepts**:
- **Scenario**: A workflow (e.g., "When a new lead comes in, send an email").
- **Module**: A step in the workflow (e.g., "Google Sheets - Add Row").
- **Trigger**: What starts the automation (e.g., "New Email Received" or "Form Submitted").
- **Router**: Splitting the path (e.g., "If lead is VIP, send SMS. If lead is cold, add to spreadsheet").

**Why Make vs. Zapier?**
1.  **Cost**: Make is significantly cheaper for high volume.
2.  **Visuals**: Make looks like a mind map. You can see the data flowing.
3.  **Logic**: Make handles complex "If/Else" logic much better than Zapier.

**Action**: Create a free Make.com account and do their "Academy" tutorial. It takes 1 hour and teaches you the basics.

---

## Lesson 2: The OpenAI API (The Brain)

This is what makes the automation "intelligent." Instead of hard-coded rules, we use AI to make decisions.

**How it works**:
- You send text to GPT-4 via Make.com.
- You give it a "System Prompt" (Instructions).
- It returns a structured answer.

**Example Use Case**:
- *Input*: An angry customer email.
- *AI Step*: "Analyze the sentiment of this email. If negative, draft a polite apology. If positive, draft a thank you note."
- *Output*: A drafted email ready to send.

**The "Playground"**:
- Go to `platform.openai.com`.
- Test your prompts here before putting them into Make.
- Learn the difference between **GPT-4o** (Smart, expensive) and **GPT-3.5-Turbo** (Fast, cheap).

---

## Lesson 3: Chatbot Builders (Voiceflow & Botpress)

These tools let you build visual conversation flows for websites. They are the "Frontend" of your chatbot.

**Voiceflow**:
- **Best for**: Visual design, ease of use, prototyping, and most agency work.
- **Features**: Drag-and-drop interface, "Knowledge Base" upload (upload a PDF and the bot learns it).
- **Recommendation**: Start here. It is the industry standard for agencies.

**Botpress**:
- **Best for**: Developers, complex integrations, self-hosting.
- **Features**: Open source, highly customizable.
- **Recommendation**: Use this if you have a coding background or need strict data privacy (hosting on your own server).

---

## Lesson 4: Database Tools (Airtable)

You need a place to store data. Google Sheets is okay for simple stuff. Airtable is a database that looks like a spreadsheet.

**Why Airtable?**
- **Relational**: You can link records (e.g., link a "Client" to their "Projects").
- **Views**: You can view data as a Grid, a Kanban board, or a Calendar.
- **Integrations**: It integrates perfectly with Make.com.

**Use Case**:
- Store all leads in Airtable.
- Use Make to update the "Status" of a lead from "New" to "Contacted" automatically.

---

## Lesson 5: The "Stack" Costs

How much does this cost to run?

- **Make.com**: Free tier is good for testing. $9/month for the Starter plan.
- **OpenAI API**: Pay-as-you-go. You will likely spend $5-$20/month depending on volume.
- **Voiceflow**: Free tier is great. $50/month for the Pro plan (needed to remove branding).
- **Airtable**: Free tier is very generous.

**Agency Tip**: You can either pay for these yourself (and charge the client a retainer) or have the client create accounts and pay directly.
- *Recommendation*: Have the client pay. It keeps the liability on them.

---

## Your Action Plan

**By the end of this module, you must:**

1.  **Create Accounts**: Sign up for Make.com, OpenAI API (add $5 credit), and Voiceflow.
2.  **Build Your First Scenario**: Create a simple automation in Make (e.g., "Typeform to Email").
3.  **Get Your API Key**: Generate an OpenAI API key and save it securely.
4.  **Watch a Tutorial**: Watch a 20-minute "Voiceflow Crash Course" on YouTube.

---

**Next Steps**: You have the tools. Now let's build a product. Module 3 covers **Service 1 - AI Chatbots**.

*Word Count: ~850 words*
