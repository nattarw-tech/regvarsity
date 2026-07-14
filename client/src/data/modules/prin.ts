import type { Module } from "./types";

// ============================================================
// MODULE 1 — PRIN: Principles for Business
// ============================================================
export const modulePRIN: Module = {
  id: "prin",
  number: 1,
  title: "PRIN — Principles for Business",
  slug: "prin-principles-for-business",
  block: "High Level Standards",
  sourceCode: "PRIN",
  colour: "bg-blue-50",
  accentColour: "oklch(0.38 0.14 255)",
  description:
    "The 12 Principles are the foundation of everything the FCA does. Every regulated firm must follow them. Think of them as the Ten Commandments of UK financial services — except there are twelve, and breaking them can cost you your licence.",
  whoItAppliesTo: "Every FCA-authorised firm, without exception.",
  chapters: [
    {
      id: "prin-1",
      number: 1,
      title: "What Are the Principles and Why Do They Exist?",
      slug: "what-are-the-principles",
      readingTimeMinutes: 6,
      intro:
        "Before we dive into the individual principles, let us understand why they exist at all. The FCA could have written thousands of rules covering every possible situation. Instead, it chose a different approach — a short list of high-level principles that capture what good behaviour looks like, regardless of the specific situation.",
      subSections: [
        {
          id: "prin-1-1",
          heading: "1.1 — The philosophy behind principles-based regulation",
          content: `The FCA operates what it calls a "principles-based" approach to regulation. This means that instead of writing a rule for every conceivable scenario, the regulator sets out broad standards of behaviour and expects firms to use their judgement to meet them.

Think of it like the difference between a driving instructor who gives you a rule for every junction versus one who teaches you to read the road and make good decisions. The FCA wants firms that can read the road.

The Principles for Business (PRIN) are the clearest expression of this philosophy. They are short, plain-English statements that describe what it means to be a good, trustworthy financial firm. They sit at the top of the entire FCA Handbook — everything else flows from them.

There are currently **12 Principles**. The first 11 have been in place since the FSA era. **Principle 12 — Consumer Duty** was added in July 2023 and represents the most significant shift in retail regulation in a generation.`,
        },
        {
          id: "prin-1-2",
          heading: "1.2 — Who must follow the Principles?",
          content: `The Principles apply to every firm that is authorised by the FCA. This includes:

- Banks and building societies
- Investment firms and stockbrokers
- Insurance companies and intermediaries
- Mortgage lenders and brokers
- Consumer credit firms
- Crypto asset businesses (from October 2027)
- Payment institutions

The Principles also apply to firms carrying on regulated activities in the UK even if they are based overseas (e.g. EEA firms operating under temporary permissions).

Importantly, the Principles are **outcome-focused**. The FCA does not just ask "did you follow the rule?" — it asks "did the customer get a good outcome?" This is a fundamental difference from a tick-box compliance culture.`,
        },
        {
          id: "prin-1-3",
          heading: "1.3 — What happens if you breach a Principle?",
          content: `Breaching a Principle is a serious matter. The FCA can take a range of actions:

**Financial penalties** — The FCA can fine firms enormous sums. In 2024 alone, it issued £176 million in fines — more than three times the 2023 total. The largest single FCA fine to date is £284.4 million, imposed on Barclays in May 2015 for failings in its foreign exchange business.

**Public censure** — The FCA can issue a public statement criticising a firm's conduct, even without a fine. This reputational damage can be severe.

**Withdrawal of authorisation** — In extreme cases, the FCA can cancel a firm's permission to carry on regulated activities — effectively shutting it down.

**Skilled person reviews** — The FCA can require a firm to appoint an independent expert (a "skilled person" under Section 166 of FSMA) to review its practices at the firm's own expense.

**Enforcement action against individuals** — Senior managers can be personally fined or banned from working in financial services under the Senior Managers and Certification Regime (SMCR).`,
        },
      ],
      keyTakeaways: [
        { text: "The FCA uses principles-based regulation — broad standards rather than rules for every situation." },
        { text: "There are 12 Principles for Business. Every FCA-authorised firm must follow all of them." },
        { text: "Principle 12 (Consumer Duty) was added in July 2023 and is the most significant recent change." },
        { text: "Breaching a Principle can result in fines, public censure, loss of authorisation, or personal bans." },
      ],
      quizQuestions: [
        {
          id: "prin-1-q1",
          question: "A retail bank introduces a new savings product. It is technically compliant with all specific FCA product rules, but the interest rate is structured in a way that most customers will never achieve the advertised headline rate. Which Principle is most likely being breached?",
          options: [
            "Principle 1 (Integrity) — because the bank is being dishonest",
            "Principle 6 (Customers' interests) — because the bank is not treating customers fairly",
            "Principle 12 (Consumer Duty) — because customers are not receiving good outcomes",
            "Both Principle 6 and Principle 12 could apply",
          ],
          correctIndex: 3,
          explanation: "Both Principle 6 and Principle 12 are relevant here. Principle 6 requires firms to pay due regard to the interests of customers and treat them fairly — a misleading headline rate likely fails this. Principle 12 (Consumer Duty) requires firms to deliver good outcomes for retail customers, including on price and value. The fact that the product is technically rule-compliant does not protect the firm if the outcome for customers is poor. This is the essence of principles-based regulation.",
        },
        {
          id: "prin-1-q2",
          question: "The FCA discovers serious weaknesses in a firm's practices and wants an independent expert to review them at the firm's own expense. Which enforcement tool is this?",
          options: [
            "A public censure",
            "A skilled person review under Section 166 of FSMA",
            "Withdrawal of authorisation",
            "A financial penalty",
          ],
          correctIndex: 1,
          explanation: "A skilled person review under Section 166 of FSMA requires the firm to appoint an independent expert to review its practices, and the firm pays for it. Public censure is a critical public statement, withdrawal of authorisation shuts the firm down, and a financial penalty is a fine. All are FCA tools, but only the Section 166 review matches this description.",
        },
        {
          id: "prin-1-q3",
          question: "What is the largest single fine the FCA has imposed to date?",
          options: [
            "£29 million on Starling Bank in 2024",
            "£176 million on a group of banks in 2024",
            "£284.4 million on Barclays in May 2015",
            "£120,000 on a small advice firm",
          ],
          correctIndex: 2,
          explanation: "The largest single FCA fine to date is £284.4 million, imposed on Barclays in May 2015 for failings in its foreign exchange business. The £176 million figure is the FCA's total fines across 2024, and £29 million was the Starling Bank fine in October 2024 for financial crime failings.",
        },
      ],
    },
    {
      id: "prin-2",
      number: 2,
      title: "The Twelve Principles Explained",
      slug: "the-twelve-principles-explained",
      readingTimeMinutes: 10,
      intro:
        "Let us now go through each of the 12 Principles one by one. For each, we will explain what it means in plain English, give a real-world example of what compliance looks like, and show what a breach might look like in practice.",
      subSections: [
        {
          id: "prin-2-1",
          heading: "2.1 — Principles 1 to 4: The Character Principles",
          content: `**Principle 1 — Integrity**: A firm must conduct its business with integrity.

This is the most fundamental principle. Integrity means being honest, acting in good faith, and not deceiving anyone. A firm that sells products it knows are unsuitable, or that misleads customers about costs, is breaching Principle 1.

*Real example*: In October 2024, the FCA fined Starling Bank £29 million for failings in its financial crime systems and controls — the bank opened over 54,000 accounts for high-risk customers despite a requirement not to, and its sanctions screening was inadequate. The FCA viewed this as a serious failure in managing financial crime risk.

---

**Principle 2 — Skill, care and diligence**: A firm must conduct its business with due skill, care and diligence.

This means firms must be competent. They must have qualified staff, proper systems, and robust processes. It is not enough to mean well — you must actually be good at what you do.

*Real example*: A small investment firm that gives advice without properly understanding the products it recommends, leading to customer losses, would breach Principle 2.

---

**Principle 3 — Management and control**: A firm must take reasonable care to organise and control its affairs responsibly and effectively, with adequate risk management systems.

This principle is about governance. Senior management must be in control of what the firm does. There must be clear lines of responsibility, proper oversight, and effective risk management.

*Real example*: The FCA's enforcement actions under SMCR frequently cite Principle 3 — when a firm's senior managers fail to properly oversee a business area that subsequently causes harm.

---

**Principle 4 — Financial prudence**: A firm must maintain adequate financial resources.

A firm must have enough capital and liquidity to meet its obligations. It must not take on more risk than it can absorb. This principle underpins the entire prudential regulatory framework.`,
        },
        {
          id: "prin-2-2",
          heading: "2.2 — Principles 5 to 8: The Market Conduct Principles",
          content: `**Principle 5 — Market conduct**: A firm must observe proper standards of market conduct.

This principle requires firms to behave properly in financial markets. It covers areas like market abuse, insider dealing, and manipulation. It works alongside the Market Abuse Regulation (MAR) and the FCA's Market Conduct sourcebook.

---

**Principle 6 — Customers' interests**: A firm must pay due regard to the interests of its customers and treat them fairly.

This is the famous "Treating Customers Fairly" (TCF) principle. It requires firms to put customers' interests at the heart of their business. It is not just about avoiding harm — it is about actively looking out for customers.

*Note*: Since July 2023, Principle 12 (Consumer Duty) has significantly strengthened and expanded on Principle 6 for retail customers. Principle 6 still applies to all customers including wholesale clients.

---

**Principle 7 — Communications with clients**: A firm must pay due regard to the information needs of its clients, and communicate information to them in a way which is clear, fair and not misleading.

Every communication with a client — whether a product brochure, a website, a telephone call, or a social media post — must be clear, fair, and not misleading. This principle is the foundation of the FCA's financial promotions regime.

*Real example*: In 2024, FCA interventions led to 19,766 financial promotions being amended or withdrawn by authorised firms, and the FCA issued 2,240 alerts about unauthorised firms and individuals — particularly in the crypto and high-risk investment space.

---

**Principle 8 — Conflicts of interest**: A firm must manage conflicts of interest fairly, both between itself and its customers and between a customer and another client.

Every financial firm faces conflicts of interest — situations where its own financial interests could conflict with its customers' interests. Principle 8 requires firms to identify these conflicts and manage them properly, not just disclose them.`,
        },
        {
          id: "prin-2-3",
          heading: "2.3 — Principles 9 to 12: The Relationship Principles",
          content: `**Principle 9 — Customers: relationships of trust**: A firm must take reasonable care to ensure the suitability of its advice and discretionary decisions for any customer who is entitled to rely on its judgement.

When a customer relies on a firm's judgement — for example, when receiving investment advice — the firm must ensure its recommendations are suitable for that specific customer. This requires understanding the customer's circumstances, risk appetite, and financial goals.

---

**Principle 10 — Clients' assets**: A firm must arrange adequate protection for clients' assets when it is responsible for them.

When a firm holds client money or assets, it must keep them safe and separate from the firm's own assets. This principle underpins the entire Client Assets sourcebook (CASS). The collapse of MF Global in 2011, which left clients unable to recover their assets, led to significant strengthening of this area.

---

**Principle 11 — Relations with regulators**: A firm must deal with its regulators in an open and cooperative way, and must disclose to the FCA appropriately anything relating to the firm of which the FCA would reasonably expect notice.

Firms must be transparent with the FCA. They must report problems promptly, cooperate with investigations, and not mislead the regulator. This is sometimes called the "open and cooperative" principle.

*Real example*: Firms that discover a significant operational incident, data breach, or compliance failure must notify the FCA promptly. Failure to do so — or attempting to conceal problems — is a serious breach of Principle 11.

---

**Principle 12 — Consumer Duty**: A firm must deliver good outcomes for retail customers.

Added in July 2023, this is the most powerful principle in the modern FCA Handbook. It requires firms to:
- Deliver products and services that meet customers' needs
- Charge prices that represent fair value
- Give customers the information they need to make good decisions
- Provide support that actually helps customers

Principle 12 applies to all firms in the distribution chain for retail products — not just the firm that sells directly to the customer.`,
        },
      ],
      keyTakeaways: [
        { text: "Principles 1–4 cover character: integrity, competence, governance, and financial soundness." },
        { text: "Principles 5–8 cover market conduct: fair markets, customer interests, clear communications, and conflict management." },
        { text: "Principles 9–12 cover relationships: suitability, asset protection, regulator relations, and consumer outcomes." },
        { text: "Principle 12 (Consumer Duty, July 2023) is the most significant recent addition and applies to the entire retail distribution chain." },
        { text: "Principle 6 (TCF) still applies to all customers including wholesale clients; Principle 12 applies only to retail customers." },
      ],
      quizQuestions: [
        {
          id: "prin-2-q1",
          question: "A firm holds client money but fails to keep it separate from its own assets. Which Principle does this breach most directly?",
          options: [
            "Principle 4 (Financial prudence)",
            "Principle 8 (Conflicts of interest)",
            "Principle 10 (Clients' assets)",
            "Principle 11 (Relations with regulators)",
          ],
          correctIndex: 2,
          explanation: "Principle 10 requires a firm to arrange adequate protection for clients' assets when it is responsible for them, including keeping them safe and separate from the firm's own assets. This principle underpins the Client Assets sourcebook (CASS). The collapse of MF Global in 2011 showed why this matters.",
        },
        {
          id: "prin-2-q2",
          question: "A firm discovers a significant compliance failure and decides to fix it quietly without telling the FCA. Which Principle is it breaching?",
          options: [
            "Principle 11, because firms must deal with regulators in an open and cooperative way",
            "Principle 3, because this is a management and control failure",
            "Principle 1, because concealment is always dishonest",
            "No Principle, provided the failure is fixed promptly",
          ],
          correctIndex: 0,
          explanation: "Principle 11 requires firms to deal with regulators openly and cooperatively, and to disclose anything of which the FCA would reasonably expect notice. A significant compliance failure clearly qualifies, so staying quiet is itself a breach, even if the underlying problem gets fixed. Concealment could also engage Principle 1, but Principle 11 is the most direct answer.",
        },
        {
          id: "prin-2-q3",
          question: "Which statement about Principle 6 and Principle 12 is correct?",
          options: [
            "Principle 12 replaced Principle 6 entirely in July 2023",
            "Principle 6 applies to all customers including wholesale clients, while Principle 12 applies only to retail customers",
            "Principle 6 applies only to retail customers, while Principle 12 covers wholesale clients",
            "Both principles apply only to firms that sell directly to consumers",
          ],
          correctIndex: 1,
          explanation: "Principle 12 (Consumer Duty) strengthened and expanded on Principle 6 for retail customers, but it did not replace it. Principle 6 (Treating Customers Fairly) still applies to all customers, including wholesale clients. Principle 12 applies to retail customers and reaches every firm in the retail distribution chain.",
        },
      ],
    },
    {
      id: "prin-3",
      number: 3,
      title: "Consumer Duty — The New Standard",
      slug: "consumer-duty",
      readingTimeMinutes: 12,
      intro:
        "Consumer Duty is the biggest change to retail financial regulation in over a decade. It came into force on 31 July 2023 for new and existing products, and on 31 July 2024 for closed products. Understanding it is essential for anyone working in retail financial services — or for any consumer who wants to know their rights.",
      subSections: [
        {
          id: "prin-3-1",
          heading: "3.1 — What is Consumer Duty and why was it introduced?",
          content: `Consumer Duty (Principle 12) was introduced because the FCA concluded that the existing rules — including Principle 6 (Treating Customers Fairly) — were not producing consistently good outcomes for retail customers.

The FCA's research found widespread evidence of:
- Products that did not meet customers' needs
- Prices that did not represent fair value
- Information that was technically accurate but practically useless
- Customer service that made it difficult to get help or switch products

Consumer Duty is the FCA's response. It shifts the standard from "did you follow the rules?" to "did your customers get a good outcome?"

The key phrase in the Duty is that firms must act to deliver **good outcomes** for retail customers. This is an active obligation — firms cannot simply avoid doing harm. They must positively ensure customers are getting what they need.`,
        },
        {
          id: "prin-3-2",
          heading: "3.2 — The Four Outcomes",
          content: `Consumer Duty is structured around four specific outcomes that firms must deliver:

**Outcome 1 — Products and Services**: Firms must design and distribute products and services that meet the needs of the target market. A product designed for sophisticated investors should not be sold to vulnerable retail customers. A savings account with complex terms should not be marketed to people with low financial literacy.

**Outcome 2 — Price and Value**: The price a customer pays must be reasonable relative to the benefits they receive. This does not mean prices must be the lowest in the market — but firms must be able to demonstrate that their pricing represents fair value. The FCA has been particularly focused on so-called "loyalty penalties" — where existing customers pay more than new customers for the same product.

**Outcome 3 — Consumer Understanding**: Firms must communicate in a way that enables customers to make informed decisions. This goes beyond "clear, fair and not misleading" (Principle 7). Firms must actually test whether customers understand the information they are given. A technically accurate but confusing document fails this outcome.

**Outcome 4 — Consumer Support**: Firms must provide support that meets customers' needs throughout the product lifecycle — not just at the point of sale. This includes making it easy to make a complaint, switch products, or exit a contract. Deliberately making it difficult to cancel a subscription, for example, would breach this outcome.`,
        },
        {
          id: "prin-3-3",
          heading: "3.3 — Vulnerable Customers",
          content: `One of the most important aspects of Consumer Duty is its focus on **vulnerable customers**. The FCA defines a vulnerable customer as someone who, due to their personal circumstances, is especially susceptible to harm — particularly when a firm is not acting with appropriate levels of care.

Vulnerability can be:
- **Health-related** — physical disability, serious illness, mental health conditions
- **Life event-related** — bereavement, job loss, relationship breakdown
- **Resilience-related** — low financial resilience, over-indebtedness
- **Capability-related** — low literacy, language barriers, lack of digital access

The FCA estimates that around 50% of UK adults show characteristics of vulnerability at any given time. This is not a small minority — it is the mainstream.

Under Consumer Duty, firms must:
1. Identify customers who may be vulnerable
2. Adapt their products, communications, and services accordingly
3. Train staff to recognise and respond to vulnerability
4. Monitor outcomes for vulnerable customers specifically

The FCA's Guidance on Vulnerable Customers (FG21/1) provides detailed expectations. Firms that treat vulnerable customers the same as everyone else are likely to be in breach of Consumer Duty.`,
        },
        {
          id: "prin-3-4",
          heading: "3.4 — The Distribution Chain",
          content: `One of the most significant aspects of Consumer Duty is that it applies to **all firms in the distribution chain** — not just the firm that sells directly to the customer.

Consider a simple example: a bank creates a savings product, a platform distributes it, and an adviser recommends it to a customer. Under Consumer Duty, all three firms have obligations:

- The **manufacturer** (bank) must design a product that meets the needs of the target market and offers fair value
- The **distributor** (platform) must ensure the product is appropriate for the customers it serves and share relevant information with the manufacturer
- The **adviser** must ensure the recommendation is suitable and that the customer understands what they are buying

Firms must also share information up and down the chain. A manufacturer cannot simply say "we designed a good product" — they must monitor how it is being distributed and whether customers are getting good outcomes.

This has significant implications for firms that previously considered themselves "wholesale" businesses — if your products ultimately reach retail customers, Consumer Duty applies to you.`,
        },
      ],
      keyTakeaways: [
        { text: "Consumer Duty (Principle 12) came into force on 31 July 2023 for new products and 31 July 2024 for closed products." },
        { text: "It requires firms to deliver four outcomes: good products/services, fair value, consumer understanding, and effective support." },
        { text: "Vulnerable customers must be identified and treated with additional care — around 50% of UK adults show vulnerability characteristics." },
        { text: "Consumer Duty applies to all firms in the distribution chain, not just those selling directly to retail customers." },
        { text: "The standard is outcome-based: firms must demonstrate customers are getting good outcomes, not just that rules were followed." },
      ],
      quizQuestions: [
        {
          id: "prin-3-q1",
          question: "A firm's product terms are technically accurate but so confusing that customers routinely misunderstand what they are buying. Which Consumer Duty outcome does this fail?",
          options: [
            "Outcome 1 (Products and Services)",
            "Outcome 2 (Price and Value)",
            "Outcome 3 (Consumer Understanding)",
            "Outcome 4 (Consumer Support)",
          ],
          correctIndex: 2,
          explanation: "Outcome 3 (Consumer Understanding) requires firms to communicate in a way that enables customers to make informed decisions, and to test whether customers actually understand. A technically accurate but confusing document fails this outcome. This goes further than Principle 7's 'clear, fair and not misleading' standard.",
        },
        {
          id: "prin-3-q2",
          question: "Roughly what proportion of UK adults show characteristics of vulnerability at any given time, according to the FCA?",
          options: [
            "Around 5%",
            "Around 15%",
            "Around 25%",
            "Around 50%",
          ],
          correctIndex: 3,
          explanation: "The FCA estimates around 50% of UK adults show characteristics of vulnerability at any given time, whether health-related, life event-related, resilience-related or capability-related. Vulnerability is mainstream, not a small minority, which is why Consumer Duty requires firms to identify vulnerable customers and adapt how they serve them.",
        },
        {
          id: "prin-3-q3",
          question: "A bank manufactures a savings product that a platform distributes and an adviser recommends. Under Consumer Duty, who has obligations to the retail customer?",
          options: [
            "Only the adviser, because they deal with the customer directly",
            "Only the bank, because it designed the product",
            "All three firms, because the Duty applies across the whole distribution chain",
            "The platform and the adviser, but not the manufacturer",
          ],
          correctIndex: 2,
          explanation: "Consumer Duty applies to every firm in the distribution chain for retail products. The manufacturer must design a product that meets the target market's needs at fair value, the distributor must ensure it reaches appropriate customers, and the adviser must ensure the recommendation is suitable. Firms must also share information up and down the chain.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "prin-test-q1",
        question: "What is the core idea behind the FCA's principles-based approach to regulation?",
        options: [
          "Writing a detailed rule for every conceivable scenario",
          "Setting broad standards of behaviour and expecting firms to use judgement to meet them",
          "Letting firms regulate themselves through industry codes",
          "Copying the rulebooks of other national regulators",
        ],
        correctIndex: 1,
        explanation: "Principles-based regulation sets out broad standards of behaviour rather than a rule for every situation. The FCA expects firms to use their judgement to meet those standards, and it judges firms on outcomes, not just technical rule-following.",
      },
      {
        id: "prin-test-q2",
        question: "How many Principles for Business are there, and which is the newest?",
        options: [
          "Ten, with Principle 10 (Clients' assets) the newest",
          "Eleven, with Principle 11 (Relations with regulators) the newest",
          "Twelve, with Principle 12 (Consumer Duty) added in July 2023",
          "Twelve, with Principle 12 (Consumer Duty) added in January 2018",
        ],
        correctIndex: 2,
        explanation: "There are 12 Principles. The first 11 date from the FSA era; Principle 12 (Consumer Duty) was added in July 2023 and is the most significant recent change to retail regulation.",
      },
      {
        id: "prin-test-q3",
        question: "Which Principle requires a firm to maintain adequate financial resources?",
        options: [
          "Principle 2 (Skill, care and diligence)",
          "Principle 3 (Management and control)",
          "Principle 4 (Financial prudence)",
          "Principle 10 (Clients' assets)",
        ],
        correctIndex: 2,
        explanation: "Principle 4 (Financial prudence) requires a firm to maintain adequate financial resources, meaning enough capital and liquidity to meet its obligations without taking on more risk than it can absorb. It underpins the prudential regulatory framework.",
      },
      {
        id: "prin-test-q4",
        question: "In October 2024 the FCA fined Starling Bank £29 million. What was the failing?",
        options: [
          "Mis-selling savings products to vulnerable customers",
          "Financial crime systems failings, including opening over 54,000 accounts for high-risk customers",
          "Manipulating foreign exchange benchmarks",
          "Failing to pay compensation ordered by the Financial Ombudsman",
        ],
        correctIndex: 1,
        explanation: "Starling Bank was fined £29 million in October 2024 for failings in its financial crime systems and controls. It opened over 54,000 accounts for high-risk customers despite a requirement not to, and its sanctions screening was inadequate.",
      },
      {
        id: "prin-test-q5",
        question: "Principle 7 requires communications with clients to be what?",
        options: [
          "Short, simple and friendly",
          "Approved in advance by the FCA",
          "Clear, fair and not misleading",
          "Written only, never verbal",
        ],
        correctIndex: 2,
        explanation: "Principle 7 requires firms to pay due regard to clients' information needs and communicate in a way that is clear, fair and not misleading. It applies to every communication, from brochures and websites to phone calls and social media posts, and is the foundation of the financial promotions regime.",
      },
      {
        id: "prin-test-q6",
        question: "Which of the following is NOT one of the four Consumer Duty outcomes?",
        options: [
          "Products and Services",
          "Price and Value",
          "Consumer Understanding",
          "Guaranteed Investment Returns",
        ],
        correctIndex: 3,
        explanation: "The four Consumer Duty outcomes are Products and Services, Price and Value, Consumer Understanding, and Consumer Support. The Duty never guarantees investment returns; it requires firms to deliver good outcomes in how products are designed, priced, explained and supported.",
      },
      {
        id: "prin-test-q7",
        question: "When did Consumer Duty come into force for closed products?",
        options: [
          "31 July 2023",
          "31 July 2024",
          "1 January 2022",
          "It has not yet come into force for closed products",
        ],
        correctIndex: 1,
        explanation: "Consumer Duty came into force on 31 July 2023 for new and existing products, and on 31 July 2024 for closed products (products no longer on sale but still held by customers).",
      },
      {
        id: "prin-test-q8",
        question: "A wholesale asset manager designs funds that are sold to retail investors through third-party platforms. Does Consumer Duty apply to it?",
        options: [
          "No, because it never deals with retail customers directly",
          "No, because Consumer Duty only applies to banks",
          "Yes, because the Duty applies to all firms in the distribution chain whose products reach retail customers",
          "Only if the platforms ask it to comply contractually",
        ],
        correctIndex: 2,
        explanation: "Consumer Duty applies across the whole distribution chain. If a firm's products ultimately reach retail customers, the Duty applies even if the firm considers itself a wholesale business and never deals with retail customers directly.",
      },
    ],
  },
};
