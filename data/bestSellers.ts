export interface BestSeller {
  id: number
  name: string
  price: string
  image: string
  rating: number
}

export const bestSellers: BestSeller[] = [
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