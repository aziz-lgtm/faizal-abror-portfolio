"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // NOTE: if this is ever true on a machine you expect to animate, it's the
    // OS-level "reduce motion" accessibility setting, not a bug in this file.
    // Windows: Settings > Accessibility > Visual effects > Animation effects
    // macOS: System Settings > Accessibility > Display > Reduce motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationId: number | null = null;
    const mouse = { x: -9999, y: -9999 };

    const DENSITY = 0.00009; // nodes per pixel
    const LINK_DISTANCE = 140; // max px distance to draw a connecting line
    const MOUSE_RADIUS = 260; // px radius where lines/nodes glow brighter near cursor

    function createNodes() {
      const count = Math.floor(width * height * DENSITY);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.4 + 1,
      }));
    }

    // Reads the CANVAS ELEMENT'S actual rendered box size (via ResizeObserver)
    // rather than a one-off window.innerWidth/innerHeight snapshot. This is
    // what fixes the mobile "gap at the bottom on scroll" bug: mobile browsers
    // resize the visual viewport live as the address bar collapses/expands,
    // and ResizeObserver fires for that, while a static innerHeight read at
    // mount time does not.
    function applySize(w: number, h: number) {
      if (w === width && h === height) return;
      width = w;
      height = h;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // update positions
      if (!prefersReducedMotion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      // soft additive glow halo centered on the cursor
      if (mouse.x > -1000) {
        const glow = ctx!.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, MOUSE_RADIUS
        );
        glow.addColorStop(0, "rgba(34, 211, 238, 0.10)");
        glow.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx!.fillStyle = glow;
        ctx!.fillRect(0, 0, width, height);
      }

      // draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > LINK_DISTANCE) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
          const proximity = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
          const mouseBoost = proximity * proximity; // quadratic falloff = punchier near cursor

          const baseAlpha = (1 - dist / LINK_DISTANCE) * 0.15;
          const alpha = Math.min(0.9, baseAlpha + mouseBoost * 0.75);
          const lineWidth = 1 + mouseBoost * 1.5;

          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx!.lineWidth = lineWidth;
          ctx!.stroke();
        }
      }

      // draw nodes
      for (const n of nodes) {
        const distToMouse = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const proximity = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
        const mouseBoost = proximity * proximity;
        const alpha = Math.min(1, 0.4 + mouseBoost * 0.9);
        const drawRadius = n.radius * (1 + mouseBoost * 1.8);

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, drawRadius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handleMotionPreferenceChange(e: MediaQueryListEvent) {
      prefersReducedMotion = e.matches;
    }

    // ResizeObserver on the canvas element itself tracks the TRUE rendered
    // size, which updates correctly on mobile address-bar collapse/expand,
    // orientation change, and desktop window resize alike — a single source
    // of truth instead of separate window-resize + orientation listeners.
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width: w, height: h } = entry.contentRect;
      applySize(w, h);
    });
    resizeObserver.observe(canvas);

    draw();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    motionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      motionQuery.removeEventListener("change", handleMotionPreferenceChange);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none bg-[#030712]"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}