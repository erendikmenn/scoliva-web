"use client";

import { useEffect, useRef } from "react";

const LIGHTS = [
  { className: "orb orb-olive", x: 0.74, y: 0.2, speed: 0.007, wait: [7000, 13000] },
  { className: "orb orb-gold", x: 0.18, y: 0.62, speed: 0.0055, wait: [9000, 16000] },
  { className: "orb orb-forest", x: 0.86, y: 0.72, speed: 0.0062, wait: [8000, 15000] },
  { className: "orb orb-amber", x: 0.42, y: 0.34, speed: 0.008, wait: [6000, 12000] },
  { className: "orb orb-mist", x: 0.58, y: 0.82, speed: 0.0048, wait: [10000, 18000] },
] as const;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function farPoint(x: number, y: number) {
  for (let i = 0; i < 10; i += 1) {
    const nx = rand(0.06, 0.94);
    const ny = rand(0.08, 0.9);
    if (Math.hypot(nx - x, ny - y) > 0.32) return { x: nx, y: ny };
  }
  return { x: rand(0.08, 0.92), y: rand(0.1, 0.88) };
}

export function HeroBackdrop() {
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const states = LIGHTS.map((light) => {
      const next = farPoint(light.x, light.y);
      return {
        x: light.x,
        y: light.y,
        tx: next.x,
        ty: next.y,
        speed: light.speed,
        wait: light.wait,
        until: performance.now() + rand(light.wait[0], light.wait[1]),
      };
    });

    const paint = (now: number) => {
      states.forEach((state, index) => {
        if (now >= state.until) {
          const next = farPoint(state.x, state.y);
          state.tx = next.x;
          state.ty = next.y;
          state.until = now + rand(state.wait[0], state.wait[1]);
        }
        state.x += (state.tx - state.x) * state.speed;
        state.y += (state.ty - state.y) * state.speed;
        const node = nodes.current[index];
        if (node) {
          node.style.left = `${(state.x * 100).toFixed(2)}%`;
          node.style.top = `${(state.y * 100).toFixed(2)}%`;
        }
      });
      frame.current = requestAnimationFrame(paint);
    };

    frame.current = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div className="hero-aurora" aria-hidden>
      <div className="wash" />
      {LIGHTS.map((light, index) => (
        <div
          key={light.className}
          ref={(node) => {
            nodes.current[index] = node;
          }}
          className={light.className}
          style={{ left: `${light.x * 100}%`, top: `${light.y * 100}%` }}
        />
      ))}
      <div className="veil" />
      <div className="grain" />
    </div>
  );
}
