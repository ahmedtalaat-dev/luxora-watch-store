"use client";

import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";
import { motion, Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Luxury Experience
        </h2>
      </motion.div>

      {/* Features grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </motion.div>
    </section>
  );
}
