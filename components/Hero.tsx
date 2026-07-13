'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/watches/hero-watch.png"
            alt="Premium luxury watch"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-8 md:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent md:text-base">
          Luxury Timepieces
        </p>

        <h1 className="mt-4 mb-6 font-serif text-4xl leading-tight font-bold text-foreground sm:text-6xl lg:text-7xl">
          Timeless Elegance on Your Wrist
        </h1>

        <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Discover exquisite hand-crafted luxury watches from the world&apos;s
          finest makers. Each timepiece represents generations of precision and
          artistry.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
          <button className="group relative overflow-hidden rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Shop Collection
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <button className="rounded-lg border-2 border-accent px-8 py-4 text-lg font-semibold text-accent transition-all duration-300 hover:bg-accent/10">
            Explore Watches
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-4 text-sm text-muted-foreground md:mt-16 md:justify-start">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Premium Quality</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Lifetime Warranty</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection