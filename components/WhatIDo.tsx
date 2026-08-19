"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Compass, Award, ExternalLink, X } from "lucide-react";
import { whatIDoData } from "@/data/what-i-do";

type Certificate = (typeof whatIDoData.certificates)[number];

const tabIcons: Record<string, typeof Code2> = {
  "core-activity": Code2,
  "weekend-activity": Compass,
  certificates: Award,
};

const tabLabels: Record<string, string> = {
  "core-activity": "Core Activity",
  "weekend-activity": "Weekend Activity",
  certificates: "Certificates",
};

export default function WhatIDoSection() {
  const tabs = [...whatIDoData.categories.map((c) => c.id), "certificates"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const activeCategory = whatIDoData.categories.find((c) => c.id === activeTab);

  return (
    <section id="what-i-do" className="relative bg-transparent text-white py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-3 sm:mt-1 text-center"
        >
          {whatIDoData.title}
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tabId) => {
            const Icon = tabIcons[tabId];
            const isActive = activeTab === tabId;
            return (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className={`inline-flex h-8 p-1 text-[12px] gap-1 font-extralight items-center sm:gap-2 sm:px-6 sm:py-3 rounded-full sm:text-sm sm:font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 border-white/10 text-white"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${isActive ? "text-cyan-400 font-extralight" : ""}`} />
                {tabLabels[tabId]}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "certificates" ? (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whatIDoData.certificates.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="relative overflow-hidden text-left rounded-2xl border border-white/10 bg-[#050b18]/90 backdrop-blur-md p-8 h-40 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
                >
                  <Award className="pointer-events-none absolute -right-4 -top-4 w-28 h-28 text-white/[0.04]" strokeWidth={1.25} />

                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>

                  <p className="text-sm text-gray-500">{cert.year}</p>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeCategory?.points.map((point, i) => {
                const Icon = tabIcons[activeTab];
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-[#050b18]/90 backdrop-blur-md p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300 font-light sm:font-medium  leading-relaxed">{point}</p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[#0a0f1e] p-8 md:p-10"
            >
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close"
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeCert.title}</h3>
                  <p className="text-gray-500 mt-1">{activeCert.issuer}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed pb-6 mb-6 border-b border-white/10">
                {activeCert.description}
              </p>

              <p className="text-sm text-gray-500 mb-4">{activeCert.year} • Certificate</p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-3">Certificate Document</div>
                <a
                  href={activeCert.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-400 text-black font-bold px-5 py-3 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_28px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}