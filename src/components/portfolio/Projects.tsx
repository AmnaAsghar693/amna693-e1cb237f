import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { SectionTitle } from "./SectionTitle";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with React and Tailwind CSS, featuring smooth animations and a premium feel.",
    tags: ["React", "Tailwind", "CSS"],
    category: "Web App",
    gradient: "linear-gradient(135deg, #6e40c9, #00d4ff)",
    icon: "fa-solid fa-user-astronaut",

  },
  {
    title: "E-Commerce UI",
    desc: "A modern shopping interface with cart functionality and fully responsive design across all devices.",
    tags: ["HTML", "CSS", "JS" , 'react'],
    category: "Landing Page",
    gradient: "linear-gradient(135deg, #ff6b6b, #f7b733)",
    icon: "fa-solid fa-bag-shopping",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather app with a beautiful UI, animated icons and global location search.",
    tags: ["React", "API", "CSS"],
    category: "Web App",
    gradient: "linear-gradient(135deg, #00b09b, #00d4ff)",
    icon: "fa-solid fa-cloud-sun",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>("[data-tilt]");
    cards?.forEach((c) => VanillaTilt.init(c, { max: 8, speed: 600, glare: true, "max-glare": 0.15 }));
    return () => cards?.forEach((c) => (c as unknown as { vanillaTilt?: { destroy(): void } }).vanillaTilt?.destroy());
  }, []);

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle kicker="Selected Work" title="My Projects" />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              data-tilt
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-44 flex items-center justify-center" style={{ background: p.gradient }}>
                <i className={`${p.icon} text-5xl text-white/90 drop-shadow-lg`} />
                <span className="absolute top-3 right-3 text-xs font-mono-code px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
                  {p.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono-code px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="flex-1 text-center btn-outline-glow py-2 rounded-md text-sm inline-flex items-center justify-center gap-2">
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                  <a href="#" className="flex-1 text-center btn-primary-glow py-2 rounded-md text-sm inline-flex items-center justify-center gap-2">
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}