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
  {
    label: "Projects Completed",
    value: <><Counter to={10} suffix="+" /></>,
    icon: "fa-solid fa-code",
    image: "/project.jpg",
  },
  {
    label: "Technologies",
    value: <><Counter to={10} suffix="+" /></>,
    icon: "fa-solid fa-layer-group",
    image: "technology.jpg"
  },
  {
    label: "Learning",
    value: "Always",
    icon: "fa-solid fa-brain",
    image: "learning.jpg",
  },
  {
    label: "Location",
    value: "Narowal, PK",
    icon: "fa-solid fa-location-dot",
    image: "location.jpg",
  },
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
        <SectionTitle kicker="Who I Am" title="About Us" />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div
  className="glass-card p-8 lg:p-10 rounded-2xl border border-white/10 shadow-xl"
  data-aos="fade-right"
>
  {/* Heading */}
  <h1 className="text-4xl md:text-3xl font-extrabold mb-6 leading-tight">
    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
      About Me:
    </span>
  </h1>

  {/* Description */}
  <p className="text-lg md:text-xl text-[var(--text-primary)]/90 leading-relaxed">
    I'm <span className="font-semibold text-white">Amna Asghar</span>, a passionate
    Frontend Developer from Narowal, Punjab, Pakistan. I specialize in building
    modern, responsive, and user-friendly web interfaces using the latest technologies.
    My focus is clean code, smooth UI, and creative digital experiences.
  </p>

  {/* Features / Highlights */}
  <div className="mt-7 flex flex-wrap gap-3">
    {FUN.map((f) => (
      <span
        key={f.text}
        className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
      >
        <span className="mr-2">{f.emoji}</span>
        {f.text}
      </span>
    ))}
  </div>
</div>

         <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
  {STATS.map((s) => (
    <div
      key={s.label}
      className="relative overflow-hidden glass-card p-6 flex flex-col justify-between min-h-[180px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${s.image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Icon */}
      <div className="relative z-10">
        <i className={`${s.icon} text-3xl text-cyan-400`} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4">
        <div className="text-4xl font-extrabold text-white">
          {s.value}
        </div>

        <div className="text-base text-gray-200 mt-2">
          {s.label}
        </div>
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