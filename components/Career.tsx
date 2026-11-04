"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { career } from "@/data/data";
import { CareerItem } from "@/data/types";
import { X } from "lucide-react";

export default function CareerSection(): JSX.Element {
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

  const allJourney: CareerItem[] = [...career.deepSkills, ...career.generalSkills];

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{career.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          {career.subtitle}
        </p>
      </motion.div>

      <div className="relative border-l border-border ml-4 sm:ml-8 space-y-12">
        {allJourney.map((item: CareerItem, idx: number) => (
          <motion.div
            key={item.title + idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative pl-6 sm:pl-8"
          >
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full w-fit">
                  {item.year}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {item.place.join(" • ")}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.skills.map((skill: string) => (
                  <span key={skill} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedCareer(item)}
                className="text-sm font-semibold text-primary hover:underline cursor-pointer"
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCareer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 relative shadow-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCareer(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                {selectedCareer.year}
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-1">{selectedCareer.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{selectedCareer.place.join(" • ")}</p>

              <div className="text-foreground text-sm space-y-4 mb-6 leading-relaxed">
                <p>{selectedCareer.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.skills.map((s: string) => (
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