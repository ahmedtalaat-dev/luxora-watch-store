'use client'

import { watches } from '@/data/watches'
import Image from 'next/image'

const FeaturedWatches = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Curated Collection
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-4">
          Featured Watches
        </h2>

        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our handpicked selection of luxury timepieces, each representing the
          pinnacle of watchmaking excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-colors duration-300"
          >
            <div className="relative h-64 overflow-hidden bg-muted">
              <div className="w-full h-full">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  quality={85}
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {watch.name}
                </h3>

                <span className="text-accent font-bold text-lg">
                  {watch.price}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {watch.description}
              </p>

              <button className="w-full py-3 px-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:bg-accent/90">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWatches