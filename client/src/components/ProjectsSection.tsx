/* ============================================================
   DESIGN: Deep Ocean Protocol — Projects Section
   - Card grid with glassmorphism
   - Project images from generated assets
   - Tech tags, GitHub/live links
   - Featured project spans full width
   ============================================================ */
import { useState } from "react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

import penguinBanner from "../assets/banner.png";
import pumpbit from "../assets/pumpbit.png";
import AstraWallet from "../assets/AstraWallet.jpeg"
import invoicemate from "../assets/invoicemate.png";


const DEFI_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/EJgbrQMdmKdD5pSFfQolop/sandbox/ZzmCZ0JCf2eLNxLMoPquvf-img-3_1771889892000_na1fn_ZGVmaS1wcm9qZWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUpnYnJRTWRtS2RENXBTRmZRb2xvcC9zYW5kYm94L1p6bUNaMEpDZjJlTE54TE1vUHF1dmYtaW1nLTNfMTc3MTg4OTg5MjAwMF9uYTFmbl9aR1ZtYVMxd2NtOXFaV04wLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fKgng808ZcvPqHxCEqf6PzdoxQkr5aBAZtwWs6DQ3TYny~478v2i3kST5KYiUuYHGIUDSEUiQflo3REqaOb9YwFe~3osgRSobSWI75i0oTUUGutF-lObUd~3NnzEyWckf4T1pyG0qRwBYGMeaLsXobCe~ojnjZYCl1dQ3~irbebQQqd76Zkfw29~pMMMGIChrNLRuxyW26065ppCUs12cU2Kzu~IcG3ICFlj50tl98iFQ7RNJJXL3SjJZ5IM5ckzKwS2ASNtKBuBT-VHdnl7VFm1I~oKO-~PGF-KGD4HYRGU08jEXmrhBZ7dxZj-8n~djZ-BfpbKkr9dV-9CgpnCMw__";
const WALLET_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/EJgbrQMdmKdD5pSFfQolop/sandbox/ZzmCZ0JCf2eLNxLMoPquvf-img-4_1771889886000_na1fn_d2FsbGV0LXByb2plY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUpnYnJRTWRtS2RENXBTRmZRb2xvcC9zYW5kYm94L1p6bUNaMEpDZjJlTE54TE1vUHF1dmYtaW1nLTRfMTc3MTg4OTg4NjAwMF9uYTFmbl9kMkZzYkdWMExYQnliMnBsWTNRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UTvmvmuUzW13WIHqEzHrWRxQ5XR1v-VJlPy9Da-PwN1uE-IvypO6Wz--WMPc9NQtMBIVIKQAetGLwmyzJUn8ne1gjENeJOBxjoYNYXJYkNABkr2zwdEaIiMay9qaSBNPts637OiMQudPWIbyIfqid4d82X6Oscs1wNcn~HT~cm9DdZ5kwmKylxKkjCR7xtastJFP42X9QdvFOEfjgd2u99ckJNmaGJk46Ujl8dLTGE5VVuiSjO~qn9iUPAkt~4KpNb3lfuH8tkBFuxQDJJmUja4GLLi2XQaR-UVZAncDeUa1xSpMgoL~7ImHMGOLD66KRK8ce143kgKoR6Z0ZJPOzg__";
const NFT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/EJgbrQMdmKdD5pSFfQolop/sandbox/ZzmCZ0JCf2eLNxLMoPquvf-img-5_1771889890000_na1fn_bmZ0LW1hcmtldHBsYWNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUpnYnJRTWRtS2RENXBTRmZRb2xvcC9zYW5kYm94L1p6bUNaMEpDZjJlTE54TE1vUHF1dmYtaW1nLTVfMTc3MTg4OTg5MDAwMF9uYTFmbl9ibVowTFcxaGNtdGxkSEJzWVdObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=s2cFziLLFRXD1W3MCp6fd1wfk5o2R~VM9Aw8JHC4dwG3KIojsBbwLQ0xJY9F-VBxNlIoLMDhPwVyHEj4kXk7Olp1GL8X1L4tQDHeFolZ5-v97NHlrX9Vao~HCPIyTBOFONqFgLdCINQ6YXCOkkGWfTPinK2K~nE1Nlq0Z7RmrAyi2S0C1zvheF5HYxaNg8lNbUFLkKYqYY1l7x-zv6QnZhdTAnKoMQntPsOvapam~z0VofJPcZeDxwSpQpP0tZeTVoMQYZ3yEVJbZt9UL~aw7IkEd7POT1jS6abviZMrRKmr0mW1cyPolEsQgpNXYBohXio0uQNCOWQyUVz9SCK-FQ__";

const projects = [
  {
    id: 1,
    title: "AstraWallet — Non-Custodial Multi-Chain Wallet",
    category: "Wallet Infrastructure",
    description:
      "A Trust Wallet-inspired non-custodial wallet supporting both EVM chains (Ethereum, BSC, Polygon, Arbitrum) and Solana. Built with zero server-side key storage — private keys are derived client-side using ECDSA and BIP-39 mnemonic phrases. Integrated 1inch for aggregated swaps, Uniswap for DEX access, MoonPay for fiat on-ramp, and CoinMarketCap for live pricing.",
    image: AstraWallet,
    featured: true,
    tags: ["Solidity", "ECDSA", "BIP-39", "1inch API", "Uniswap", "MoonPay", "Ethers.js", "Solana", "React"],
    highlights: [
      "Zero private key server storage — fully non-custodial",
      "Multi-chain: EVM (ETH, BSC, Polygon, Arbitrum) + Solana",
      "Aggregated swaps via 1inch across 10+ EVM networks",
      "Fiat on-ramp via MoonPay integration",
    ],
    github: "https://github.com/maleeha045/Astra-Walet",
    live: "http://www.astraprotocol.com/",
    accentColor: "#00D4FF",
  },
    {
    id: 2,
    title: "Pumpbit — A Crypto Trading Platform",
    category: "Trading Platform",
    description:
"A crypto trading platform designed to facilitate perpetual contract trading on the B2 network and offer a staking feature for liquidity pools.",
    image: pumpbit,
    featured: false,
    tags: ["Solidity", "Binance API", "AMM","Next.js", "Node.js", "Hardhat", "Web3.js"],
    highlights: [
     "B2 Network Integration: Trade perpetual contracts on the B2 network, leveraging its robust infrastructure for seamless trading experiences",
     "Real-time Data Analytics: Access real-time market data and analytics to make informed trading decisions",
     "Order Management: Users can create market or limit orders, which are executed automatically with user-set margins",
     "Automatic Position Management: Positions are automatically closed based on user-set take-profit (TP) or stop-loss (SL) levels",
     "Manual Position Closure: Users can manually close positions at any time",
    ],
    github: "https://github.com/maleeha045/pumpbit",
    live: "https://testnet.pumpbit.io/",
    accentColor: "#00D4FF",
  },
  
  {
    id: 3,
    title: "InvoiceMate — Decentralized Credit Protocol",
    category: "DeFi Protocol",
    description:
      "A decentralized invoice financing protocol that transforms risk-scored invoices into short-term financial instruments. Enables crypto borrowing without crypto collateral through a KYI (Know Your Investor) mechanism. Deployed across BSC, Arbitrum, HAQQ, and IOTA networks with the DEFA governance token powering lending pool decisions.",
    image: invoicemate,
    featured: false,
    tags: ["Solidity", "DeFi", "DEFA Token", "BSC", "Arbitrum", "HAQQ", "IOTA", "Hardhat", "Ethers.js"],
    highlights: [
      "Invoice-backed lending without crypto collateral",
      "DEFA governance token for lending pool management",
      "Multi-chain: BSC, Arbitrum, HAQQ, IOTA",
      "KYI compliance mechanism built into contracts",
    ],
    github: "https://github.com/maleeha045/FinanceMate-HAQQ",
    live: "https://invoicemate.net/",
    accentColor: "#F4C430",
  },
{
    id: 4,
    title: "PenguinVault — NFT Marketplace",
    category: "NFT Marketplace",
    description:
      "An NFT Marketplace that allows users to discover, list, and trade unique digital assets with a seamless redirection to OpenSea for secure transaction fulfillment.",
    image: penguinBanner,
    featured: false,
    tags: ["OpenSea API", "Vite", "React.js", "Node.js", "Wagmi", "Ethers.js"],
    highlights: [
      "🦊 Web3 Wallet Integration: Full support for MetaMask and Coinbase Wallet",
      "🔄 Live OpenSea Sync: Real-time floor prices, traits, and listing status via REST API",
      "🎨 Themed Discovery: Custom UI components built specifically for character-based NFT collections",
      "🛡️ Secure Redirection: Direct routing to OpenSea asset pages for Buy/Sell execution to prevent phishing and contract risks",
      "⚡ Multi-Chain Support: Seamlessly browse assets across Ethereum, Polygon, and Arbitrum",
    ],
    github: "https://github.com/maleeha045/penguin_nft_marketplace",
    live: "https://project-opensea-like-nft-marketplace-991.magicpatterns.app/",
    accentColor: "#F4C430",
  },
   
 
];

type FilterType = "All" | "DeFi Protocol" | "Wallet Infrastructure" | "Token Engineering" | "NFT / Web3" | "E-Commerce DApp" | "DeFi / Staking";
const filters: FilterType[] = ["All", "DeFi Protocol", "Wallet Infrastructure", "Token Engineering", "NFT / Web3"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter || p.tags.some(t => activeFilter.includes(t)));

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #050D1A 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244,196,48,0.03) 0%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHAT I'VE BUILT
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            Projects
          </h2>
          <div className="teal-line w-16 mb-6" />
          <p
            className="text-base max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
          >
            A selection of blockchain and DeFi projects spanning wallet infrastructure, lending protocols,
            token engineering, and NFT ecosystems — each built with production-grade security standards.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: activeFilter === filter
                  ? "linear-gradient(135deg, #00D4FF, #0099CC)"
                  : "rgba(255,255,255,0.05)",
                color: activeFilter === filter ? "#050D1A" : "rgba(255,255,255,0.6)",
                border: activeFilter === filter
                  ? "none"
                  : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl overflow-hidden project-card ${project.featured ? "lg:col-span-3" : ""}`}
              style={{ borderTop: `2px solid ${project.accentColor}30` }}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${project.featured ? "h-64 lg:h-80" : "h-48"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 30%, rgba(5,13,26,0.9) 100%)`,
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "rgba(5,13,26,0.8)",
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                      fontFamily: "'Space Grotesk', sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                {/* Links overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(5,13,26,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(5,13,26,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${project.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""}`}>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.3 }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {expanded === project.id || project.description.length < 200
                      ? project.description
                      : project.description.slice(0, 180) + "..."}
                  </p>
                  {project.description.length >= 200 && (
                    <button
                      onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                      className="flex items-center gap-1 text-xs mb-4"
                      style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {expanded === project.id ? "Show less" : "Read more"}
                      <ChevronRight
                        size={12}
                        style={{ transform: expanded === project.id ? "rotate(90deg)" : "none" }}
                      />
                    </button>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map(tag => (
                      <span key={tag} className="skill-badge">{tag}</span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="skill-badge">+{project.tags.length - 6}</span>
                    )}
                  </div>
                </div>

                {/* Highlights (featured only) */}
                {project.featured && (
                  <div>
                    <p
                      className="text-xs mb-3 tracking-widest"
                      style={{
                        color: project.accentColor,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Key Highlights
                    </p>
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                            style={{
                              background: `${project.accentColor}15`,
                              color: project.accentColor,
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {i + 1}
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
