"use client";

import { motion, Variants } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

// Grid animation
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Testimonials() {
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
            Testimonials
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Words from Our Clients
        </h2>
      </motion.div>

      {/* Testimonials cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </motion.div>
    </section>
  );
}
