interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do you authenticate luxury watches?",
    answer:
      "Each timepiece undergoes a rigorous multi-point authentication process by certified horologists. We examine serial numbers, movement signatures, materials, and craftsmanship details to ensure absolute authenticity.",
  },
  {
    id: 2,
    question: "What is your warranty coverage?",
    answer:
      "All watches come with a lifetime warranty covering mechanical defects and craftsmanship. International service and maintenance are also included for your peace of mind.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide with fully insured, secure delivery. We partner with premium courier services to ensure your luxury watch arrives in pristine condition.",
  },
  {
    id: 4,
    question: "Can I return or exchange my watch?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you&apos;re not completely satisfied, you can exchange or return your watch for a full refund.",
  },
  {
    id: 5,
    question: "Do you offer watch appraisals?",
    answer:
      "Yes, our certified appraisers provide professional valuation services for insurance, estate planning, or personal knowledge. Consultations are available in-person or via video call.",
  },
];
