/* ============================================================
   DESIGN: Deep Ocean Protocol — Hero Section
   - Full-bleed background with generated blockchain image
   - Animated particle network overlay
   - Typewriter effect on role text
   - Diagonal bottom divider
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/EJgbrQMdmKdD5pSFfQolop/sandbox/ZzmCZ0JCf2eLNxLMoPquvf-img-1_1771889887000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUpnYnJRTWRtS2RENXBTRmZRb2xvcC9zYW5kYm94L1p6bUNaMEpDZjJlTE54TE1vUHF1dmYtaW1nLTFfMTc3MTg4OTg4NzAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZvmIZZpcN8XKbfoWQKiwAzvKIlKQUo4PL4uIwqu261hDKrejqLljej6N65sxvnpdLI44zRUax1~WalepannrEJE35fMzK3Q~5XyQPs6IQtBxu-Vud5vvrxoNe99T9gN6BmCCMSmk0dz-zIV1pPAXAWT56jc2DNfZTuI7jq6nUAP3TuHPAwSggLJyaeU-KErn57JifBCvVOyaGCRdvGD1USTHffYGWVVtbLwPgZepP~jmf3xpk0rYhE71ZEeX-toZLzRroiPwzs8SfGagyCkUfJcWf3P45ZYP9J2r2ekmcrEkPeZEQU26kMumR2RG0~aTD6AnBMQaLElbLvsnxMOUcQ__";

const roles = [
  "Senior Blockchain Developer",
  "Solidity Smart Contract Engineer",
  "DeFi Protocol Architect",
  "Web3 Full-Stack Developer",
  "Smart Contract Auditor",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "60+", label: "Smart Contracts" },
  { value: "8+", label: "DeFi Protocols" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (typing) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.25,
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(5,13,26,0.85) 0%, rgba(10,22,40,0.7) 50%, rgba(5,13,26,0.9) 100%)",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                  color: "#00D4FF",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                Available for Opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Maleeha
              <br />
              <span style={{ color: "#00D4FF" }}>Naveed</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="text-xl lg:text-2xl mb-6 h-8"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {displayed}
              <span className="animate-blink" style={{ color: "#00D4FF" }}>|</span>
            </div>

            {/* Bio */}
            <p
              className="text-base lg:text-lg mb-8 max-w-lg leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
              }}
            >
              Over 5 years building the decentralized future — from gas-optimized Solidity contracts
              and DeFi protocols to non-custodial wallets and cross-chain DApps. Audit-ready code
              is not a feature; it is the standard.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-teal px-7 py-3 rounded-lg text-sm font-semibold"
              >
                View Projects
              </button>
              <a
                href="/MaleehaNaveed_Resume.pdf"
                download
                className="btn-outline-teal px-7 py-3 rounded-lg text-sm font-semibold inline-block"
              >
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/maleeha045"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/maleehanaveed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:maleehanaveed045@gmail.com"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
           

            {/* Tech stack pills */}
            <div
              className="glass-card rounded-xl p-5 col-span-2"
              style={{ borderLeft: "3px solid rgba(244, 196, 48, 0.4)" }}
            >
              <p
                className="text-xs mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "Rust", "Hardhat", "Ethers.js", "Web3.js", "Uniswap V3", "AaveV3", "Chainlink", "IPFS", "ERC-20/721", "DApps", "DeFi", "Python", "Node.js"].map(tech => (
                  <span key={tech} className="skill-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
        <ChevronDown size={16} />
      </button>

      {/* Diagonal bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "80px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ display: "block" }}
        >
          <path d="M0,80 L1440,0 L1440,80 Z" fill="#050D1A" />
        </svg>
      </div>
    </section>
  );
}
