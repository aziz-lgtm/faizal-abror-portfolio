"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: { name: string; href: string; id: string }[] = [
    { name: "About", href: "#about", id: "about" },
    { name: "What I Do", href: "#what-i-do", id: "what-i-do" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Journey", href: "#career", id: "career" },
    { name: "Tech Stacks", href: "#tech", id: "tech" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    // Wait 350ms to ensure the mobile menu exit animation (300ms) has completely finished
    setTimeout(() => {
      const element = document.getElementById(id);
      const navElement = document.querySelector("nav"); // Target the sticky nav container

      if (element && navElement) {
        // Dynamically grab the exact height of the navbar after it has collapsed
        const navbarHeight = navElement.getBoundingClientRect().height;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 350); 
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl text-foreground">
          Faizal<span className="text-primary"> Abror</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger Button (<lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border px-4 pt-2 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block text-muted-foreground hover:text-foreground font-medium text-base py-1 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg cursor-pointer"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}