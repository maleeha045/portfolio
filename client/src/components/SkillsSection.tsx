/* ============================================================
   DESIGN: Deep Ocean Protocol — Skills Section
   - Categorized skill groups with glassmorphism cards
   - Animated progress bars for proficiency (scroll-triggered)
   - Hexagonal badge grid for tech stack
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Blockchain & Smart Contracts",
    color: "#00D4FF",
    icon: "⬡",
    skills: [
      { name: "Solidity", level: 97 },
      { name: "Smart Contract Auditing", level: 90 },
      { name: "Gas Optimization", level: 92 },
      { name: "Upgradeable Contracts (UUPS/Proxy)", level: 88 },
      { name: "ERC Standards (20/721/1155/3643)", level: 95 },
    ],
  },
  {
    title: "DeFi Protocols & Integrations",
    color: "#F4C430",
    icon: "◈",
    skills: [
      { name: "Uniswap V2/V3 (AMM)", level: 92 },
      { name: "Aave V3 (Flash Loans)", level: 85 },
      { name: "Chainlink Oracles", level: 88 },
      { name: "1inch Aggregator", level: 85 },
      { name: "DeFi Protocol Architecture", level: 90 },
    ],
  },
  {
    title: "Web3 Development",
    color: "#00D4FF",
    icon: "◇",
    skills: [
      { name: "Ethers.js", level: 93 },
      { name: "Web3.js", level: 88 },
      { name: "Hardhat", level: 95 },
      { name: "Alchemy / Infura / Moralis", level: 88 },
      { name: "IPFS / Pinata", level: 85 },
    ],
  },
  {
    title: "Languages & Backend",
    color: "#F4C430",
    icon: "◉",
    skills: [
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Python", level: 78 },
      { name: "SQL / MongoDB", level: 75 },
      { name: "React / Frontend Integration", level: 80 },
    ],
  },
];

const techBadges = [
  "Solidity", "Hardhat", "Ethers.js", "Web3.js", "Truffle",
  "Remix IDE", "OpenZeppelin", "Chainlink", "IPFS", "Moralis",
  "Alchemy", "Infura", "MetaMask", "WalletConnect", "Uniswap V3",
  "Aave V3", "1inch", "MoonPay", "ERC-20", "ERC-721",
  "ERC-1155", "ERC-3643", "ECDSA", "BIP-39", "Slither",
  "JavaScript", "TypeScript", "Node.js", "React", "Python",
  "BSC", "Arbitrum", "Polygon", "Ethereum", "Solana",
];

function SkillCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 project-card transition-all duration-700"
      style={{
        borderTop: `2px solid ${cat.color}30`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl" style={{ color: cat.color }}>{cat.icon}</span>
        <h3
          className="font-bold text-white text-base"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {cat.title}
        </h3>
      </div>
      <div className="space-y-4">
        {cat.skills.map((skill, si) => (
          <div key={si}>
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="text-sm"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                }}
              >
                {skill.name}
              </span>
              <span
                className="text-xs"
                style={{ color: cat.color, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {skill.level}%
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                  boxShadow: `0 0 8px ${cat.color}40`,
                  transitionDelay: `${index * 0.15 + si * 0.08}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref: badgeRef, visible: badgeVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            TECHNICAL EXPERTISE
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            Skills & Stack
          </h2>
          <div className="teal-line w-16" />
        </div>

        {/* Skill categories grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <SkillCard key={ci} cat={cat} index={ci} />
          ))}
        </div>

        {/* Full tech stack badges */}
        <div
          ref={badgeRef}
          className="glass-card rounded-2xl p-8 transition-all duration-700"
          style={{
            borderTop: "2px solid rgba(0,212,255,0.15)",
            opacity: badgeVisible ? 1 : 0,
            transform: badgeVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            className="text-xs mb-6 tracking-widest text-center"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Full Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="skill-badge transition-all duration-300"
                style={{
                  opacity: badgeVisible ? 1 : 0,
                  transform: badgeVisible ? "scale(1)" : "scale(0.8)",
                  transitionDelay: `${i * 0.03}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
