export interface Watch {
  id: number
  name: string
  price: string
  description: string
  image: string
}

export const watches: Watch[] = [
  {
    id: 1,
    name: 'Chronograph Elite',
    price: '$4,500',
    description: 'Precision engineering meets luxury design',
    image: '/watches/watch-1.png',
  },
  {
    id: 2,
    name: 'Gentleman Series',
    price: '$3,200',
    description: 'Timeless sophistication and refinement',
    image: '/watches/watch-2.png',
  },
  {
    id: 3,
    name: 'Heritage Classic',
    price: '$5,100',
    description: 'Swiss craftsmanship at its finest',
    image: '/watches/watch-3.png',
  },
  {
    id: 4,
    name: 'Deep Ocean',
    price: '$6,800',
    description: 'Adventure-ready luxury timepiece',
    image: '/watches/watch-4.png',
  },
  {
    id: 5,
    name: 'Skeleton Perfection',
    price: '$7,200',
    description: 'Mechanical artistry on display',
    image: '/watches/watch-5.png',
  },
  {
    id: 6,
    name: 'Dual Tone Sport',
    price: '$4,900',
    description: 'Performance meets elegance',
    image: '/watches/watch-6.png',
  },
]