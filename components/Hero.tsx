import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/watches/hero-watch.png"
            alt="Premium luxury watch"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 text-center md:text-left"
      >
        {/* Hero subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase"
        >
          Luxury Timepieces
        </motion.p>

        {/* Hero title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mt-4 mb-6 leading-tight"
        >
          Timeless Elegance on Your Wrist
        </motion.h1>

        {/* Hero description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
        >
          Discover exquisite hand-crafted luxury watches from the world&apos;s
          finest makers. Each timepiece represents generations of precision and
          artistry.
        </motion.p>

        {/* Hero action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
        >
          <button className="group relative px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Shop Collection
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold text-lg hover:bg-accent/10 transition-all duration-300">
            Explore Watches
          </button>
        </motion.div>

        {/* Hero features */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 mt-12 md:mt-16 justify-center md:justify-start text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Lifetime Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Free Shipping</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
