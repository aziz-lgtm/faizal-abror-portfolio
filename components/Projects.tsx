"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Film,
  UtensilsCrossed,
  BookOpen,
  Users,
  Code2,
  ExternalLink,
  X,
} from "lucide-react";
import { projects } from "@/data/project";

type Project = (typeof projects.listOfProjects)[number];

// Pick an icon that fits each project's subject matter.
function getIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("company")) return Building2;
  if (t.includes("movie")) return Film;
  if (t.includes("culinary") || t.includes("restaurant")) return UtensilsCrossed;
  if (t.includes("book") || t.includes("library")) return BookOpen;
  if (t.includes("social")) return Users;
  return Code2;
}

const statusStyles: Record<string, string> = {
  Completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Ongoing: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative min-h-screen bg-transparent text-white mt-15 px-6 md:px-12 lg:px-24 sm:mb-15 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-3 sm:mt-1">
            {projects.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl sm:text-left">{projects.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.listOfProjects.map((project, index) => {
            const Icon = getIcon(project.title);
            return (
              <motion.button
                key={project.title}
                onClick={() => setActive(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="text-left -mt-5 flex flex-col bg-[#050b18]/90 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 rounded-2xl p-8 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  {project.see ? (
                    <ExternalLink className="w-5 h-5 text-gray-500" />
                  ) : (
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                        statusStyles[project.status] ??
                        "text-gray-400 bg-white/5 border-white/10"
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-[17px] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="text-xs font-mono bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0f1e] p-8 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pr-10">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {(() => {
                    const Icon = getIcon(active.title);
                    return <Icon className="w-6 h-6" />;
                  })()}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {active.stack.map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* About */}
              <h4 className="text-lg font-bold text-white mb-3">About</h4>
              <p className="text-gray-300 leading-relaxed mb-8">{active.description}</p>

              {/* Info grid: role + status, live link spans full width below */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-1">Role</div>
                  <div className="font-semibold text-white">{active.role}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <div className="font-semibold text-white">{active.status}</div>
                </div>
                <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-1">Live Demo</div>
                  {active.see ? (
                    <a
                      href={active.see}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      Visit site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="font-semibold text-gray-500">Not deployed</div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}