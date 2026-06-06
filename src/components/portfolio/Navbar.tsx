import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      let current = "home";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[rgba(13,17,23,0.7)] border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="font-mono-code text-lg tracking-tight">
          <span className="text-[var(--text-muted)]">&lt;</span>
          <span className="text-gradient-brand font-semibold">Front-End</span>
          <span className="text-[var(--text-muted)]"> /&gt;</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <span className={active === l.id ? "text-white" : ""}>{l.label}</span>
              <span
                className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ${
                  active === l.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ background: "var(--gradient-brand)" }}
              />
            </button>
          ))}
        </nav>

        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-white`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        } backdrop-blur-xl bg-[rgba(13,17,23,0.92)] border-b border-white/5`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-left px-4 py-3 rounded-md transition-colors ${
                active === l.id ? "text-white bg-white/5" : "text-[var(--text-muted)] hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}