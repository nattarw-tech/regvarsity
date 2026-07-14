import type { Module } from "./types";

// ============================================================
// MODULE 11 — ICOBS: Insurance Conduct of Business
// ============================================================
export const moduleICOBS: Module = {
  id: "icobs",
  number: 11,
  title: "ICOBS — Insurance Conduct of Business",
  slug: "icobs-insurance-conduct",
  block: "Business Standards",
  sourceCode: "ICOBS",
  colour: "bg-orange-50",
  accentColour: "oklch(0.55 0.18 40)",
  description:
    "ICOBS governs how insurance firms must treat their customers — from the initial sale through to claims handling. It applies to all general insurance products sold in the UK, including motor, home, travel, and payment protection insurance.",
  whoItAppliesTo: "All firms that sell, administer, or advise on general insurance products.",
  chapters: [
    {
      id: "icobs-1",
      number: 1,
      title: "Insurance Sales, Disclosure and Claims",
      slug: "insurance-sales-and-disclosure",
      readingTimeMinutes: 9,
      intro:
        "Insurance customers must be given the right information at the right time to make an informed choice. ICOBS sets out exactly what firms must disclose before, during, and after a sale — and how claims must be handled fairly.",
      subSections: [
        {
          id: "icobs-1-1",
          heading: "1.1 — Pre-sale disclosure and the IPID",
          content: `Before selling any insurance product, firms must give customers a clear picture of what they are buying. The key document is the **Insurance Product Information Document (IPID)** — a standardised two-page summary covering what is insured, what is not insured, restrictions on cover, and how to complain. The IPID must be written in plain, clear language. Firms cannot bury important exclusions in small print.\n\nFor insurance intermediaries (brokers), ICOBS also requires disclosure of whether they are acting on behalf of the customer or the insurer, the basis of their remuneration, and any material conflicts of interest.`,
        },
        {
          id: "icobs-1-2",
          heading: "1.2 — Demands, needs and suitability",
          content: `ICOBS 5 requires that any insurance product sold must be **consistent with the customer's demands and needs**. For non-advised sales, the firm must ask enough questions to understand the customer's basic insurance needs. For advised sales, the firm must make a personal recommendation and explain why the product is suitable.\n\n**The add-on problem:** The FCA introduced specific rules requiring firms to give customers time to consider add-on products (e.g. travel insurance sold with a holiday) separately, after research showed customers often did not understand what they were buying.`,
        },
        {
          id: "icobs-1-3",
          heading: "1.3 — Claims handling and the dual pricing ban",
          content: `ICOBS 8 requires insurers to handle claims promptly and fairly — not reject claims unreasonably, settle promptly once liability is agreed, and keep customers informed.\n\n**The dual pricing ban (January 2022):** The FCA found that insurers were charging loyal customers significantly more than new customers for the same cover — a practice known as "price walking". New rules, in force from 1 January 2022, require insurers to offer renewal customers the same price as equivalent new customers. This was a major market intervention affecting millions of UK consumers.`,
        },
      ],
      keyTakeaways: [
        { text: "The IPID is a mandatory standardised document summarising what is and is not covered by an insurance product." },
        { text: "Insurance products must meet the customer's demands and needs — advised sales require a personal recommendation." },
        { text: "The FCA banned 'price walking' from January 2022 — insurers cannot charge loyal customers more than new customers for equivalent cover." },
        { text: "Claims must be handled promptly and fairly; repossession of assets is always a last resort." },
      ],
      quizQuestions: [
        {
          id: "icobs-1-q1",
          question: "What is the Insurance Product Information Document (IPID)?",
          options: [
            "The full policy wording in legal language",
            "A standardised two-page plain-language summary of what is and is not insured",
            "The insurer's annual report",
            "A receipt for the premium paid",
          ],
          correctIndex: 1,
          explanation: "The IPID is a standardised two-page summary covering what is insured, what is not, restrictions on cover and how to complain. It must be in plain, clear language, so important exclusions cannot be buried in small print.",
        },
        {
          id: "icobs-1-q2",
          question: "Why did the FCA introduce special rules for add-on insurance products?",
          options: [
            "Add-ons were too cheap",
            "Research showed customers often did not understand what they were buying when products were bundled",
            "Insurers asked for the rules",
            "EU law required it after Brexit",
          ],
          correctIndex: 1,
          explanation: "FCA research found that customers buying add-ons, such as travel insurance sold with a holiday, often did not understand what they were buying. The rules now require firms to give customers time to consider add-on products separately.",
        },
        {
          id: "icobs-1-q3",
          question: "What did the 'price walking' ban of 1 January 2022 require?",
          options: [
            "All insurance premiums to be frozen for two years",
            "Insurers to offer renewal customers the same price as equivalent new customers",
            "Discounts for customers over 60",
            "A cap on all motor insurance prices",
          ],
          correctIndex: 1,
          explanation: "The FCA found insurers were quietly increasing prices for loyal renewal customers while offering cheaper deals to new customers. From 1 January 2022, renewal customers must be offered the same price as equivalent new customers.",
        },
      ],
    },
    {
      id: "icobs-2",
      number: 2,
      title: "Consumer Insurance Act and Fair Presentation",
      slug: "consumer-insurance-act",
      readingTimeMinutes: 7,
      intro:
        "The Consumer Insurance (Disclosure and Representations) Act 2012 fundamentally changed the duties of insurance customers, replacing the harsh old doctrine of utmost good faith with a fairer, proportionate regime.",
      subSections: [
        {
          id: "icobs-2-1",
          heading: "2.1 — From utmost good faith to reasonable care",
          content: `Before 2012, UK insurance law was based on **utmost good faith** (uberrimae fidei). Customers had to volunteer all material information — even if not asked. If they failed, the insurer could void the policy and refuse all claims, even for innocent non-disclosure.\n\nThe **Consumer Insurance (Disclosure and Representations) Act 2012** replaced this with a duty to **take reasonable care not to make a misrepresentation** when answering the insurer's questions. Customers no longer have to volunteer information unprompted.`,
        },
        {
          id: "icobs-2-2",
          heading: "2.2 — Proportionate remedies",
          content: `Under the 2012 Act, the insurer's remedy depends on the type of misrepresentation:\n\n| Type | Remedy |\n|---|---|\n| Deliberate or reckless | Void policy; keep premium |\n| Careless | Proportionate remedy |\n\nFor a careless misrepresentation, if the insurer would have charged a higher premium, it can reduce the claim payout proportionately. This is far fairer than the old all-or-nothing rule.\n\nThe **Insurance Act 2015** extended similar reforms to commercial insurance, replacing the old disclosure duty with a duty of **fair presentation of the risk**.`,
        },
      ],
      keyTakeaways: [
        { text: "The old duty of utmost good faith required customers to volunteer all material information — this was replaced in 2012." },
        { text: "Consumers now only need to take reasonable care not to misrepresent when answering the insurer's questions." },
        { text: "Remedies are now proportionate: deliberate misrepresentation voids the policy; careless misrepresentation results in a proportionate reduction." },
        { text: "The Insurance Act 2015 extended similar reforms to commercial (business) insurance." },
      ],
      quizQuestions: [
        {
          id: "icobs-2-q1",
          question: "What duty replaced 'utmost good faith' for consumers under the 2012 Act?",
          options: [
            "A duty to volunteer all material information",
            "A duty to take reasonable care not to make a misrepresentation when answering the insurer's questions",
            "A duty to obtain independent legal advice before buying insurance",
            "No duty at all",
          ],
          correctIndex: 1,
          explanation: "The Consumer Insurance (Disclosure and Representations) Act 2012 replaced utmost good faith with a duty to take reasonable care not to misrepresent when answering the insurer's questions. Consumers no longer have to volunteer information they were never asked about.",
        },
        {
          id: "icobs-2-q2",
          question: "A customer carelessly understates their mileage. The insurer would have charged 25% more premium if told the truth. What remedy applies to a claim?",
          options: [
            "The policy is void and the premium kept",
            "The claim is paid in full regardless",
            "A proportionate remedy, reducing the payout to reflect the premium shortfall",
            "The customer is prosecuted for fraud",
          ],
          correctIndex: 2,
          explanation: "For careless misrepresentation, the remedy is proportionate: if the insurer would have charged a higher premium, it can reduce the claim payout proportionately. Voiding the policy and keeping the premium is reserved for deliberate or reckless misrepresentation.",
        },
        {
          id: "icobs-2-q3",
          question: "What did the Insurance Act 2015 do?",
          options: [
            "Abolished commercial insurance",
            "Extended proportionate-remedy reforms to commercial insurance through a duty of fair presentation of the risk",
            "Reintroduced utmost good faith for consumers",
            "Created the FSCS",
          ],
          correctIndex: 1,
          explanation: "The Insurance Act 2015 brought similar reforms to commercial (business) insurance, replacing the old disclosure duty with a duty of fair presentation of the risk, with proportionate remedies for breaches.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "icobs-test-q1",
        question: "Which products does ICOBS cover?",
        options: [
          "Life insurance and pensions only",
          "General insurance products such as motor, home, travel and payment protection insurance",
          "Mortgages",
          "Crypto asset insurance only",
        ],
        correctIndex: 1,
        explanation: "ICOBS applies to general insurance products sold in the UK, including motor, home, travel and payment protection insurance, covering the whole journey from sale to claims handling.",
      },
      {
        id: "icobs-test-q2",
        question: "What must an insurance intermediary (broker) disclose under ICOBS?",
        options: [
          "Only its office address",
          "Whether it acts for the customer or the insurer, its remuneration basis, and material conflicts of interest",
          "Its profit margin on each policy",
          "Nothing, disclosure rules apply only to insurers",
        ],
        correctIndex: 1,
        explanation: "Brokers must tell customers whether they are acting on behalf of the customer or the insurer, how they are paid, and any material conflicts of interest, alongside providing the IPID for the product.",
      },
      {
        id: "icobs-test-q3",
        question: "What does ICOBS 5 require of every insurance sale?",
        options: [
          "That the product is the cheapest available",
          "That the product is consistent with the customer's demands and needs",
          "That the customer signs a waiver",
          "That the sale is always advised",
        ],
        correctIndex: 1,
        explanation: "Any insurance product sold must be consistent with the customer's demands and needs. Non-advised sales require enough questions to understand basic needs; advised sales require a personal recommendation with reasons.",
      },
      {
        id: "icobs-test-q4",
        question: "Under ICOBS 8, how must insurers handle claims?",
        options: [
          "Promptly and fairly, without unreasonable rejection, settling promptly once liability is agreed",
          "Within 24 hours in all cases",
          "Only through solicitors",
          "By offering vouchers instead of cash",
        ],
        correctIndex: 0,
        explanation: "ICOBS 8 requires prompt and fair claims handling: no unreasonable rejections, prompt settlement once liability is agreed, and keeping customers informed throughout.",
      },
      {
        id: "icobs-test-q5",
        question: "Before 2012, what could an insurer do if a consumer innocently failed to volunteer a material fact?",
        options: [
          "Nothing, innocent non-disclosure was always forgiven",
          "Void the policy and refuse all claims, even for innocent non-disclosure",
          "Only increase the premium at renewal",
          "Refer the customer to the FOS",
        ],
        correctIndex: 1,
        explanation: "Under the old doctrine of utmost good faith, failing to volunteer material information, even innocently, let the insurer void the policy and refuse all claims. The 2012 Act replaced this harsh all-or-nothing rule with proportionate remedies.",
      },
      {
        id: "icobs-test-q6",
        question: "When a consumer's misrepresentation is deliberate or reckless, what remedy does the insurer have?",
        options: [
          "A proportionate reduction in the claim",
          "It can void the policy and keep the premium",
          "It must still pay 50% of the claim",
          "It can only decline renewal",
        ],
        correctIndex: 1,
        explanation: "Deliberate or reckless misrepresentation lets the insurer void the policy and keep the premium. Careless misrepresentation attracts only a proportionate remedy, such as a reduced payout reflecting the premium that should have been charged.",
      },
    ],
  },
};
