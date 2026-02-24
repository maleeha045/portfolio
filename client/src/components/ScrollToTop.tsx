/* ============================================================
   DESIGN: Deep Ocean Protocol — Scroll To Top Button
   - Appears after scrolling 400px
   - Teal glow on hover
   ============================================================ */
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #00D4FF, #0099CC)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
        color: "#050D1A",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
