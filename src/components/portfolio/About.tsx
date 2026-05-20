import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { CVModal } from "./CVModal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const STATS = [
  { label: "Projects Completed", value: <><Counter to={10} suffix="+" /></>, icon: "fa-solid fa-code" },
  { label: "Technologies", value: <><Counter to={10} suffix="+" /></>, icon: "fa-solid fa-layer-group" },
  { label: "Learning", value: "Always", icon: "fa-solid fa-brain" },
  { label: "Location", value: "Narowal, PK", icon: "fa-solid fa-location-dot" },
];

const FUN = [
  { emoji: "🎨", text: "I love clean UI" },
  { emoji: "⚡", text: "Fast learner" },
  { emoji: "💡", text: "Creative thinker" },
];

export function About() {
  const [cvOpen, setCvOpen] = useState(false);
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle kicker="Who I Am" title="About Me" />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="glass-card p-8 lg:p-10" data-aos="fade-right">
            <p className="text-lg text-[var(--text-primary)]/90 leading-relaxed">
              I'm <span className="text-gradient-brand font-semibold">Amna Asghar</span>, a passionate
              Frontend Developer from Narowal, Punjab, Pakistan. I love turning ideas into reality
              through clean code and creative design. I specialize in building responsive, modern
              web interfaces using the latest technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {FUN.map((f) => (
                <span key={f.text} className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10">
                  <span className="mr-2">{f.emoji}</span>{f.text}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center gap-2 btn-primary-glow px-5 py-3 rounded-lg font-semibold"
              >
                <i className="fa-regular fa-eye" /> View CV
              </button>
              <a
                href="/Amna_Asghar_CV.pdf"
                download="Amna_Asghar_CV.pdf"
                className="inline-flex items-center gap-2 btn-outline-glow px-5 py-3 rounded-lg font-semibold"
              >
                <i className="fa-solid fa-download" /> Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card p-6 flex flex-col justify-between">
                <i className={`${s.icon} text-2xl text-[var(--brand-cyan)]`} />
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-gradient-brand">{s.value}</div>
                  <div className="text-sm text-[var(--text-muted)] mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}