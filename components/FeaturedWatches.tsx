"use client";

import { watches } from "@/data/watches";
import { motion, Variants } from "framer-motion";
import WatchCard from "./WatchCard";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function FeaturedWatches() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
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
            Curated Collection
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-4">
          Featured Watches
        </h2>

        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our handpicked selection of luxury timepieces, each
          representing the pinnacle of watchmaking excellence.
        </p>
      </motion.div>

      {/* Watch cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </motion.div>
    </section>
  );
}
