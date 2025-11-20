# Module 3: Service 1 - AI Chatbots

## Overview
The "Gateway Drug" service. Every business wants a chatbot. This module teaches you how to build a "Knowledge Base Bot" that knows everything about a company and can answer customer questions 24/7. We will move beyond simple "If/Then" bots and build intelligent AI agents using **RAG (Retrieval Augmented Generation)**.

---

## Lesson 1: The "Knowledge Base" Architecture

Old chatbots were dumb. They used "Decision Trees" (Press 1 for Sales, Press 2 for Support).
New chatbots use **LLMs (Large Language Models)**.

**How RAG Works**:
1.  **Upload**: You upload the client's PDFs, website text, and FAQs to Voiceflow.
2.  **Chunking**: The system breaks the text into small pieces (chunks).
3.  **Embedding**: It turns those chunks into numbers (vectors).
4.  **Query**: When a user asks a question, the bot searches the "chunks" for the most relevant answer.
5.  **Generation**: GPT-4 reads the chunk and writes a natural answer.

**Result**: A bot that sounds human and knows the company policy perfectly.

---

## Lesson 2: Building in Voiceflow (Step-by-Step)

**Step 1: The Persona**
- Set the "System Prompt": "You are Alex, the helpful support agent for [Company]. You are friendly, concise, and only answer questions based on the provided knowledge base. Keep answers under 3 sentences."
- *Tip*: Give the bot a name and a personality. It increases engagement.

**Step 2: The Knowledge Base**
- **Scrape**: Use Voiceflow's built-in scraper to pull data from the client's website URL.
- **Upload**: Upload their "Employee Handbook," "Pricing Sheet," or "Menu."
- **Curate**: Delete irrelevant pages (like the Privacy Policy) so the bot doesn't get confused.

**Step 3: The Fallback**
- What happens if the bot doesn't know?
- *Bad*: "I don't know."
- *Good*: "I'm not sure about that one. Would you like me to connect you with a human?"
- *Action*: If they say yes, capture their email and send it to the client via Make.com.

---

## Lesson 3: Lead Capture & Handoff

A chatbot that just chats is a cost center. A chatbot that sells is a profit center.

**The "Lead Magnet" Flow**:
- **Bot**: "Hi! Looking for pricing?"
- **User**: "Yes."
- **Bot**: "I can send you our full price list. What's your email?"
- **User**: "john@example.com"
- **Action**: Bot sends email to Make.com -> Make adds to CRM -> Make sends the Price List email.

**The "Human Handoff"**:
- If the user says "I want to talk to a person," the bot should send a Slack notification to the client's team immediately.
- "New Lead on the website: John. Question: Pricing."

---

## Lesson 4: Testing & Deployment

**The "Hallucination" Test**:
- AI sometimes lies. You need to prevent this.
- **Test**: Ask it "Who is the President?" or "Write me a poem."
- **Result**: It should refuse. "I can only answer questions about [Company]."
- **Fix**: Tighten the System Prompt ("Do not answer off-topic questions. If the answer is not in the Knowledge Base, say you don't know.").

**Embedding**:
- Voiceflow gives you a snippet of Javascript code.
- Paste it into the `<body>` tag of the client's website (WordPress, Webflow, Shopify).
- It appears as a bubble in the corner.
- **Customization**: Change the color and logo to match the client's brand.

---

## Lesson 5: Advanced Features (Function Calling)

How to make the bot *do* things, not just talk.

**API Steps**:
- You can add an "API Step" in Voiceflow.
- *Example*: "Check Order Status."
- **User**: "Where is order #123?"
- **Bot**: (Calls Shopify API) -> "Order #123 is out for delivery."

**Booking Appointments**:
- Integrate with **Calendly**.
- **Bot**: "Would you like to book a call?"
- **User**: "Yes."
- **Bot**: Displays the Calendly widget right in the chat.

---

## Your Action Plan

**By the end of this module, you must:**

1.  **Build a Demo Bot**: Create a bot for a fake "Pizza Shop" that knows the menu.
2.  **Test the Knowledge Base**: Upload a PDF and ask questions about it.
3.  **Embed it**: Put the bot on a blank HTML page to see how it looks.
4.  **Create a "Lead Capture" Flow**: Make the bot ask for an email address.

---

**Next Steps**: Chatbots are great, but backend automation is where the real efficiency is. Module 4 covers **Service 2 - Workflow Automation**.

*Word Count: ~900 words*
