"use client";

import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Card animation
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors duration-300 hover:shadow-lg hover:shadow-accent/10"
    >
      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Client information */}
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>

        <p className="text-sm text-accent">{testimonial.title}</p>
      </div>
    </motion.div>
  );
}
