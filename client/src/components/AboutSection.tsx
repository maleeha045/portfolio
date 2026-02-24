/* ============================================================
   DESIGN: Deep Ocean Protocol — About Section
   - Asymmetric two-column layout
   - Glassmorphism card with about-visual image
   - Key achievements with gold accent
   - Scroll-triggered animations
   ============================================================ */
import { Shield, Zap, Code2, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ABOUT_IMG from "../assets/profile2.jpeg"


const highlights = [
  {
    icon: Shield,
    title: "Audit-Ready Code",
    desc: "Every contract is written with security-first principles, rigorous edge-case analysis, and audit-readiness as a baseline standard.",
  },
  {
    icon: Zap,
    title: "Gas Optimization",
    desc: "Deep expertise in Solidity gas optimization patterns — from storage packing to assembly-level tricks — reducing deployment and execution costs.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web3",
    desc: "End-to-end DApp development: smart contracts, frontend integration with Ethers.js/Web3.js, and backend tooling with Node.js.",
  },
  {
    icon: Award,
    title: "Exchange-Listed Tokens",
    desc: "Designed and launched DTVC token on MEXC exchange, audited by HashLock — from contract design through listing.",
  },
];

export default function AboutSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050D1A 0%, #0A1628 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHO I AM
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            About Me
          </h2>
          <div className="teal-line w-16" />
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-5 gap-12 items-start transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Left: Image + quick facts */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden mb-6 relative"
              style={{
                border: "1px solid rgba(0, 212, 255, 0.15)",
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.08)",
              }}
            >
              <img
                src={ABOUT_IMG}
                alt="Blockchain Development Workspace"
                className="w-full object-cover"
                style={{ height: "320px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(5,13,26,0.6) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Certifications */}
            <div
              className="glass-card rounded-xl p-5"
              style={{ borderLeft: "3px solid rgba(244, 196, 48, 0.5)" }}
            >
              <p
                className="text-xs mb-3 tracking-widest"
                style={{
                  color: "#F4C430",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Certifications
              </p>
              <ul className="space-y-2">
                {[
                  "DeFi: The Future of Finance — Duke University",
                  "Blockchain Basics — Great Learning",
                  "Python For Everybody — University of Michigan",
                  "Cybersecurity Specialization — Google",
                  "Blockchain in Financial Services — Coursera",
                ].map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span style={{ color: "#F4C430", marginTop: "2px", flexShrink: 0 }}>▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Bio + highlights */}
          <div className="lg:col-span-3">
            <p
              className="text-lg mb-4 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
              }}
            >
              My name is Maleeha and I am a Senior Blockchain Developer with over{" "}
              <span style={{ color: "#00D4FF", fontWeight: 600 }}>5 years of comprehensive experience</span>{" "}
              in the blockchain ecosystem. My technical expertise centers on Solidity development,
              DeFi & L2 protocols, AMMs, and smart contract auditing.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              I am proficient in JavaScript and Node.js for backend integration and custom tooling.
              My development process emphasizes contract readability, gas efficiency, and audit-readiness —
              because in blockchain, the cost of a bug is not a rollback; it is a headline.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-5 project-card"
                  style={{
                    borderTop: "2px solid rgba(0, 212, 255, 0.15)",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(0, 212, 255, 0.1)" }}
                  >
                    <item.icon size={18} style={{ color: "#00D4FF" }} />
                  </div>
                  <h4
                    className="font-semibold text-white mb-2 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
