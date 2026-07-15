'use client'

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Share2,
  Heart,
} from 'lucide-react'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const contactMethods = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'hello@luxora.com' },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Luxury Street, New York, NY 10001',
    },
  ]

  const socialLinks = [
    { icon: MessageCircle, href: '#' },
    { icon: Send, href: '#' },
    { icon: Share2, href: '#' },
    { icon: Heart, href: '#' },
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-card border-t border-border">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground">
          Contact Us
        </h2>
      </div>

      {/* Contact content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact information */}
        <div className="space-y-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon

            return (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {method.label}
                  </p>
                  <p className="text-muted-foreground">{method.value}</p>
                </div>
              </div>
            )
          })}

          {/* Social links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 font-semibold">
              Follow Us
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon

                return (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2 bg-background border border-border rounded-xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Message input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your inquiry..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors duration-300 text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection