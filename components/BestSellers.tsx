'use client'

import Image from 'next/image'

interface BestSeller {
  id: number
  name: string
  price: string
  image: string
  rating: number
}

const bestSellers: BestSeller[] = [
  {
    id: 1,
    name: 'Chronograph Elite Gold',
    price: '$4,800',
    image: '/watches/watch-1.png',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Heritage Classic Pro',
    price: '$5,400',
    image: '/watches/watch-3.png',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Skeleton Masterpiece',
    price: '$7,600',
    image: '/watches/watch-5.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'Deep Ocean Titanium',
    price: '$7,200',
    image: '/watches/watch-4.png',
    rating: 4.9,
  },
]

const BestSellers = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Top Rated
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Best Sellers
        </h2>
      </div>

      <div className="max-w-7xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-8 min-w-min">
          {bestSellers.map((item) => (
            <div key={item.id} className="group flex-shrink-0 w-72">
              <div className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-colors duration-300">
                <div className="relative h-72 bg-muted overflow-hidden">
                  <div className="w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>

                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    ★ {item.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-accent text-xl font-bold mb-4">
                    {item.price}
                  </p>

                  <button className="w-full py-2 px-4 bg-accent/10 text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers