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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationId: number;
    const mouse = { x: -9999, y: -9999 };

    const DENSITY = 0.00009; // nodes per pixel
    const LINK_DISTANCE = 140; // max px distance to draw a connecting line
    const MOUSE_RADIUS = 180; // px radius where lines glow brighter near cursor

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

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
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
          const mouseBoost = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);

          const baseAlpha = (1 - dist / LINK_DISTANCE) * 0.15;
          const alpha = Math.min(0.55, baseAlpha + mouseBoost * 0.35);

          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      // draw nodes
      for (const n of nodes) {
        const distToMouse = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const mouseBoost = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
        const alpha = 0.4 + mouseBoost * 0.5;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx!.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-[#030712]"
      aria-hidden="true"
    />
  );
}