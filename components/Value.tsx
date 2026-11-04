"use client";
import { motion } from "framer-motion";
import { whyMe, whatYouWillGet } from "@/data/data";
import { JSX } from "react/jsx-runtime";

export default function ValuePropsSection(): JSX.Element {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6">{whyMe.title}</h3>
          <ul className="space-y-4">
            {whyMe.description.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <span className="text-primary font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6">{whatYouWillGet.title}</h3>
          <ul className="space-y-4">
            {whatYouWillGet.description.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <span className="text-primary font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}