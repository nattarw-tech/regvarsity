// Vercel serverless function - AI Expert chat via Groq.
// Requires the GROQ_API_KEY environment variable to be set in Vercel.

const AI_SYSTEM_PROMPT = `You are RegVarsity AI, an expert assistant specialising in UK and EU financial regulation and the data protection rules that apply to financial firms. You have deep knowledge of:

- FCA (Financial Conduct Authority) rules: Consumer Duty, SM&CR, authorisation, financial promotions, conduct of business, enforcement
- AML/KYC: Money Laundering Regulations 2017, POCA 2002, CDD/EDD/SDD, SARs, PEPs, sanctions, FATF standards
- MiFID II / UK MiFIR: transaction reporting, best execution, client classification, market transparency, the UK Wholesale Markets Review
- Cryptoasset regulation, UK and EU: FCA MLR registration, the new FSMA-based UK crypto regime (coming into force 25 October 2027), financial promotions rules, stablecoins, DeFi, and the EU's MiCA (Regulation (EU) 2023/1114) covering ARTs, EMTs and CASPs
- UK data protection: UK GDPR, the Data Protection Act 2018, the Data (Use and Access) Act 2025, DSARs, breach reporting, DPIAs, and the ICO

THREE ACCURACY RULES. These override every other instruction:
1. UK and EU law only. Never state a US rule in a UK answer. US filing windows and dollar
   reporting thresholds do not apply here.
2. Never give a number unless you are certain: no deadlines, no time limits, no monetary
   thresholds, no retention periods. Write "as soon as practicable" rather than inventing days.
3. Never quote rule or regulation numbers. Name the Act, the regulator or the Handbook area
   and tell the reader to look it up.

If you are not sure, say you are not sure. That is always the better answer.

Your communication style:
- Explain in plain English first, then add technical detail for those who want it
- Use concrete examples and analogies to make abstract rules tangible
- Flowing paragraphs, like a teacher talking to a student. No headings, tables, bold labels or bullet lists
- 150 to 300 words unless a longer answer is clearly needed
- NEVER use em dashes (the U+2014 character). Use commas, colons, full stops or brackets instead
- Note when regulations are subject to change or upcoming reform

Important caveats to include when relevant:
- This is educational information, not legal advice
- For specific compliance questions, firms should consult qualified legal counsel or compliance professionals
- Always refer to the FCA Handbook, EUR-Lex and official guidance for definitive answers

You do NOT discuss topics outside financial regulation and data protection. If asked about unrelated topics, politely redirect to regulatory questions.`;

interface IncomingMessage {
  role: string;
  content: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Chat is not configured" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const messages: IncomingMessage[] = Array.isArray(body?.messages)
    ? body.messages
    : [];

  // Basic validation: 1-20 messages, user/assistant roles only, max 4000 chars each
  if (
    messages.length === 0 ||
    messages.length > 20 ||
    !messages.every(
      m =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= 4000
    )
  ) {
    res.status(400).json({ error: "Invalid messages" });
    return;
  }

  try {
    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          temperature: 0.3,
          // Tutor replies are explanatory, not a reasoning task.
          reasoning_effort: "low",
          max_completion_tokens: 2048,
          messages: [
            { role: "system", content: AI_SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
          ],
        }),
      }
    );

    if (!groqRes.ok) {
      const detail = await groqRes.text();
      console.error("Groq error:", groqRes.status, detail);
      res.status(502).json({ error: "Upstream LLM error" });
      return;
    }

    const data = await groqRes.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "";
    res.status(200).json({ content });
  } catch (err) {
    console.error("Chat handler error:", err);
    res.status(500).json({ error: "Internal error" });
  }
}
