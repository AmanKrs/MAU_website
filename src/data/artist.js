/**
 * Central business configuration for Pallavi Verma.
 *
 * EDIT THIS FILE FIRST. Anything left empty ("" or null) is simply not shown
 * on the website and is left out of structured data — nothing is invented.
 */

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const artist = {
  name: "Pallavi Verma",
  shortName: "Pallavi",
  title: "Makeup Artist",
  brandTagline: "Bridal, engagement and occasion makeup",

  // Public website address. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is connected.
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    productionUrl ||
    "http://localhost:3000"
  ).replace(/\/$/, ""),

  // Public contact values are set in the root .env file and shown on the website.
  // WhatsApp number uses international format, digits only (e.g. "919876543210").
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",

  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",

  // Social profiles. Shown (and added to structured data) only when filled in.
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  },

  // Only add a street address once Pallavi confirms she wants one published.
  // Leave null to describe her as a Patna-based artist who travels to clients.
  address: null,

  baseCity: "Patna",
  baseRegion: "Bihar",
  baseCountry: "India",

  // Places she can travel to. Confirm each with Pallavi before keeping it here.
  travel: {
    enabled: true,
    locations: ["Varanasi (Banaras)", "Ranchi"],
    note: "Based in Patna and happy to discuss travel for selected locations, including Varanasi (Banaras) and Ranchi. Travel availability and charges are confirmed directly with Pallavi for each booking.",
  },

  // Accurate training statement. Do not embellish (no certificates, years or titles).
  training:
    "Pallavi learned makeup artistry from Parul Garg and continues to refine her craft through regular practice.",

  // Temporary shared photo; replace with the right photo for each location later.
  heroImage: {
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
  },
  aboutImage: {
    src: "/images/bridal/bridal-red.jpg",
    width: 505,
    height: 760,
    alt: "Bridal makeup look with a red veil and gold jewelry",
  },

  // Add a video at public/videos/replace-with-your-video.mp4, then set
  // featuredVideo to { src: "/videos/replace-with-your-video.mp4" }.
  featuredVideo: null,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
