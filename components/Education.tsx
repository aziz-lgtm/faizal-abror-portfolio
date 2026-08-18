"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/education";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section className="relative min-h-screen bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {education.title}
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            {education.subtitle}
          </p>
          <div className="w-24 h-[3px] bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative pl-10 md:pl-12"
        >
          <div className="space-y-10">
            {education.journey.map((item, index) => {
              const isLast = index === education.journey.length - 1;
              const isCurrent = index === 0; // most recent / in-progress entry

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative group z-10"
                >
                  {/*
                    TIMELINE CONNECTOR LINE
                    - Starts at this dot's center (top-[26px], matches the dot's
                      top-[18px] + half of its 16px height).
                    - Ends at the NEXT dot's center: the gap between cards is
                      space-y-10 (40px), and the next dot's center sits another
                      26px into the next card, so the line must extend
                      40 + 26 = 66px past this card's own bottom edge.
                      (Previously this was only -40px, leaving every segment
                      ~26px short of the next dot — that was the bug.)
                    - Skipped entirely on the last item so nothing dangles below
                      the final dot.
                  */}
                  {!isLast && (
                    <div className="absolute left-[-27px] md:left-[-35px] top-[26px] -bottom-[66px] w-[2px] bg-cyan-500 shadow-[0_0_10px_#06b6d4] z-0" />
                  )}

                  {/* Outer Glowing Circle Node (Dot) */}
                  <div className="absolute -left-[35px] md:-left-[43px] top-[18px] w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_12px_#06b6d4] group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 z-10" />

                  {/* Card Container (current item stays lit; others glow on hover) */}
                  <div
                    className={`bg-[#050b18]/90 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${
                      isCurrent
                        ? "border border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                        : "border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    }`}
                  >
                    
                    {/* Title Header Card */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Metadata: Institution & Year */}
                    {(item.institution || item.year) && (
                      <div className="flex flex-wrap items-center gap-2 text-cyan-400 text-sm font-medium mb-5">
                        {item.institution && (
                          <div className="flex items-center gap-1.5">
                            <GraduationCap className="w-4 h-4 text-cyan-400" />
                            <span>{item.institution}</span>
                          </div>
                        )}

                        {item.institution && item.year && (
                          <span className="text-cyan-500/60">•</span>
                        )}

                        {item.year && (
                          <div className="flex items-center gap-1.5 text-cyan-400">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <span>{item.year}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bullet Points Deskripsi */}
                    {item.description && (
                      <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-200">
                        {Array.isArray(item.description) ? (
                          <ul className="list-disc list-outside ml-5 space-y-2 marker:text-cyan-400 group-hover:marker:text-cyan-300">
                            {item.description.map((desc, dIdx) => (
                              <li key={dIdx}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="list-disc list-outside ml-5 space-y-2 marker:text-cyan-400 group-hover:marker:text-cyan-300">
                            <li>{item.description}</li>
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Skill Badges */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-cyan-500/10">
                        {item.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="text-xs font-mono bg-[#0d1527] text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-900/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}