/* ============================================================
   DESIGN: Deep Ocean Protocol — Contact Section
   - Split layout: contact info left, form right
   - Glassmorphism form with teal focus states
   - Social links with hover glow effects
   ============================================================ */
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "maleeha.naveed@example.com",
    href: "mailto:maleeha.naveed@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan (UTC +5:00)",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to remote opportunities",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com", color: "#ffffff" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "#0A66C2" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me", color: "#00D4FF" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(0,212,255,0.15)",
    borderRadius: "8px",
    color: "rgba(255,255,255,0.85)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #050D1A 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            LET'S CONNECT
          </p>
          <h2 className="section-heading text-4xl lg:text-5xl mb-4">
            Get In Touch
          </h2>
          <div className="teal-line w-16" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.8,
              }}
            >
              Whether you are building a DeFi protocol, need a smart contract audit,
              or want to discuss a Web3 project — I would love to hear from you.
              I am currently open to senior blockchain developer roles and freelance engagements.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                  >
                    <item.icon size={16} style={{ color: "#00D4FF" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm hover:text-teal-400 transition-colors"
                        style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p
                className="text-xs mb-4 tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Find Me Online
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                    }}
                  >
                    <social.icon size={15} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div
              className="glass-card rounded-2xl p-8"
              style={{ borderTop: "2px solid rgba(0,212,255,0.2)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(0,212,255,0.1)", border: "2px solid rgba(0,212,255,0.4)" }}
                  >
                    <Send size={24} style={{ color: "#00D4FF" }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs mb-2"
                        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="John Doe"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs mb-2"
                        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="DeFi Protocol Development"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-teal w-full py-3.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
