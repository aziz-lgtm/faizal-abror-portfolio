"use client";

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
  ArrowDown 
} from 'lucide-react';

const getSkillIcon = (title: string) => {
  switch (title) {
    case "Fruit Hawker": return <Store className="w-5 h-5 text-amber-400" />;
    case "Chief, Vice Chief": return <Award className="w-5 h-5 text-rose-400" />;
    case "Property Broker": return <Home className="w-5 h-5 text-emerald-400" />;
    case "Food Seller & Waiter": return <Utensils className="w-5 h-5 text-orange-400" />;
    case "Self-Music-Producer": return <Music className="w-5 h-5 text-purple-400" />;
    case "Multi Linguist": return <Languages className="w-5 h-5 text-sky-400" />;
    default: return <Code className="w-5 h-5 text-indigo-400" />;
  }
};

export default function Career() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-transparent text-slate-100 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          {career.title}
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          {career.subtitle}
        </p>
      </div>

      {/* T-Shape Layout Container */}
      <div className="flex flex-col items-center relative">
        
        {/* Top Bar: General Skills (Horizontal Carousel using Shadcn UI) */}
        <div className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl relative">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              General Skills: Breadth of Experience
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
                  <div className="h-full bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/50 shadow-inner">
                          {getSkillIcon(item.title)}
                        </div>
                        <h3 className="font-bold text-base text-white">{item.title}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mb-4 min-h-[32px] line-clamp-2">
                        {item.description || "Building diverse cross-industry experience and adaptable soft skills."}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/40">
                      {item.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-[10px] bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-md text-indigo-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-3 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
            <CarouselNext className="absolute -right-3 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
          </Carousel>
        </div>

        {/* Vertical T-Connector / Arrow */}
        <div className="flex flex-col items-center my-4">
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center -mt-2 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <ArrowDown className="w-4 h-4 text-indigo-400 animate-bounce" />
          </div>
        </div>

        {/* Bottom Bar: Deep Skills (Vertical Stem of the T) */}
        <div className="w-full max-w-md bg-indigo-950/20 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              Deep Skills: Software Engineering
            </span>
          </div>

          {career.deepSkills.map((ds, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-indigo-900/40 border border-indigo-500/40 shadow-lg text-indigo-300">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white text-center md:text-left">{ds.title}</h3>
                  <p className="text-xs text-indigo-200 text-center md:text-left">{ds.description}</p>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-2.5 mt-4">
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
    </section>
  );
}