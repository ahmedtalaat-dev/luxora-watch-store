export interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Mitchell",
    title: "Business Executive",
    text: "Luxora provided an exceptional experience. The authentication process was thorough, and the delivery was secure. My new Rolex is flawless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Watch Collector",
    text: "After years of collecting, I can confidently say Luxora understands fine timepieces. Their curation is impeccable and their expertise invaluable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Entrepreneur",
    text: "The entire process from selection to delivery was seamless. Their customer service team went above and beyond my expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Thompson",
    title: "Luxury Enthusiast",
    text: "I purchased multiple timepieces from Luxora. Each one has been a testament to their commitment to quality and authenticity.",
    rating: 5,
  },
];
