// ============================================================
// RegVarsity — Module & Chapter Data
// Varsity-style learning content for UK Financial Regulations
// Last updated: July 2026
// ============================================================

export interface KeyTakeaway {
  text: string;
}

export interface SubSection {
  id: string;
  heading: string;
  content: string; // markdown-compatible plain text
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  slug: string;
  readingTimeMinutes: number;
  intro: string;
  subSections: SubSection[];
  keyTakeaways: KeyTakeaway[];
  quizQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface Module {
  id: string;
  number: number;
  title: string;
  slug: string;
  block: string;
  sourceCode: string; // e.g. "PRIN", "COBS"
  colour: string; // tailwind bg colour token
  accentColour: string; // hex/oklch
  description: string;
  whoItAppliesTo: string;
  chapters: Chapter[];
}

// ============================================================
// MODULE 1 — PRIN: Principles for Business
// ============================================================
const modulePRIN: Module = {
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
      quizQuestion: {
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
    },
  ],
};

// ============================================================
// MODULE 2 — SYSC / SMCR: Senior Management & Governance
// ============================================================
const moduleSYSC: Module = {
  id: "sysc",
  number: 2,
  title: "SYSC & SMCR — Senior Management & Governance",
  slug: "sysc-smcr-senior-management",
  block: "High Level Standards",
  sourceCode: "SYSC",
  colour: "bg-purple-50",
  accentColour: "oklch(0.38 0.16 290)",
  description:
    "The Senior Managers and Certification Regime (SMCR) holds individual senior managers personally accountable for what happens in their firms. It replaced the old Approved Persons Regime in 2019 and fundamentally changed how accountability works in UK financial services.",
  whoItAppliesTo: "All FCA-authorised firms. Enhanced requirements apply to banks, building societies, and large investment firms.",
  chapters: [
    {
      id: "sysc-1",
      number: 1,
      title: "Why Personal Accountability Matters",
      slug: "why-personal-accountability-matters",
      readingTimeMinutes: 7,
      intro:
        "After the 2008 financial crisis, a common complaint was that no individual banker went to prison despite the catastrophic harm caused. The SMCR was designed to change this — to make it possible to hold specific individuals accountable when things go wrong.",
      subSections: [
        {
          id: "sysc-1-1",
          heading: "1.1 — The problem with the old regime",
          content: `Before SMCR, the UK used the **Approved Persons Regime (APR)**. Under the APR, individuals needed FCA approval to perform certain "controlled functions" — but the regime had significant weaknesses.

The biggest problem was what regulators called the "responsibility gap." When something went wrong at a firm, it was often impossible to pin responsibility on any specific individual. Executives would say "I didn't know about that" or "that was someone else's area." The APR did not require firms to clearly map out who was responsible for what.

The Parliamentary Commission on Banking Standards, which investigated the LIBOR scandal and other banking failures, concluded that the APR was "not fit for purpose." It recommended a new regime that would make it much harder for senior managers to escape accountability.

SMCR was the result. It came into force for banks in 2016 and was extended to all FCA-regulated firms in December 2019.`,
        },
        {
          id: "sysc-1-2",
          heading: "1.2 — The three tiers of SMCR",
          content: `SMCR divides regulated firms into three categories, with different requirements for each:

**Enhanced firms** — The largest and most complex firms, including major banks, building societies, and large investment firms. These firms face the most extensive SMCR requirements, including detailed Statements of Responsibilities for every Senior Manager.

**Core firms** — The majority of FCA-regulated firms. They must comply with the Senior Managers Regime and the Certification Regime, but with less prescriptive requirements than Enhanced firms.

**Limited scope firms** — Smaller firms with limited regulatory permissions. They face reduced SMCR requirements.

The three components of SMCR are:

1. **The Senior Managers Regime (SMR)** — applies to the most senior individuals who hold "Senior Manager Functions" (SMFs)
2. **The Certification Regime** — applies to employees who could cause significant harm to customers or markets
3. **The Conduct Rules** — minimum standards of behaviour that apply to almost all employees`,
        },
        {
          id: "sysc-1-3",
          heading: "1.3 — The Duty of Responsibility",
          content: `The most powerful element of SMCR is the **Duty of Responsibility**. Under this duty, if a firm breaches an FCA requirement, a Senior Manager who was responsible for that area can be held personally liable — unless they can show they took "reasonable steps" to prevent the breach.

This reverses the burden of proof in a subtle but important way. Previously, the FCA had to prove that a senior manager was personally responsible for a breach. Now, if a breach occurs in a Senior Manager's area of responsibility, they must demonstrate they did everything reasonable to prevent it.

"Reasonable steps" might include:
- Implementing proper policies and procedures
- Ensuring adequate training for staff
- Monitoring compliance and escalating concerns
- Acting promptly when problems were identified

A Senior Manager who simply says "I didn't know" will not satisfy the Duty of Responsibility if they should have known — if proper oversight would have revealed the problem.`,
        },
      ],
      keyTakeaways: [
        { text: "SMCR replaced the Approved Persons Regime in 2019 to close the 'responsibility gap' that allowed senior managers to avoid accountability." },
        { text: "SMCR has three components: the Senior Managers Regime, the Certification Regime, and the Conduct Rules." },
        { text: "The Duty of Responsibility means Senior Managers must prove they took reasonable steps to prevent breaches in their area." },
        { text: "Firms are divided into Enhanced, Core, and Limited Scope categories with different requirements." },
      ],
    },
    {
      id: "sysc-2",
      number: 2,
      title: "Senior Manager Functions and Responsibilities",
      slug: "senior-manager-functions",
      readingTimeMinutes: 9,
      intro:
        "A Senior Manager Function (SMF) is a specific role that requires FCA approval. Each SMF holder must have a clear Statement of Responsibilities — a document that sets out exactly what they are personally responsible for.",
      subSections: [
        {
          id: "sysc-2-1",
          heading: "2.1 — Key Senior Manager Functions",
          content: `The FCA designates specific roles as Senior Manager Functions. The most important include:

**SMF1 — Chief Executive Officer**: The CEO is responsible for the overall management of the firm. They are the most senior SMF holder and are ultimately accountable for the firm's compliance with FCA requirements.

**SMF2 — Chief Finance Officer**: Responsible for the financial management of the firm, including capital adequacy, liquidity, and financial reporting.

**SMF3 — Executive Director**: Any executive director who is not covered by another specific SMF.

**SMF4 — Chief Risk Officer**: Responsible for the firm's risk management framework and oversight of all material risks.

**SMF5 — Head of Internal Audit**: Responsible for the internal audit function and reporting to the board on the effectiveness of controls.

**SMF16 — Compliance Oversight**: Responsible for the compliance function and ensuring the firm meets its regulatory obligations. This is one of the most important SMFs for day-to-day regulatory compliance.

**SMF17 — Money Laundering Reporting Officer (MLRO)**: The individual responsible for the firm's AML/KYC compliance and for making Suspicious Activity Reports (SARs) to the National Crime Agency.`,
        },
        {
          id: "sysc-2-2",
          heading: "2.2 — Statements of Responsibilities and the Responsibilities Map",
          content: `Every Senior Manager must have a **Statement of Responsibilities (SoR)** — a document that clearly sets out what they are personally responsible for. The SoR must be:

- Specific and clear — vague statements like "responsible for compliance" are not sufficient
- Complete — it must cover all the firm's regulated activities
- Accurate — it must reflect what the Senior Manager actually does, not just their job title

For Enhanced firms, the firm must also produce a **Responsibilities Map** — a comprehensive document showing how all the firm's activities and responsibilities are allocated across its Senior Managers. The Responsibilities Map must cover every area of the firm's regulated activities, with no gaps.

The FCA uses Statements of Responsibilities and Responsibilities Maps when investigating incidents. If a problem occurs in an area that is clearly assigned to a specific Senior Manager, that person will be the FCA's first port of call.`,
        },
        {
          id: "sysc-2-3",
          heading: "2.3 — The Certification Regime",
          content: `Below the Senior Manager level, the **Certification Regime** applies to employees who could cause "significant harm" to customers, markets, or the firm. These are called **Certified Persons**.

Unlike Senior Managers, Certified Persons do not need FCA approval — but firms must certify them as fit and proper to perform their role. This certification must be renewed annually.

Roles that typically fall within the Certification Regime include:
- Investment advisers and portfolio managers
- Traders with significant market-facing responsibilities
- Mortgage advisers
- Customer-facing roles in retail banking
- Compliance staff with significant oversight responsibilities

Firms must maintain records of all Certified Persons and their certifications. If a Certified Person is found to be not fit and proper, the firm must withdraw their certification and cannot allow them to continue in their role.`,
        },
      ],
      keyTakeaways: [
        { text: "Senior Manager Functions (SMFs) are specific roles requiring FCA pre-approval. Key SMFs include CEO, CFO, CRO, Head of Compliance, and MLRO." },
        { text: "Every SMF holder must have a Statement of Responsibilities clearly setting out their personal accountability." },
        { text: "Enhanced firms must produce a Responsibilities Map covering all regulated activities with no gaps." },
        { text: "The Certification Regime covers employees below SMF level who could cause significant harm — firms must annually certify them as fit and proper." },
      ],
    },
    {
      id: "sysc-3",
      number: 3,
      title: "The Conduct Rules",
      slug: "the-conduct-rules",
      readingTimeMinutes: 6,
      intro:
        "The Conduct Rules are the minimum standards of behaviour that apply to almost everyone working in an FCA-regulated firm. They are the SMCR's equivalent of the Principles for Business — but for individuals rather than firms.",
      subSections: [
        {
          id: "sysc-3-1",
          heading: "3.1 — Individual Conduct Rules (Tier 1)",
          content: `The **Individual Conduct Rules** apply to all employees of regulated firms who are not ancillary staff (e.g. cleaners, caterers, IT contractors who do not perform regulated activities). There are five Individual Conduct Rules:

**Rule 1 — Act with integrity**: You must be honest and act in good faith in everything you do. This is the individual equivalent of Principle 1.

**Rule 2 — Act with due skill, care and diligence**: You must be competent and careful in your work. You must not take on responsibilities you are not qualified to handle.

**Rule 3 — Be open and cooperative with the FCA, PRA, and other regulators**: You must be transparent with regulators. You must not mislead them or withhold information they need.

**Rule 4 — Pay due regard to the interests of customers and treat them fairly**: You must put customers' interests first. This is the individual equivalent of Principle 6.

**Rule 5 — Observe proper standards of market conduct**: You must behave properly in financial markets. You must not engage in market abuse or manipulation.`,
        },
        {
          id: "sysc-3-2",
          heading: "3.2 — Senior Manager Conduct Rules (Tier 2)",
          content: `In addition to the Individual Conduct Rules, Senior Managers must also comply with four additional **Senior Manager Conduct Rules**:

**Rule 6 — Take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively**: Senior Managers must actively manage and oversee their areas of responsibility. Passive oversight is not enough.

**Rule 7 — Take reasonable steps to ensure that the business of the firm for which you are responsible complies with the relevant requirements and standards of the regulatory system**: Senior Managers must ensure their areas comply with all applicable FCA rules.

**Rule 8 — Take reasonable steps to ensure that any delegation of your responsibilities is to an appropriate person and that you oversee the discharge of the delegated responsibility effectively**: If you delegate a responsibility, you remain accountable for it. You must delegate to competent people and monitor them.

**Rule 9 — Disclose appropriately any information of which the FCA or PRA would reasonably expect notice**: Senior Managers have a personal obligation to report material information to regulators — not just the firm as a whole.`,
        },
      ],
      keyTakeaways: [
        { text: "The Individual Conduct Rules apply to almost all employees of FCA-regulated firms — not just senior managers." },
        { text: "The five Individual Conduct Rules cover integrity, skill, openness with regulators, customer fairness, and market conduct." },
        { text: "Senior Managers have four additional Conduct Rules covering effective control, compliance, delegation, and disclosure." },
        { text: "Breaching the Conduct Rules can result in personal fines and bans from working in financial services." },
      ],
    },
  ],
};

// ============================================================
// MODULE 3 — COBS: Conduct of Business
// ============================================================
const moduleCOBS: Module = {
  id: "cobs",
  number: 3,
  title: "COBS — Conduct of Business",
  slug: "cobs-conduct-of-business",
  block: "Business Standards",
  sourceCode: "COBS",
  colour: "bg-green-50",
  accentColour: "oklch(0.38 0.16 155)",
  description:
    "COBS is the rulebook for firms conducting investment business with clients. It covers everything from how you classify clients, to how you give advice, to what information you must provide before and after a transaction. If you work in investment management, stockbroking, or financial advice, COBS governs your daily work.",
  whoItAppliesTo: "Firms conducting designated investment business, accepting deposits, or carrying on long-term insurance business in relation to life policies.",
  chapters: [
    {
      id: "cobs-1",
      number: 1,
      title: "Client Classification — Who Is Your Client?",
      slug: "client-classification",
      readingTimeMinutes: 8,
      intro:
        "One of the most important decisions a firm makes is how to classify its clients. The level of protection a client receives — and the obligations a firm has — depends entirely on which category the client falls into. Getting this wrong can have serious consequences for both the firm and the client.",
      subSections: [
        {
          id: "cobs-1-1",
          heading: "1.1 — The three client categories",
          content: `COBS divides clients into three categories, each with different levels of regulatory protection:

**Retail Clients** — The highest level of protection. A retail client is essentially anyone who is not a professional client or eligible counterparty. Most individual investors, including high-net-worth individuals who have not been reclassified, are retail clients. Retail clients receive the full suite of COBS protections.

**Professional Clients** — A reduced level of protection. Professional clients are presumed to have the knowledge and experience to make their own investment decisions and understand the risks involved. There are two types:
- *Per se professional clients* — automatically classified as professional (e.g. investment firms, credit institutions, insurance companies, pension funds, large corporates)
- *Elective professional clients* — retail clients who have asked to be reclassified as professional and meet certain criteria

**Eligible Counterparties (ECPs)** — The lowest level of protection. ECPs are the most sophisticated market participants — typically other financial institutions. Firms dealing with ECPs have very limited COBS obligations.`,
        },
        {
          id: "cobs-1-2",
          heading: "1.2 — Elective professional client reclassification",
          content: `A retail client can request to be reclassified as an elective professional client. This gives them access to products and services not available to retail clients, but at the cost of reduced regulatory protection.

To be reclassified, a client must meet at least two of three quantitative criteria:
1. They have carried out transactions of a significant size (at least €10,000 per transaction) on the relevant market at an average frequency of 10 per quarter over the previous four quarters
2. Their financial instrument portfolio (including cash deposits) exceeds €500,000
3. They work or have worked in the financial sector for at least one year in a professional position requiring knowledge of the relevant transactions or services

Even if a client meets these criteria, the firm must:
- Warn the client in writing that they will lose certain protections
- Obtain the client's written consent to the reclassification
- Assess whether the client has the necessary expertise and experience

Reclassification is not a one-way door — a client can request to be reclassified back to retail at any time.`,
        },
        {
          id: "cobs-1-3",
          heading: "1.3 — Why classification matters in practice",
          content: `Client classification has real consequences for both firms and clients. Here are the key differences:

**Suitability assessments**: Firms must conduct a suitability assessment before giving investment advice or managing a portfolio for retail and professional clients. For ECPs, no suitability assessment is required.

**Appropriateness assessments**: For non-advised services (execution-only), firms must assess whether a product is appropriate for a retail client. No appropriateness assessment is needed for professional clients or ECPs.

**Product restrictions**: Certain high-risk products (e.g. speculative mini-bonds, certain CFDs) are restricted to professional clients or ECPs only. Retail clients cannot access them.

**Best execution**: The best execution obligation applies to all client categories, but the factors considered may differ.

**Information requirements**: Retail clients must receive more detailed pre-sale information (e.g. Key Information Documents for PRIIPs) than professional clients.

A firm that misclassifies a client — treating a retail client as a professional, for example — faces significant regulatory risk. The FCA has taken enforcement action against firms that used reclassification to avoid their retail client obligations.`,
        },
      ],
      keyTakeaways: [
        { text: "COBS divides clients into three categories: Retail (most protection), Professional, and Eligible Counterparty (least protection)." },
        { text: "Retail clients receive the full suite of COBS protections. Professional clients and ECPs have reduced protections." },
        { text: "A retail client can be reclassified as an elective professional if they meet two of three quantitative criteria and provide written consent." },
        { text: "Client classification affects suitability, appropriateness, product access, and information requirements." },
        { text: "Misclassifying clients — especially treating retail clients as professional — is a serious regulatory breach." },
      ],
    },
    {
      id: "cobs-2",
      number: 2,
      title: "Suitability — The Right Advice for the Right Person",
      slug: "suitability",
      readingTimeMinutes: 9,
      intro:
        "The suitability requirement is one of the most important obligations in COBS. It requires firms to ensure that any investment advice or discretionary management decision is suitable for the specific client — not just generically reasonable. Getting suitability wrong is one of the most common causes of FCA enforcement action.",
      subSections: [
        {
          id: "cobs-2-1",
          heading: "2.1 — When does the suitability requirement apply?",
          content: `The suitability requirement applies whenever a firm:

1. **Provides personal investment recommendations** — advice that is personalised to a specific client and recommends a specific course of action (e.g. "you should invest in this fund")
2. **Manages a portfolio on a discretionary basis** — where the firm has authority to make investment decisions on behalf of the client without seeking approval for each transaction

The suitability requirement does **not** apply to:
- Generic financial information (e.g. explaining how bonds work)
- Execution-only services (where the client makes their own decision and the firm just executes it)
- Non-personal recommendations (e.g. research reports not directed at a specific client)

Note: For execution-only services with retail clients, a separate **appropriateness** assessment is required for complex products.`,
        },
        {
          id: "cobs-2-2",
          heading: "2.2 — The three pillars of suitability",
          content: `To assess suitability, a firm must gather information about three things:

**Pillar 1 — Knowledge and Experience**: Does the client understand the type of product being recommended? Do they have experience with similar investments? A client who has never invested before should not be recommended a complex structured product without extensive explanation.

**Pillar 2 — Financial Situation**: Can the client afford the investment? What are their income, assets, liabilities, and financial commitments? Can they afford to lose the money invested? A client who needs their savings for a house purchase in six months should not be recommended a long-term illiquid investment.

**Pillar 3 — Investment Objectives**: What is the client trying to achieve? What is their risk tolerance? What is their investment time horizon? A client saving for retirement in 30 years has very different needs from one saving for a child's education in five years.

The firm must document all of this information and be able to demonstrate that the recommendation was suitable given what it knew about the client.`,
        },
        {
          id: "cobs-2-3",
          heading: "2.3 — The Suitability Report",
          content: `When a firm provides a personal recommendation to a retail client, it must provide a **Suitability Report** — a written document that explains:

1. Why the recommendation is suitable for the specific client
2. How the recommendation meets the client's investment objectives
3. How the recommendation is consistent with the client's risk tolerance
4. Any disadvantages of the recommendation

The Suitability Report must be provided before the client acts on the recommendation (or at the latest, immediately after, if the client requests immediate execution).

The FCA has been critical of Suitability Reports that are generic, formulaic, or that simply repeat information provided by the client without explaining why the recommendation is suitable. A good Suitability Report tells a story — it connects the client's specific circumstances to the specific recommendation.

**Common suitability failures** identified by the FCA include:
- Recommending products without adequately assessing the client's risk tolerance
- Recommending illiquid products to clients who need access to their money
- Recommending complex products to clients who do not understand them
- Failing to consider the client's existing portfolio when making new recommendations`,
        },
      ],
      keyTakeaways: [
        { text: "Suitability applies to personal investment recommendations and discretionary portfolio management — not to generic advice or execution-only services." },
        { text: "Suitability must be assessed across three pillars: knowledge/experience, financial situation, and investment objectives." },
        { text: "A Suitability Report must be provided to retail clients explaining why the recommendation is suitable for them specifically." },
        { text: "Common failures include not assessing risk tolerance properly, recommending illiquid products to clients who need liquidity, and generic reports." },
      ],
    },
    {
      id: "cobs-3",
      number: 3,
      title: "Financial Promotions — Communicating with Clients",
      slug: "financial-promotions",
      readingTimeMinutes: 8,
      intro:
        "Every communication a firm makes that is designed to promote a financial product or service is a 'financial promotion.' The rules governing financial promotions are strict — and the FCA has been increasingly active in enforcing them, particularly online and on social media.",
      subSections: [
        {
          id: "cobs-3-1",
          heading: "3.1 — What is a financial promotion?",
          content: `A **financial promotion** is any communication that invites or induces a person to engage in investment activity. This is an extremely broad definition that covers:

- Advertisements in newspapers, on television, or on billboards
- Website content and landing pages
- Social media posts (including posts by 'finfluencers')
- Email marketing campaigns
- Telephone scripts used by sales teams
- Brochures and product literature

The key test is whether the communication is designed to promote a financial product or service. A factual news article about a company is not a financial promotion. An advertisement for that company's investment product is.

**The approval requirement**: Under Section 21 of FSMA, a financial promotion can only be communicated by an authorised firm, or if it has been approved by an authorised firm. This is why you often see "This communication has been approved by [firm name]" at the bottom of financial advertisements.`,
        },
        {
          id: "cobs-3-2",
          heading: "3.2 — The clear, fair and not misleading standard",
          content: `All financial promotions must be **clear, fair and not misleading**. This is the fundamental standard that applies to every communication with a client.

**Clear** means the promotion is easy to understand. Technical jargon, small print, and complex structures that obscure the key information all fail this standard.

**Fair** means the promotion presents a balanced picture. It must not cherry-pick only the positive aspects of a product while burying the risks. If a product has a 5% chance of total loss, that must be prominently disclosed.

**Not misleading** means the promotion must not create a false impression — even if every individual statement is technically accurate. A promotion that says "our fund has returned 20% per year" without mentioning that this was a single exceptional year, and that the fund has lost money in four of the last five years, is misleading even if the 20% figure is accurate.

The FCA's **Financial Promotions Regime** has been significantly strengthened in recent years, particularly for high-risk investments and crypto assets. From October 2023, crypto promotions must be approved by an FCA-authorised firm and must include prominent risk warnings.`,
        },
        {
          id: "cobs-3-3",
          heading: "3.3 — Social media and finfluencers",
          content: `The rise of social media has created significant challenges for the financial promotions regime. The FCA has been increasingly active in pursuing individuals who promote financial products on social media without proper authorisation.

**Finfluencers** — social media influencers who promote financial products — are subject to the same rules as traditional financial promoters. If an influencer promotes an investment product to their followers, that is a financial promotion and must comply with the rules.

In 2024, the FCA took action against a number of finfluencers who had been promoting high-risk investments (including forex trading schemes and crypto products) without proper authorisation. Several were referred to the police for potential criminal prosecution.

Key points for social media:
- Promoting an unauthorised financial product is a criminal offence under Section 25 of FSMA
- The fact that a promotion is on social media does not exempt it from the rules
- Paid promotions (where an influencer receives payment to promote a product) are particularly scrutinised
- Risk warnings must be prominent — not buried in small print or at the end of a long video`,
        },
      ],
      keyTakeaways: [
        { text: "A financial promotion is any communication designed to promote a financial product — including social media posts and influencer content." },
        { text: "All promotions must be clear, fair, and not misleading — presenting a balanced picture including risks." },
        { text: "Financial promotions must be communicated by or approved by an FCA-authorised firm." },
        { text: "From October 2023, crypto promotions must be approved by an FCA-authorised firm and include prominent risk warnings." },
        { text: "Promoting unauthorised financial products is a criminal offence under Section 25 of FSMA." },
      ],
    },
  ],
};

// ============================================================
// MODULE 4 — AML/KYC: Anti-Money Laundering
// ============================================================
const moduleAML: Module = {
  id: "aml",
  number: 4,
  title: "AML / KYC — Anti-Money Laundering",
  slug: "aml-kyc-anti-money-laundering",
  block: "Financial Crime",
  sourceCode: "MLRs / POCA",
  colour: "bg-teal-50",
  accentColour: "oklch(0.38 0.14 195)",
  description:
    "Every year, criminals try to launder hundreds of billions of pounds through the UK financial system. AML and KYC rules are the defences that stop them. They explain why your bank asks for your passport, why large cash transactions get flagged, and what firms must do to stay on the right side of the law.",
  whoItAppliesTo: "Banks, investment firms, crypto businesses, estate agents, accountants, solicitors, and many other sectors.",
  chapters: [
    {
      id: "aml-1",
      number: 1,
      title: "What Is Money Laundering?",
      slug: "what-is-money-laundering",
      readingTimeMinutes: 7,
      intro:
        "Money laundering is the process of making illegally obtained money look legitimate. Understanding how it works — and why it matters — is the foundation of everything else in AML compliance.",
      subSections: [
        {
          id: "aml-1-1",
          heading: "1.1 — The three stages of money laundering",
          content: `Money laundering typically occurs in three stages:

**Stage 1 — Placement**: This is where criminal funds first enter the financial system. It is the riskiest stage for the criminal because the money is most obviously connected to its illegal source. Examples include depositing large amounts of cash from drug sales, using cash to buy assets, or smuggling cash across borders.

**Stage 2 — Layering**: Once in the system, the criminal tries to disguise the trail. This involves multiple transactions designed to put distance between the money and its source. Examples include transferring money between multiple accounts in different countries, converting cash into financial instruments, and using shell companies.

**Stage 3 — Integration**: The money re-enters the legitimate economy, appearing to be from a lawful source. Examples include investing in property, buying luxury goods, or investing in legitimate businesses.

The UK's **Proceeds of Crime Act 2002 (POCA)** makes it a criminal offence to:
- Conceal, disguise, convert, transfer, or remove criminal property
- Arrange or facilitate the acquisition, retention, use, or control of criminal property
- Acquire, use, or possess criminal property

Crucially, you can commit a money laundering offence without knowing the money is criminal — if you had "reasonable grounds to suspect" it was criminal, that may be sufficient.`,
        },
        {
          id: "aml-1-2",
          heading: "1.2 — The scale of the problem",
          content: `The UK's **2025 National Risk Assessment (NRA)**, published by HM Treasury and the Home Office on 17 July 2025, assessed the UK as remaining at **high risk** of money laundering.

Key findings from the 2025 NRA:
- The UK processes trillions of pounds in transactions every year, making it an attractive target
- Professional services (law firms, accountants, estate agents) remain a significant vulnerability
- Crypto assets are an increasing concern, with criminals using decentralised exchanges to layer funds
- AI-enabled fraud is growing rapidly, with criminals using deepfakes and synthetic identities to defeat KYC checks
- Kleptocracy — the laundering of funds stolen by corrupt foreign officials — remains a significant threat

The NRA also highlighted the growing overlap between money laundering, sanctions evasion, and fraud. These are no longer separate problems — they are increasingly interconnected.

**Recent enforcement actions** illustrate the scale of the problem:
- Metro Bank was fined £16.7 million in November 2024 for failing to properly monitor potential money laundering between 2016 and 2020
- Starling Bank was fined £29 million in October 2024 for failings in its financial crime systems and controls
- HSBC has paid billions in fines globally for AML failures over the past decade`,
        },
      ],
      keyTakeaways: [
        { text: "Money laundering occurs in three stages: Placement (entering the system), Layering (disguising the trail), and Integration (re-entering the economy)." },
        { text: "POCA 2002 makes it a criminal offence to deal with criminal property — even if you only had reasonable grounds to suspect it was criminal." },
        { text: "The 2025 NRA assessed the UK as high risk, with growing threats from crypto, AI-enabled fraud, and kleptocracy." },
        { text: "Recent fines include Metro Bank (£16.7m) and Starling Bank (£29m) for financial crime control failures." },
      ],
    },
    {
      id: "aml-2",
      number: 2,
      title: "Customer Due Diligence (CDD) and KYC",
      slug: "customer-due-diligence",
      readingTimeMinutes: 10,
      intro:
        "Customer Due Diligence (CDD) is the process of verifying who your customer is and understanding the nature of your business relationship with them. It is the foundation of AML compliance — and the reason your bank asks for your passport.",
      subSections: [
        {
          id: "aml-2-1",
          heading: "2.1 — When must CDD be applied?",
          content: `Under the **Money Laundering Regulations 2017 (MLRs)**, regulated firms must apply CDD when:

1. **Establishing a new business relationship** — before you start doing business with a new customer
2. **Carrying out an occasional transaction** above €15,000 (or two linked transactions totalling this amount)
3. **There is a suspicion of money laundering or terrorist financing** — regardless of the amount or the type of customer
4. **There is doubt about the accuracy of previously obtained identification information** — if you think a customer has given you false information, you must re-verify

The MLRs also require firms to apply CDD on an **ongoing basis** — not just at the start of a relationship. Firms must monitor transactions and update customer information as circumstances change.`,
        },
        {
          id: "aml-2-2",
          heading: "2.2 — The three tiers of due diligence",
          content: `The MLRs provide for three tiers of due diligence, depending on the risk level:

**Simplified Due Diligence (SDD)**: For lower-risk customers and products. Firms can apply reduced measures — for example, they may not need to verify the customer's identity in the same depth. SDD can only be applied where the firm has assessed the risk as genuinely low — it is not a shortcut.

**Standard CDD**: The default for most customers. Standard CDD requires:
- Identifying the customer (name, date of birth, address)
- Verifying their identity using reliable, independent source documents (passport, driving licence, or electronic verification)
- Understanding the purpose and nature of the business relationship
- For companies: identifying the beneficial owners (those who own or control more than 25%)

**Enhanced Due Diligence (EDD)**: Required for higher-risk situations. EDD means doing more — gathering more information, verifying it more rigorously, and monitoring the relationship more closely. EDD is mandatory for:
- Politically Exposed Persons (PEPs) and their associates
- Customers from high-risk third countries (as designated by HM Treasury)
- Complex or unusually large transactions
- Non-face-to-face business relationships`,
        },
        {
          id: "aml-2-3",
          heading: "2.3 — Beneficial Ownership",
          content: `One of the most important aspects of CDD is identifying **beneficial owners** — the real people who ultimately own or control a business.

Criminals often use complex corporate structures — chains of companies in multiple jurisdictions — to hide who actually owns an asset. The beneficial ownership rules are designed to cut through this complexity.

Under the MLRs, firms must identify any person who:
- Owns or controls more than **25%** of the shares or voting rights in a company
- Otherwise exercises control over the management of the company

For trusts, firms must identify the settlor, trustees, protectors, beneficiaries, and any other person who exercises effective control.

The **Companies House register** is a key tool for beneficial ownership verification. Under the Economic Crime and Corporate Transparency Act 2023, Companies House has significantly strengthened its powers. Identity verification became available voluntarily from April 2025 and mandatory for new directors and persons with significant control (PSCs) from 18 November 2025, with existing directors required to verify by November 2026.

However, beneficial ownership verification is not always straightforward. Criminals deliberately structure their affairs to avoid the 25% threshold. Firms must look beyond the formal structure and consider who actually exercises control — even if they do not formally own more than 25%.`,
        },
      ],
      keyTakeaways: [
        { text: "CDD must be applied when establishing a new business relationship, for transactions over €15,000, on suspicion of money laundering, or when existing information is doubted." },
        { text: "There are three tiers: Simplified (low risk), Standard (default), and Enhanced (high risk including PEPs and high-risk countries)." },
        { text: "Standard CDD requires identifying and verifying the customer and identifying beneficial owners (>25% ownership/control)." },
        { text: "Beneficial ownership verification must look beyond formal structures to identify who actually exercises control." },
      ],
    },
    {
      id: "aml-3",
      number: 3,
      title: "PEPs, Sanctions, and Suspicious Activity Reports",
      slug: "peps-sanctions-sars",
      readingTimeMinutes: 9,
      intro:
        "Three of the most operationally important areas of AML compliance are Politically Exposed Persons (PEPs), sanctions screening, and Suspicious Activity Reports (SARs). Together, they form the core of a firm's day-to-day financial crime controls.",
      subSections: [
        {
          id: "aml-3-1",
          heading: "3.1 — Politically Exposed Persons (PEPs)",
          content: `A **Politically Exposed Person (PEP)** is an individual who holds or has held a prominent public function. The concern is that such individuals may be in a position to abuse their public office for personal gain — and that their financial transactions may involve the proceeds of corruption.

PEPs include:
- Heads of state and government ministers
- Senior politicians and members of parliament
- Senior judicial officials
- Senior military officers
- Senior executives of state-owned enterprises
- Senior officials of international organisations

**Family members and close associates** of PEPs are also treated as PEPs for AML purposes.

Under the MLRs, firms must apply **Enhanced Due Diligence (EDD)** to all PEP relationships. This includes:
- Senior management approval before establishing the relationship
- Establishing the source of wealth and source of funds
- Enhanced ongoing monitoring of the relationship

An important distinction: the FCA's guidance distinguishes between **foreign PEPs** (higher risk) and **domestic PEPs** (UK politicians and officials). Domestic PEPs should be treated as lower risk than foreign PEPs unless there are specific risk factors. This was clarified in the 2023 MLR amendments following complaints that UK politicians were being treated the same as corrupt foreign officials.`,
        },
        {
          id: "aml-3-2",
          heading: "3.2 — Sanctions Screening",
          content: `**Financial sanctions** are restrictions imposed by governments or international bodies that prohibit or limit financial dealings with specific individuals, entities, or countries. Breaching sanctions is a criminal offence.

The UK's sanctions regime is administered by the **Office of Financial Sanctions Implementation (OFSI)**, part of HM Treasury. Since Brexit, the UK operates its own independent sanctions regime — it no longer automatically follows EU sanctions.

Key UK sanctions regimes include:
- **Russia sanctions** — significantly expanded since the 2022 invasion of Ukraine
- **Iran sanctions** — relating to nuclear proliferation
- **North Korea sanctions** — relating to weapons of mass destruction
- **Global human rights sanctions** — targeting individuals responsible for serious human rights violations

Firms must screen all customers and transactions against the **OFSI consolidated list** — a regularly updated list of all sanctioned individuals and entities. This screening must be:
- Conducted at the start of a relationship
- Repeated whenever the sanctions list is updated
- Applied to all transactions, not just new relationships

The consequences of breaching sanctions are severe. OFSI can impose civil monetary penalties of up to £1 million or 50% of the value of the breach (whichever is higher). Criminal prosecution can result in up to 7 years' imprisonment.`,
        },
        {
          id: "aml-3-3",
          heading: "3.3 — Suspicious Activity Reports (SARs)",
          content: `A **Suspicious Activity Report (SAR)** is a report made to the **National Crime Agency (NCA)** when a firm suspects that a customer or transaction is connected to money laundering or terrorist financing.

The obligation to report is set out in POCA 2002. It is a criminal offence to fail to report when you know or suspect (or have reasonable grounds to suspect) that a person is engaged in money laundering.

**The tipping-off offence**: Once a SAR has been submitted, firms must not "tip off" the customer — i.e. tell them that a report has been made or that they are under investigation. Doing so is a criminal offence. This creates a practical challenge: firms must continue to deal with the customer normally while the NCA considers the report.

**The consent SAR**: If a firm wants to proceed with a transaction that it suspects may involve criminal property, it can submit a "consent SAR" to the NCA and wait for consent before proceeding. The NCA has 7 days to refuse consent (or 31 days if it gives notice of investigation). If the NCA does not respond within the relevant period, the firm can proceed.

The UK receives around **900,000 SARs per year** — one of the highest rates in the world. The NCA uses SARs to identify money laundering networks, recover criminal assets, and support law enforcement investigations.`,
        },
      ],
      keyTakeaways: [
        { text: "PEPs are individuals who hold or have held prominent public functions. EDD is mandatory for all PEP relationships." },
        { text: "Domestic UK PEPs should be treated as lower risk than foreign PEPs unless specific risk factors are present." },
        { text: "Firms must screen all customers and transactions against the OFSI consolidated list. Breaching sanctions is a criminal offence." },
        { text: "SARs must be submitted to the NCA when a firm suspects money laundering. Failing to report is a criminal offence." },
        { text: "The tipping-off offence prohibits firms from telling customers that a SAR has been submitted." },
      ],
    },
  ],
};

// ============================================================
// MODULE 5 — MiFID II / UK MiFIR
// ============================================================
const moduleMiFID: Module = {
  id: "mifid",
  number: 5,
  title: "MiFID II / UK MiFIR — Markets in Financial Instruments",
  slug: "mifid-ii-uk-mifir",
  block: "UK Financial Markets",
  sourceCode: "UK MiFIR / MAR",
  colour: "bg-emerald-50",
  accentColour: "oklch(0.38 0.16 145)",
  description:
    "MiFID II and UK MiFIR are the rulebooks for financial markets — covering how shares, bonds, and derivatives are traded, how trades must be reported to regulators, and how investment firms must treat their clients. After Brexit, the UK has its own version and is actively reforming it.",
  whoItAppliesTo: "Investment firms, trading venues, data reporting service providers, and systematic internalisers.",
  chapters: [
    {
      id: "mifid-1",
      number: 1,
      title: "What Is MiFID II and Why Does It Exist?",
      slug: "what-is-mifid-ii",
      readingTimeMinutes: 7,
      intro:
        "MiFID II is one of the most comprehensive pieces of financial market regulation ever created. It came into force in January 2018 and fundamentally changed how financial markets operate across Europe — and, after Brexit, in the UK through its own version.",
      subSections: [
        {
          id: "mifid-1-1",
          heading: "1.1 — The origins of MiFID",
          content: `The original **Markets in Financial Instruments Directive (MiFID I)** came into force in 2007. Its primary goal was to create a single European market for financial services — allowing investment firms to operate across EU member states with a single "passport."

However, MiFID I had significant weaknesses. The 2008 financial crisis exposed gaps in market transparency, investor protection, and the oversight of complex financial instruments. The EU's response was **MiFID II** — a much more comprehensive framework that came into force on 3 January 2018.

MiFID II was accompanied by **MiFIR** (the Markets in Financial Instruments Regulation) — a directly applicable regulation (as opposed to a directive, which requires national implementation). Together, MiFID II and MiFIR created the most detailed financial markets rulebook ever written.

After Brexit, the UK retained MiFID II and MiFIR in UK law through the **European Union (Withdrawal) Act 2018**. The UK version is now called **UK MiFIR** and is being actively reformed through the **Wholesale Markets Review (WMR)**, which began in 2021 and is ongoing.`,
        },
        {
          id: "mifid-1-2",
          heading: "1.2 — The key objectives of MiFID II",
          content: `MiFID II has four main objectives:

**1. Market transparency**: Requiring trading venues and firms to publish information about trades — both before (pre-trade transparency) and after (post-trade transparency) they occur. This allows market participants to see where prices are and how much is being traded.

**2. Investor protection**: Strengthening the rules on how investment firms treat their clients — including suitability, best execution, and inducements (payments from product providers to advisers).

**3. Market structure**: Regulating the different types of trading venues — Regulated Markets (RMs), Multilateral Trading Facilities (MTFs), and Organised Trading Facilities (OTFs) — and ensuring they operate fairly and transparently.

**4. Supervisory convergence**: Ensuring that regulators across different jurisdictions apply the rules consistently and share information effectively.`,
        },
        {
          id: "mifid-1-3",
          heading: "1.3 — The UK's post-Brexit reforms",
          content: `Since Brexit, the UK has been reviewing and reforming its inherited MiFID II framework. The key reforms include:

**The Wholesale Markets Review (WMR)**: Launched in 2021, the WMR is a comprehensive review of the UK's wholesale markets framework. Key changes include:
- Removing the share trading obligation (which required UK firms to trade EU shares on EU venues)
- Reforming the transparency regime to make it more proportionate
- Streamlining transaction reporting requirements

**The Investment Research Review (IRR)**: The UK has reformed the rules on investment research, allowing bundling of research and execution costs in certain circumstances — a departure from the strict MiFID II unbundling requirement.

**UK MiFIR Review**: The FCA published CP24/2 in 2024 proposing significant changes to the UK's consolidated tape, transparency regime, and transaction reporting framework, and has been finalising these reforms in stages since.

The UK's approach reflects a broader post-Brexit strategy of maintaining high standards while adapting the rules to the specific needs of UK markets — rather than simply copying EU rules.`,
        },
      ],
      keyTakeaways: [
        { text: "MiFID II came into force in January 2018, replacing the original MiFID I and significantly strengthening market regulation." },
        { text: "The four objectives are: market transparency, investor protection, market structure regulation, and supervisory convergence." },
        { text: "After Brexit, the UK retained MiFID II/MiFIR in UK law and is actively reforming it through the Wholesale Markets Review." },
        { text: "Key UK reforms include removing the share trading obligation, reforming investment research rules, and streamlining transaction reporting." },
      ],
    },
    {
      id: "mifid-2",
      number: 2,
      title: "Transaction Reporting and Market Transparency",
      slug: "transaction-reporting",
      readingTimeMinutes: 8,
      intro:
        "Transaction reporting is one of the most operationally demanding aspects of MiFID II. Firms must report details of every transaction in financial instruments to their national regulator — in the UK, to the FCA. Getting this right requires sophisticated systems and processes.",
      subSections: [
        {
          id: "mifid-2-1",
          heading: "2.1 — What must be reported?",
          content: `Under UK MiFIR Article 26, investment firms must report transactions in financial instruments to the FCA. The reporting obligation applies to:

- **Shares** admitted to trading on a UK trading venue
- **Bonds** admitted to trading on a UK trading venue
- **Derivatives** (including OTC derivatives) where the underlying is admitted to trading on a UK trading venue
- **Exchange-traded funds (ETFs)**
- **Emission allowances**

Reports must be submitted by the end of the working day following the transaction (T+1). They must contain up to **65 data fields** covering:
- The identity of the buyer and seller (including LEI — Legal Entity Identifier)
- The financial instrument traded (ISIN)
- The quantity and price
- The trading venue
- The date and time of the transaction

The FCA uses transaction reports to detect market abuse, monitor systemic risk, and ensure market integrity. Failures in transaction reporting are taken very seriously — the FCA has issued significant fines for reporting failures.`,
        },
        {
          id: "mifid-2-2",
          heading: "2.2 — Best Execution",
          content: `**Best execution** requires investment firms to take all sufficient steps to obtain the best possible result for their clients when executing orders. This is not just about getting the best price — it includes:

- **Price** — the most obvious factor
- **Costs** — including commissions, fees, and other charges
- **Speed** — how quickly the order is executed
- **Likelihood of execution** — will the order actually be filled?
- **Size** — can the full order be executed at the desired price?
- **Market impact** — will a large order move the market?

Firms must have a **Best Execution Policy** that explains how they achieve best execution for different types of orders and clients. This policy must be reviewed at least annually and whenever there is a material change in circumstances.

For retail clients, price is generally the most important factor. For professional clients, other factors may be more relevant — for example, a large institutional investor may prioritise market impact over price.`,
        },
      ],
      keyTakeaways: [
        { text: "Investment firms must report all transactions in financial instruments to the FCA by T+1, with up to 65 data fields." },
        { text: "Best execution requires firms to obtain the best possible result for clients — considering price, costs, speed, and likelihood of execution." },
        { text: "Firms must have a Best Execution Policy reviewed at least annually." },
        { text: "For retail clients, price is generally the most important best execution factor." },
      ],
    },
  ],
};

// ============================================================
// MODULE 6 — Crypto Asset Regulation
// ============================================================
const moduleCrypto: Module = {
  id: "crypto",
  number: 6,
  title: "Crypto Asset Regulation",
  slug: "crypto-asset-regulation",
  block: "Emerging Frameworks",
  sourceCode: "Crypto Regime (FSMA 2023)",
  colour: "bg-violet-50",
  accentColour: "oklch(0.42 0.18 290)",
  description:
    "The UK is building a comprehensive regulatory framework for crypto assets. On 30 June 2026, the FCA published its final rules. The new regime comes into force on 25 October 2027. If you own, trade, or work with crypto assets, here is what you need to know.",
  whoItAppliesTo: "Crypto asset businesses, exchanges, custodians, issuers of stablecoins, and DeFi platforms serving UK customers.",
  chapters: [
    {
      id: "crypto-1",
      number: 1,
      title: "The UK Crypto Regulatory Journey",
      slug: "uk-crypto-regulatory-journey",
      readingTimeMinutes: 8,
      intro:
        "The UK's approach to crypto regulation has evolved significantly over the past five years — from a light-touch registration regime focused on AML, to a comprehensive framework covering trading, custody, stablecoins, and market abuse. Understanding this journey helps explain where we are today.",
      subSections: [
        {
          id: "crypto-1-1",
          heading: "1.1 — From registration to full regulation",
          content: `The UK's crypto regulatory journey has three distinct phases:

**Phase 1 — AML Registration (2020-2023)**: The UK first regulated crypto asset businesses under the Money Laundering Regulations 2017 (as amended). Firms had to register with the FCA and demonstrate compliance with AML/KYC requirements. This was a relatively light-touch regime focused on financial crime rather than investor protection.

**Phase 2 — Financial Promotions (2023-2024)**: From October 2023, the UK extended its financial promotions regime to crypto assets. Crypto promotions must now be approved by an FCA-authorised firm and include prominent risk warnings. This was a significant step — it brought crypto marketing under the same rules as traditional financial promotions.

**Phase 3 — Comprehensive Regulation (2024-2027)**: The Financial Services and Markets Act 2023 (FSMA 2023) gave HM Treasury powers to bring crypto assets within the full scope of financial regulation. HM Treasury designated crypto activities as regulated activities in 2024. The FCA published its final rules on 30 June 2026, with the new regime coming into force on 25 October 2027.`,
        },
        {
          id: "crypto-1-2",
          heading: "1.2 — What activities will be regulated?",
          content: `Under the new regime, the following activities will require FCA authorisation:

**Crypto asset trading**: Operating a crypto exchange or trading platform that allows customers to buy and sell crypto assets.

**Crypto asset custody**: Holding crypto assets on behalf of customers — including private keys and wallet services.

**Stablecoin issuance**: Issuing fiat-referenced stablecoins (e.g. a stablecoin pegged to GBP or USD). Stablecoin issuers will face requirements similar to those for e-money institutions.

**Crypto lending and staking**: Lending crypto assets to customers or facilitating staking services.

**Crypto asset advice**: Providing advice on whether to buy, sell, or hold specific crypto assets.

**DeFi**: The regulation of decentralised finance (DeFi) protocols is the most complex area. The FCA has indicated that DeFi platforms that have a sufficient degree of centralisation (e.g. a governance token that controls the protocol) may be caught by the new regime.`,
        },
        {
          id: "crypto-1-3",
          heading: "1.3 — The FCA's final rules (June 2026)",
          content: `On 30 June 2026, the FCA published its final rules for the crypto asset regime. Key requirements include:

**Consumer protection**: Crypto firms must apply the same consumer protection standards as traditional investment firms — including suitability assessments for advised services, clear and fair communications, and complaints handling.

**Market integrity**: Crypto exchanges must implement market abuse detection systems and report suspicious transactions. The UK's Market Abuse Regulation (MAR) will be extended to crypto assets.

**Prudential requirements**: Crypto firms must hold minimum capital requirements — the specific amounts depend on the type and scale of activities.

**Operational resilience**: Firms must demonstrate they can continue to operate during disruptions and recover from failures. This includes requirements for business continuity planning and cyber security.

**Stablecoin requirements**: Stablecoin issuers must hold 100% reserves in high-quality liquid assets, provide redemption rights to holders, and meet strict governance requirements.

The transition period runs from the publication of final rules (30 June 2026) to the go-live date (25 October 2027). Firms that are already registered under the AML regime will have a streamlined authorisation process.`,
        },
      ],
      keyTakeaways: [
        { text: "The UK's crypto regulation has evolved from AML registration (2020) to financial promotions (2023) to comprehensive regulation (2027)." },
        { text: "The new regime comes into force on 25 October 2027 and covers trading, custody, stablecoins, lending, and advice." },
        { text: "The FCA published its final rules on 30 June 2026." },
        { text: "Stablecoin issuers must hold 100% reserves in high-quality liquid assets and provide redemption rights." },
        { text: "DeFi regulation remains complex — protocols with sufficient centralisation may be caught by the new regime." },
      ],
    },
  ],
};

// ============================================================
// MODULE 7 — DISP / COMP: Complaints and Compensation
// ============================================================
const moduleDISP: Module = {
  id: "disp",
  number: 7,
  title: "DISP & COMP — Complaints and Compensation",
  slug: "disp-comp-complaints-compensation",
  block: "Redress",
  sourceCode: "DISP / COMP",
  colour: "bg-orange-50",
  accentColour: "oklch(0.55 0.18 55)",
  description:
    "When things go wrong, customers need to know how to complain and what compensation they can receive. DISP sets out how firms must handle complaints. COMP covers the Financial Services Compensation Scheme (FSCS) — the safety net that protects customers if a firm fails.",
  whoItAppliesTo: "All FCA-authorised firms that deal with retail customers.",
  chapters: [
    {
      id: "disp-1",
      number: 1,
      title: "How Firms Must Handle Complaints",
      slug: "how-firms-handle-complaints",
      readingTimeMinutes: 7,
      intro:
        "Every financial firm will receive complaints. How a firm handles those complaints — the speed, the fairness, and the outcome — is a key indicator of its culture and its commitment to Consumer Duty. DISP sets out the minimum standards.",
      subSections: [
        {
          id: "disp-1-1",
          heading: "1.1 — What counts as a complaint?",
          content: `Under DISP, a **complaint** is any oral or written expression of dissatisfaction, whether justified or not, from or on behalf of an eligible complainant, about the firm's provision of, or failure to provide, a financial service or product.

Key points:
- It does not matter whether the complaint is justified — if a customer expresses dissatisfaction, it is a complaint
- It can be made orally (e.g. by phone) or in writing (e.g. by email or letter)
- It must be from an **eligible complainant** — this includes retail clients, small businesses (with an annual turnover below £6.5 million), and charities (with an annual income below £6.5 million)

Large corporates and sophisticated investors are generally not eligible complainants for DISP purposes — they are expected to resolve disputes through commercial channels or litigation.`,
        },
        {
          id: "disp-1-2",
          heading: "1.2 — The complaints handling process",
          content: `DISP sets out a clear process for handling complaints:

**Step 1 — Acknowledgement**: The firm must acknowledge the complaint promptly (within 5 business days for most complaints, or immediately for complaints that can be resolved within 3 business days).

**Step 2 — Investigation**: The firm must investigate the complaint fairly and thoroughly. It must consider all relevant evidence and not simply defend its original position.

**Step 3 — Response**: The firm must send a **final response** within **8 weeks** of receiving the complaint. The final response must:
- Accept or reject the complaint (with reasons)
- If accepting, offer appropriate redress
- Inform the customer of their right to refer the complaint to the Financial Ombudsman Service (FOS)

**Step 4 — Referral to FOS**: If the customer is not satisfied with the firm's response, or if the firm has not responded within 8 weeks, the customer can refer the complaint to the FOS. The FOS can award up to **£455,000** in compensation (for complaints referred on or after 1 April 2026 about acts occurring on or after 1 April 2019). The limit is adjusted each April in line with inflation.`,
        },
        {
          id: "disp-1-3",
          heading: "1.3 — The Financial Ombudsman Service (FOS)",
          content: `The **Financial Ombudsman Service (FOS)** is an independent body that resolves disputes between financial firms and their customers. It was established by FSMA 2000 and is funded by levies on financial firms.

Key facts about the FOS:
- It is **free** for customers to use
- It can award up to **£455,000** in compensation (for complaints referred on or after 1 April 2026)
- Its decisions are **binding on firms** (but not on customers — a customer can reject an FOS decision and go to court instead)
- It considers what is **fair and reasonable** — not just what is strictly legal

The FOS receives **hundreds of thousands of new cases each year**, with volumes rising sharply in recent years driven by motor finance complaints. The most common complaint types are about:
- Payment protection insurance (PPI) — though this has now largely been resolved
- Current accounts and banking services
- Motor finance (a major area of current concern)
- Investments and pensions

**Motor finance redress**: Following its review of discretionary commission arrangements and the Supreme Court's 2025 ruling on undisclosed commissions, the FCA confirmed an industry-wide consumer redress scheme in March 2026 (PS26/3). The FCA estimates around £7.5 billion in redress across roughly 12 million eligible agreements — around £9.1 billion once firms' costs are included — making it one of the largest consumer redress exercises in UK history. Parts of the scheme are currently paused pending legal challenges.`,
        },
      ],
      keyTakeaways: [
        { text: "A complaint is any expression of dissatisfaction from an eligible complainant — it does not need to be justified." },
        { text: "Firms must send a final response within 8 weeks, accepting or rejecting the complaint with reasons." },
        { text: "Customers can refer unresolved complaints to the FOS, which can award up to £455,000 in compensation (2026/27 limit)." },
        { text: "FOS decisions are binding on firms but not on customers." },
        { text: "Motor finance redress is a major current issue — the FCA's 2026 scheme estimates around £7.5 billion in redress across the industry." },
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
          heading: "2.1 — What does the FSCS cover?",
          content: `The FSCS covers several types of financial products and services:

**Deposits (bank accounts)**: Up to **£120,000** per person per authorised institution (raised from £85,000 on 1 December 2025). If you have accounts at two banks that are separately authorised, you are protected up to £120,000 at each. Note: some banks share an authorisation (e.g. Halifax and Bank of Scotland are both part of Lloyds Banking Group) — in this case, the limit applies across both.

**Investments**: Up to **£85,000** per person per firm for investment business (e.g. stocks and shares ISAs, investment portfolios). The December 2025 increase applied to deposits only — the investment limit remains £85,000.

**Insurance**: Up to **90%** of the claim value for most types of insurance (100% for compulsory insurance like motor insurance).

**Mortgages**: Up to **£85,000** per person per firm for mortgage advice and arranging.

**Pensions**: Up to **£85,000** per person per firm for pension advice and arranging.

**Temporary high balances**: If you have a temporarily high balance (e.g. from a property sale or inheritance), you may be protected up to **£1.4 million** for up to 6 months (raised from £1 million on 1 December 2025).`,
        },
        {
          id: "disp-2-2",
          heading: "2.2 — What the FSCS does NOT cover",
          content: `The FSCS does not cover everything. Important exclusions include:

**Unauthorised firms**: If you invest with a firm that is not FCA-authorised, the FSCS will not protect you. This is why the FCA's **Warning List** and **ScamSmart** service are important — always check that a firm is authorised before investing.

**Investment losses**: The FSCS covers you if a firm fails (i.e. goes insolvent) — not if your investments simply lose value. If you invest in a fund that performs poorly, that is an investment risk, not an FSCS claim.

**Crypto assets**: Crypto assets are not currently covered by the FSCS. When the new crypto regime comes into force in 2027, some crypto activities may become eligible.

**Pension shortfalls**: The FSCS covers advice about pensions, but not shortfalls in defined benefit pension schemes — these are covered by the Pension Protection Fund (PPF).

**Fraud by the firm**: If a firm commits fraud against you (e.g. a Ponzi scheme), the FSCS may cover you — but only if the firm was authorised and the activity was a regulated activity.`,
        },
      ],
      keyTakeaways: [
        { text: "The FSCS protects deposits up to £120,000 per person per authorised institution (since 1 December 2025)." },
        { text: "Investments are protected up to £85,000 per person per firm. Insurance claims are covered up to 90% (100% for compulsory insurance)." },
        { text: "Temporary high balances (e.g. from property sales) may be protected up to £1.4 million for 6 months." },
        { text: "The FSCS does NOT cover unauthorised firms, investment losses, or crypto assets (currently)." },
        { text: "Always check a firm is FCA-authorised before investing — use the FCA Register." },
      ],
    },
  ],
};

// ============================================================
// MODULE 8 — MAR: Market Abuse
// ============================================================
const moduleMAR: Module = {
  id: "mar",
  number: 8,
  title: "MAR — Market Abuse and Insider Dealing",
  slug: "mar-market-abuse",
  block: "Business Standards",
  sourceCode: "MAR / UK MAR",
  colour: "bg-red-50",
  accentColour: "oklch(0.45 0.2 25)",
  description:
    "Market abuse undermines the integrity of financial markets and harms investors. The UK Market Abuse Regulation (UK MAR) prohibits insider dealing, market manipulation, and unlawful disclosure of inside information. Understanding these rules is essential for anyone working in or around financial markets.",
  whoItAppliesTo: "Anyone who trades in financial instruments admitted to trading on a UK trading venue — including individuals, firms, and issuers.",
  chapters: [
    {
      id: "mar-1",
      number: 1,
      title: "Insider Dealing and Inside Information",
      slug: "insider-dealing",
      readingTimeMinutes: 8,
      intro:
        "Insider dealing is one of the oldest and most serious financial crimes. It involves trading on information that is not publicly available — giving the trader an unfair advantage over other market participants. Understanding what constitutes 'inside information' is the starting point.",
      subSections: [
        {
          id: "mar-1-1",
          heading: "1.1 — What is inside information?",
          content: `**Inside information** is information that:

1. Is of a **precise nature** — it is specific enough to draw a conclusion about the likely effect on prices
2. Has **not been made public** — it is not generally available to the market
3. Relates **directly or indirectly** to one or more issuers or financial instruments
4. Would, if made public, be **likely to have a significant effect on prices** — a reasonable investor would use it in making investment decisions

The "reasonable investor" test is key. Information that a reasonable investor would consider important in making an investment decision is likely to be inside information.

**Examples of inside information**:
- Advance knowledge of a company's earnings announcement before it is published
- Knowledge that a company is about to be acquired (before the announcement)
- Knowledge of a regulatory investigation into a company
- Knowledge of a significant contract win or loss

**Examples that are NOT inside information**:
- Publicly available information (e.g. published accounts, press releases)
- General market rumours without a specific factual basis
- Analyst research based on publicly available information`,
        },
        {
          id: "mar-1-2",
          heading: "1.2 — The three forms of market abuse",
          content: `UK MAR prohibits three forms of market abuse:

**1. Insider dealing**: Using inside information to trade in financial instruments — either for yourself or on behalf of others. It is also insider dealing to recommend or induce someone else to trade on the basis of inside information (even if you do not tell them the information itself).

**2. Unlawful disclosure**: Disclosing inside information to another person outside the normal exercise of your employment, profession, or duties. If you tell a friend that your company is about to announce a major acquisition, that is unlawful disclosure — even if you do not trade yourself.

**3. Market manipulation**: Engaging in transactions or orders that give false or misleading signals about the supply, demand, or price of a financial instrument. This includes:
- **Wash trading** — buying and selling the same instrument to create artificial volume
- **Spoofing** — placing large orders with no intention of executing them, to move prices
- **Pump and dump** — artificially inflating a price through misleading information, then selling
- **Layering** — placing multiple orders at different prices to create a false impression of market depth`,
        },
        {
          id: "mar-1-3",
          heading: "1.3 — Insider lists and market soundings",
          content: `**Insider lists**: Issuers (companies with shares listed on a trading venue) must maintain a list of all persons who have access to inside information. This list must be provided to the FCA on request. Maintaining accurate insider lists is a key compliance obligation.

**Market soundings**: Before announcing a significant transaction (e.g. a capital raising), an issuer or its advisers may need to "sound out" potential investors — i.e. share inside information with them to gauge interest. UK MAR provides a safe harbour for legitimate market soundings, but strict procedures must be followed:
- The person conducting the sounding must assess whether it involves disclosing inside information
- The recipient must be informed that they may receive inside information and that they will be restricted from trading
- Records must be kept of all soundings

**Wall-crossing**: This is the informal term for the process of bringing a potential investor "over the wall" — i.e. sharing inside information with them. Once crossed, the investor is restricted from trading in the relevant instrument until the information is made public.`,
        },
      ],
      keyTakeaways: [
        { text: "Inside information is precise, non-public information that a reasonable investor would use in making investment decisions." },
        { text: "UK MAR prohibits three forms of market abuse: insider dealing, unlawful disclosure, and market manipulation." },
        { text: "Market manipulation includes wash trading, spoofing, pump and dump, and layering." },
        { text: "Issuers must maintain insider lists of all persons with access to inside information." },
        { text: "Market soundings (sharing inside information before a transaction) are permitted under strict conditions." },
      ],
    },
  ],
};

// ============================================================
// MODULE 9 — ESG / SDR: Sustainability and Green Finance
// ============================================================
const moduleESG: Module = {
  id: "esg",
  number: 9,
  title: "ESG & SDR — Sustainability and Green Finance",
  slug: "esg-sdr-sustainability",
  block: "Business Standards",
  sourceCode: "ESG / SDR",
  colour: "bg-lime-50",
  accentColour: "oklch(0.45 0.18 135)",
  description:
    "The UK's Sustainability Disclosure Requirements (SDR) and investment labels regime came into force in 2024. They aim to tackle greenwashing and help investors understand the sustainability credentials of financial products. This is one of the fastest-moving areas of UK financial regulation.",
  whoItAppliesTo: "Asset managers, investment firms, and financial advisers offering sustainability-related products to UK investors.",
  chapters: [
    {
      id: "esg-1",
      number: 1,
      title: "What Is Greenwashing and Why Does It Matter?",
      slug: "greenwashing",
      readingTimeMinutes: 7,
      intro:
        "Greenwashing is the practice of making misleading claims about the environmental or sustainability credentials of a financial product. It is one of the FCA's top enforcement priorities and a major concern for investors who want to align their money with their values.",
      subSections: [
        {
          id: "esg-1-1",
          heading: "1.1 — The scale of the problem",
          content: `The market for ESG (Environmental, Social and Governance) investments has grown enormously. Global ESG assets under management passed $30 trillion in 2022 and are forecast by Bloomberg Intelligence to exceed $40 trillion by 2030. But with this growth has come a significant problem: greenwashing.

Greenwashing takes many forms:
- **Vague claims**: Using terms like "green," "sustainable," or "responsible" without any substantive basis
- **Cherry-picking**: Highlighting positive ESG factors while ignoring negative ones
- **Misleading metrics**: Using ESG scores or ratings that do not accurately reflect a product's sustainability
- **Rebranding**: Renaming existing funds as "ESG" without changing the underlying investment approach

The FCA's research found that many investors were confused about what ESG products actually do — and that some products marketed as sustainable were investing in companies with poor environmental records.`,
        },
        {
          id: "esg-1-2",
          heading: "1.2 — The UK's SDR regime",
          content: `The UK's **Sustainability Disclosure Requirements (SDR)** regime came into force in stages from 2024. It has three main components:

**1. The Anti-Greenwashing Rule**: From May 2024, all FCA-authorised firms must ensure that any sustainability-related claims they make are fair, clear, and not misleading. This applies to all communications — not just those about SDR-labelled products.

**2. Investment Labels**: From July 2024, firms can use one of four labels for investment products that meet specific sustainability criteria:
- *Sustainability Focus* — invests in assets that are environmentally or socially sustainable
- *Sustainability Improvers* — invests in assets with the potential to improve sustainability over time
- *Sustainability Impact* — invests with the aim of achieving a positive sustainability impact
- *Sustainability Mixed Goals* — combines elements of the above

**3. Disclosure Requirements**: From December 2024, firms offering labelled products must publish detailed disclosures about their sustainability objectives, investment strategy, and metrics.

The SDR regime applies to UK-domiciled funds sold to UK retail investors. The FCA has indicated that it will extend the regime to overseas funds in due course.`,
        },
      ],
      keyTakeaways: [
        { text: "Greenwashing is making misleading claims about the sustainability of financial products — a top FCA enforcement priority." },
        { text: "The Anti-Greenwashing Rule (from May 2024) requires all sustainability claims to be fair, clear, and not misleading." },
        { text: "Four investment labels are available: Sustainability Focus, Sustainability Improvers, Sustainability Impact, and Sustainability Mixed Goals." },
        { text: "Detailed disclosures are required for labelled products from December 2024." },
      ],
    },
  ],
};

// ============================================================
// MODULE 10 — CASS: Client Assets
// ============================================================
const moduleCASS: Module = {
  id: "cass",
  number: 10,
  title: "CASS — Client Assets and Client Money",
  slug: "cass-client-assets",
  block: "Business Standards",
  sourceCode: "CASS",
  colour: "bg-cyan-50",
  accentColour: "oklch(0.42 0.14 210)",
  description:
    "When you invest through a broker or platform, your money and assets are held by that firm on your behalf. CASS sets out the rules for how firms must protect client assets — keeping them separate from the firm's own assets so that, if the firm fails, your assets can be returned to you.",
  whoItAppliesTo: "Investment firms, stockbrokers, and platforms that hold client money or assets.",
  chapters: [
    {
      id: "cass-1",
      number: 1,
      title: "Why Client Asset Protection Matters",
      slug: "why-client-asset-protection-matters",
      readingTimeMinutes: 7,
      intro:
        "The collapse of Lehman Brothers in 2008 and MF Global in 2011 demonstrated what can happen when client assets are not properly protected. Thousands of clients found their assets frozen or lost because they had been mixed with the firm's own assets. CASS was designed to prevent this.",
      subSections: [
        {
          id: "cass-1-1",
          heading: "1.1 — The segregation principle",
          content: `The fundamental principle of CASS is **segregation** — client assets must be kept separate from the firm's own assets. This means:

**Client money**: Money belonging to clients must be held in a **client money bank account** — a separate bank account that is clearly identified as holding client money and not the firm's own money. The account must be with an approved bank and must be designated as a client account.

**Client assets (custody assets)**: Financial instruments (shares, bonds, etc.) held on behalf of clients must be held in a **client custody account** — separate from the firm's own proprietary holdings. The firm must be able to identify which assets belong to which client at all times.

The purpose of segregation is to ensure that, if the firm becomes insolvent, client assets can be identified and returned to clients — they do not form part of the firm's estate available to general creditors.`,
        },
        {
          id: "cass-1-2",
          heading: "1.2 — The trust mechanism",
          content: `CASS uses a **statutory trust** mechanism to protect client money. When a firm receives client money, it holds it on trust for the client. This means:

- The money legally belongs to the client, not the firm
- If the firm becomes insolvent, the client money is not available to the firm's creditors
- Clients are entitled to have their money returned from the client money pool

The trust mechanism was tested in the Lehman Brothers insolvency. The UK Supreme Court confirmed in 2012 that client money held in properly segregated accounts was protected and could be returned to clients.

However, the Lehman case also revealed weaknesses — some client money had not been properly segregated, leading to significant losses for some clients. CASS has been significantly strengthened since then.`,
        },
      ],
      keyTakeaways: [
        { text: "CASS requires firms to segregate client money and assets from the firm's own assets." },
        { text: "Client money is held on statutory trust — it legally belongs to the client, not the firm." },
        { text: "Proper segregation means client assets can be returned if the firm becomes insolvent." },
        { text: "CASS was significantly strengthened after the Lehman Brothers and MF Global insolvencies." },
      ],
    },
  ],
};

// ============================================================
// MODULE 11 — ICOBS: Insurance Conduct of Business
// ============================================================
const moduleICOBS: Module = {
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
    },
  ],
};

// ============================================================
// MODULE 12 — MCOB: Mortgage Conduct of Business
// ============================================================
const moduleMCOB: Module = {
  id: "mcob",
  number: 12,
  title: "MCOB — Mortgage Conduct of Business",
  slug: "mcob-mortgage-conduct",
  block: "Business Standards",
  sourceCode: "MCOB",
  colour: "bg-cyan-50",
  accentColour: "oklch(0.50 0.16 200)",
  description:
    "MCOB regulates the sale and administration of mortgages and home finance products in the UK. It covers everything from initial advertising through to arrears handling, and is particularly important given the significance of mortgage debt in most people's lives.",
  whoItAppliesTo: "Mortgage lenders, mortgage brokers, and firms providing home finance products.",
  chapters: [
    {
      id: "mcob-1",
      number: 1,
      title: "The Mortgage Market Review and Responsible Lending",
      slug: "mortgage-market-review",
      readingTimeMinutes: 8,
      intro:
        "The UK mortgage market was significantly reformed following the Mortgage Market Review (MMR) in 2014. The MMR was a direct response to the irresponsible lending that contributed to the 2008 financial crisis.",
      subSections: [
        {
          id: "mcob-1-1",
          heading: "1.1 — What the MMR changed",
          content: `Before the MMR, many mortgages were sold on a **self-certified** basis — borrowers simply stated their income without providing evidence. The MMR introduced three key changes:\n\n1. **Affordability assessment:** Lenders must assess whether the borrower can afford the mortgage at the initial rate and if interest rates rise (stress testing).\n2. **Income verification:** Self-certification mortgages were banned. All income must be verified.\n3. **Advised sales:** Most mortgage sales must now be advised — the broker must make a personal recommendation and explain why the product is suitable.`,
        },
        {
          id: "mcob-1-2",
          heading: "1.2 — The ESIS and the 7-day reflection period",
          content: `The **European Standardised Information Sheet (ESIS)** is a mandatory document provided before a customer commits to a mortgage. It includes the Annual Percentage Rate of Charge (APRC), the total amount payable over the life of the mortgage, and a **7-day reflection period** — the customer cannot be pressured to commit immediately.\n\nThe ESIS replaced the previous Key Facts Illustration (KFI) for most mortgages. Although the UK has left the EU, these rules remain in UK law under the retained Mortgage Credit Directive.`,
        },
      ],
      keyTakeaways: [
        { text: "The Mortgage Market Review (2014) banned self-certified mortgages and introduced mandatory affordability assessments." },
        { text: "Lenders must stress-test affordability against potential interest rate rises, not just the initial rate." },
        { text: "Most mortgage sales must be advised — the broker must make a personal recommendation." },
        { text: "The ESIS provides standardised pre-contractual information and includes a 7-day reflection period." },
      ],
    },
    {
      id: "mcob-2",
      number: 2,
      title: "Mortgage Arrears and Forbearance",
      slug: "mortgage-arrears-forbearance",
      readingTimeMinutes: 7,
      intro:
        "When borrowers fall behind on mortgage payments, MCOB requires lenders to treat them fairly and explore all reasonable options before taking possession of the property.",
      subSections: [
        {
          id: "mcob-2-1",
          heading: "2.1 — The arrears handling rules",
          content: `MCOB 13 requires that **repossession must be a last resort**. When a borrower falls into arrears, the lender must contact them promptly, explore all reasonable options, consider any proposals the borrower makes, not charge excessive fees, and refer the borrower to free debt advice services.\n\n**Forbearance options** include: extending the mortgage term, switching to interest-only temporarily, payment holidays, capitalising the arrears, and accepting reduced payments for a period.\n\nThe courts also apply the **Pre-Action Protocol for Possession Claims** which requires evidence that the lender has genuinely explored alternatives before a possession order will be granted.`,
        },
      ],
      keyTakeaways: [
        { text: "Repossession must always be a last resort under MCOB 13." },
        { text: "Lenders must actively explore forbearance options before pursuing possession." },
        { text: "Free debt advice referrals are mandatory when a borrower is in financial difficulty." },
      ],
    },
  ],
};

// ============================================================
// MODULE 13 — CONC: Consumer Credit
// ============================================================
const moduleCONC: Module = {
  id: "conc",
  number: 13,
  title: "CONC — Consumer Credit",
  slug: "conc-consumer-credit",
  block: "Business Standards",
  sourceCode: "CONC",
  colour: "bg-purple-50",
  accentColour: "oklch(0.52 0.19 280)",
  description:
    "CONC covers the regulation of consumer credit products including personal loans, credit cards, overdrafts, buy-now-pay-later, and payday loans. It is one of the most important areas of retail financial regulation given the scale of consumer debt in the UK.",
  whoItAppliesTo: "Banks, credit card providers, payday lenders, BNPL firms, debt collectors, and credit brokers.",
  chapters: [
    {
      id: "conc-1",
      number: 1,
      title: "Consumer Credit Regulation and Responsible Lending",
      slug: "consumer-credit-basics",
      readingTimeMinutes: 9,
      intro:
        "Consumer credit regulation in the UK is built on the Consumer Credit Act 1974 and the FCA's CONC sourcebook. The FCA took over regulation of consumer credit from the Office of Fair Trading in 2014 and has been significantly more interventionist.",
      subSections: [
        {
          id: "conc-1-1",
          heading: "1.1 — The regulatory framework",
          content: `The **Consumer Credit Act 1974 (CCA)** created the basic framework — licensing requirements, the right to cancel, the right to early repayment, and the concept of the **Annual Percentage Rate (APR)** as a standardised measure of credit cost.\n\nThe FCA's **Consumer Credit sourcebook (CONC)** applies to all firms that lend money to consumers, arrange credit, or collect debts. This includes personal loans, credit cards, overdrafts, hire purchase, payday loans, and buy-now-pay-later (BNPL) products.`,
        },
        {
          id: "conc-1-2",
          heading: "1.2 — Responsible lending and the payday loan cap",
          content: `The centrepiece of CONC is the **responsible lending** obligation. Before granting credit, lenders must carry out a **creditworthiness assessment** considering the borrower's income, expenditure, existing credit commitments, and credit history.\n\n**The payday lending price cap (2015):** The FCA introduced a cap on high-cost short-term credit limiting interest and fees to 0.8% per day, default fees to £15, and total cost to 100% of the original loan. This halved the cost of payday loans and drove many irresponsible lenders out of the market.`,
        },
      ],
      keyTakeaways: [
        { text: "The Consumer Credit Act 1974 created the basic framework; the FCA's CONC sourcebook provides detailed rules." },
        { text: "Lenders must carry out a creditworthiness assessment before granting credit." },
        { text: "The FCA introduced a price cap on payday loans in 2015: max 0.8% per day, total cost capped at 100% of the loan." },
      ],
    },
    {
      id: "conc-2",
      number: 2,
      title: "Buy-Now-Pay-Later and Emerging Credit Products",
      slug: "buy-now-pay-later",
      readingTimeMinutes: 7,
      intro:
        "BNPL products exploded in popularity during the 2020s. Their regulation has been a major policy debate, with the FCA and HM Treasury working to bring them within the consumer credit framework.",
      subSections: [
        {
          id: "conc-2-1",
          heading: "2.1 — The BNPL regulatory gap and its closure",
          content: `**Buy-now-pay-later (BNPL)** products like Klarna, Clearpay, and Laybuy were structured to fall outside the Consumer Credit Act 1974 through an exemption for interest-free credit repayable within 12 months. This meant BNPL providers were not regulated by the FCA and did not have to carry out affordability checks.\n\nThe **Woolard Review (2021)** identified BNPL as a significant consumer harm risk. The **Financial Services and Markets Act 2023** included powers to regulate BNPL. As of 2026, the FCA is finalising its BNPL rules, which will require FCA authorisation, affordability assessments, clear cost information, and access to the Financial Ombudsman Service.`,
        },
      ],
      keyTakeaways: [
        { text: "Most BNPL products were previously unregulated due to a CCA exemption — this is being closed." },
        { text: "The Woolard Review (2021) recommended bringing BNPL within the regulatory perimeter." },
        { text: "The Financial Services and Markets Act 2023 gives the FCA powers to regulate BNPL." },
        { text: "New BNPL rules will require FCA authorisation and affordability assessments." },
      ],
    },
  ],
};

// ============================================================
// MODULE 14 — DTR: Disclosure and Transparency Rules
// ============================================================
const moduleDTR: Module = {
  id: "dtr",
  number: 14,
  title: "DTR — Disclosure and Transparency Rules",
  slug: "dtr-disclosure-transparency",
  block: "Listing Rules",
  sourceCode: "DTR",
  colour: "bg-green-50",
  accentColour: "oklch(0.48 0.17 150)",
  description:
    "The DTR govern what listed companies must disclose to the market and when. They are fundamental to maintaining fair, orderly, and transparent capital markets. Anyone working in corporate finance, investor relations, or compliance at a listed company needs to understand them.",
  whoItAppliesTo: "Companies listed on UK regulated markets, including the London Stock Exchange Main Market.",
  chapters: [
    {
      id: "dtr-1",
      number: 1,
      title: "Inside Information and Timely Disclosure",
      slug: "inside-information-disclosure",
      readingTimeMinutes: 9,
      intro:
        "The most important DTR obligation is the duty to disclose inside information to the market as soon as possible. Getting this wrong can result in market abuse liability as well as DTR breaches.",
      subSections: [
        {
          id: "dtr-1-1",
          heading: "1.1 — What is inside information?",
          content: `**Inside information** is information that is: (1) precise, (2) non-public, (3) relating to an issuer or financial instrument, and (4) price sensitive — if made public, it would likely have a significant effect on the price.\n\nExamples include: a profit warning before announcement, a major acquisition, a regulatory investigation, a significant contract win or loss, or a change in key management.\n\n**The disclosure obligation:** Under DTR 2, issuers must disclose inside information to the market **as soon as possible** via a Regulatory Information Service (RIS) — typically the London Stock Exchange's Regulatory News Service (RNS).`,
        },
        {
          id: "dtr-1-2",
          heading: "1.2 — Delaying disclosure and insider lists",
          content: `There is a limited right to **delay disclosure** if: immediate disclosure would prejudice the issuer's legitimate interests (e.g. ongoing negotiations), the delay would not mislead the public, and the issuer can ensure confidentiality.\n\n**Insider lists:** Whenever a company delays disclosure, it must maintain an **insider list** — a record of everyone who has access to the inside information. This must be provided to the FCA on request. Insider lists must include the identity of each person with access, the reason they have access, and the date they were given access.`,
        },
      ],
      keyTakeaways: [
        { text: "Inside information must be disclosed to the market as soon as possible via a Regulatory Information Service." },
        { text: "Disclosure can be delayed only if it would prejudice legitimate interests and confidentiality can be maintained." },
        { text: "Insider lists must be maintained whenever disclosure is delayed and provided to the FCA on request." },
      ],
    },
    {
      id: "dtr-2",
      number: 2,
      title: "Major Shareholding Notifications",
      slug: "major-shareholding-notifications",
      readingTimeMinutes: 6,
      intro:
        "When investors acquire or dispose of significant stakes in listed companies, they must notify both the company and the FCA. This transparency is essential for market integrity.",
      subSections: [
        {
          id: "dtr-2-1",
          heading: "2.1 — The notification thresholds",
          content: `DTR 5 requires investors to notify a listed company (and the FCA) when their voting rights cross certain **thresholds**: 3% (the initial threshold), then every 1% above 3%, and when falling back through these thresholds.\n\nNotification must be made **within two trading days** of the threshold being crossed. The notification must include the identity of the shareholder, the date the threshold was crossed, and the total number of voting rights held.\n\nMajor shareholding notifications give the market visibility of who owns significant stakes — important for detecting potential takeover activity, understanding the shareholder base, and identifying activist investors.`,
        },
      ],
      keyTakeaways: [
        { text: "Investors must notify when their voting rights cross 3% and every 1% above that." },
        { text: "Notification must be made within two trading days of the threshold being crossed." },
        { text: "The notification must identify the shareholder and the total voting rights held." },
      ],
    },
  ],
};

// ============================================================
// MODULE 15 — FEES & FSCS: Fees and Compensation
// ============================================================
const moduleFEES: Module = {
  id: "fees",
  number: 15,
  title: "FEES & FSCS — Fees, Levies, and Compensation",
  slug: "fees-fscs-compensation",
  block: "Regulatory Infrastructure",
  sourceCode: "FEES",
  colour: "bg-yellow-50",
  accentColour: "oklch(0.50 0.14 60)",
  description:
    "Every FCA-authorised firm pays fees to fund the FCA, the Financial Ombudsman Service (FOS), and the Financial Services Compensation Scheme (FSCS). Understanding how these work — and what the FSCS covers — is essential for both firms and consumers.",
  whoItAppliesTo: "All FCA-authorised firms. FSCS protection applies to eligible claimants dealing with authorised firms.",
  chapters: [
    {
      id: "fees-1",
      number: 1,
      title: "How FCA Fees Work",
      slug: "how-fca-fees-work",
      readingTimeMinutes: 6,
      intro:
        "The FCA is funded entirely by the firms it regulates. Understanding the fee structure helps firms budget for regulatory costs and understand what they are paying for.",
      subSections: [
        {
          id: "fees-1-1",
          heading: "1.1 — The fee structure",
          content: `The FCA charges fees to fund three separate bodies: (1) the FCA itself, (2) the Financial Ombudsman Service (FOS), and (3) the Financial Services Compensation Scheme (FSCS).\n\nFCA fees are calculated based on a firm's **fee-block** (the category of regulated activity) and its **tariff data** (a measure of size, such as income, assets under management, or number of mortgages).\n\nFirms pay an **application fee** when seeking authorisation and then **annual fees** thereafter. Even the smallest authorised firms pay a minimum annual fee (currently around £1,000–£2,000), ensuring all firms contribute to the cost of regulation.`,
        },
      ],
      keyTakeaways: [
        { text: "The FCA is funded entirely by the firms it regulates through annual fees." },
        { text: "Fees fund three bodies: the FCA, the Financial Ombudsman Service, and the FSCS." },
        { text: "Fees are calculated based on the firm's fee-block and tariff data (size measure)." },
      ],
    },
    {
      id: "fees-2",
      number: 2,
      title: "The Financial Services Compensation Scheme (FSCS)",
      slug: "fscs-protection",
      readingTimeMinutes: 8,
      intro:
        "The FSCS is the UK's statutory compensation scheme for customers of failed financial firms. Understanding what it covers — and what it does not — is essential knowledge for anyone in financial services.",
      subSections: [
        {
          id: "fees-2-1",
          heading: "2.1 — What the FSCS covers",
          content: `The FSCS provides compensation to eligible claimants when an FCA-authorised firm is unable to pay claims against it — typically because it has gone insolvent.\n\n| Category | Compensation Limit |\n|---|---|\n| Deposits (bank accounts) | £120,000 per person per institution (since 1 December 2025) |\n| Investments | £85,000 per person per firm |\n| Home finance (mortgages) | £85,000 per person per firm |\n| Insurance policies | 90% of the claim (no upper limit for compulsory insurance) |\n| Long-term insurance (life) | 100% of the claim |\n\n**Important:** The FSCS only covers customers of **FCA-authorised firms**. Always check a firm is authorised on the FCA Register before giving it your money.`,
        },
        {
          id: "fees-2-2",
          heading: "2.2 — What the FSCS does not cover",
          content: `The FSCS does **not** cover:\n\n- **Investment losses** — if an investment falls in value, the FSCS cannot compensate you. It only pays out when a firm has failed.\n- **Unauthorised firms** — if you deal with a firm that is not FCA-authorised, you have no FSCS protection.\n- **Overseas firms** — firms based outside the UK and not authorised by the FCA are not covered.\n\n**Temporary high balances:** If you have more than £120,000 in a bank account due to a specific life event (house sale, inheritance, redundancy), the FSCS provides temporary protection of up to £1.4 million for six months.`,
        },
      ],
      keyTakeaways: [
        { text: "The FSCS compensates customers of failed FCA-authorised firms — not investment losses." },
        { text: "Deposit protection is £120,000 per person per institution (since 1 December 2025)." },
        { text: "Investment protection is £85,000 per person per firm." },
        { text: "The FSCS does not cover unauthorised firms — always check the FCA Register." },
      ],
    },
  ],
};

// ============================================================
// ALL MODULES
// ============================================================
export const ALL_MODULES: Module[] = [
  modulePRIN,
  moduleSYSC,
  moduleCOBS,
  moduleAML,
  moduleMiFID,
  moduleCrypto,
  moduleDISP,
  moduleMAR,
  moduleESG,
  moduleCASS,
  moduleICOBS,
  moduleMCOB,
  moduleCONC,
  moduleDTR,
  moduleFEES,
];

export function getModuleBySlug(slug: string): Module | undefined {
  return ALL_MODULES.find((m) => m.slug === slug);
}

export function getChapterBySlug(moduleSlug: string, chapterSlug: string): { module: Module; chapter: Chapter; prevChapter: Chapter | null; nextChapter: Chapter | null } | undefined {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return undefined;
  const idx = mod.chapters.findIndex((c) => c.slug === chapterSlug);
  if (idx === -1) return undefined;
  return {
    module: mod,
    chapter: mod.chapters[idx],
    prevChapter: idx > 0 ? mod.chapters[idx - 1] : null,
    nextChapter: idx < mod.chapters.length - 1 ? mod.chapters[idx + 1] : null,
  };
}
