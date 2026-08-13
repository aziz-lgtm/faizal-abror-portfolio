import React from 'react';
import {hero} from "@/data/hero";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-[calc(100vh-64px)] flex items-center" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Subtitle - "Hey, I'm ..." */}
        <p className="text-sm sm:text-base text-gray-400 font-medium tracking-wide mb-3">
          Hey, I&apos;m Faizal Abror
        </p>

        {/* Main Heading - bold, large */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4">
          Building the next era of <br className="hidden sm:block" />
          software &amp; advancing <br className="hidden sm:block" />
          intelligent engineering.
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
          {hero.intro}
        </p>

        {/* Badges / Expertise */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Badge 1: Software Engineering */}
          <div className="border border-gray-700 rounded-lg px-5 py-3 hover:border-blue-400 transition-colors duration-300">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Frontend Development
            </p>
            <p className="text-xs text-gray-400">
              HTML, JavaScript, TypeScript, React, Next.js
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}