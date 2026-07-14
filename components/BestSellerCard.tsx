"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BestSeller } from "@/data/bestSellers";

interface BestSellerCardProps {
  item: BestSeller;
  index: number;
}

export default function BestSellerCard({ item, index }: BestSellerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex-shrink-0 w-72"
    >
      {/* Product card */}
      <div className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-colors duration-300">
        {/* Product image */}
        <div className="relative h-72 bg-muted overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              quality={85}
            />
          </motion.div>

          {/* Product rating */}
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            ★ {item.rating}
          </div>
        </div>

        {/* Product details */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {item.name}
          </h3>

          <p className="text-accent text-xl font-bold mb-4">{item.price}</p>

          {/* Add to cart button */}
          <button className="w-full py-2 px-4 bg-accent/10 text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
