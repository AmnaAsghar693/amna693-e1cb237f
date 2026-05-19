import { SectionTitle } from "./SectionTitle";

const LANGS = [
  { name: "HTML5", icon: "devicon-html5-plain colored", color: "#E34F26" },
  { name: "CSS3", icon: "devicon-css3-plain colored", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", color: "#06B6D4" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E" },
  { name: "React", icon: "devicon-react-original colored", color: "#61DAFB" },
];

const TOOLS = [
  { name: "Git", icon: "devicon-git-plain colored", color: "#F05032" },
  { name: "GitHub", icon: "devicon-github-original", color: "#ffffff" },
  { name: "VS Code", icon: "devicon-vscode-plain colored", color: "#007ACC" },
  { name: "Lovable", icon: "fa-solid fa-heart", color: "#8a5cf0", isFa: true },
  { name: "Claude AI", icon: "fa-solid fa-robot", color: "#D97706", isFa: true },
  { name: "ChatGPT", icon: "fa-solid fa-comment-dots", color: "#10A37F", isFa: true },
];

function SkillCard({ s, i }: { s: { name: string; icon: string; color: string; isFa?: boolean }; i: number }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={i * 80}
      className="glass-card p-6 flex flex-col items-center justify-center text-center group cursor-default"
      style={{ ["--accent" as string]: s.color }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${s.color}55, 0 0 40px -10px ${s.color}88`;
        (e.currentTarget as HTMLElement).style.borderColor = `${s.color}80`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px) scale(1.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
        (e.currentTarget as HTMLElement).style.borderColor = "";
        (e.currentTarget as HTMLElement).style.transform = "";
      }}
    >
      <i
        className={`${s.icon} text-5xl transition-transform duration-500 group-hover:rotate-[360deg]`}
        style={{ color: s.color }}
      />
      <div className="mt-4 font-mono-code text-sm text-[var(--text-primary)]">{s.name}</div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[rgba(22,27,34,0.35)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle kicker="What I Use" title="My Skills" />

        <h3 className="text-center text-[var(--text-muted)] font-mono-code text-sm uppercase tracking-[0.3em] mb-6">
          Languages & Frameworks
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {LANGS.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>

        <h3 className="text-center text-[var(--text-muted)] font-mono-code text-sm uppercase tracking-[0.3em] mb-6">
          Tools & Platforms
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOOLS.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}