"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatIDoData } from "@/data/data";
import { Award, ExternalLink, X, Dot } from "lucide-react";

export default function WhatIDo() {
  const [activeTab, setActiveTab] = useState(whatIDoData.categories[0].id);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  const activeCategory = whatIDoData.categories.find((c) => c.id === activeTab);

  return (
    <section id="what-i-do" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{whatIDoData.title}</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          A glimpse into my core focus areas, activities, and certifications.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} className="flex justify-center mb-8 gap-2">
        {whatIDoData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === cat.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.1 }}
        className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm mb-12"
      >
        <ul className="space-y-4">
          {activeCategory?.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
              <span className="text-primary mt-1"><Dot /></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whatIDoData.certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-primary font-semibold">{cert.issuer} ({cert.year})</span>
                <h4 className="font-bold text-base mt-1">{cert.title}</h4>
              </div>
              <Award className="text-primary" size={24} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: false }}
              className="bg-card border border-border rounded-2xl max-w-md w-full p-6 relative shadow-xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                {selectedCert.issuer} • {selectedCert.year}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">{selectedCert.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{selectedCert.description}</p>
              <a
                href={selectedCert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90"
              >
                <span>View Certificate PDF</span> <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}