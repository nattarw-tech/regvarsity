import { useState, useMemo } from "react";
import PageLayout from "@/components/PageLayout";
import { Search, BookMarked } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  acronym?: string;
  plain: string;
  detail: string;
  topics: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  { term: "Authorisation", plain: "Official FCA permission to provide financial services in the UK.", detail: "Under FSMA 2000, it is a criminal offence to carry on regulated activities in the UK without FCA (or PRA) authorisation. Firms apply to the FCA and must meet 'threshold conditions' covering financial soundness, fit and proper management, and appropriate systems.", topics: ["FCA"] },
  { term: "Anti-Money Laundering", acronym: "AML", plain: "Rules and controls designed to prevent criminals from disguising illegally obtained money as legitimate income.", detail: "AML obligations in the UK are primarily set out in the Money Laundering Regulations 2017 (MLRs) and the Proceeds of Crime Act 2002 (POCA). Regulated firms must have policies, procedures, and controls to detect and report suspicious activity.", topics: ["AML/KYC"] },
  { term: "Approved Reporting Mechanism", acronym: "ARM", plain: "A firm authorised to submit transaction reports to the FCA on behalf of investment firms.", detail: "Under UK MiFIR, investment firms must report transactions to the FCA. They can do this directly or via an ARM. ARMs are authorised by the FCA and must meet specific data quality and operational standards.", topics: ["MiFID II"] },
  { term: "Asset-Referenced Token", acronym: "ART", plain: "A type of stablecoin whose value is pegged to a basket of assets (currencies, commodities, or other crypto assets).", detail: "Under the UK's new crypto regime, ARTs are a regulated category of cryptoasset. Issuers must be authorised by the FCA and meet requirements on backing assets, redemption, and disclosure.", topics: ["Crypto"] },
  { term: "Beneficial Owner", plain: "The real person who ultimately owns or controls a company or asset, even if it is held through other entities.", detail: "Under the MLRs 2017, firms must identify beneficial owners of corporate customers, generally anyone who owns or controls more than 25% of the entity. This prevents criminals from hiding behind shell companies.", topics: ["AML/KYC"] },
  { term: "Best Execution", plain: "The obligation on investment firms to get the best possible result for clients when executing trades.", detail: "Under UK MiFID II, firms must take all sufficient steps to obtain the best possible result for clients, considering price, costs, speed, likelihood of execution, size, and nature of the order. Firms must have a documented execution policy.", topics: ["MiFID II"] },
  { term: "Capital Requirements", plain: "Rules requiring financial firms to hold a minimum amount of their own money as a buffer against losses.", detail: "Capital requirements ensure firms can absorb losses without failing. For banks, these are set under the UK Capital Requirements Regulation (UK CRR). For investment firms, the Investment Firms Prudential Regime (IFPR) applies.", topics: ["FCA"] },
  { term: "Certification Regime", plain: "Part of SM&CR, requires firms to annually certify that certain employees are fit and proper to do their jobs.", detail: "Certified persons are employees who could cause significant harm to the firm or customers (e.g. traders, advisers). Unlike Senior Managers, they are not pre-approved by the FCA, the firm is responsible for assessing and certifying their fitness annually.", topics: ["FCA"] },
  { term: "Client Due Diligence", acronym: "CDD", plain: "The process of verifying who your customer is and understanding the nature of your business relationship with them.", detail: "CDD is required under the MLRs 2017 when establishing a business relationship or conducting certain transactions. It involves identifying and verifying the customer's identity, understanding the purpose of the relationship, and identifying beneficial owners.", topics: ["AML/KYC"] },
  { term: "Conduct Rules", plain: "Basic standards of behaviour that apply to almost all employees in FCA-regulated firms.", detail: "The FCA's five Individual Conduct Rules require employees to: (1) act with integrity; (2) act with due skill, care and diligence; (3) be open with regulators; (4) pay due regard to customers' interests; (5) observe proper market conduct standards.", topics: ["FCA"] },
  { term: "Consumer Duty", plain: "The FCA's most important recent rule, requiring firms to actively deliver good outcomes for retail customers, not just avoid harm.", detail: "FCA Principle 12 (Consumer Duty) came into force on 31 July 2023. It requires firms to deliver good outcomes across four areas: products and services, price and value, consumer understanding, and consumer support. It goes beyond the previous 'Treating Customers Fairly' regime.", topics: ["FCA"] },
  { term: "Consolidated Tape", plain: "A single, centralised source of post-trade data for all financial instruments traded in UK markets.", detail: "The FCA is procuring a consolidated tape provider for UK markets. It will aggregate post-trade data from all trading venues, making it easier for investors to see where trades are being executed and at what prices.", topics: ["MiFID II"] },
  { term: "Counter-Terrorist Financing", acronym: "CTF", plain: "Rules designed to prevent the financial system from being used to fund terrorist activities.", detail: "CTF obligations run alongside AML obligations under the MLRs 2017 and the Terrorism Act 2000. Firms must screen customers against terrorist financing lists and report suspicions to the NCA.", topics: ["AML/KYC"] },
  { term: "Cryptoasset", plain: "A digital representation of value or contractual rights that uses cryptography and distributed ledger technology.", detail: "The UK's FSMA 2000 (Cryptoassets) Regulations 2026 define cryptoassets for regulatory purposes. The category includes cryptocurrencies (like Bitcoin), stablecoins, utility tokens, and security tokens.", topics: ["Crypto"] },
  { term: "Customer Due Diligence", acronym: "CDD", plain: "See 'Client Due Diligence', the two terms are used interchangeably.", detail: "CDD and KYC are often used interchangeably. CDD is the formal regulatory term used in the MLRs; KYC is the broader industry term for the process of knowing who your customer is.", topics: ["AML/KYC"] },
  { term: "DeFi (Decentralised Finance)", plain: "Financial services built on blockchain technology that operate without traditional intermediaries like banks.", detail: "DeFi protocols use smart contracts to provide services like lending, trading, and yield generation. The FCA is developing its approach to DeFi regulation, focusing on regulated activities and the persons responsible for them, rather than the technology itself.", topics: ["Crypto"] },
  { term: "Eligible Counterparty", acronym: "ECP", plain: "The most sophisticated category of client under MiFID II, banks, investment firms, and similar institutions that need the least regulatory protection.", detail: "ECPs receive the lowest level of investor protection under UK MiFID II. Many conduct of business rules do not apply to transactions with ECPs. Firms can only classify a client as an ECP if they fall within specific categories defined in the legislation.", topics: ["MiFID II"] },
  { term: "Enhanced Due Diligence", acronym: "EDD", plain: "A higher level of customer checks required for higher-risk customers or transactions.", detail: "EDD is required under the MLRs 2017 for situations including: Politically Exposed Persons (PEPs); customers from high-risk third countries; complex or unusually large transactions; and any situation where there are higher money laundering risks.", topics: ["AML/KYC"] },
  { term: "E-Money Institution", acronym: "EMI", plain: "A firm authorised to issue electronic money (digital stored value, like a prepaid card or digital wallet).", detail: "EMIs are regulated by the FCA under the Electronic Money Regulations 2011. They must be authorised or registered and must safeguard customer funds. Many fintech payment firms are EMIs.", topics: ["FCA"] },
  { term: "FCA Register", plain: "The official public database of all firms and individuals authorised or registered by the FCA.", detail: "Anyone can check the FCA Register at register.fca.org.uk. It shows whether a firm is authorised, what activities it is permitted to carry out, and any enforcement actions. Consumers should always check the register before dealing with a financial firm.", topics: ["FCA"] },
  { term: "Financial Action Task Force", acronym: "FATF", plain: "The international body that sets global standards for anti-money laundering and counter-terrorist financing.", detail: "FATF (also known as GAFI) sets the international AML/CTF standards that countries implement in their national laws. The UK is a founding member. FATF conducts mutual evaluations of countries' AML/CTF frameworks.", topics: ["AML/KYC"] },
  { term: "Financial Ombudsman Service", acronym: "FOS", plain: "A free, independent service that resolves disputes between consumers and financial firms.", detail: "The FOS can award compensation of up to £430,000 (from April 2024). It covers most regulated financial services. Consumers must first complain to the firm; if unsatisfied, they can refer to the FOS within 6 months.", topics: ["FCA"] },
  { term: "Financial Promotions", plain: "Any communication that invites or induces someone to engage in financial activity: including advertisements, social media posts, and website content.", detail: "Under FSMA 2000, financial promotions must be approved by an FCA-authorised person before being communicated. For cryptoassets, specific rules apply since October 2023, including mandatory risk warnings and a 24-hour cooling-off period for first-time investors.", topics: ["FCA", "Crypto"] },
  { term: "Financial Services and Markets Act 2000", acronym: "FSMA", plain: "The main law governing financial services regulation in the UK.", detail: "FSMA 2000 is the primary legislation for UK financial regulation. It established the FSA (now FCA and PRA), defines regulated activities, sets out the authorisation regime, and contains powers for enforcement. It has been significantly amended since 2000, most recently by FSMA 2023.", topics: ["FCA"] },
  { term: "Fit and Proper", plain: "The standard that individuals in regulated financial firms must meet, being honest, competent, and financially sound.", detail: "The FCA assesses whether Senior Managers are fit and proper before approving them. For Certified Persons, firms must make this assessment annually. Factors include: honesty, integrity, and reputation; competence and capability; financial soundness.", topics: ["FCA"] },
  { term: "High-Risk Third Country", acronym: "HRTC", plain: "A country identified by HM Treasury as having weak anti-money laundering controls.", detail: "Firms must apply Enhanced Due Diligence to business relationships and transactions involving HRTCs. The list is set by HM Treasury and updated regularly. It currently includes countries like Iran, North Korea, and others identified by FATF.", topics: ["AML/KYC"] },
  { term: "ISIN (International Securities Identification Number)", plain: "A unique 12-character code that identifies a financial instrument globally.", detail: "ISINs are used in transaction reporting under UK MiFIR to identify the instrument being traded. Every listed security has a unique ISIN. They are issued by national numbering agencies.", topics: ["MiFID II"] },
  { term: "Know Your Customer", acronym: "KYC", plain: "The process of verifying who your customers are and understanding their financial activities.", detail: "KYC is the industry term for the customer identification and verification process. It encompasses CDD requirements under the MLRs 2017. Good KYC helps firms understand their customers' risk profiles and detect suspicious activity.", topics: ["AML/KYC"] },
  { term: "Legal Entity Identifier", acronym: "LEI", plain: "A unique 20-character code that identifies legal entities involved in financial transactions.", detail: "LEIs are required for transaction reporting under UK MiFIR. Any legal entity that trades in financial instruments must have an LEI. They are issued by accredited Local Operating Units (LOUs) and must be renewed annually.", topics: ["MiFID II"] },
  { term: "Liquidity", plain: "How easily an asset can be converted to cash without significantly affecting its price.", detail: "Liquidity is a key concept in financial regulation. Banks must hold sufficient liquid assets to meet short-term obligations (Liquidity Coverage Ratio). Stablecoin issuers must hold liquid backing assets to meet redemption demands.", topics: ["FCA", "Crypto"] },
  { term: "Markets in Financial Instruments Directive II", acronym: "MiFID II", plain: "EU rules (adopted by the UK) governing how financial instruments are traded, reported, and sold.", detail: "MiFID II came into force in January 2018. After Brexit, the UK retained it as UK MiFID II. It covers market structure, transparency, transaction reporting, best execution, client classification, and investor protection. The UK is reforming its version.", topics: ["MiFID II"] },
  { term: "Markets in Financial Instruments Regulation", acronym: "MiFIR / UK MiFIR", plain: "The directly applicable regulation (alongside MiFID II) that covers transparency and transaction reporting in financial markets.", detail: "UK MiFIR is the retained EU regulation. HM Treasury announced in November 2024 that it will revoke the transaction reporting provisions and hand rulemaking to the FCA. The FCA published Discussion Paper DP24/2 on the new UK transaction reporting regime.", topics: ["MiFID II"] },
  { term: "Money Laundering Reporting Officer", acronym: "MLRO", plain: "The senior person in a regulated firm responsible for overseeing the firm's anti-money laundering compliance.", detail: "The MLRO is required under Regulation 21 of the MLRs 2017. They receive internal suspicious activity reports from staff, decide whether to submit SARs to the NCA, and oversee the firm's AML programme. The MLRO must be at a senior level and approved by the FCA.", topics: ["AML/KYC"] },
  { term: "Money Laundering Regulations 2017", acronym: "MLRs", plain: "The main UK law requiring businesses to have anti-money laundering controls.", detail: "The MLRs 2017 implement the EU's Fourth Money Laundering Directive (as amended by the Fifth). They require regulated firms to conduct CDD, maintain records, appoint an MLRO, train staff, and have a firm-wide risk assessment. They are enforced by the FCA (for financial firms) and HMRC (for others).", topics: ["AML/KYC"] },
  { term: "Multilateral Trading Facility", acronym: "MTF", plain: "A trading platform (not a traditional stock exchange) where multiple buyers and sellers can trade financial instruments.", detail: "MTFs are regulated trading venues under UK MiFID II. They must be authorised by the FCA and comply with transparency and reporting requirements. Examples include BATS Europe and Turquoise.", topics: ["MiFID II"] },
  { term: "National Crime Agency", acronym: "NCA", plain: "The UK's lead agency for fighting serious and organised crime, including money laundering.", detail: "The NCA's UK Financial Intelligence Unit (UKFIU) receives Suspicious Activity Reports (SARs) from regulated firms. It uses SARs to identify and disrupt criminal activity. The NCA can grant 'consent' to proceed with a transaction that has been reported as suspicious.", topics: ["AML/KYC"] },
  { term: "Office of Financial Sanctions Implementation", acronym: "OFSI", plain: "The HM Treasury body responsible for implementing and enforcing financial sanctions in the UK.", detail: "OFSI maintains the UK's consolidated sanctions list and issues licences for permitted transactions. Firms must screen customers and transactions against OFSI's list. Breaching financial sanctions is a serious criminal offence.", topics: ["AML/KYC"] },
  { term: "Organised Trading Facility", acronym: "OTF", plain: "A type of trading venue for non-equity instruments (bonds, derivatives) introduced by MiFID II.", detail: "OTFs are a new category of trading venue created by MiFID II. Unlike MTFs, OTFs can exercise discretion in matching orders. They are used primarily for bonds, structured finance products, emission allowances, and derivatives.", topics: ["MiFID II"] },
  { term: "Payment Institution", acronym: "PI", plain: "A firm authorised to provide payment services (like money transfers or payment processing) but not to issue e-money.", detail: "PIs are regulated under the Payment Services Regulations 2017. They must be authorised or registered with the FCA. Unlike banks, they cannot accept deposits, they must safeguard customer funds in segregated accounts.", topics: ["FCA"] },
  { term: "Politically Exposed Person", acronym: "PEP", plain: "Someone who holds or has held a prominent public position, like a politician, judge, or senior military officer, and is therefore considered higher risk for corruption.", detail: "PEPs are subject to Enhanced Due Diligence under the MLRs 2017. Firms must obtain senior management approval, establish source of wealth and funds, and apply enhanced ongoing monitoring. Family members and close associates of PEPs are also treated as PEPs.", topics: ["AML/KYC"] },
  { term: "Proceeds of Crime Act 2002", acronym: "POCA", plain: "The main UK law making money laundering a criminal offence and requiring suspicious activity to be reported.", detail: "POCA 2002 creates three main money laundering offences: concealing/disguising/converting criminal property; arranging to acquire/use/possess criminal property; and acquisition/use/possession of criminal property. It also creates the obligation to report suspicious activity and the tipping off offence.", topics: ["AML/KYC"] },
  { term: "Professional Client", plain: "A more sophisticated category of client under MiFID II who receives less regulatory protection than retail clients.", detail: "Professional clients are assumed to have the experience, knowledge, and expertise to make their own investment decisions. They include banks, investment firms, insurance companies, and large corporates. Retail clients can request to be treated as professional clients ('opting up') if they meet certain criteria.", topics: ["MiFID II"] },
  { term: "Prudential Regulation Authority", acronym: "PRA", plain: "The Bank of England body that supervises the financial stability of banks, insurers, and major investment firms.", detail: "The PRA focuses on the safety and soundness of individual firms, ensuring they have enough capital and liquidity to survive stress. It works alongside the FCA (which focuses on conduct). The PRA supervises around 1,500 firms.", topics: ["FCA"] },
  { term: "Regulated Activity", plain: "A financial service that requires FCA authorisation to provide in the UK.", detail: "Regulated activities are defined in the Financial Services and Markets Act 2000 (Regulated Activities) Order 2001. They include: accepting deposits, dealing in investments, arranging deals, managing investments, providing financial advice, and (from October 2027) various cryptoasset activities.", topics: ["FCA"] },
  { term: "Retail Client", plain: "The most protected category of client under MiFID II, individuals and small businesses who receive the highest level of regulatory protection.", detail: "Retail clients receive the most comprehensive investor protections, including suitability and appropriateness assessments, best execution, detailed disclosure requirements, and access to the Financial Ombudsman Service. Any client who is not a professional client or eligible counterparty is a retail client by default.", topics: ["MiFID II"] },
  { term: "Risk-Based Approach", acronym: "RBA", plain: "Focusing AML/KYC controls on the areas of highest risk, rather than applying the same level of scrutiny to everyone.", detail: "The risk-based approach is a fundamental principle of the MLRs 2017. Firms must assess their own money laundering risks and apply controls proportionate to those risks. Higher-risk customers get more scrutiny (EDD); lower-risk customers may qualify for simplified checks (SDD).", topics: ["AML/KYC"] },
  { term: "Senior Managers and Certification Regime", acronym: "SM&CR", plain: "Rules that make specific named individuals in financial firms personally accountable for what happens in their area of responsibility.", detail: "SM&CR replaced the Approved Persons Regime in 2019. It has three tiers: Senior Managers (FCA-approved, personally accountable); Certified Persons (firm-certified annually); and Conduct Rules (apply to almost all staff). Senior Managers have a 'duty of responsibility' and can be personally fined or banned.", topics: ["FCA"] },
  { term: "Simplified Due Diligence", acronym: "SDD", plain: "A reduced level of customer checks permitted for genuinely low-risk customers or products.", detail: "SDD is permitted under the MLRs 2017 where the risk of money laundering is assessed as low. It allows firms to apply less intensive checks. However, firms must still monitor the relationship and apply standard CDD if the risk changes.", topics: ["AML/KYC"] },
  { term: "Stablecoin", plain: "A cryptocurrency designed to maintain a stable value, usually pegged to a fiat currency like the pound or dollar.", detail: "Stablecoins are used for payments, trading, and as a store of value. Under the UK's new crypto regime, stablecoin issuers must be FCA-authorised and meet requirements on backing assets, redemption, and disclosure.", topics: ["Crypto"] },
  { term: "Suspicious Activity Report", acronym: "SAR", plain: "A report that regulated firms must file with the National Crime Agency when they suspect a customer is involved in money laundering.", detail: "SARs are required under POCA 2002. Firms must file a SAR if they know or suspect that a person is engaged in money laundering. Filing a SAR provides a 'defence' against money laundering charges. After filing, firms must not 'tip off' the customer.", topics: ["AML/KYC"] },
  { term: "Systematic Internaliser", acronym: "SI", plain: "An investment firm that regularly executes client orders against its own account (rather than on a trading venue).", detail: "SIs are regulated under UK MiFID II and must comply with transparency requirements. They must publish firm quotes for liquid instruments and execute client orders at those prices. Using an SI can be consistent with best execution if it achieves a better outcome for the client.", topics: ["MiFID II"] },
  { term: "Threshold Conditions", plain: "The minimum standards a firm must meet to be authorised by the FCA.", detail: "Threshold conditions are set out in FSMA 2000 Schedule 6. They cover: legal status; location of offices; effective supervision; adequate resources; and suitability (fit and proper management, appropriate business model). Firms must continue to meet threshold conditions after authorisation.", topics: ["FCA"] },
  { term: "Tipping Off", plain: "The criminal offence of telling a customer (or anyone else) that a Suspicious Activity Report has been filed about them.", detail: "Tipping off is an offence under Section 333A POCA 2002. It prevents firms from alerting customers that they are under suspicion, which could prejudice a criminal investigation. Firms must be careful about how they handle SAR-related queries from customers.", topics: ["AML/KYC"] },
  { term: "Transaction Reporting", plain: "The requirement for investment firms to report details of every trade in financial instruments to the FCA.", detail: "Under UK MiFIR Article 26, investment firms must report transactions to the FCA (or via an ARM) by the close of the following business day. Reports contain up to 65 data fields. The FCA uses this data to detect market abuse and insider trading.", topics: ["MiFID II"] },
  { term: "Treating Customers Fairly", acronym: "TCF", plain: "The predecessor to Consumer Duty, a set of six outcomes that firms were required to achieve for their customers.", detail: "TCF was the FCA's main retail conduct standard from 2006 to 2023. It required firms to achieve six outcomes for customers. Consumer Duty (2023) replaced and significantly strengthened TCF, moving from 'avoid harm' to 'proactively deliver good outcomes'.", topics: ["FCA"] },
  { term: "UK Financial Intelligence Unit", acronym: "UKFIU", plain: "The NCA unit that receives and analyses Suspicious Activity Reports from regulated firms.", detail: "The UKFIU is part of the National Crime Agency. It receives SARs, provides 'consent' responses (allowing firms to proceed with flagged transactions), and uses SAR intelligence to support law enforcement investigations.", topics: ["AML/KYC"] },
  { term: "Wholesale Markets Review", plain: "The UK government's post-Brexit review of MiFID II rules for wholesale financial markets.", detail: "The UK Wholesale Markets Review (UKWMR) resulted in FSMA 2023, which gave HM Treasury and the FCA powers to reform the retained EU MiFID II/MiFIR framework. Key reforms include transaction reporting, consolidated tape, and transparency requirements.", topics: ["MiFID II"] },
];

const allTopics = ["All", "FCA", "AML/KYC", "MiFID II", "Crypto"];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return glossaryTerms.filter((t) => {
      const matchesTopic = activeTopic === "All" || t.topics.includes(activeTopic);
      const matchesSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        (t.acronym && t.acronym.toLowerCase().includes(q)) ||
        t.plain.toLowerCase().includes(q);
      return matchesTopic && matchesSearch;
    });
  }, [search, activeTopic]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const topicColors: Record<string, string> = {
    FCA: "oklch(0.28 0.08 255)",
    "AML/KYC": "oklch(0.35 0.12 195)",
    "MiFID II": "oklch(0.35 0.14 155)",
    Crypto: "oklch(0.42 0.18 290)",
  };

  return (
    <PageLayout>
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <BookMarked size={28} style={{ color: "var(--brand-gold)" }} />
              <h1 className="font-bold" style={{ color: "var(--foreground)" }}>
                Glossary
              </h1>
            </div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
              {glossaryTerms.length} regulatory terms defined in plain English. From AML to SMCR, no jargon left unexplained.
            </p>
            {/* Search */}
            <div className="relative max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--muted-foreground)" }} />
              <Input
                placeholder="Search terms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
                aria-label="Search glossary terms"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Topic filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTopics.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTopic(t)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all"
              style={{
                borderColor: activeTopic === t ? (topicColors[t] || "var(--brand-navy)") : "var(--border)",
                backgroundColor: activeTopic === t ? (topicColors[t] ? `${topicColors[t]}15` : "var(--secondary)") : "transparent",
                color: activeTopic === t ? (topicColors[t] || "var(--brand-navy)") : "var(--muted-foreground)",
              }}
              aria-pressed={activeTopic === t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>
          Showing {filtered.length} of {glossaryTerms.length} terms
        </p>

        {/* Alphabetical groups */}
        <div className="space-y-10">
          {grouped.map(([letter, terms]) => (
            <div key={letter}>
              <div
                className="text-2xl font-bold mb-4 pb-2 border-b"
                style={{ color: "var(--brand-navy)", borderColor: "var(--border)" }}
              >
                {letter}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {terms.map((t) => (
                  <div key={t.term} className="card-base p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
                          {t.term}
                        </h3>
                        {t.acronym && (
                          <span className="text-xs font-semibold" style={{ color: "var(--brand-teal)" }}>
                            {t.acronym}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 shrink-0">
                        {t.topics.map((topic) => (
                          <span
                            key={topic}
                            className="badge-pill text-xs"
                            style={{
                              backgroundColor: topicColors[topic] ? `${topicColors[topic]}12` : "var(--surface-3)",
                              color: topicColors[topic] || "var(--muted-foreground)",
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                      {t.plain}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookMarked size={48} className="mx-auto mb-4" style={{ color: "var(--muted-foreground)" }} />
            <p style={{ color: "var(--muted-foreground)" }}>No terms match your search.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
