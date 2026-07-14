import type { Module } from "./types";

// ============================================================
// MODULE 16 - MiCA: EU Markets in Crypto-Assets Regulation
// ============================================================
export const moduleMiCA: Module = {
  id: "mica",
  number: 16,
  title: "MiCA - EU Markets in Crypto-Assets Regulation",
  slug: "mica-eu-crypto-assets",
  block: "EU Regulation",
  sourceCode: "MiCA",
  sourceUrl: "https://eur-lex.europa.eu/eli/reg/2023/1114/oj",
  sourceLabel: "EUR-Lex - Regulation (EU) 2023/1114 (MiCA)",
  lastReviewed: "July 2026",
  colour: "bg-indigo-50",
  accentColour: "oklch(0.45 0.16 265)",
  description:
    "MiCA is the EU's single rulebook for crypto assets, the first comprehensive crypto framework by a major regulator anywhere in the world. It covers stablecoins, exchanges, custodians and token issuers across all 27 member states. If you work in crypto compliance, or want to, MiCA is now essential knowledge alongside the UK regime.",
  whoItAppliesTo: "Crypto-asset issuers, stablecoin issuers, and crypto-asset service providers (CASPs) operating in or into the EU.",
  chapters: [
    {
      id: "mica-1",
      number: 1,
      title: "Why MiCA Exists and What It Covers",
      slug: "why-mica-exists",
      readingTimeMinutes: 8,
      intro:
        "Before MiCA, crypto regulation in Europe was a patchwork. Each member state had its own registration rules, and most crypto assets fell outside financial regulation entirely. MiCA replaced that patchwork with one rulebook for the whole EU. Understanding its token categories is the key that unlocks everything else.",
      subSections: [
        {
          id: "mica-1-1",
          heading: "1.1 - One rulebook for 27 countries",
          content: `The **Markets in Crypto-Assets Regulation (MiCA)**, formally Regulation (EU) 2023/1114, was adopted in May 2023. It is a regulation, not a directive, which means it applies directly in every EU member state without national implementing laws. One set of rules, 27 countries.

MiCA arrived in two stages:

- **30 June 2024**: the rules for stablecoins came into effect. These cover asset-referenced tokens (ARTs) and e-money tokens (EMTs).
- **30 December 2024**: the rest of the regulation came into effect, covering crypto-asset service providers (CASPs) and public offers of other crypto assets.

The EU moved first for two reasons. The collapse of firms like FTX in 2022 showed what happens when crypto businesses operate without meaningful oversight. And the prospect of large stablecoins becoming widely used for payments raised concerns about monetary stability. MiCA was the answer: bring crypto inside the regulatory perimeter before the next crisis, not after it.

A licence granted in one member state can be **passported** across the entire EU. A CASP authorised in France can serve customers in Germany, Spain and Poland without further authorisations. This is the single biggest commercial attraction of MiCA for crypto firms.`,
        },
        {
          id: "mica-1-2",
          heading: "1.2 - The three token categories",
          content: `MiCA sorts crypto assets into three categories, and the rules that apply depend entirely on which box a token falls into:

**1. Asset-referenced tokens (ARTs)**: tokens that aim to keep a stable value by referencing a basket of assets, one or more currencies (but not a single currency in the e-money sense), commodities, or other crypto assets. Think of a token pegged to a mix of the dollar, gold and government bonds.

**2. E-money tokens (EMTs)**: tokens that aim to keep a stable value by referencing a single official currency. A token pegged one-to-one to the euro or the dollar is an EMT. Most of the stablecoins people actually use, such as euro or dollar stablecoins, are EMTs.

**3. Other crypto assets**: everything else that qualifies as a crypto asset under MiCA, including utility tokens and cryptocurrencies like bitcoin and ether. These face lighter rules, mainly around the white paper that must accompany a public offer.

Issuers of "other crypto assets" must publish a **crypto-asset white paper**: a disclosure document describing the project, the rights attached to the token, the technology and the risks. It must be fair, clear and not misleading, and it must be notified to the national regulator. Unlike a securities prospectus, it does not need pre-approval.`,
        },
        {
          id: "mica-1-3",
          heading: "1.3 - What MiCA does not cover",
          content: `Knowing what is outside MiCA matters as much as knowing what is inside:

**Security tokens**: crypto assets that qualify as financial instruments, such as tokenised shares or bonds, are regulated under MiFID II, not MiCA. If a token gives you rights like a share, it is treated like a share.

**Non-fungible tokens (NFTs)**: genuinely unique, non-fungible tokens are excluded. But the exemption is narrow. Tokens issued in a large series or collection may be treated as fungible in practice, and fractionalised NFTs can fall back into scope.

**Central bank digital currencies**: a digital euro issued by the European Central Bank would sit outside MiCA entirely.

**Fully decentralised services**: crypto-asset services provided in a fully decentralised manner, without any intermediary, are outside MiCA. As with the UK regime, the hard question is what counts as genuinely decentralised. A protocol controlled by a small team through a governance token is unlikely to qualify.

**Lending and staking**: crypto lending and borrowing are largely outside MiCA's first version. The European Commission is expected to revisit this in future reviews. The UK regime, by contrast, brings lending and staking into scope from the start.`,
        },
      ],
      keyTakeaways: [
        { text: "MiCA (Regulation (EU) 2023/1114) is the EU's single crypto rulebook, applying directly in all 27 member states." },
        { text: "Stablecoin rules applied from 30 June 2024; the CASP and other crypto-asset rules from 30 December 2024." },
        { text: "The three token categories are asset-referenced tokens (ARTs), e-money tokens (EMTs), and other crypto assets." },
        { text: "Security tokens fall under MiFID II, and genuinely unique NFTs, CBDCs and fully decentralised services sit outside MiCA." },
        { text: "One authorisation can be passported across the whole EU, the biggest commercial draw of the regime." },
      ],
      quizQuestions: [
        {
          id: "mica-1-q1",
          question: "A token aims to hold a stable value by referencing a basket of the US dollar, gold and bitcoin. How does MiCA classify it?",
          options: [
            "An e-money token (EMT)",
            "An asset-referenced token (ART)",
            "An 'other crypto asset'",
            "A financial instrument under MiFID II",
          ],
          correctIndex: 1,
          explanation: "ARTs stabilise their value by referencing a basket of assets, currencies, commodities or crypto assets. EMTs reference a single official currency. A token pegged to a mixed basket is the textbook ART.",
        },
        {
          id: "mica-1-q2",
          question: "When did MiCA's rules for CASPs come into application?",
          options: [
            "May 2023",
            "30 June 2024",
            "30 December 2024",
            "1 July 2026",
          ],
          correctIndex: 2,
          explanation: "MiCA applied in two stages: the stablecoin rules (ARTs and EMTs) from 30 June 2024, and the rules for crypto-asset service providers and other crypto assets from 30 December 2024. July 2026 is the end of the longest national grandfathering periods.",
        },
        {
          id: "mica-1-q3",
          question: "A company issues tokenised shares that carry dividend and voting rights. Which regime applies?",
          options: [
            "MiCA, because the shares are on a blockchain",
            "MiFID II, because tokens that qualify as financial instruments are excluded from MiCA",
            "Neither, tokenised shares are unregulated",
            "The issuer can choose either regime",
          ],
          correctIndex: 1,
          explanation: "Crypto assets that qualify as financial instruments are excluded from MiCA and regulated under MiFID II. Putting a share on a blockchain does not change what it is: if it grants rights like a share, it is treated as a share.",
        },
      ],
    },
    {
      id: "mica-2",
      number: 2,
      title: "CASPs - Licensing Crypto Businesses",
      slug: "casps-crypto-service-providers",
      readingTimeMinutes: 8,
      intro:
        "The heart of MiCA is the authorisation regime for crypto-asset service providers, or CASPs. Exchanges, brokers, custodians and advisers all need a licence, and with it come conduct obligations that look a lot like those for traditional investment firms. This is deliberate: same activity, same risk, same rules.",
      subSections: [
        {
          id: "mica-2-1",
          heading: "2.1 - Who needs a CASP licence?",
          content: `MiCA lists ten crypto-asset services. Providing any of them as a business in the EU requires authorisation as a **CASP**:

1. Custody and administration of crypto assets for clients
2. Operating a trading platform for crypto assets
3. Exchanging crypto assets for funds (fiat money)
4. Exchanging crypto assets for other crypto assets
5. Executing orders for clients
6. Placing crypto assets
7. Receiving and transmitting orders
8. Providing advice on crypto assets
9. Providing portfolio management on crypto assets
10. Providing transfer services for crypto assets on behalf of clients

Authorisation comes from the **national competent authority** of the member state where the firm is established, for example the AMF in France or BaFin in Germany. Once authorised, the CASP can passport its services across the whole EU.

Certain traditional financial firms, such as credit institutions and MiFID investment firms, can provide crypto services after a simplified notification instead of a full authorisation, since they are already regulated.`,
        },
        {
          id: "mica-2-2",
          heading: "2.2 - Conduct obligations",
          content: `A CASP licence is not just a badge. It carries continuing obligations that will feel familiar to anyone who knows the FCA Handbook:

**Act honestly, fairly and professionally** in the best interests of clients, with communications that are fair, clear and not misleading. Risk warnings are mandatory.

**Prudential safeguards**: CASPs must hold minimum capital, ranging from €50,000 to €150,000 depending on the services provided, or one quarter of the previous year's fixed overheads, whichever is higher.

**Segregation of client assets**: client crypto assets and funds must be kept separate from the firm's own, mirroring the logic of the UK's CASS rules. Custodians are liable to clients for the loss of crypto assets held in custody, up to the market value of the assets lost.

**Governance**: management must be fit and proper, and firms need sound administrative procedures, business continuity arrangements and complaint-handling processes.

**Conflicts and outsourcing**: conflicts of interest must be identified, prevented, managed and disclosed. Outsourcing does not remove responsibility.

The overall philosophy is that crypto customers deserve the same basic protections as investment customers: honest marketing, safe custody, competent management and someone accountable when things go wrong.`,
        },
        {
          id: "mica-2-3",
          heading: "2.3 - The transition period and the UK comparison",
          content: `Firms already providing crypto services under national law before 30 December 2024 could benefit from a **grandfathering period**: they may keep operating under their old national rules until they receive (or are refused) a MiCA authorisation, with a hard stop at **1 July 2026**. Member states could shorten this window, and many did. France, Malta and Luxembourg allowed the full period, while Germany, Austria, Ireland, the Netherlands and Poland chose shorter ones.

**How does this compare with the UK?**

- **Timing**: the EU moved first. MiCA was fully applicable by the end of 2024, while the UK's comprehensive regime goes live on 25 October 2027.
- **Structure**: MiCA is one bespoke regulation. The UK instead extends its existing FSMA framework to crypto, applying adapted versions of familiar sourcebooks to crypto firms.
- **Scope**: the UK regime covers crypto lending and staking from day one; MiCA largely leaves those for a future review.
- **Passporting**: an EU CASP licence covers 27 countries. A UK authorisation covers one, which matters for firms choosing where to establish.

For a compliance career, the practical point is that the two regimes are cousins, not twins. Firms operating in both markets need to satisfy both.`,
        },
      ],
      keyTakeaways: [
        { text: "Ten crypto-asset services require CASP authorisation from a national competent authority, passportable across the EU." },
        { text: "CASPs face conduct rules: honest and fair treatment of clients, clear communications, and mandatory risk warnings." },
        { text: "Minimum capital ranges from €50,000 to €150,000 depending on the services, and client assets must be segregated." },
        { text: "Grandfathered firms could operate under national rules until MiCA authorisation, with a hard stop at 1 July 2026." },
        { text: "The UK regime (live 25 October 2027) covers lending and staking from the start but offers no EU-style passport." },
      ],
      quizQuestions: [
        {
          id: "mica-2-q1",
          question: "Which of these activities does NOT require CASP authorisation under MiCA?",
          options: [
            "Holding customers' crypto assets in custody",
            "Running a crypto trading platform",
            "Buying bitcoin for your own personal account",
            "Advising clients on crypto assets",
          ],
          correctIndex: 2,
          explanation: "CASP authorisation applies to providing crypto-asset services as a business for clients, including custody, operating a platform, execution and advice. Buying crypto for yourself is not a service to clients and needs no licence.",
        },
        {
          id: "mica-2-q2",
          question: "What does MiCA require a CASP to do with client crypto assets and funds?",
          options: [
            "Insure them with a private insurer",
            "Keep them segregated from the firm's own assets, with custodians liable for losses",
            "Convert them to euros at the end of each day",
            "Deposit them with the European Central Bank",
          ],
          correctIndex: 1,
          explanation: "Client crypto assets and funds must be kept separate from the firm's own, the same logic as the UK's CASS rules. Custodians are liable to clients for the loss of crypto assets held in custody, up to the market value of what was lost.",
        },
        {
          id: "mica-2-q3",
          question: "A crypto exchange was operating legally in France before 30 December 2024. What did the grandfathering rules allow?",
          options: [
            "Permanent exemption from MiCA",
            "Continued operation under national rules until MiCA authorisation is granted or refused, with a hard stop at 1 July 2026",
            "Automatic MiCA authorisation with no application",
            "Six months to wind down the business",
          ],
          correctIndex: 1,
          explanation: "Pre-existing firms could keep operating under their old national regime while seeking MiCA authorisation, at the latest until 1 July 2026. Member states could shorten the window, and several, including Germany and the Netherlands, did.",
        },
      ],
    },
    {
      id: "mica-3",
      number: 3,
      title: "Stablecoins - The Strictest Rules in MiCA",
      slug: "stablecoins-arts-emts",
      readingTimeMinutes: 8,
      intro:
        "Stablecoins get the toughest treatment in MiCA, and they were regulated six months before everything else. The reason is simple: a token that millions of people treat as money can cause bank-run-style damage if it fails. TerraUSD's collapse in 2022 wiped out around $40 billion and made the case better than any consultation paper could.",
      subSections: [
        {
          id: "mica-3-1",
          heading: "3.1 - Who may issue stablecoins",
          content: `From 30 June 2024, issuing a stablecoin to the EU public became a regulated activity:

**E-money tokens (EMTs)** may only be issued by **authorised credit institutions or electronic money institutions**. An EMT is legally close to e-money: holders have a **claim at par** on the issuer, meaning the right to redeem at any moment, at face value, in the referenced currency. Charging a fee for redemption is prohibited.

**Asset-referenced tokens (ARTs)** need dedicated authorisation from a national competent authority, along with an approved white paper. ART holders also get redemption rights, either at the market value of the reference assets or by delivery of those assets.

In both cases the message is the same: if you issue something the public treats as money, you must be a regulated institution, and holders must always be able to get their money back.

One visible market effect: several major global stablecoins chose not to seek EU authorisation, and EU exchanges delisted them for EU customers rather than breach MiCA. Compliance analysts saw in real time that the regulation had teeth.`,
        },
        {
          id: "mica-3-2",
          heading: "3.2 - Reserves, and 'significant' tokens",
          content: `**Reserve requirements**: issuers must back tokens with a reserve of assets that is legally and operationally segregated from the issuer's own estate, insulated from insolvency, and invested only in secure, low-risk, liquid instruments. Part of the reserve must be held as deposits with credit institutions. The reserve must always at least match the claims of token holders, and it is subject to independent audit.

**Significant ARTs and EMTs**: tokens that cross thresholds for size and reach, such as more than 10 million holders or a large reserve value, are classified as **significant**. Significant tokens face tougher requirements, including higher capital, liquidity management and interoperability standards, and their supervision shifts substantially from national regulators to the **European Banking Authority (EBA)**.

**Restrictions on use as money**: MiCA gives regulators tools to cap large ARTs and non-euro EMTs used widely for payments within the euro area, protecting monetary sovereignty. This is a notable difference from the UK approach, which has no equivalent concept of protecting the pound from foreign-currency stablecoins in quite the same way.

**Interest ban**: neither ART nor EMT issuers may pay interest on tokens. The EU did not want stablecoins competing with bank deposits.`,
        },
      ],
      keyTakeaways: [
        { text: "EMTs may only be issued by authorised credit institutions or e-money institutions, with redemption at par, at any time, free of charge." },
        { text: "ART issuers need dedicated authorisation and an approved white paper, and holders get redemption rights." },
        { text: "Reserves must be segregated, insolvency-remote, low-risk and audited, and must always cover holders' claims." },
        { text: "Significant ARTs and EMTs face stricter requirements and substantial EBA supervision." },
        { text: "Paying interest on stablecoins is banned, so they cannot compete with bank deposits." },
      ],
      quizQuestions: [
        {
          id: "mica-3-q1",
          question: "Who may issue e-money tokens under MiCA?",
          options: [
            "Anyone who publishes a white paper",
            "Only authorised credit institutions or electronic money institutions",
            "Any CASP",
            "Only the European Central Bank",
          ],
          correctIndex: 1,
          explanation: "EMTs, stablecoins referencing a single official currency, may only be issued by authorised credit institutions or e-money institutions. Holders have a claim at par: redemption at any moment, at face value, with no redemption fee.",
        },
        {
          id: "mica-3-q2",
          question: "What happens when a stablecoin is classified as 'significant' under MiCA?",
          options: [
            "It is banned from the EU",
            "It faces stricter requirements and supervision shifts substantially to the European Banking Authority",
            "It is exempted from reserve requirements",
            "It becomes legal tender in the euro area",
          ],
          correctIndex: 1,
          explanation: "Tokens crossing thresholds for holders, reserve size and reach become significant, attracting higher capital and liquidity requirements, with the EBA taking a substantial supervisory role in place of national regulators alone.",
        },
        {
          id: "mica-3-q3",
          question: "Why does MiCA ban issuers from paying interest on ARTs and EMTs?",
          options: [
            "To keep issuer costs down",
            "So stablecoins do not compete with bank deposits",
            "Because interest is impossible to calculate on a blockchain",
            "To encourage people to spend rather than save",
          ],
          correctIndex: 1,
          explanation: "The interest ban stops stablecoins functioning as interest-bearing savings products competing with bank deposits, which could pull funding out of the banking system and amplify runs in a crisis.",
        },
      ],
    },
    {
      id: "mica-4",
      number: 4,
      title: "Market Abuse in Crypto, and MiCA v the UK",
      slug: "mica-market-abuse-uk-comparison",
      readingTimeMinutes: 7,
      intro:
        "Crypto markets have long had a reputation for manipulation: pump and dump groups, wash trading to fake volume, insiders front-running exchange listings. MiCA imports the core of the EU's market abuse regime into crypto. If you have read this site's MAR module, this chapter will feel familiar, and that is exactly the point.",
      subSections: [
        {
          id: "mica-4-1",
          heading: "4.1 - The crypto market abuse regime",
          content: `MiCA prohibits three forms of market abuse for crypto assets admitted to trading, directly mirroring the traditional regime:

**Insider dealing**: trading on inside information, meaning precise, non-public information that would likely have a significant effect on the price of a crypto asset. Knowing before the public that a major exchange will list a token, and buying ahead of the announcement, is the classic crypto example.

**Unlawful disclosure**: sharing inside information outside the normal exercise of your duties.

**Market manipulation**: transactions or orders that give false or misleading signals about supply, demand or price. Wash trading to inflate reported volumes and spoofing order books are both squarely caught.

Issuers must disclose inside information about their tokens to the public as soon as possible, echoing the DTR obligations on listed companies. And anyone professionally arranging or executing crypto transactions must have systems to detect and report suspected abuse, the crypto cousin of a suspicious transaction report.

Penalties are set by member states but must meet EU minimums, and national regulators can fine firms and individuals, order disgorgement of profits and ban individuals from management roles.`,
        },
        {
          id: "mica-4-2",
          heading: "4.2 - MiCA and the UK regime side by side",
          content: `A practical summary for anyone working across both markets:

| Topic | EU (MiCA) | UK (FSMA 2023 regime) |
|---|---|---|
| Status | Fully applicable since 30 December 2024 | Final rules 30 June 2026, live 25 October 2027 |
| Legal form | One bespoke regulation | Extension of existing FSMA framework |
| Stablecoins | ART/EMT regime, EBA oversees significant tokens | Issuance regulated, 100% high-quality liquid reserves |
| Lending and staking | Largely out of scope for now | In scope from the start |
| Market abuse | MiCA's own regime, mirroring MAR | UK MAR extended to crypto |
| Passporting | One licence, 27 countries | UK only |

Two themes are worth remembering in interviews. First, **convergence**: both regimes apply traditional financial standards, honest marketing, segregation of client assets, market abuse prohibitions, to crypto. The era of crypto as an unregulated space is over in both jurisdictions. Second, **sequencing**: the EU legislated first with a bespoke regime; the UK took longer but built crypto into its existing framework, betting that familiar tools like the FCA Handbook will adapt well. Which approach ages better is one of the genuinely open questions in financial regulation.`,
        },
      ],
      keyTakeaways: [
        { text: "MiCA prohibits insider dealing, unlawful disclosure and market manipulation for crypto assets admitted to trading." },
        { text: "Issuers must disclose inside information as soon as possible, and professional intermediaries must detect and report suspected abuse." },
        { text: "Wash trading and spoofing in crypto markets are squarely within the manipulation prohibition." },
        { text: "The EU regulated crypto first with one bespoke regulation; the UK extends its existing FSMA framework from October 2027." },
        { text: "Both regimes converge on the same principle: same activity, same risk, same rules as traditional finance." },
      ],
      quizQuestions: [
        {
          id: "mica-4-q1",
          question: "An exchange employee learns a token will be listed next week and buys it before the announcement. Under MiCA this is:",
          options: [
            "Legitimate research-driven trading",
            "Insider dealing, trading on precise non-public price-sensitive information",
            "Only a breach of the employee's staff handbook",
            "Market manipulation",
          ],
          correctIndex: 1,
          explanation: "Advance knowledge of an exchange listing is precise, non-public and price sensitive, so trading on it is insider dealing under MiCA's market abuse rules, mirroring the traditional MAR regime.",
        },
        {
          id: "mica-4-q2",
          question: "A trading firm repeatedly buys and sells the same token with itself to inflate reported volume. What is this?",
          options: [
            "Wash trading, a form of market manipulation prohibited by MiCA",
            "Arbitrage, which is permitted",
            "Staking",
            "A legitimate liquidity programme",
          ],
          correctIndex: 0,
          explanation: "Wash trading creates false signals about demand and volume, which is market manipulation under MiCA, exactly as it would be under UK MAR in traditional markets.",
        },
        {
          id: "mica-4-q3",
          question: "Which statement about the EU and UK crypto regimes is correct?",
          options: [
            "The UK regime went live before MiCA",
            "MiCA covers crypto lending and staking from day one, the UK regime does not",
            "MiCA has been fully applicable since 30 December 2024, while the UK regime goes live on 25 October 2027",
            "Both regimes offer EU-wide passporting",
          ],
          correctIndex: 2,
          explanation: "The EU moved first: MiCA was fully applicable by the end of 2024. The UK's comprehensive regime, built on FSMA 2023, has final rules from 30 June 2026 and goes live on 25 October 2027. The UK covers lending and staking from the start, and only an EU CASP licence passports across member states.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "mica-test-q1",
        question: "What kind of EU legal instrument is MiCA, and why does that matter?",
        options: [
          "A directive, so each member state writes its own version",
          "A regulation, so it applies directly and identically in all 27 member states",
          "A recommendation, so compliance is voluntary",
          "A treaty requiring unanimous ratification",
        ],
        correctIndex: 1,
        explanation: "MiCA is a regulation (Regulation (EU) 2023/1114), so it applies directly in every member state without national implementing laws. One rulebook for 27 countries, and one licence that passports across all of them.",
      },
      {
        id: "mica-test-q2",
        question: "A token is pegged one-to-one to the euro. Under MiCA it is:",
        options: [
          "An asset-referenced token",
          "An e-money token",
          "An 'other crypto asset'",
          "A central bank digital currency",
        ],
        correctIndex: 1,
        explanation: "Tokens stabilising their value against a single official currency are e-money tokens. Tokens referencing baskets of assets are ARTs, and everything else, including bitcoin and utility tokens, is an 'other crypto asset'.",
      },
      {
        id: "mica-test-q3",
        question: "What must accompany a public offer of an 'other crypto asset' in the EU?",
        options: [
          "A full prospectus pre-approved by ESMA",
          "A crypto-asset white paper that is fair, clear and not misleading, notified to the regulator",
          "A bank guarantee",
          "Nothing, other crypto assets are unregulated",
        ],
        correctIndex: 1,
        explanation: "Issuers of other crypto assets must publish a white paper describing the project, rights, technology and risks. It must be notified to the national regulator but, unlike a securities prospectus, does not need pre-approval.",
      },
      {
        id: "mica-test-q4",
        question: "Which of these is one of the ten CASP services under MiCA?",
        options: [
          "Mining bitcoin",
          "Custody and administration of crypto assets for clients",
          "Publishing crypto price news",
          "Manufacturing hardware wallets",
        ],
        correctIndex: 1,
        explanation: "The ten CASP services include custody, operating a trading platform, exchanging crypto for fiat or other crypto, execution, placing, order transmission, advice, portfolio management and transfer services. Mining, journalism and hardware manufacture are not crypto-asset services.",
      },
      {
        id: "mica-test-q5",
        question: "What minimum capital must CASPs hold under MiCA?",
        options: [
          "€5 million for all firms",
          "Between €50,000 and €150,000 depending on services, or a quarter of the previous year's fixed overheads if higher",
          "There is no capital requirement",
          "1% of client assets held",
        ],
        correctIndex: 1,
        explanation: "MiCA sets minimum capital between €50,000 and €150,000 depending on the services provided, or one quarter of the previous year's fixed overheads, whichever is higher.",
      },
      {
        id: "mica-test-q6",
        question: "What redemption right does an EMT holder have?",
        options: [
          "Redemption at market value, less a 2% fee",
          "Redemption at any moment, at par value, free of charge",
          "Redemption only at the issuer's discretion",
          "No redemption rights",
        ],
        correctIndex: 1,
        explanation: "EMT holders have a claim at par on the issuer: they can redeem at any moment, at face value, in the referenced currency, and issuers may not charge a redemption fee.",
      },
      {
        id: "mica-test-q7",
        question: "How must a stablecoin issuer's reserve be held?",
        options: [
          "Invested in the issuer's own shares",
          "Segregated, insolvency-remote, in secure low-risk liquid assets, always covering holders' claims and independently audited",
          "In the same cryptocurrency as the token",
          "In cash under the issuer's direct control",
        ],
        correctIndex: 1,
        explanation: "Reserves must be legally and operationally segregated from the issuer's estate, insulated from insolvency, invested in secure and liquid low-risk assets, always at least equal to holders' claims, and independently audited.",
      },
      {
        id: "mica-test-q8",
        question: "Which body takes a substantial supervisory role over 'significant' ARTs and EMTs?",
        options: [
          "The European Banking Authority (EBA)",
          "The FCA",
          "The Financial Ombudsman Service",
          "The Bank for International Settlements",
        ],
        correctIndex: 0,
        explanation: "When a stablecoin crosses the significance thresholds, such as more than 10 million holders or a very large reserve, supervision shifts substantially from national regulators to the EBA, and the token faces stricter requirements.",
      },
    ],
  },
};
