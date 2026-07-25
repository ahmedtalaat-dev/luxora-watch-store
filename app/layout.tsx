import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luxora | Luxury Watches & Timeless Elegance",
    template: "%s | Luxora",
  },
  description:
    "Discover Luxora's curated collection of luxury watches. Explore timeless craftsmanship, premium timepieces, and authentic designs for modern collectors.",

  keywords: [
    "luxury watches",
    "premium watches",
    "designer watches",
    "watch collection",
    "luxury timepieces",
    "Swiss watches",
    "authentic watches",
    "Luxora",
  ],

  authors: [
    {
      name: "Ahmed Talaat",
    },
  ],

  creator: "Ahmed Talaat",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Luxora | Luxury Watches & Timeless Elegance",
    description:
      "Explore Luxora's premium collection of luxury watches crafted for those who appreciate elegance, precision, and timeless style.",
    url: "https://luxora.com",
    siteName: "Luxora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxora Luxury Watches",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxora | Luxury Watches & Timeless Elegance",
    description:
      "Discover premium luxury watches and timeless craftsmanship with Luxora.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}