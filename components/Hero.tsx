"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/data";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import { MapPin, Globe } from "lucide-react";

export default function HeroSection(): JSX.Element {
  return (
    <section id="about" className="pt-10 pb-20 lg:pt-10 lg:py-32 px-4 sm:px-6 sm:pt-10 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: -2, x: -410 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="inline-block text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
          {hero.greeting}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
          {hero.title}
        </h1>
        <p className="text-muted-foreground md:font-medium text-md font-medium sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-medium">
          <span className="px-3 py-1 rounded-md bg-muted text-foreground">{hero.description}</span>
          <span className="flex items-center gap-0.5"><MapPin size={15}/> {hero.workLocation}</span>
          <span className="flex items-center gap-1"><Globe size={15}/> {hero.workTimeZone}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl shadow hover:opacity-90 transition-opacity"
          >
            {hero.cta[0].button1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
          >
            {hero.cta[0].button2}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
      >
        <Image
          src={hero.photo}
          alt="Faizal Abror"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}