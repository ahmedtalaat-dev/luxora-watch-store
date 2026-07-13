import { Award, CheckCircle, Shield, Zap } from "lucide-react";

export interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: Award,
    title: "Premium Quality",
    description:
      "Every watch is carefully curated and authenticated by our expert team of horologists.",
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Authentic Watches",
    description:
      "Guaranteed 100% genuine. We only work with authorized dealers and certified sources.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Fast Shipping",
    description:
      "Secure, insured delivery worldwide. Your luxury timepiece arrives in pristine condition.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Warranty Protection",
    description:
      "Lifetime warranty on all watches. Complete peace of mind with every purchase.",
  },
];