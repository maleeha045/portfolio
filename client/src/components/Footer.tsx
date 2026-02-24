/* ============================================================
   DESIGN: Deep Ocean Protocol — Footer
   - Minimal, dark, with teal accent
   - Quick nav links + copyright
   ============================================================ */
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 relative"
      style={{
        background: "#030A14",
        borderTop: "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <div
              className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #00D4FF, #0099CC)",
                color: "#050D1A",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              MN
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Maleeha Naveed
            </span>
          </button>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["about", "experience", "projects", "skills"].map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs capitalize transition-colors duration-200 hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                }}
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/maleehanaveed" },
              { icon: Linkedin, href: "https://linkedin.com/in/maleehanaveed" },
              { icon: MessageCircle, href: "https://t.me/maleehanaveed" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Maleeha Naveed · Senior Blockchain Developer · Built with{" "}
          <span style={{ color: "#00D4FF" }}>♦</span> and Solidity
        </div>
      </div>
    </footer>
  );
}
