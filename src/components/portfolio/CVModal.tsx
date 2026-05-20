import { useEffect } from "react";

const CV_URL = "/Amna_Asghar_CV.pdf";

export function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] glass-card overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs uppercase tracking-[0.25em] text-[var(--brand-cyan)]">
              Curriculum Vitae
            </span>
            <a
              href={CV_URL}
              download="Amna_Asghar_CV.pdf"
              className="btn-primary-glow px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-download" /> Download PDF
            </a>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-white/10 transition text-[var(--text-muted)] hover:text-white"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>
        <div className="flex-1 bg-white">
          <iframe
            title="Amna Asghar CV"
            src={`${CV_URL}#view=FitH`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}