'use client'

import { Clock } from 'lucide-react'

const SpecialOffers = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 via-accent/5 to-transparent border border-accent/30 p-12 md:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Exclusive Launch <span className="text-accent">Promotion</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get up to 20% off on select luxury watches. This exclusive offer is
              available only for our valued members.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Days', value: '15' },
                { label: 'Hours', value: '08' },
                { label: 'Minutes', value: '42' },
                { label: 'Seconds', value: '30' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background/80 border border-border rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-accent">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="group relative px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50">
              <span className="relative z-10">Claim Your Discount Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers