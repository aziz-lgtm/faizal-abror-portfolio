'use client'
import { useState } from "react";
import Image from 'next/image';

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "roles", label: "Roles" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const scrollToSection = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-6xl flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#0b0f1f]/80 backdrop-blur-md px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {/* Left: avatar + name */}
        <div className="flex items-center gap-3 shrink-0">
          <Image
            alt="Faizal Abror Picture"
            src="/me/faizal-abror.jpg"
            width={36}
            height={36}
            className="rounded-full object-cover border border-white/10"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            Faizal Abror
          </span>
        </div>

        {/* Right: nav links */}
        <div className="flex items-center gap-1 rounded-full">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === item.id
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}