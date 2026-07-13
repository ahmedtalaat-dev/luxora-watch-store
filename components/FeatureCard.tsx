"use client";

import { Feature } from "@/data/features";
import { motion, Variants } from "framer-motion";

interface FeatureCardProps {
  feature: Feature;
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

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl p-8 bg-background border border-border hover:border-accent transition-all duration-300"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Feature content */}
      <div className="relative z-10">
        {/* Feature icon */}
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        {/* Feature text */}
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {feature.title}
        </h3>

        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  );
}
