import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { CVModal } from "./CVModal";

const BADGES = [
  { label: "HTML", icon: "devicon-html5-plain colored", pos: "top-2 left-2", delay: "0s" },
  { label: "CSS", icon: "devicon-css3-plain colored", pos: "top-6 right-0", delay: "-1s" },
  { label: "JS", icon: "devicon-javascript-plain colored", pos: "bottom-6 left-0", delay: "-2s" },
  { label: "React", icon: "devicon-react-original colored", pos: "bottom-2 right-4", delay: "-3s" },
];

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 backdrop-blur-md">
            <span>👋</span>
            <span className="font-mono-code text-[var(--text-muted)]">Hello, World!</span>
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            I'm{" "}
            <span className="text-gradient-brand font-mono-code">Amna Asghar</span>
          </h1>
          <div className="mt-4 text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]/90 h-10">
            <TypeAnimation
              sequence={[
                "Frontend Developer", 2000,
                "React Enthusiast", 2000,
                "UI/UX Craftsman", 2000,
                "Creative Coder", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient-brand"
            />
          </div>
          <p className="mt-6 text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
            I build beautiful, responsive, and interactive web experiences with clean code and creative design.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollTo("projects")} className="btn-primary-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <i className="fa-solid fa-rocket" /> View My Work
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <i className="fa-regular fa-envelope" /> Contact Me
            </button>
            <button onClick={() => setCvOpen(true)} className="btn-outline-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <i className="fa-regular fa-eye" /> View CV
            </button>
            <a href="/Amna_Asghar_CV.pdf" download="Amna_Asghar_CV.pdf" className="btn-outline-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              <i className="fa-solid fa-download" /> Download CV
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex items-center justify-center" data-aos="zoom-in" data-aos-delay="150">
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
            <div className="absolute -inset-2 rounded-full ring-rotate opacity-80 blur-[2px]" />
            <div className="absolute inset-0 rounded-full p-[3px] ring-rotate">
              <div className="w-full h-full rounded-full bg-[var(--bg-base)] grid place-items-center overflow-hidden relative">
                <div className="absolute inset-0" style={{ background: "var(--gradient-brand-soft)" }} />
                <span className="font-mono-code text-8xl sm:text-9xl font-bold text-gradient-brand relative">AA</span>
              </div>
            </div>

            {/* Floating tech badges */}
            {BADGES.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} glass-card px-3 py-2 flex items-center gap-2 animate-float-y text-sm`}
                style={{ animationDelay: b.delay }}
              >
                <i className={`${b.icon} text-xl`} />
                <span className="font-mono-code text-[var(--text-primary)]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 text-[var(--text-muted)] hover:text-white animate-bounce-down"
        aria-label="Scroll down"
      >
        <i className="fa-solid fa-chevron-down text-2xl" />
      </button>
      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}