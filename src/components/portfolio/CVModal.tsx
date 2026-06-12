import { useEffect, useRef, useState } from "react";
import { CVDocument } from "./CVDocument";

export function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cvRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
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

  const handleDownload = async () => {
    if (!cvRef.current || downloading) return;
    setDownloading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: "Amna_Asghar_CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "px", format: [800, 1130], orientation: "portrait" },
        })
        .from(cvRef.current)
        .save();
    } finally {
      setDownloading(false);
    }
  };

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
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="btn-primary-glow px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 disabled:opacity-60"
            >
              <i className={`fa-solid ${downloading ? "fa-spinner fa-spin" : "fa-download"}`} />
              {downloading ? "Generating..." : "Download PDF"}
            </button>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-white/10 transition text-[var(--text-muted)] hover:text-white"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-slate-200 p-6">
          <CVDocument ref={cvRef} />
        </div>
      </div>
    </div>
  );
}