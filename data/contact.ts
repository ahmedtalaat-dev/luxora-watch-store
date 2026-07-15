import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export const contactMethods = [
  { icon: Phone, label: "Phone", value: "+20 10 1234 5678" },
  { icon: Mail, label: "Email", value: "hello@luxora.com" },
  {
    icon: MapPin,
    label: "Address",
    value: "Cairo, Egypt",
  },
];

export const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaTiktok, href: "https://tiktok.com" },
  { icon: FaTwitter, href: "https://x.com" },
];
