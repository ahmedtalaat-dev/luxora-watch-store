"use client";

import { contactMethods, socialLinks } from "@/data/contact";
import { motion, Variants } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  /* Animation variants */
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

  return (
    <section className="border-t border-border bg-card px-6 py-20 md:px-8 md:py-32">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-7xl"
      >
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </p>
        </div>

        <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl">
          Contact Us
        </h2>
      </motion.div>

      {/* Contact content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3"
      >
        {/* Contact information */}
        <motion.div variants={itemVariants} className="space-y-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex cursor-pointer gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {method.label}
                  </p>

                  <p className="text-muted-foreground">{method.value}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Social links */}
          <div className="border-t border-border pt-8">
            <p className="mb-4 text-sm font-semibold text-muted-foreground">
              Follow Us
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          variants={itemVariants}
          className="rounded-xl border border-border bg-background p-8 lg:col-span-2"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
