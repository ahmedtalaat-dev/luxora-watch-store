"use client";

import { motion } from "framer-motion";
import { bestSellers } from "@/data/bestSellers";
import BestSellerCard from "./BestSellerCard";

export default function BestSellers() {
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
            Top Rated
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Best Sellers
        </h2>
      </motion.div>

      {/* Product list */}
      <div className="max-w-7xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-8 min-w-min">
          {bestSellers.map((item, index) => (
            <BestSellerCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
