const LINKS = ["home", "about", "skills", "projects", "contact"];
const SOCIALS = [
  { icon: "fa-brands fa-facebook-f", href: "https://facebook.com/amnarukhsar" },
  { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com/in/amnarukhsar" },
  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/923299104922" },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative pt-16 pb-8 bg-[#0a0d12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className="font-mono-code text-2xl">
          <span className="text-[var(--text-muted)]">&lt;</span>
          <span className="text-gradient-brand font-semibold">Amna</span>
          <span className="text-[var(--text-muted)]"> /&gt;</span>
        </div>
        <nav className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[var(--text-muted)]">
          {LINKS.map((l) => (
            <button key={l} onClick={() => go(l)} className="capitalize hover:text-white transition-colors">
              {l}
            </button>
          ))}
        </nav>
        <div className="mt-6 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full grid place-items-center border border-white/10 text-[var(--text-muted)] hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] transition-all">
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <div className="mt-10 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(110,64,201,0.5), rgba(0,212,255,0.5), transparent)" }} />
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          © 2025 Amna Asghar. Crafted with <span className="text-pink-400">❤</span> & lots of <span>☕</span>
        </p>
      </div>
    </footer>
  );
}