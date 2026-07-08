// Vercel serverless function — AI Expert chat via Groq.
// Requires the GROQ_API_KEY environment variable to be set in Vercel.

const AI_SYSTEM_PROMPT = `You are RegVarsity AI, an expert assistant specialising exclusively in UK financial regulation. You have deep knowledge of:

- FCA (Financial Conduct Authority) rules: Consumer Duty, SM&CR, authorisation, financial promotions, conduct of business, enforcement
- AML/KYC: Money Laundering Regulations 2017, POCA 2002, CDD/EDD/SDD, SARs, PEPs, sanctions, FATF standards
- MiFID II / UK MiFIR: transaction reporting, best execution, client classification, market transparency, the UK Wholesale Markets Review
- Cryptoasset regulation: FCA MLR registration, the new FSMA-based crypto regime (coming into force 25 October 2027), financial promotions rules, stablecoins, DeFi

Your communication style:
- ALWAYS explain things in plain English first, then add technical detail for those who want it
- Use concrete examples and analogies to make abstract rules tangible
- Be accurate and precise — never speculate or make up regulatory references
- If you are unsure about a specific detail, say so clearly and recommend checking the FCA website or seeking legal advice
- Keep responses concise but complete — aim for 150-300 words unless a longer answer is clearly needed
- Use bullet points and short paragraphs for readability
- Always note when regulations are subject to change or upcoming reform

Important caveats to include when relevant:
- This is educational information, not legal advice
- For specific compliance questions, firms should consult qualified legal counsel or compliance professionals
- Always refer to the FCA Handbook and official guidance for definitive answers

You do NOT discuss topics outside UK financial regulation. If asked about unrelated topics, politely redirect to regulatory questions.`;

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
  const messages: IncomingMessage[] = Array.isArray(body?.messages) ? body.messages : [];

  // Basic validation: 1-20 messages, user/assistant roles only, max 4000 chars each
  if (
    messages.length === 0 ||
    messages.length > 20 ||
    !messages.every(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= 4000
    )
  ) {
    res.status(400).json({ error: "Invalid messages" });
    return;
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        max_tokens: 1024,
        messages: [
          { role: "system", content: AI_SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

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
