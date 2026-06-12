import { forwardRef } from "react";

export const CVDocument = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="cv-doc"
      style={{
        width: "800px",
        minHeight: "1130px",
        background: "#ffffff",
        color: "#1f2937",
        fontFamily: "'Inter', system-ui, sans-serif",
        margin: "0 auto",
        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
          padding: "40px 48px",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "-0.5px", margin: 0 }}>
          Amna Asghar
        </h1>
        <p style={{ fontSize: "18px", marginTop: "6px", opacity: 0.95, letterSpacing: "2px", textTransform: "uppercase" }}>
          Frontend Developer
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginTop: "18px", fontSize: "13px" }}>
          <span><i className="fa-solid fa-envelope" style={{ marginRight: 6 }} />amnarukhsar693@gmail.com</span>
          <span><i className="fa-solid fa-phone" style={{ marginRight: 6 }} />+92 329 9104922</span>
          <span><i className="fa-solid fa-location-dot" style={{ marginRight: 6 }} />Narowal, Punjab, Pakistan</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "32px", padding: "40px 48px" }}>
        {/* Left column */}
        <aside>
          <Section title="Skills" accent="#7c3aed">
            <SkillGroup label="Frontend" items={["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]} />
            <SkillGroup label="Tools" items={["Git & GitHub", "VS Code", "Figma", "Vite"]} />
            <SkillGroup label="Concepts" items={["Responsive Design", "UI/UX", "REST APIs", "Accessibility"]} />
          </Section>

          <Section title="Education" accent="#06b6d4">
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>BS Computer Science</p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: "2px 0" }}>University of Narowal</p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>2022 — Present</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>Intermediate (FSc)</p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: "2px 0" }}>Punjab Board</p>
              <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>2020 — 2022</p>
            </div>
          </Section>

          <Section title="Languages" accent="#7c3aed">
            <Lang label="English" level={4} />
            <Lang label="Urdu" level={5} />
            <Lang label="Punjabi" level={5} />
          </Section>

          <Section title="Interests" accent="#06b6d4">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["UI Design", "Open Source", "Reading", "Learning"].map((i) => (
                <span key={i} style={{ fontSize: 11, padding: "4px 10px", background: "#f3f4f6", borderRadius: 999, color: "#374151" }}>
                  {i}
                </span>
              ))}
            </div>
          </Section>
        </aside>

        {/* Right column */}
        <main>
          <Section title="Profile" accent="#7c3aed">
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#374151", margin: 0 }}>
              Passionate Frontend Developer from Narowal, Pakistan, specializing in building
              modern, responsive, and user-friendly web interfaces. Focused on clean code,
              smooth UI, and creative digital experiences using React, Tailwind CSS, and
              modern JavaScript.
            </p>
          </Section>

          <Section title="Experience" accent="#06b6d4">
            <Job
              role="Freelance Frontend Developer"
              org="Self-Employed"
              date="2023 — Present"
              bullets={[
                "Built 10+ responsive websites and landing pages using React and Tailwind CSS.",
                "Collaborated with clients to translate designs into pixel-perfect interfaces.",
                "Optimized performance and accessibility across modern browsers.",
              ]}
            />
            <Job
              role="Frontend Developer Intern"
              org="Remote"
              date="2023"
              bullets={[
                "Developed reusable UI components for production apps.",
                "Worked with REST APIs and integrated dynamic data into UIs.",
              ]}
            />
          </Section>

          <Section title="Projects" accent="#7c3aed">
            <Project name="Personal Portfolio" stack="React, Tailwind, AOS" desc="A premium animated portfolio with particle background, smooth scroll, and modern UI." />
            <Project name="E-Commerce UI" stack="React, Tailwind" desc="Responsive shopping interface with cart, filters, and product details." />
            <Project name="AI Chat UI" stack="React, JavaScript" desc="Clean and modern chat interface inspired by ChatGPT." />
          </Section>
        </main>
      </div>
    </div>
  );
});

CVDocument.displayName = "CVDocument";

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 22 }}>
      <h2
        style={{
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: accent,
          marginBottom: 10,
          paddingBottom: 6,
          borderBottom: `2px solid ${accent}33`,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <p style={{ fontWeight: 700, fontSize: 12, margin: "0 0 4px", color: "#111827" }}>{label}</p>
      <p style={{ fontSize: 12, color: "#4b5563", margin: 0, lineHeight: 1.6 }}>{items.join(" • ")}</p>
    </div>
  );
}

function Lang({ label, level }: { label: string; level: number }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
        <span style={{ color: "#374151", fontWeight: 600 }}>{label}</span>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 3,
              background: i <= level ? "#7c3aed" : "#e5e7eb",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Job({ role, org, date, bullets }: { role: string; org: string; date: string; bullets: string[] }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: "#111827", margin: 0 }}>{role}</p>
        <span style={{ fontSize: 11, color: "#6b7280" }}>{date}</span>
      </div>
      <p style={{ fontSize: 12, color: "#06b6d4", margin: "2px 0 6px", fontWeight: 600 }}>{org}</p>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function Project({ name, stack, desc }: { name: string; stack: string; desc: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontWeight: 700, fontSize: 13, color: "#111827", margin: 0 }}>{name}</p>
      <p style={{ fontSize: 11, color: "#7c3aed", margin: "2px 0", fontWeight: 600 }}>{stack}</p>
      <p style={{ fontSize: 12, color: "#4b5563", margin: 0, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}