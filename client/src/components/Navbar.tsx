/* ============================================================
   DESIGN: Deep Ocean Protocol — Navbar
   - Glassmorphism background on scroll
   - Teal accent on active/hover links
   - Space Grotesk font for nav items
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5, 13, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.08)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
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
              fontSize: "1rem",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Maleeha<span style={{ color: "#00D4FF" }}>.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="nav-link"
              style={{
                color: activeSection === item.href.slice(1)
                  ? "#00D4FF"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MaleehaNaveed_Resume.pdf"
            download
            className="btn-teal px-5 py-2 rounded text-sm inline-block"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(5, 13, 26, 0.97)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-3 nav-link border-b"
              style={{ borderColor: "rgba(0,212,255,0.08)" }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MaleehaNaveed_Resume.pdf"
            download
            className="btn-teal w-full mt-4 py-3 rounded text-sm inline-block text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
