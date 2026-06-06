import { useState } from "react";
import { toast } from "sonner";
import { SectionTitle } from "./SectionTitle";

const INFO = [
  { icon: "fa-solid fa-envelope", label: "Email", value: "amnarukhsar693@gmail.com", href: "mailto:amnarukhsar693@gmail.com" },
  { icon: "fa-solid fa-phone", label: "Phone", value: "+92 329 9104922", href: "tel:+923299104922" },
  { icon: "fa-solid fa-location-dot", label: "Location", value: "Narowal, Punjab, Pakistan" },
];

const SOCIALS = [
  { icon: "fa-brands fa-github", href: "https://github.com/AmnaAsghar693", color: "#1877F2", label: "Github" },
  { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/in/amnarukhsar", color: "#0A66C2", label: "LinkedIn" },
  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/923299104922", color: "#25D366", label: "WhatsApp" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", { description: "Thanks for reaching out — I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 bg-[rgba(22,27,34,0.35)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle kicker="Let's Talk" title="Get In Touch" />
        <p className="text-center text-[var(--text-muted)] -mt-8 mb-12">
          Have a project in mind? Let's work together!
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-4" data-aos="fade-right">
            {INFO.map((i) => {
              const inner = (
                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg grid place-items-center" style={{ background: "var(--gradient-brand-soft)" }}>
                    <i className={`${i.icon} text-xl text-[var(--brand-cyan)]`} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{i.label}</div>
                    <div className="font-mono-code text-[var(--text-primary)]">{i.value}</div>
                  </div>
                </div>
              );
              return i.href ? <a key={i.label} href={i.href}>{inner}</a> : <div key={i.label}>{inner}</div>;
            })}

            <div className="pt-2 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-14 h-14 rounded-full glass-card grid place-items-center text-xl transition-all"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${s.color}88, 0 0 0 1px ${s.color}66`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="glass-card p-6 lg:p-8 space-y-4" data-aos="fade-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="float-field">
                <input id="f-name" placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <label htmlFor="f-name">Full Name</label>
              </div>
              <div className="float-field">
                <input id="f-email" type="email" placeholder=" " value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <label htmlFor="f-email">Email</label>
              </div>
            </div>
            <div className="float-field">
              <input id="f-subj" placeholder=" " value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
              <label htmlFor="f-subj">Subject</label>
            </div>
            <div className="float-field">
              <textarea id="f-msg" placeholder=" " value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <label htmlFor="f-msg">Message</label>
            </div>
            <button type="submit" className="btn-primary-glow w-full py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2">
              <i className="fa-solid fa-paper-plane" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}