# Module 3: Service 1 - AI Chatbots

## Overview
The "Gateway Drug" service. Every business wants a chatbot. This module teaches you how to build a "Knowledge Base Bot" that knows everything about a company and can answer customer questions 24/7.

---

## Lesson 1: The "Knowledge Base" Architecture

Old chatbots were dumb. They used "If/Then" logic.
New chatbots use **RAG (Retrieval Augmented Generation)**.

**How it works**:
1.  **Upload**: You upload the client's PDFs, website text, and FAQs to Voiceflow.
2.  **Chunking**: The system breaks the text into small pieces.
3.  **Query**: When a user asks a question, the bot searches the "chunks" for the answer.
4.  **Generation**: GPT-4 reads the chunk and writes a natural answer.

**Result**: A bot that sounds human and knows the company policy perfectly.

---

## Lesson 2: Building in Voiceflow (Step-by-Step)

**Step 1: The Persona**
- Set the "System Prompt": "You are Alex, the helpful support agent for [Company]. You are friendly, concise, and only answer questions based on the provided knowledge base."

**Step 2: The Knowledge Base**
- Scrape the client's website URL.
- Upload their "Employee Handbook" or "Pricing Sheet."

**Step 3: The Fallback**
- What happens if the bot doesn't know?
- *Rule*: "If you don't know, say 'I'm not sure, let me get a human' and collect their email."

---

## Lesson 3: Lead Capture & Handoff

A chatbot that just chats is useless. It needs to sell.

**The "Lead Magnet" Flow**:
- Bot: "Hi! Looking for pricing?"
- User: "Yes."
- Bot: "I can send you our full price list. What's your email?"
- *Action*: Bot sends email to Make.com -> Make adds to CRM.

**The "Human Handoff"**:
- If the user says "I want to talk to a person," the bot should send a Slack notification to the client's team immediately.

---

## Lesson 4: Testing & Deployment

**The "Hallucination" Test**:
- Try to trick the bot. Ask it "Who is the President?" or "Write me a poem."
- It should refuse and stick to the business topic.
- *Fix*: Tighten the System Prompt ("Do not answer off-topic questions").

**Embedding**:
- Voiceflow gives you a snippet of Javascript code.
- Paste it into the `<body>` tag of the client's website (WordPress, Webflow, Shopify).
- It appears as a bubble in the corner.

---

## Your Action Plan

**By the end of this module, you must:**

1.  **Build a Demo Bot**: Create a bot for a fake "Pizza Shop" that knows the menu.
2.  **Test the Knowledge Base**: Upload a PDF and ask questions about it.
3.  **Embed it**: Put the bot on a blank HTML page to see how it looks.

---

**Next Steps**: Chatbots are great, but backend automation is where the real efficiency is. Module 4 covers **Service 2 - Workflow Automation**.

*Word Count: ~550 words*
