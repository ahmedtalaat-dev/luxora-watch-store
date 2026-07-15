"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  /* States */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* Handle form submission */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSuccess(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide the success message
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-xl">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
          </div>
        </div>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and email fields */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Name
            </label>

            <input
              required
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none"
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Email
            </label>

            <input
              required
              type="email"
              id="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Message
          </label>

          <textarea
            required
            id="message"
            rows={5}
            placeholder="Tell us about your inquiry..."
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="w-full resize-none rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none"
          />
        </div>

        {/* Success message */}
        {isSuccess && (
          <p className="text-center font-semibold text-green-600">
            Message sent successfully!
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-accent py-4 font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
