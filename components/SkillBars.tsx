"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/techsStack";

export default function SkillBars() {
  return (
    <section className="relative w-full py-16 bg-[#0B0F19] overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12">

        {/* The List of Skill Bars */}
        <div className="flex flex-col gap-8">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="w-full">
              
              {/* Label and Percentage Text */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium text-lg tracking-wide">
                  {skill.name}
                </span>
                <span className="text-slate-200 font-semibold">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 md:h-4 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
                
                {/* Progress Bar Fill */}
                <motion.div
                  className="h-full bg-cyan-400 rounded-full shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
                  initial={{ width: 0 }} 
                  whileInView={{ width: `${skill.percentage}%` }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1, 
                    ease: "easeOut" 
                  }}
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}