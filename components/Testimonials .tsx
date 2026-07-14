'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  title: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James Mitchell',
    title: 'Business Executive',
    text: 'Luxora provided an exceptional experience. The authentication process was thorough, and the delivery was secure. My new Rolex is flawless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Watch Collector',
    text: 'After years of collecting, I can confidently say Luxora understands fine timepieces. Their curation is impeccable and their expertise invaluable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    title: 'Entrepreneur',
    text: 'The entire process from selection to delivery was seamless. Their customer service team went above and beyond my expectations.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Thompson',
    title: 'Luxury Enthusiast',
    text: 'I purchased multiple timepieces from Luxora. Each one has been a testament to their commitment to quality and authenticity.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Words from Our Clients
        </h2>
      </div>

      {/* Testimonials list */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors duration-300 hover:shadow-lg hover:shadow-accent/10"
          >
            {/* Rating stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Client information */}
            <div>
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>

              <p className="text-sm text-accent">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials