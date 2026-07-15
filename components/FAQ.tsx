'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do you authenticate luxury watches?',
    answer:
      'Each timepiece undergoes a rigorous multi-point authentication process by certified horologists. We examine serial numbers, movement signatures, materials, and craftsmanship details to ensure absolute authenticity.',
  },
  {
    id: 2,
    question: 'What is your warranty coverage?',
    answer:
      'All watches come with a lifetime warranty covering mechanical defects and craftsmanship. International service and maintenance are also included for your peace of mind.',
  },
  {
    id: 3,
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship worldwide with fully insured, secure delivery. We partner with premium courier services to ensure your luxury watch arrives in pristine condition.',
  },
  {
    id: 4,
    question: 'Can I return or exchange my watch?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you&apos;re not completely satisfied, you can exchange or return your watch for a full refund.',
  },
  {
    id: 5,
    question: 'Do you offer watch appraisals?',
    answer:
      'Yes, our certified appraisers provide professional valuation services for insurance, estate planning, or personal knowledge. Consultations are available in-person or via video call.',
  },
]

const FAQSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            FAQ
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-lg border border-border overflow-hidden hover:border-accent transition-colors duration-300"
          >
            <button
              onClick={() =>
                setActiveId(activeId === faq.id ? null : faq.id)
              }
              className="w-full px-8 py-6 bg-card flex items-center justify-between hover:bg-muted/30 transition-colors duration-300"
            >
              <span className="text-lg font-semibold text-foreground text-left">
                {faq.question}
              </span>

              <ChevronDown
                className={`w-5 h-5 text-accent flex-shrink-0 ml-4 transition-transform duration-300 ${
                  activeId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeId === faq.id && (
              <div className="px-8 py-6 bg-muted/20 border-t border-border text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection