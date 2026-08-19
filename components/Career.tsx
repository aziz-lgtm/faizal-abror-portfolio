"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { career } from '@/data/career';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Store,
  Award,
  Home,
  Utensils,
  Music,
  Languages,
  Code,
  ArrowDown,
  Calendar,
  MapPin,
  X,
} from 'lucide-react';

type GeneralSkill = (typeof career.generalSkills)[number];

const getSkillIcon = (title: string) => {
  switch (title) {
    case "Fruit Hawker": return <Store className="w-5 h-5 text-amber-400" />;
    case "Chief, Vice Chief": return <Award className="w-5 h-5 text-rose-400" />;
    case "Property Broker": return <Home className="w-5 h-5 text-emerald-400" />;
    case "Food Server": return <Utensils className="w-5 h-5 text-orange-400" />;
    case "Self-Music-Producer": return <Music className="w-5 h-5 text-purple-400" />;
    case "Polyglot": return <Languages className="w-5 h-5 text-sky-400" />;
    default: return <Code className="w-5 h-5 text-indigo-400" />;
  }
};

export default function Career() {
  const [activeSkill, setActiveSkill] = useState<GeneralSkill | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-16 mb-0 bg-transparent text-slate-100 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-3 sm:mt-1">
          {career.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          {career.subtitle}
        </p>
      </div>

      {/* T-Shape Layout Container */}
      <div className="flex flex-col items-center relative">

        {/* Top Bar: General Skills (Horizontal Carousel using Shadcn UI) */}
        <div className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl relative">
          <div className="text-center mb-6 ">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              Broad Skills
            </span>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto px-8"
          >
            <CarouselContent className="-ml-4">
              {career.generalSkills.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/50 shadow-inner">
                      {getSkillIcon(item.title)}
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-white mb-1.5">{item.title}</h3>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-indigo-300 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    
                    <button
                      onClick={() => setActiveSkill(item)}
                      className="mt-1 text-xs font-semibold text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 rounded-full hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors"
                    >
                      See Detail
                    </button>
                    <div className="inline-flex">
                    <span className="mt-1 text-sm font-extralight text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 rounded-full hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors inline-flex sm:hidden items-center"><ChevronRight size={15} /><ChevronRight size={15} className="-ml-5" /><ChevronRight size={15} className="-ml-5" /></span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex sm:absolute sm:-left-3 sm:bg-slate-800 sm:border-slate-700 sm:text-white sm:hover:bg-slate-700 sm:hover:text-white" />
            <CarouselNext className="hidden sm:inline-flex sm:absolute sm:-right-3 sm:bg-slate-800 sm:border-slate-700 sm:text-white sm:hover:bg-slate-700 sm:hover:text-white" />
          </Carousel>
        </div>

        {/* Vertical T-Connector / Arrow */}
        <div className="flex flex-col items-center my-4">
          <div className=""></div>
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center -mt-2 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <ArrowDown className="w-4 h-4 text-indigo-400 animate-bounce" />
          </div>
        </div>

        {/* Bottom Bar: Deep Skills (Vertical Stem of the T) */}
        <div className="w-full max-w-md bg-indigo-950/20 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              Specialised Skill 
              <br />
              <span className="sm:text-xl hidden">Software Engineering</span>
            </span>
          </div>

          {career.deepSkills.map((ds, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="hidden sm:inline-flex sm:p-3 sm:rounded-2xl sm:bg-indigo-900/40 sm:border sm:border-indigo-500/40 sm:shadow-lg sm:text-indigo-300">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white text-left md:text-left">{ds.title}</h3>
                  <p className="text-xs text-indigo-200 text-center md:text-left">{ds.description}</p>
                </div>
              </div>

              {/* Year + Place */}
              <div className="w-full flex flex-col items-center md:items-start gap-1 mb-4 pl-0 md:pl-[60px]">
                <div className="flex items-center gap-1.5 text-[11px] text-indigo-300 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{ds.year}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-indigo-200/70">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{ds.place.join(" · ")}</span>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-2.5 mt-2">
                {ds.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="text-xs font-medium bg-indigo-900/30 border border-indigo-500/20 p-2.5 rounded-xl text-center text-indigo-100 hover:bg-indigo-900/50 transition-colors shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* General skill detail modal */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSkill(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <button
                onClick={() => setActiveSkill(null)}
                aria-label="Close"
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {getSkillIcon(activeSkill.title)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeSkill.title}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-indigo-300 font-medium mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeSkill.year}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-1.5 text-sm text-slate-400 mb-6">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{activeSkill.place.join(" · ")}</span>
              </div>

              <p className="text-slate-300 leading-relaxed pb-6 mb-6 border-b border-slate-800">
                {activeSkill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeSkill.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-md text-indigo-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}