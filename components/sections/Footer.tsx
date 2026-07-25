"use client";

import { footerLinks } from "@/data/footer";
import { FaGithub, FaWhatsapp, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Footer content */}
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand section */}
            <div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-accent">
                LUXORA
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Curating the world&apos;s finest luxury watches since 1985.
                Authentic, premium quality timepieces for the discerning
                collector.
              </p>
            </div>

            {/* Footer links */}
            {Object.entries(footerLinks).map((column) => (
              <div key={column[0]}>
                <h4 className="mb-4 font-semibold text-foreground">
                  {column[0]}
                </h4>

                <ul className="space-y-3">
                  {column[1].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
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
          <div className="my-12 border-t border-border" />

          {/* Footer bottom section */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Luxora. All rights reserved. Luxury
              watches authenticated with precision.
            </p>

            {/* Legal links */}
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Developer : Ahmed Talaat */}
          <div className="mt-10 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Developed with 💛 by{" "}
              <span className="font-semibold text-accent">Ahmed Talaat</span>
            </p>

            {/* Developer social links */}
            <div className="mt-4 flex justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/ahmedtalaat-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>

              <Link
                href="https://github.com/ahmedtalaat-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <FaGithub className="h-5 w-5" />
              </Link>

              <Link
                href="https://at-portfolio-35.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <FaGlobe className="h-5 w-5" />
              </Link>

              <Link
                href="https://wa.me/201104894017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-lg bg-accent font-bold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
      >
        ↑
      </button>
    </footer>
  );
}
