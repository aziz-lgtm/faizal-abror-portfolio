'use client'
import { Button } from "@/components/ui/button"; // e.g. shadcn/ui
import Image from 'next/image';

export default function Navbar()  {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="flex items-center gap-3">
            <Image
              alt="Faizal Abror Picture"
              src="/me/faizal-abror.jpg"
              width={32}
              height={32}
              className="rounded-full object-cover border border-white/10"
            />
            <div className="text-2xl font-bold tracking-tight text-blue-400">
              Faizal Abror
            </div>
          </div>
      <Button variant="ghost" onClick={() => scrollToSection("hero")}>
        About
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("role")}>
        Role
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("projects")}>
        Projects
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("tech")}>
        Tech Stack
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("contact")}>
        Contact
      </Button>
    </nav>
  );
};