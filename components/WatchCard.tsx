"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Watch } from "@/data/watches";

interface WatchCardProps {
  watch: Watch;
}

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WatchCard({ watch }: WatchCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-colors duration-300"
    >
      {/* Watch image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={watch.image}
            alt={watch.name}
            fill
            className="object-cover"
            quality={85}
          />
        </motion.div>

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Watch information */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">
            {watch.name}
          </h3>

          <span className="text-accent font-bold text-lg">{watch.price}</span>
        </div>

        <p className="text-muted-foreground text-sm mb-6">
          {watch.description}
        </p>

        {/* Action button */}
        <button className="w-full py-3 px-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:bg-accent/90">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
