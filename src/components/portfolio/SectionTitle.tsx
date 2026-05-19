export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
      {kicker && (
        <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[var(--brand-cyan)]">{kicker}</span>
      )}
      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
        <span className="text-gradient-brand">{title}</span>
      </h2>
      <div className="mt-4 h-[3px] w-24 rounded-full" style={{ background: "var(--gradient-brand)" }} />
    </div>
  );
}