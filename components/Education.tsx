"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "@/data/data";
import { EducationItem } from "@/data/types";
import { X } from "lucide-react";

export default function EducationSection(): JSX.Element {
  const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{education.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          {education.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.journey.map((item: EducationItem, idx: number) => {
          const descText = Array.isArray(item.description) ? item.description.join(" ") : item.description;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                    {item.year}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.institution}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {descText}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.skills.map((s: string) => (
                    <span key={s} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedEdu(item)}
                  className="text-sm font-semibold text-primary hover:underline cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedEdu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 relative shadow-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedEdu(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                {selectedEdu.year}
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-1">{selectedEdu.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{selectedEdu.institution}</p>

              <div className="text-foreground text-sm space-y-3 mb-6 leading-relaxed">
                {Array.isArray(selectedEdu.description) ? (
                  selectedEdu.description.map((d: string, i: number) => <p key={i}>{d}</p>)
                ) : (
                  <p>{selectedEdu.description}</p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technologies / Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEdu.skills.map((s: string) => (
                    <span key={s} className="text-xs bg-muted text-foreground px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}