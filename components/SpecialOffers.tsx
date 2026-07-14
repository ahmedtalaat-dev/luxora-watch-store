"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

// Offer expiration date (YYYY-MM-DDTHH:MM:SS)
const OFFER_END_DATE = new Date("2026-08-01T23:59:59");

export default function SpecialOffers() {
  // Offer state
  const [isExpired, setIsExpired] = useState(false);

  // Store the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = OFFER_END_DATE.getTime() - now;

      // Stop the timer when it expires
      if (distance <= 0) {
        clearInterval(timer);

        setIsExpired(true);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Add a leading zero when needed
  const formatNumber = (value: number) =>
    value.toString().padStart(2, "0");

  // Timer values
  const timerItems = [
    {
      label: "Days",
      value: formatNumber(timeLeft.days),
    },
    {
      label: "Hours",
      value: formatNumber(timeLeft.hours),
    },
    {
      label: "Minutes",
      value: formatNumber(timeLeft.minutes),
    },
    {
      label: "Seconds",
      value: formatNumber(timeLeft.seconds),
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Main card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 via-accent/5 to-transparent border border-accent/30 p-12 md:p-16">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="relative z-10 text-center">
            {/* Offer badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2 mb-6"
            >
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">
                Limited Time Offer
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Exclusive Launch{" "}
              <span className="text-accent">Promotion</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get up to 20% off on select luxury watches. This exclusive offer
              is available only for our valued members.
            </p>

            {/* Countdown timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {timerItems.map((item, index) => (
                <motion.div
                  key={index}
                  animate={
                    isExpired
                      ? { scale: 1 }
                      : { scale: [1, 1.05, 1] }
                  }
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    repeat: Infinity,
                  }}
                  className="bg-background/80 border border-border rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-accent">
                    {item.value}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <button
              disabled={isExpired}
              aria-disabled={isExpired}
              className={`group relative px-10 py-4 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 ${
                isExpired
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-accent text-accent-foreground hover:shadow-2xl hover:shadow-accent/50"
              }`}
            >
              <span className="relative z-10">
                {isExpired
                  ? "Offer Expired"
                  : "Claim Your Discount Now"}
              </span>

              {!isExpired && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}