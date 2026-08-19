'use client'
import { useState } from "react";
import Image from 'next/image';

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "what-i-do", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0b0f1f]/80 backdrop-blur-md px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between gap-6">
          {/* Left: avatar + name */}
          <div className="flex items-center gap-3 shrink-0">
            <Image
              alt="Faizal Abror Picture"
              src="/me/faizal-abror.jpg"
              width={36}
              height={36}
              className="rounded-full object-cover border border-white/10"
            />
            <span className="hidden xl:inline xl:text-xl xl:font-bold xl:tracking-tight xl:text-white
            md:inline md:text-xl md:font-bold md:tracking-tight md:text-white">
              Faizal Abror
            </span>
          </div>

          {/* Right: nav links (desktop, md and up) */}
          <div className="hidden md:flex items-center gap-1 rounded-full">
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

          {/* Hamburger button (mobile/sm, hidden md and up) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === item.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}