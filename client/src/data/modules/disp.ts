import type { Module } from "./types";

// ============================================================
// MODULE 7 - DISP / COMP: Complaints and Compensation
// ============================================================
export const moduleDISP: Module = {
  id: "disp",
  number: 7,
  title: "DISP & COMP - Complaints and Compensation",
  slug: "disp-comp-complaints-compensation",
  block: "Redress",
  sourceCode: "DISP / COMP",
  colour: "bg-orange-50",
  accentColour: "oklch(0.55 0.18 55)",
  description:
    "When things go wrong, customers need to know how to complain and what compensation they can receive. DISP sets out how firms must handle complaints. COMP covers the Financial Services Compensation Scheme (FSCS), the safety net that protects customers if a firm fails.",
  whoItAppliesTo: "All FCA-authorised firms that deal with retail customers.",
  chapters: [
    {
      id: "disp-1",
      number: 1,
      title: "How Firms Must Handle Complaints",
      slug: "how-firms-handle-complaints",
      readingTimeMinutes: 7,
      intro:
        "Every financial firm will receive complaints. How a firm handles those complaints, the speed, the fairness, and the outcome, is a key indicator of its culture and its commitment to Consumer Duty. DISP sets out the minimum standards.",
      subSections: [
        {
          id: "disp-1-1",
          heading: "1.1 - What counts as a complaint?",
          content: `Under DISP, a **complaint** is any oral or written expression of dissatisfaction, whether justified or not, from or on behalf of an eligible complainant, about the firm's provision of, or failure to provide, a financial service or product.

Key points:
- It does not matter whether the complaint is justified, if a customer expresses dissatisfaction, it is a complaint
- It can be made orally (e.g. by phone) or in writing (e.g. by email or letter)
- It must be from an **eligible complainant**, this includes retail clients, small businesses (with an annual turnover below £6.5 million), and charities (with an annual income below £6.5 million)

Large corporates and sophisticated investors are generally not eligible complainants for DISP purposes, they are expected to resolve disputes through commercial channels or litigation.`,
        },
        {
          id: "disp-1-2",
          heading: "1.2 - The complaints handling process",
          content: `DISP sets out a clear process for handling complaints:

**Step 1 - Acknowledgement**: The firm must acknowledge the complaint promptly (within 5 business days for most complaints, or immediately for complaints that can be resolved within 3 business days).

**Step 2 - Investigation**: The firm must investigate the complaint fairly and thoroughly. It must consider all relevant evidence and not simply defend its original position.

**Step 3 - Response**: The firm must send a **final response** within **8 weeks** of receiving the complaint. The final response must:
- Accept or reject the complaint (with reasons)
- If accepting, offer appropriate redress
- Inform the customer of their right to refer the complaint to the Financial Ombudsman Service (FOS)

**Step 4 - Referral to FOS**: If the customer is not satisfied with the firm's response, or if the firm has not responded within 8 weeks, the customer can refer the complaint to the FOS. The FOS can award up to **£455,000** in compensation (for complaints referred on or after 1 April 2026 about acts occurring on or after 1 April 2019). The limit is adjusted each April in line with inflation.`,
        },
        {
          id: "disp-1-3",
          heading: "1.3 - The Financial Ombudsman Service (FOS)",
          content: `The **Financial Ombudsman Service (FOS)** is an independent body that resolves disputes between financial firms and their customers. It was established by FSMA 2000 and is funded by levies on financial firms.

Key facts about the FOS:
- It is **free** for customers to use
- It can award up to **£455,000** in compensation (for complaints referred on or after 1 April 2026)
- Its decisions are **binding on firms** (but not on customers, a customer can reject an FOS decision and go to court instead)
- It considers what is **fair and reasonable**, not just what is strictly legal

The FOS receives **hundreds of thousands of new cases each year**, with volumes rising sharply in recent years driven by motor finance complaints. The most common complaint types are about:
- Payment protection insurance (PPI), though this has now largely been resolved
- Current accounts and banking services
- Motor finance (a major area of current concern)
- Investments and pensions

**Motor finance redress**: Following its review of discretionary commission arrangements and the Supreme Court's 2025 ruling on undisclosed commissions, the FCA confirmed an industry-wide consumer redress scheme in March 2026 (PS26/3). The FCA estimates around £7.5 billion in redress across roughly 12 million eligible agreements, around £9.1 billion once firms' costs are included, making it one of the largest consumer redress exercises in UK history. Parts of the scheme are currently paused pending legal challenges.`,
        },
      ],
      keyTakeaways: [
        {
          text: "A complaint is any expression of dissatisfaction from an eligible complainant, it does not need to be justified.",
        },
        {
          text: "Firms must send a final response within 8 weeks, accepting or rejecting the complaint with reasons.",
        },
        {
          text: "Customers can refer unresolved complaints to the FOS, which can award up to £455,000 in compensation (2026/27 limit).",
        },
        { text: "FOS decisions are binding on firms but not on customers." },
        {
          text: "Motor finance redress is a major current issue, the FCA's 2026 scheme estimates around £7.5 billion in redress across the industry.",
        },
      ],
      quizQuestions: [
        {
          id: "disp-1-q1",
          question:
            "A customer phones a bank and says, wrongly, that they have been overcharged. Is this a complaint under DISP?",
          options: [
            "No, because the customer is mistaken",
            "No, because it was made by phone rather than in writing",
            "Yes, any oral or written expression of dissatisfaction from an eligible complainant counts, justified or not",
            "Only if the customer uses the word 'complaint'",
          ],
          correctIndex: 2,
          explanation:
            "DISP defines a complaint as any oral or written expression of dissatisfaction, whether justified or not, from or on behalf of an eligible complainant. Whether the customer is right is decided in the investigation; the expression of dissatisfaction alone makes it a complaint.",
        },
        {
          id: "disp-1-q2",
          question:
            "How long does a firm have to send its final response to a complaint?",
          options: ["5 business days", "3 weeks", "8 weeks", "6 months"],
          correctIndex: 2,
          explanation:
            "The firm must send a final response within 8 weeks of receiving the complaint, accepting or rejecting it with reasons, offering redress where accepted, and telling the customer about their right to go to the Financial Ombudsman Service.",
        },
        {
          id: "disp-1-q3",
          question:
            "Which statement about Financial Ombudsman Service decisions is correct?",
          options: [
            "They are binding on both firms and customers",
            "They are binding on firms, but a customer can reject the decision and go to court",
            "They are advisory only",
            "They can only be enforced through the FCA",
          ],
          correctIndex: 1,
          explanation:
            "FOS decisions bind firms but not customers. A customer who rejects an ombudsman decision keeps the right to pursue the matter in court. The FOS is free for customers and decides cases on what is fair and reasonable, not just strict law.",
        },
      ],
    },
    {
      id: "disp-2",
      number: 2,
      title: "The Financial Services Compensation Scheme (FSCS)",
      slug: "fscs-compensation",
      readingTimeMinutes: 7,
      intro:
        "The FSCS is the UK's statutory compensation scheme for customers of failed financial firms. If your bank, investment firm, or insurer goes bust, the FSCS may be able to compensate you. Understanding the limits and scope of FSCS protection is essential for anyone managing their finances.",
      subSections: [
        {
          id: "disp-2-1",
          heading: "2.1 - What does the FSCS cover?",
          content: `The FSCS covers several types of financial products and services:

**Deposits (bank accounts)**: Up to **£120,000** per person per authorised institution (raised from £85,000 on 1 December 2025). If you have accounts at two banks that are separately authorised, you are protected up to £120,000 at each. Note: some banks share an authorisation (e.g. Halifax and Bank of Scotland are both part of Lloyds Banking Group), in this case, the limit applies across both.

**Investments**: Up to **£85,000** per person per firm for investment business (e.g. stocks and shares ISAs, investment portfolios). The December 2025 increase applied to deposits only, the investment limit remains £85,000.

**Insurance**: Up to **90%** of the claim value for most types of insurance (100% for compulsory insurance like motor insurance).

**Mortgages**: Up to **£85,000** per person per firm for mortgage advice and arranging.

**Pensions**: Up to **£85,000** per person per firm for pension advice and arranging.

**Temporary high balances**: If you have a temporarily high balance (e.g. from a property sale or inheritance), you may be protected up to **£1.4 million** for up to 6 months (raised from £1 million on 1 December 2025).`,
        },
        {
          id: "disp-2-2",
          heading: "2.2 - What the FSCS does NOT cover",
          content: `The FSCS does not cover everything. Important exclusions include:

**Unauthorised firms**: If you invest with a firm that is not FCA-authorised, the FSCS will not protect you. This is why the FCA's **Warning List** and **ScamSmart** service are important, always check that a firm is authorised before investing.

**Investment losses**: The FSCS covers you if a firm fails (i.e. goes insolvent), not if your investments simply lose value. If you invest in a fund that performs poorly, that is an investment risk, not an FSCS claim.

**Crypto assets**: Crypto assets are not currently covered by the FSCS. When the new crypto regime comes into force in 2027, some crypto activities may become eligible.

**Pension shortfalls**: The FSCS covers advice about pensions, but not shortfalls in defined benefit pension schemes, these are covered by the Pension Protection Fund (PPF).

**Fraud by the firm**: If a firm commits fraud against you (e.g. a Ponzi scheme), the FSCS may cover you, but only if the firm was authorised and the activity was a regulated activity.`,
        },
      ],
      keyTakeaways: [
        {
          text: "The FSCS protects deposits up to £120,000 per person per authorised institution (since 1 December 2025).",
        },
        {
          text: "Investments are protected up to £85,000 per person per firm. Insurance claims are covered up to 90% (100% for compulsory insurance).",
        },
        {
          text: "Temporary high balances (e.g. from property sales) may be protected up to £1.4 million for 6 months.",
        },
        {
          text: "The FSCS does NOT cover unauthorised firms, investment losses, or crypto assets (currently).",
        },
        {
          text: "Always check a firm is FCA-authorised before investing, use the FCA Register.",
        },
      ],
      quizQuestions: [
        {
          id: "disp-2-q1",
          question:
            "Since 1 December 2025, how much of a customer's deposits does the FSCS protect per person per authorised institution?",
          options: ["£85,000", "£100,000", "£120,000", "£455,000"],
          correctIndex: 2,
          explanation:
            "The FSCS deposit limit rose from £85,000 to £120,000 on 1 December 2025. Note that the limit applies per authorised institution, so brands sharing one authorisation share one limit. The £85,000 limit still applies to investment, mortgage and pension advice claims.",
        },
        {
          id: "disp-2-q2",
          question:
            "A saver deposits £900,000 from a house sale into one bank account. Three months later the bank fails. What FSCS protection applies?",
          options: [
            "Only the standard £120,000",
            "Nothing, because the balance exceeded the limit",
            "Up to £1.4 million under the temporary high balance protection, which lasts 6 months",
            "The full amount with no limit",
          ],
          correctIndex: 2,
          explanation:
            "Temporary high balances, for example from a property sale or inheritance, are protected up to £1.4 million for up to 6 months (raised from £1 million on 1 December 2025). After the 6-month window, only the standard £120,000 limit applies.",
        },
        {
          id: "disp-2-q3",
          question:
            "An investor's FCA-authorised fund falls 40% in a market downturn. Can they claim from the FSCS?",
          options: [
            "Yes, the FSCS covers all investment losses",
            "No, the FSCS covers firm failure, not poor investment performance",
            "Yes, but only up to £85,000",
            "Only if they are over 65",
          ],
          correctIndex: 1,
          explanation:
            "The FSCS steps in when an authorised firm fails (becomes insolvent), not when investments simply lose value. Market losses are investment risk. The £85,000 investment limit applies to claims arising from a failed firm.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "disp-test-q1",
        question: "Who counts as an eligible complainant under DISP?",
        options: [
          "Anyone, including large corporates",
          "Retail clients, small businesses with turnover below £6.5 million, and charities with income below £6.5 million",
          "Only individuals over 18",
          "Only customers who have held a product for a year",
        ],
        correctIndex: 1,
        explanation:
          "Eligible complainants include retail clients, small businesses (annual turnover below £6.5 million) and charities (annual income below £6.5 million). Large corporates and sophisticated investors are expected to resolve disputes commercially or through litigation.",
      },
      {
        id: "disp-test-q2",
        question:
          "Within how many business days must a firm acknowledge most complaints?",
        options: [
          "1 business day",
          "5 business days",
          "10 business days",
          "8 weeks",
        ],
        correctIndex: 1,
        explanation:
          "Firms must acknowledge complaints promptly, within 5 business days for most complaints. Complaints resolved within 3 business days can be closed with a simpler summary resolution communication. The full final response deadline is 8 weeks.",
      },
      {
        id: "disp-test-q3",
        question:
          "What is the FOS award limit for complaints referred on or after 1 April 2026?",
        options: ["£85,000", "£120,000", "£430,000", "£455,000"],
        correctIndex: 3,
        explanation:
          "The FOS can award up to £455,000 for complaints referred on or after 1 April 2026 about acts occurring on or after 1 April 2019. The limit is adjusted each April in line with inflation.",
      },
      {
        id: "disp-test-q4",
        question: "On what standard does the FOS decide cases?",
        options: [
          "Strict legal liability only",
          "What is fair and reasonable in the circumstances",
          "Whatever the firm's terms and conditions say",
          "Precedents set by the Supreme Court only",
        ],
        correctIndex: 1,
        explanation:
          "The FOS considers what is fair and reasonable, which can go beyond what is strictly legal. It is free for customers, funded by levies on firms, and was established by FSMA 2000.",
      },
      {
        id: "disp-test-q5",
        question:
          "Roughly how large is the motor finance redress confirmed by the FCA in March 2026 (PS26/3)?",
        options: [
          "Around £75 million across 120,000 agreements",
          "Around £7.5 billion in redress across roughly 12 million agreements",
          "Around £30 to £40 billion across all firms",
          "No scheme was confirmed",
        ],
        correctIndex: 1,
        explanation:
          "The FCA's industry-wide redress scheme, confirmed in March 2026 after the Supreme Court's 2025 ruling on undisclosed commissions, estimates around £7.5 billion in redress across roughly 12 million eligible agreements, about £9.1 billion including firms' costs. Parts of the scheme are paused pending legal challenges.",
      },
      {
        id: "disp-test-q6",
        question:
          "Halifax and Bank of Scotland share one banking authorisation. A customer holds £100,000 with each. How much FSCS deposit protection do they have in total across the two brands?",
        options: [
          "£240,000, because there are two brands",
          "£120,000, because the limit applies per authorised institution, not per brand",
          "£200,000, the full amount held",
          "£85,000",
        ],
        correctIndex: 1,
        explanation:
          "The £120,000 deposit limit applies per person per authorised institution. Brands sharing a single authorisation share a single limit, so this customer is protected up to £120,000 across both accounts, not £120,000 each.",
      },
      {
        id: "disp-test-q7",
        question: "Which of the following is NOT protected by the FSCS?",
        options: [
          "Deposits at an authorised bank that fails",
          "Crypto assets held on an exchange today",
          "A claim against a failed authorised investment firm, up to £85,000",
          "90% of a non-compulsory insurance claim when the insurer fails",
        ],
        correctIndex: 1,
        explanation:
          "Crypto assets are not currently covered by the FSCS, although some crypto activities may become eligible when the new regime arrives in 2027. Deposits, investment claims against failed firms, and insurance claims are covered within the stated limits.",
      },
      {
        id: "disp-test-q8",
        question:
          "Which body covers shortfalls in defined benefit pension schemes?",
        options: [
          "The FSCS",
          "The Pension Protection Fund",
          "The Financial Ombudsman Service",
          "HM Treasury directly",
        ],
        correctIndex: 1,
        explanation:
          "The FSCS covers pension advice and arranging (up to £85,000 per person per firm), but shortfalls in defined benefit schemes are covered by the Pension Protection Fund (PPF), a separate body.",
      },
    ],
  },
};
