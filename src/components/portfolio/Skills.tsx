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
  { name: "Claude AI", icon: "fa-solid fa-brain", color: "#D97706", isFa: true },
  { name: "ChatGPT", icon: "fa-solid fa-comments", color: "#10A37F", isFa: true },
];

function SkillCard({
  s,
  i,
}: {
  s: { name: string; icon: string; color: string; isFa?: boolean };
  i: number;
}) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={i * 80}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        cursor-default

        bg-white/[0.03]
        border
        border-white/10

        backdrop-blur-xl

        transition-all
        duration-500

        hover:bg-white/[0.06]
        hover:border-violet-500/40
        hover:-translate-y-2
      "
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${s.color}20, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <i
        className={`${s.icon} text-5xl md:text-6xl relative z-10 transition-all duration-500 group-hover:scale-125`}
        style={{
          color: s.color,
          filter: `drop-shadow(0 0 12px ${s.color}88)`,
        }}
      />

      {/* Name */}
      <div className="mt-4 text-white font-semibold tracking-wide relative z-10">
        {s.name}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-b from-[#0d1117] via-[#111827] to-[#0d1117]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle kicker="What I Use" title="My Skills" />

        {/* Languages */}
        <h3 className="text-center text-violet-300 font-semibold text-sm uppercase tracking-[0.35em] mb-8">
          Languages & Frameworks
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {LANGS.map((s, i) => (
            <SkillCard key={s.name} s={s} i={i} />
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-center text-cyan-300 font-semibold text-sm uppercase tracking-[0.35em] mb-8">
          Tools & Platforms
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TOOLS.map((s, i) => (
            <SkillCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}