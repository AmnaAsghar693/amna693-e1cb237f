import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function Background() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const el = document.getElementById("mouse-glow");
    if (!el) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Gradient orbs */}
      <div aria-hidden className="orb animate-blob" style={{ width: 480, height: 480, top: -120, left: -120, background: "radial-gradient(circle, #6e40c9, transparent 60%)" }} />
      <div aria-hidden className="orb animate-blob" style={{ width: 520, height: 520, bottom: -160, right: -140, background: "radial-gradient(circle, #00d4ff, transparent 60%)", animationDelay: "-6s" }} />
      <div aria-hidden className="orb animate-blob" style={{ width: 360, height: 360, top: "40%", left: "55%", background: "radial-gradient(circle, #8a5cf0, transparent 60%)", opacity: 0.25, animationDelay: "-12s" }} />

      {mounted && (
        <Particles
          id="particles-bg"
          init={init}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            detectRetina: true,
            particles: {
              number: { value: 80, density: { enable: true, area: 900 } },
              color: { value: ["#ffffff", "#00d4ff", "#8a5cf0"] },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 2.5 } },
              move: { enable: true, speed: 0.6, outModes: { default: "out" } },
              links: { enable: true, distance: 140, color: "#6e40c9", opacity: 0.25, width: 1 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 160, links: { opacity: 0.5 } } },
            },
          }}
        />
      )}

      <div id="mouse-glow" aria-hidden />
    </>
  );
}