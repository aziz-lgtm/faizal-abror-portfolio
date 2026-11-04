"use client";
import { motion } from "framer-motion";
import { tech, skillsData } from "@/data/data";
import { JSX } from "react/jsx-runtime";

export default function TechSection(): JSX.Element {
  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{tech.title}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          {tech.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-primary">Frontend Ecosystem</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.frontend.map((item: { name: string }) => (
              <span key={item.name} className="px-4 py-2 bg-muted text-foreground font-medium text-sm rounded-xl border border-border">
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-primary">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.backend.map((item: { name: string }) => (
              <span key={item.name} className="px-4 py-2 bg-muted text-foreground font-medium text-sm rounded-xl border border-border">
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-primary">Tools & Workflow</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.tools.map((item: { name: string }) => (
              <span key={item.name} className="px-4 py-2 bg-muted text-foreground font-medium text-sm rounded-xl border border-border">
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}