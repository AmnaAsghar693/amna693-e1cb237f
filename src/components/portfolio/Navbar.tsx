import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";

      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) {
          current = l.id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        backdrop-blur-xl
        bg-gradient-to-r
        from-[#0d1117]/95
        via-[#161b22]/95
        to-[#0d1117]/95
        border-b border-violet-500/20
        shadow-lg shadow-black/30
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="font-bold text-lg tracking-wide"
        >
          <span className="text-gray-400">&lt;</span>
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Front-End
          </span>
          <span className="text-gray-400"> /&gt;</span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === l.id
                  ? "text-violet-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {l.label}

              <span
                className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ${
                  active === l.id
                    ? "opacity-100 scale-x-100 bg-violet-500"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-white/10 bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i
            className={`fa-solid ${
              open ? "fa-xmark" : "fa-bars"
            } text-white`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        } bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/10`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                active === l.id
                  ? "bg-violet-500/10 text-violet-400"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
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