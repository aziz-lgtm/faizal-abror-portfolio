"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/data";
import { ProjectItem } from "@/data/types";
import { ExternalLink, X } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{projects.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          {projects.subtitle}
        </p>
      </motion.div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.listOfProjects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                  {proj.status}
                </span>
                <span className="text-xs text-muted-foreground">{proj.role}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              {/* Max 3 lines restriction */}
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
                {proj.stack.length > 4 && (
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                    +{proj.stack.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Read More
                </button>
                <div className="flex space-x-3">
                  {proj.see && (
                    <a href={proj.see} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup for Full Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 relative shadow-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                {selectedProject.status}
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">Role: {selectedProject.role}</p>
              
              <div className="text-foreground text-sm space-y-4 mb-6 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t) => (
                    <span key={t} className="text-xs bg-muted text-foreground px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {selectedProject.see && (
                  <a
                    href={selectedProject.see}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground text-center font-medium rounded-lg text-sm hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    <span>Live Preview</span> <ExternalLink size={16} />
                  </a>
                )}
                {selectedProject.seeFigma && (
                  <a
                    href={selectedProject.seeFigma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-border text-foreground text-center font-medium rounded-lg text-sm hover:bg-muted flex items-center justify-center gap-2"
                  >
                    <span>Figma Design</span> <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}