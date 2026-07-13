'use client'

import { Award, CheckCircle, Zap, Shield } from 'lucide-react'

interface Feature {
  id: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: 1,
    icon: Award,
    title: 'Premium Quality',
    description:
      'Every watch is carefully curated and authenticated by our expert team of horologists.',
  },
  {
    id: 2,
    icon: CheckCircle,
    title: 'Authentic Watches',
    description:
      'Guaranteed 100% genuine. We only work with authorized dealers and certified sources.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Fast Shipping',
    description:
      'Secure, insured delivery worldwide. Your luxury timepiece arrives in pristine condition.',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Warranty Protection',
    description:
      'Lifetime warranty on all watches. Complete peace of mind with every purchase.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Luxury Experience
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-xl p-8 bg-background border border-border hover:border-accent transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyChooseUs