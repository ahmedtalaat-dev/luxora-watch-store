'use client'

import { motion } from 'framer-motion'

export default function BrandStory () {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-4">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
            A Legacy of Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1985, Luxora emerged from a passion for precision and artistry. Our journey began with a
              simple mission: to bring the world&apos;s finest timepieces to those who appreciate true craftsmanship.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we&apos;re honored to be a trusted curator of luxury watches. We work exclusively with renowned
              Swiss manufacturers and independent master watchmakers, ensuring every piece meets our exacting standards.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment goes beyond simply selling watches. We&apos;re dedicated to educating our clients, preserving
              horological heritage, and celebrating the artisans who dedicate their lives to creating these mechanical
              masterpieces.
            </p>

            <motion.div
              whileHover={{ x: 8 }}
              className="text-accent font-semibold flex items-center gap-2 cursor-pointer"
            >
              Learn More <span>→</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: '38+', label: 'Years in Business' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '500+', label: 'Watch Brands' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-background border border-border rounded-xl p-8 text-center hover:border-accent transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
