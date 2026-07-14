import type { Module } from "./types";

// ============================================================
// MODULE 17 — UK GDPR & DPA 2018: Data Protection
// ============================================================
export const moduleUKGDPR: Module = {
  id: "ukgdpr",
  number: 17,
  title: "UK GDPR & DPA 2018 — Data Protection Essentials",
  slug: "uk-gdpr-data-protection",
  block: "Data Protection",
  sourceCode: "UK GDPR",
  sourceUrl: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
  sourceLabel: "ICO — UK GDPR guidance and resources",
  lastReviewed: "July 2026",
  colour: "bg-rose-50",
  accentColour: "oklch(0.48 0.16 350)",
  description:
    "Every financial firm processes personal data: customer records, KYC files, transaction histories, call recordings. UK GDPR and the Data Protection Act 2018 set the rules for handling it lawfully. Compliance and AML analysts touch data protection daily, often without realising it, which is exactly why employers expect you to know the basics.",
  whoItAppliesTo: "Every organisation processing personal data in the UK, and overseas organisations offering goods or services to people in the UK.",
  chapters: [
    {
      id: "ukgdpr-1",
      number: 1,
      title: "The Framework and Key Concepts",
      slug: "framework-key-concepts",
      readingTimeMinutes: 9,
      intro:
        "Data protection law has a reputation for jargon: controllers, processors, lawful bases, special category data. The concepts are actually simple once you see the logic. This chapter builds the vocabulary you need for everything else, and for the interview question 'what do you know about UK GDPR?'",
      subSections: [
        {
          id: "ukgdpr-1-1",
          heading: "1.1 — The legal framework and the ICO",
          content: `Three pieces of law matter:

**UK GDPR**: when the UK left the EU, it kept the EU's General Data Protection Regulation in domestic law and renamed it the UK GDPR. The substance is very close to the EU version, which is why people often just say "GDPR".

**Data Protection Act 2018 (DPA 2018)**: sits alongside UK GDPR, filling in UK-specific detail, exemptions (including for crime prevention), and separate regimes for law enforcement and intelligence processing.

**Data (Use and Access) Act 2025 (DUAA)**: the first major post-Brexit reform, given Royal Assent on 19 June 2025. It amends UK GDPR, the DPA 2018 and the e-privacy rules (PECR) rather than replacing them. Notable changes include a list of "recognised legitimate interests", clarified rules on responding to subject access requests, and raising the maximum fine for direct marketing breaches under PECR to the same level as UK GDPR fines.

The regulator is the **Information Commissioner's Office (ICO)**. It publishes guidance, handles complaints from individuals, investigates breaches and can issue enforcement notices and fines. Think of the ICO as the FCA of personal data.

**Who is who**: a **data subject** is the living individual the data is about. A **controller** decides why and how personal data is processed (a bank deciding to run KYC checks). A **processor** processes data on the controller's instructions (the screening vendor the bank uses). Controllers carry the primary compliance burden, but processors have direct obligations too.`,
        },
        {
          id: "ukgdpr-1-2",
          heading: "1.2 — Personal data and special category data",
          content: `**Personal data** is any information relating to an identified or identifiable living individual. Names and addresses obviously qualify, but so do customer IDs, IP addresses, location data, voice recordings and transaction histories, anything that can be linked back to a person, directly or indirectly.

**Special category data** gets extra protection because misuse can cause serious harm: data revealing racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data used for identification, health data, and data about sex life or sexual orientation. Processing it requires both a lawful basis and a separate special condition.

**Criminal offence data**, such as records of convictions and allegations, has its own protective regime under the DPA 2018. This matters enormously in financial services: adverse media screening, fraud markers and sanctions-related intelligence often involve criminal offence data, and firms need a specific condition (the DPA 2018 provides them for crime prevention purposes) to process it lawfully.

**Anonymous data is outside the law entirely**, but truly anonymising data is harder than it sounds. Pseudonymised data (for example, records keyed to a customer number) is still personal data, because the link back to the person exists.`,
        },
        {
          id: "ukgdpr-1-3",
          heading: "1.3 — The principles and the six lawful bases",
          content: `UK GDPR rests on seven principles: **lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality (security); and accountability**. The accountability principle means you must not only comply but be able to demonstrate compliance, through records, policies and training.

Every act of processing needs one of six **lawful bases**:

1. **Consent**: freely given, specific, informed, unambiguous, and as easy to withdraw as to give. Consent is actually the wrong basis for most financial services processing, because firms usually need the data regardless.
2. **Contract**: processing necessary to perform a contract with the individual, such as running their account.
3. **Legal obligation**: processing required by law. AML customer due diligence and transaction monitoring sit here, firms are legally required by the Money Laundering Regulations to collect and check this data.
4. **Vital interests**: life-or-death situations, rare in finance.
5. **Public task**: for public authorities.
6. **Legitimate interests**: the most flexible basis, requiring a three-part test: identify the interest, show the processing is necessary, and balance it against the individual's rights. Fraud prevention is a classic legitimate interest, and the DUAA 2025 added a statutory list of "recognised legitimate interests" (such as crime prevention and safeguarding) where the balancing test is simplified.

A common exam and interview trap: consent is not the default lawful basis, and asking for consent when you would process the data anyway is actively misleading.`,
        },
      ],
      keyTakeaways: [
        { text: "UK GDPR and the DPA 2018 form the core framework, amended (not replaced) by the Data (Use and Access) Act 2025." },
        { text: "The ICO is the UK's data protection regulator: guidance, complaints, investigations and fines." },
        { text: "Controllers decide why and how data is processed; processors act on their instructions. Pseudonymised data is still personal data." },
        { text: "Special category data and criminal offence data need extra conditions, which matters for screening and fraud work in finance." },
        { text: "Every act of processing needs one of six lawful bases, and consent is usually the wrong one in financial services." },
      ],
      quizQuestions: [
        {
          id: "ukgdpr-1-q1",
          question: "A bank hires a vendor to run sanctions screening on its customer base, strictly on the bank's instructions. Who is the controller and who is the processor?",
          options: [
            "The vendor is the controller, the bank is the processor",
            "The bank is the controller, the vendor is the processor",
            "Both are controllers",
            "Neither, screening is exempt from data protection law",
          ],
          correctIndex: 1,
          explanation: "The bank decides why and how the data is processed, making it the controller. The vendor processes data on the bank's instructions, making it the processor. Controllers carry the primary compliance burden, but processors have direct obligations too.",
        },
        {
          id: "ukgdpr-1-q2",
          question: "A firm carries out AML customer due diligence because the Money Laundering Regulations require it. What is its lawful basis?",
          options: [
            "Consent",
            "Contract",
            "Legal obligation",
            "Vital interests",
          ],
          correctIndex: 2,
          explanation: "Where processing is required by law, the lawful basis is legal obligation. AML checks under the MLRs are the standard financial services example. Asking customers to 'consent' to checks the firm must do anyway would be misleading, since consent must be freely refusable.",
        },
        {
          id: "ukgdpr-1-q3",
          question: "Which of these is special category data under UK GDPR?",
          options: [
            "A customer's account number",
            "A customer's health data",
            "A customer's transaction history",
            "A customer's email address",
          ],
          correctIndex: 1,
          explanation: "Special category data covers racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic and biometric data, health data, and sex life or sexual orientation. Account numbers, transactions and email addresses are ordinary personal data.",
        },
      ],
    },
    {
      id: "ukgdpr-2",
      number: 2,
      title: "Data Subject Rights and DSARs",
      slug: "data-subject-rights-dsars",
      readingTimeMinutes: 8,
      intro:
        "UK GDPR gives individuals a set of enforceable rights over their data. For firms, the most operationally demanding is the subject access request, the DSAR. Handling DSARs is a genuine entry-level compliance task, so knowing the mechanics well is a practical career asset.",
      subSections: [
        {
          id: "ukgdpr-2-1",
          heading: "2.1 — The eight rights",
          content: `Individuals have eight rights, though several apply only in specific situations:

1. **Right to be informed**: privacy notices must explain what data is collected and why.
2. **Right of access**: the right to obtain a copy of your personal data, the DSAR.
3. **Right to rectification**: inaccurate data must be corrected.
4. **Right to erasure** ("right to be forgotten"): deletion in certain circumstances, for example when data is no longer needed or consent is withdrawn.
5. **Right to restrict processing**: pressing pause on processing while, say, accuracy is disputed.
6. **Right to data portability**: receiving your data in a machine-readable format to move elsewhere.
7. **Right to object**: including an absolute right to object to direct marketing.
8. **Rights around automated decision-making**: individuals are protected against purely automated decisions with legal or similarly significant effects, such as fully automated credit declines, and can demand human review.

None of these rights is unlimited. Erasure, for instance, does not override a bank's legal duty to retain AML records for five years after a relationship ends. When rights collide with retention obligations, the legal obligation generally wins, but the firm must explain that to the individual rather than ignore the request.`,
        },
        {
          id: "ukgdpr-2-2",
          heading: "2.2 — Handling a DSAR",
          content: `A **data subject access request (DSAR)** is a request by an individual for a copy of their personal data and supporting information (purposes, recipients, retention periods, sources).

The mechanics:

- A DSAR can be made **in any form**: letter, email, phone call, even a social media message. No magic words are needed; "send me everything you hold on me" is a valid DSAR.
- The firm must respond **without undue delay and within one calendar month**, extendable by up to two further months for complex or numerous requests, provided the individual is told within the first month.
- It is **free of charge**, though a reasonable fee can be charged for manifestly unfounded or excessive requests, or the request can be refused, with reasons.
- The firm may verify the requester's identity first, and the clock allows for that.
- The DUAA 2025 confirmed that firms need only conduct a **reasonable and proportionate search** for the data, and that the response clock can pause while the firm awaits identity verification or clarification.

**Exemptions matter in finance**: information that would prejudice crime prevention or detection can be withheld, and crucially, a firm must never reveal that a Suspicious Activity Report has been made. If a DSAR would tip off a customer about a SAR, the SAR material is withheld, without saying why. Getting this wrong can be a criminal offence. DSAR handlers in financial firms work closely with the MLRO for exactly this reason.`,
        },
      ],
      keyTakeaways: [
        { text: "Individuals have eight rights, including access, rectification, erasure and objection to direct marketing." },
        { text: "A DSAR can be made in any form and must be answered within one calendar month, extendable by two months for complex requests." },
        { text: "DSARs are free unless manifestly unfounded or excessive, and the DUAA 2025 confirmed a 'reasonable and proportionate search' standard." },
        { text: "Rights are not absolute: AML record-keeping duties override erasure requests, with an explanation to the individual." },
        { text: "SAR-related material must be withheld from DSAR responses; revealing a SAR is tipping off, a criminal offence." },
      ],
      quizQuestions: [
        {
          id: "ukgdpr-2-q1",
          question: "A customer emails a bank: 'Please send me all the information you hold about me.' What is this?",
          options: [
            "An informal enquiry the bank can ignore",
            "A valid data subject access request that starts the one-month clock",
            "Invalid, because DSARs must use the bank's official form",
            "A complaint under DISP",
          ],
          correctIndex: 1,
          explanation: "A DSAR can be made in any form, with no magic words. The bank must respond within one calendar month, extendable by up to two further months for complex requests if the customer is told within the first month.",
        },
        {
          id: "ukgdpr-2-q2",
          question: "A customer who closed their account last year demands erasure of all their data. The firm's AML rules require records to be kept for five years. What should the firm do?",
          options: [
            "Delete everything, the right to erasure is absolute",
            "Retain what the law requires, explain to the customer why, and delete what is no longer needed",
            "Ignore the request",
            "Report the customer to the ICO",
          ],
          correctIndex: 1,
          explanation: "The right to erasure is not absolute. A legal obligation to retain records, such as the five-year AML retention period, overrides it. The firm should keep what the law requires, explain that to the customer, and erase anything it has no continuing need or duty to keep.",
        },
        {
          id: "ukgdpr-2-q3",
          question: "A DSAR response would reveal that the firm filed a Suspicious Activity Report about the customer. What must the firm do?",
          options: [
            "Include the SAR, transparency always wins",
            "Withhold the SAR material without revealing why, since disclosure would be tipping off",
            "Ask the customer's permission to include it",
            "Send the SAR to the customer's solicitor instead",
          ],
          correctIndex: 1,
          explanation: "Revealing a SAR would be the criminal offence of tipping off. Crime-related exemptions allow the firm to withhold that material, and it must not signal the reason. This is why DSAR teams in financial firms coordinate with the MLRO.",
        },
      ],
    },
    {
      id: "ukgdpr-3",
      number: 3,
      title: "Security, Breaches and DPIAs",
      slug: "security-breaches-dpias",
      readingTimeMinutes: 8,
      intro:
        "The security principle requires appropriate protection for personal data. When protection fails, the law sets tight deadlines: a serious breach must reach the ICO within 72 hours. This chapter covers what counts as a breach, when to report, and the risk assessments firms must run before high-risk projects.",
      subSections: [
        {
          id: "ukgdpr-3-1",
          heading: "3.1 — Personal data breaches and the 72-hour rule",
          content: `A **personal data breach** is a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. It is wider than "being hacked":

- An email with customer data sent to the wrong recipient
- A lost unencrypted laptop
- Ransomware that encrypts customer records (loss of access is a breach)
- A staff member snooping on accounts without authorisation

**Reporting to the ICO**: a breach must be reported **without undue delay and, where feasible, within 72 hours of becoming aware of it**, unless it is unlikely to result in a risk to individuals' rights and freedoms. The 72 hours include weekends and holidays. If the full picture is not yet known, firms report in phases rather than wait.

**Telling the individuals**: where a breach is likely to result in a **high risk** to individuals, the firm must also inform the affected people without undue delay, so they can protect themselves, for example by changing passwords or watching for fraud.

Every breach, reportable or not, must be recorded internally in a breach register, with the facts, effects and remedial action. That register is one of the first things the ICO asks for.

For financial firms there is a parallel duty: significant operational or security incidents must also be reported to the **FCA** under Principle 11. One incident can easily mean two regulators on tight deadlines.`,
        },
        {
          id: "ukgdpr-3-2",
          heading: "3.2 — Security and Data Protection Impact Assessments",
          content: `The security principle requires **appropriate technical and organisational measures**: encryption, access controls, pseudonymisation, staff training, vendor due diligence, tested backups. "Appropriate" scales with risk: a bank holding millions of customer records is held to a far higher standard than a corner shop.

A **Data Protection Impact Assessment (DPIA)** is a structured risk assessment that is **mandatory before processing likely to result in a high risk** to individuals. Triggers include:

- Systematic and extensive profiling with significant effects, such as credit scoring models
- Large-scale processing of special category or criminal offence data, such as transaction monitoring and screening programmes
- Systematic monitoring of publicly accessible areas at scale

A DPIA describes the processing, assesses necessity and proportionality, identifies the risks to individuals, and sets out the mitigations. If, after mitigations, a high residual risk remains, the firm must **consult the ICO before starting**.

In practice, compliance analysts meet DPIAs whenever a firm rolls out new monitoring or screening technology. Fraud detection systems, AI-driven transaction monitoring and biometric onboarding all typically require one. A DPIA is not a form-filling exercise at the end of a project: run it early, when the design can still change.`,
        },
      ],
      keyTakeaways: [
        { text: "A personal data breach covers loss, alteration, unauthorised disclosure or access, and loss of access, not just hacking." },
        { text: "Serious breaches must reach the ICO within 72 hours of awareness; high-risk breaches must also be notified to affected individuals." },
        { text: "All breaches must be recorded internally, and financial firms may owe a parallel incident report to the FCA under Principle 11." },
        { text: "DPIAs are mandatory before high-risk processing such as credit scoring, large-scale screening or biometric onboarding." },
        { text: "If high residual risk remains after mitigations, the ICO must be consulted before processing starts." },
      ],
      quizQuestions: [
        {
          id: "ukgdpr-3-q1",
          question: "An analyst emails a spreadsheet of 2,000 customers' details to the wrong external address. Is this a personal data breach?",
          options: [
            "No, breaches require hacking by a third party",
            "Yes, unauthorised disclosure of personal data is a breach, and it may need reporting to the ICO within 72 hours",
            "Only if a customer complains",
            "Only if the recipient opens the file",
          ],
          correctIndex: 1,
          explanation: "A breach includes accidental unauthorised disclosure, so a misdirected email qualifies. The firm must assess the risk to individuals; unless the breach is unlikely to result in a risk, it must be reported to the ICO within 72 hours of awareness.",
        },
        {
          id: "ukgdpr-3-q2",
          question: "How long does a firm have to report a reportable breach to the ICO, and from when?",
          options: [
            "72 hours from becoming aware of the breach, including weekends",
            "5 business days from the breach occurring",
            "One calendar month",
            "There is no deadline",
          ],
          correctIndex: 0,
          explanation: "Reportable breaches must be notified without undue delay and, where feasible, within 72 hours of the firm becoming aware. The clock runs through weekends and holidays, and firms can report in phases if facts are still emerging.",
        },
        {
          id: "ukgdpr-3-q3",
          question: "A bank plans an AI-driven transaction monitoring system that profiles all customers. What must it do first?",
          options: [
            "Nothing, AML systems are exempt from data protection law",
            "Carry out a Data Protection Impact Assessment, and consult the ICO if high residual risk remains",
            "Obtain every customer's consent",
            "Notify the Financial Ombudsman Service",
          ],
          correctIndex: 1,
          explanation: "Large-scale profiling and monitoring is a classic DPIA trigger. The DPIA assesses necessity, proportionality and risks, and sets mitigations. If a high residual risk remains after mitigation, the ICO must be consulted before processing begins.",
        },
      ],
    },
    {
      id: "ukgdpr-4",
      number: 4,
      title: "Enforcement, and Where GDPR Meets the FCA",
      slug: "enforcement-gdpr-meets-fca",
      readingTimeMinutes: 7,
      intro:
        "What happens when firms get data protection wrong, and how does this regime interact with FCA regulation? For anyone aiming at a compliance role in financial services, the overlap is the payoff of this module: data protection is not a separate world, it runs through KYC, monitoring, complaints and outsourcing.",
      subSections: [
        {
          id: "ukgdpr-4-1",
          heading: "4.1 — ICO enforcement and fines",
          content: `The ICO has a graduated toolkit: information notices (demanding information), assessment notices (compulsory audits), enforcement notices (ordering action or stopping processing), and monetary penalties.

Fines come in two tiers:

- **Higher tier**: up to **£17.5 million or 4% of total worldwide annual turnover**, whichever is higher, for breaches of the principles, lawful bases, individuals' rights and international transfer rules.
- **Standard tier**: up to **£8.7 million or 2% of worldwide turnover** for failures such as not reporting breaches, inadequate records or failing to run a required DPIA.

Notable UK enforcement includes British Airways, fined **£20 million** in 2020 after attackers harvested customer and payment data, and Marriott, fined **£18.4 million** the same year for a long-undetected breach of guest records. In both cases the ICO's core finding was inadequate security, not the mere fact of being attacked.

Since the DUAA 2025, breaches of the direct marketing rules under **PECR** can also attract fines up to the UK GDPR maximum, £17.5 million or 4%, a huge increase from the old £500,000 cap. Firms that treat marketing consent casually now face GDPR-scale consequences.

An enforcement notice can hurt more than a fine: being ordered to stop processing can halt a business line entirely.`,
        },
        {
          id: "ukgdpr-4-2",
          heading: "4.2 — The FCA overlap",
          content: `Data protection and FCA regulation intersect constantly. The places you will meet both:

**KYC and AML**: the MLRs force firms to collect identity data (lawful basis: legal obligation), but UK GDPR disciplines how much is collected (minimisation), how long it is kept (five years after the relationship, then delete unless another basis applies) and how securely it is held.

**SYSC and security**: the FCA expects sound systems and controls, including for data. A serious data breach can simultaneously breach UK GDPR (security principle), FCA Principle 3 (management and control) and Principle 11 (failing to notify the FCA). One incident, three exposures, plus Consumer Duty questions if customers were harmed.

**Screening and profiling**: sanctions screening, adverse media checks and fraud models process criminal offence data and involve profiling, so they need DPA 2018 conditions, DPIAs and fairness controls. Wrongly flagging a customer as a sanctions match has both GDPR accuracy implications and Consumer Duty implications.

**Outsourcing**: cloud vendors and KYC utilities are processors, so firms need GDPR-compliant contracts, and the FCA separately holds firms accountable for outsourced arrangements. Vendor due diligence serves both masters.

**Complaints and DSARs**: unhappy customers often fire both barrels: a DISP complaint and a DSAR. The DSAR deadline (one month) and the complaint deadline (eight weeks) run in parallel, handled by different teams that must not contradict each other.

The takeaway for your CV: being fluent in both regimes, and knowing which regulator cares about what, is precisely what makes a junior compliance analyst useful from day one.`,
        },
      ],
      keyTakeaways: [
        { text: "Higher-tier ICO fines reach £17.5 million or 4% of worldwide turnover; standard-tier fines reach £8.7 million or 2%." },
        { text: "British Airways (£20m) and Marriott (£18.4m) show the ICO fines inadequate security, not merely being attacked." },
        { text: "Since the DUAA 2025, direct marketing breaches under PECR can attract GDPR-scale fines." },
        { text: "One data incident can breach UK GDPR and FCA requirements at once: security principle, Principle 3, Principle 11 and Consumer Duty." },
        { text: "KYC, screening, outsourcing and complaints all sit at the junction of data protection and FCA regulation." },
      ],
      quizQuestions: [
        {
          id: "ukgdpr-4-q1",
          question: "What is the maximum higher-tier fine the ICO can impose under UK GDPR?",
          options: [
            "£500,000",
            "£8.7 million or 2% of worldwide turnover",
            "£17.5 million or 4% of total worldwide annual turnover, whichever is higher",
            "Unlimited",
          ],
          correctIndex: 2,
          explanation: "The higher tier, for breaches of the principles, lawful bases, individuals' rights and transfer rules, reaches £17.5 million or 4% of worldwide annual turnover, whichever is higher. The standard tier reaches £8.7 million or 2% for failures like unreported breaches or missing DPIAs.",
        },
        {
          id: "ukgdpr-4-q2",
          question: "Why were British Airways and Marriott fined by the ICO?",
          options: [
            "For being victims of cyber attacks, which is automatically a breach",
            "For inadequate security measures that allowed the breaches to happen and persist",
            "For refusing to pay ransoms",
            "For moving data outside the UK",
          ],
          correctIndex: 1,
          explanation: "In both cases the ICO's core finding was inadequate technical and organisational security, not the mere fact of being attacked. BA was fined £20 million and Marriott £18.4 million in 2020.",
        },
        {
          id: "ukgdpr-4-q3",
          question: "A bank suffers a serious breach of customer data. Which obligations could be triggered at the same time?",
          options: [
            "Only an ICO notification",
            "ICO notification within 72 hours, notifying high-risk individuals, and reporting to the FCA under Principle 11",
            "Only an internal record",
            "A mandatory press release",
          ],
          correctIndex: 1,
          explanation: "A single serious incident can require ICO notification within 72 hours, direct notification of affected individuals where risk is high, and prompt FCA notification under Principle 11, with Principle 3 and Consumer Duty questions following close behind.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "ukgdpr-test-q1",
        question: "What did the Data (Use and Access) Act 2025 do to the UK's data protection framework?",
        options: [
          "Replaced UK GDPR with an entirely new act",
          "Amended UK GDPR, the DPA 2018 and PECR, including recognised legitimate interests and higher PECR marketing fines",
          "Abolished the ICO",
          "Rejoined the UK to the EU GDPR",
        ],
        correctIndex: 1,
        explanation: "The DUAA, given Royal Assent on 19 June 2025, amends rather than replaces the framework. Changes include a statutory list of recognised legitimate interests, clarified DSAR rules, and raising PECR direct marketing fines to UK GDPR levels.",
      },
      {
        id: "ukgdpr-test-q2",
        question: "Records keyed to a customer number, with the name held in a separate lookup table, are:",
        options: [
          "Anonymous data outside UK GDPR",
          "Pseudonymised data, which is still personal data",
          "Special category data",
          "Criminal offence data",
        ],
        correctIndex: 1,
        explanation: "Pseudonymisation is a good security measure but the data remains personal data because the link back to the individual exists. Only truly anonymous data falls outside the law, and genuine anonymisation is hard to achieve.",
      },
      {
        id: "ukgdpr-test-q3",
        question: "Which lawful basis requires a three-part test of purpose, necessity and balancing against the individual's rights?",
        options: [
          "Consent",
          "Contract",
          "Legal obligation",
          "Legitimate interests",
        ],
        correctIndex: 3,
        explanation: "Legitimate interests is the most flexible basis but requires identifying the interest, showing necessity, and balancing against individuals' rights. Fraud prevention is a classic example, and the DUAA 2025 simplified the test for a list of recognised legitimate interests.",
      },
      {
        id: "ukgdpr-test-q4",
        question: "What is the standard deadline for responding to a DSAR?",
        options: [
          "72 hours",
          "One calendar month, extendable by up to two further months for complex requests",
          "8 weeks",
          "Six months",
        ],
        correctIndex: 1,
        explanation: "DSARs must be answered without undue delay and within one calendar month. For complex or numerous requests the deadline can be extended by up to two further months, provided the individual is told within the first month.",
      },
      {
        id: "ukgdpr-test-q5",
        question: "Which right lets an individual insist on human involvement in a decision?",
        options: [
          "The right to data portability",
          "The rights around purely automated decision-making with legal or similarly significant effects",
          "The right to be informed",
          "The right to restrict processing",
        ],
        correctIndex: 1,
        explanation: "Individuals are protected against purely automated decisions with legal or similarly significant effects, such as a fully automated credit decline, and can demand human review of the decision.",
      },
      {
        id: "ukgdpr-test-q6",
        question: "A ransomware attack encrypts a firm's customer database. No data was copied out. Is this a personal data breach?",
        options: [
          "No, because no data left the firm",
          "Yes, loss of access to personal data is itself a breach",
          "Only if the ransom is paid",
          "Only if customers notice",
        ],
        correctIndex: 1,
        explanation: "A breach includes accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. Losing access to data through encryption is a breach even if nothing was exfiltrated, and it must be risk-assessed for ICO reporting within 72 hours.",
      },
      {
        id: "ukgdpr-test-q7",
        question: "When must the ICO be consulted before processing begins?",
        options: [
          "Before any new IT system is deployed",
          "When a DPIA shows a high residual risk that mitigations cannot reduce",
          "Whenever special category data is processed",
          "Never, the ICO only acts after breaches",
        ],
        correctIndex: 1,
        explanation: "Prior consultation with the ICO is required when a DPIA identifies a high residual risk remaining after mitigations. DPIAs themselves are mandatory for high-risk processing such as large-scale profiling and monitoring.",
      },
      {
        id: "ukgdpr-test-q8",
        question: "Which statement best captures the GDPR-FCA overlap in financial services?",
        options: [
          "Data protection is handled by the ICO, so the FCA never cares about data incidents",
          "A serious data breach can simultaneously engage the ICO, FCA Principles 3 and 11, and Consumer Duty",
          "AML rules override all data protection obligations entirely",
          "DSARs and complaints are the same process",
        ],
        correctIndex: 1,
        explanation: "The regimes run in parallel. One serious incident can breach the UK GDPR security principle, FCA Principle 3 (management and control) and Principle 11 (notifying the regulator), with Consumer Duty questions if customers were harmed. AML duties shape retention but do not switch off data protection.",
      },
    ],
  },
};
