"use client";

import { faqs } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            FAQ
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* FAQ list */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border overflow-hidden hover:border-accent transition-colors duration-300"
          >
            {/* FAQ question button */}
            <button
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              className="w-full px-8 py-6 bg-card flex items-center justify-between hover:bg-muted/30 transition-colors duration-300"
            >
              <span className="text-lg font-semibold text-foreground text-left">
                {faq.question}
              </span>

              {/* Animated chevron icon */}
              <motion.div
                animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                <ChevronDown className="w-5 h-5 text-accent" />
              </motion.div>
            </button>

            {/* FAQ answer */}
            <AnimatePresence>
              {activeId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 py-6 bg-muted/20 border-t border-border text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
