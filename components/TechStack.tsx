"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tech } from "@/data/techsStack";
import { skillsData } from "@/data/techsStack";

export default function TechStack() {
  return (
    <section className="relative w-full pt-22 pb-1 bg-transparent overflow-hidden flex flex-col items-center" id="tech">
      {/* Background Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19]" />

      {/* ======================================= */}
      {/* TITLE & SUBTITLE (Now safely stacked above) */}
      {/* ======================================= */}
      <div className="relative z-20 w-full max-w-6xl px-6 md:px-12 mb-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-1 sm:mt-1 text-left">
          {tech.title}
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-mdtext-slate-400 text-sm sm:text-base md:text-lg max-w-md sm:text-left">
          {tech.subtitle}
        </p>
        <div className="w-16 h-1 bg-cyan-500 mt-4 rounded-full" />
      </div>

      {/* ======================================= */}
      {/* SOLAR SYSTEM CONTAINER */}
      {/* ======================================= */}
      <div className="relative -pt-5 flex items-center justify-center w-full h-[400px] md:h-[700px] max-w-6xl">
        
        {/* CENTER CORE: Laptop Logo */}
        <div className="absolute z-10 flex items-center justify-center w-10 h-10 sm:w-20 sm:h-20 bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 rounded-full shadow-[0_0_30px_10px_rgba(6,182,212,0.4)]">
          <Image 
            src="/tech-stack/laptop.png" 
            alt="Laptop Logo" 
            width={30} 
            height={30} 
            className="object-contain sm:w-12 sm:h-12" 
          />
        </div>

        {/* 3RD (INNER) CIRCLE: TypeScript & JavaScript */}
        <motion.div
          className="absolute w-30 h-30 sm:w-[220px] sm:h-[220px] border border-cyan-900/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]" />
          <motion.div
            className="absolute -top-8 left-1/2 -ml-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/typescript.png" alt="TypeScript" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 left-1/2 -ml-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/javascript-new.png" alt="JavaScript" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
        </motion.div>

        {/* 2ND (MIDDLE) CIRCLE: Tailwind & React */}
        <motion.div
          className="absolute w-50 h-50 sm:w-[380px] sm:h-[380px] border border-cyan-900/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 -left-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]" />
          <motion.div
            className="absolute top-1/2 -left-8 -mt-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/tailwind-new.png" alt="Tailwind CSS" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 -right-8 -mt-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/react.png" alt="React" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
        </motion.div>

        {/* 1ST (OUTER) CIRCLE: HTML & Git */}
        <motion.div
          className="absolute w-70 h-70 sm:w-[540px] sm:h-[540px] border border-cyan-900/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.8)]" />
          <motion.div
            className="absolute -top-8 left-1/2 -ml-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/html.png" alt="HTML" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 left-1/2 -ml-8 flex items-center justify-center w-16 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/tech-stack/git.png" alt="Git" width={40} height={40} className="object-contain w-10 h-10" />
          </motion.div>
        </motion.div>

      </div>
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