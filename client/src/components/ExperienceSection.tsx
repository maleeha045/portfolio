/* ============================================================
   DESIGN: Deep Ocean Protocol — Experience Section
   - Vertical timeline with glowing teal nodes
   - Glassmorphism cards for each role
   - Gold accent for current/recent positions
   - Scroll-triggered animations
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companyLinks: Record<string, string> = {
  "Astra Protocol": "https://astraprotocol.com",
  "Delnorte Terra Vision": "https://delnorte.io",

  "InvoiceMate": "https://invoicemate.io",
  "Bloctech Solutions": "https://bloctech.io",

};

const getCompanyLink = (company: string): string => {
  return companyLinks[company] || "#";
};

const experiences = [
  {
    company: "Astra Protocol",
    role: "Senior Blockchain Developer",
    period: "Aug 2025 – Mar 2026",
    location: "Onsite",
    current: true,
    color: "#00D4FF",
    achievements: [
      "Led architecture of a non-custodial wallet supporting both EVM and Non-EVM (Solana) chains, ensuring zero server-side private key storage.",
      "Implemented secure client-side mnemonic phrase generation and private key derivation for EVM and Solana wallets using ECDSA.",
      "Integrated 1inch API for aggregated swap execution across multiple EVM networks and Uniswap for direct DEX access.",
      "Integrated MoonPay API for fiat-to-crypto on-ramping and CoinMarketCap APIs for real-time pricing data.",
    ],
    tags: ["Non-Custodial Wallet", "ECDSA", "1inch API", "Uniswap", "MoonPay", "Solana", "EVM"],
  },
  {
    company: "Delnorte Terra Vision",
    role: "Solidity Blockchain Developer",
    period: "Mar 2025 – Jun 2025",
    location: "Remote",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Designed and developed two custom tokens — DTVC and DTV — including HashLock security audit and successful DTVC listing on MEXC exchange.",
      "Deployed 8–9 Solidity smart contracts to Ethereum Mainnet for CRM infrastructure, ensuring robust and secure solutions.",
      "Integrated deployed contracts with the frontend application for seamless user interaction.",
      "Contributed to a government data solution leveraging AI and blockchain for enhanced public sector accountability.",
    ],
    tags: ["ERC-20 Tokens", "HashLock Audit", "MEXC Exchange", "Ethereum Mainnet", "CRM Contracts"],
  },

  {
    company: "InvoiceMate",
    role: "Senior Blockchain Developer",
    period: "Mar 2024 – Feb 2025",
    location: "Onsite",
    current: false,
    color: "#F4C430",
    achievements: [
      "Built a decentralized credit protocol with KYI (Know Your Investor) for invoice financing — turning risk-scored invoices into financial instruments.",
      "Designed and deployed the DEFA governance token for InvoiceMate's lending pools.",
      "Integrated smart contracts with multi-wallet frontend across BSC, Arbitrum, HAQQ, and IOTA networks.",
      "Contributed to XperiencePay — a blockchain-integrated e-commerce platform for luxury goods (yachts, private jets, rare art).",
      "Developed and deployed smart contracts enabling secure transactions, token integration, and governance mechanisms.",
      "Integrated Uniswap V3 for token swapping across ~10 cryptocurrencies and Chainlink oracles for real-time price feeds.",
    ],
    tags: ["DeFi Credit Protocol", "DEFA Token", "KYI", "BSC", "Arbitrum", "HAQQ", "IOTA", "Uniswap V3", "Chainlink Oracles"],
  },
  {
    company: "Bloctech Solutions",
    role: "Blockchain Developer",
    period: "Mar 2021 – Jan 2024",
    location: "Onsite",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Developed DApps including staking platforms, NFT marketplaces, and ICOs using Hardhat and Remix IDE.",
      "Gained hands-on experience with presale, staking, multi-staking, ROI contracts, reflection tokens, stablecoins, and referral systems.",
      "Deployed across Ethereum and Binance Smart Chain (BSC) EVM-compatible networks.",
      "Built deep understanding of Solidity, contract security best practices, gas optimization, and upgradability patterns.",
      "Studied blockchain architecture, consensus mechanisms, financial markets, and cryptographic concepts.",
    ],
    tags: ["Staking Platforms", "NFT Marketplace", "ICO", "Hardhat", "BSC", "Ethereum", "Solidity", "Gas Optimization", "Cryptography"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className="relative pl-12 lg:pl-20 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Timeline node */}
      <div
        className="absolute left-1.5 lg:left-5 top-6 w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          background: exp.color === "#F4C430"
            ? "rgba(244, 196, 48, 0.15)"
            : "rgba(0, 212, 255, 0.15)",
          border: `2px solid ${exp.color}`,
          boxShadow: `0 0 12px ${exp.color}60`,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: exp.color }}
        />
      </div>

      {/* Card */}
      <div
        className="glass-card rounded-xl p-6 project-card"
        style={{
          borderLeft: `3px solid ${exp.color}40`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <a
                href={getCompanyLink(exp.company)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-teal-400 transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {exp.company}
              </a>
              {exp.current && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                    color: "#00D4FF",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Recent
                </span>
              )}
            </div>
            <p
              className="text-sm font-medium"
              style={{ color: exp.color, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {exp.role}
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {exp.period}
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              {exp.location}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.achievements.map((ach, j) => (
            <li
              key={j}
              className="flex items-start gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#00D4FF", marginTop: "2px", flexShrink: 0 }}>▸</span>
              {ach}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map(tag => (
            <span key={tag} className="skill-badge">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CAREER JOURNEY
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            Experience
          </h2>
          <div className="teal-line w-16" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 lg:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #00D4FF 0%, rgba(0,212,255,0.1) 100%)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
