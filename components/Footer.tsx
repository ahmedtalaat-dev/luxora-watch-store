'use client'

import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    Shop: [
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Collections', href: '#' },
      { label: 'Brands', href: '#' },
    ],
    Support: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Authenticity Guarantee', href: '#' },
    ],
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-4">
                LUXORA
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Curating the world&apos;s finest luxury watches since 1985.
                Authentic, premium quality timepieces for the discerning
                collector.
              </p>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map((column) => (
              <div key={column[0]}>
                <h4 className="font-semibold text-foreground mb-4">
                  {column[0]}
                </h4>

                <ul className="space-y-3">
                  {column[1].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Luxora. All rights reserved. Luxury
              watches authenticated with precision.
            </p>

            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 z-40"
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer