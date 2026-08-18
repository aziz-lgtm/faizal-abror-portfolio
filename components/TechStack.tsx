"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tech } from "@/data/techsStack";

export default function TechStack() {
  return (
    <section className="relative w-full pt-22 pb-1 bg-transparent overflow-hidden flex flex-col items-center" id="tech">
      {/* Background Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19]" />

      {/* ======================================= */}
      {/* TITLE & SUBTITLE (Now safely stacked above) */}
      {/* ======================================= */}
      <div className="relative z-20 w-full max-w-6xl px-6 md:px-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {tech.title}
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-md">
          {tech.subtitle}
        </p>
        <div className="w-16 h-1 bg-cyan-500 mt-4 rounded-full" />
      </div>

      {/* ======================================= */}
      {/* SOLAR SYSTEM CONTAINER */}
      {/* ======================================= */}
      <div className="relative flex items-center justify-center w-full h-[600px] md:h-[700px] max-w-6xl">
        
        {/* CENTER CORE: Laptop Logo */}
        <div className="absolute z-10 flex items-center justify-center w-20 h-20 bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 rounded-full shadow-[0_0_30px_10px_rgba(6,182,212,0.4)]">
          <Image 
            src="/tech-stack/laptop.png" 
            alt="Laptop Logo" 
            width={48} 
            height={48} 
            className="object-contain" 
          />
        </div>

        {/* 3RD (INNER) CIRCLE: TypeScript & JavaScript */}
        <motion.div
          className="absolute w-[220px] h-[220px] border border-cyan-900/40 rounded-full"
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
          className="absolute w-[380px] h-[380px] border border-cyan-900/30 rounded-full"
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
          className="absolute w-[540px] h-[540px] border border-cyan-900/20 rounded-full"
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
    </section>
  );
}