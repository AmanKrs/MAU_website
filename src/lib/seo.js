import { artist } from "@/data/artist";

export const siteName = `${artist.name} | ${artist.title}`;

/** Absolute URL for a path on this site. */
export function absoluteUrl(path = "/") {
  return `${artist.siteUrl}${path === "/" ? "" : path}`;
}

/**
 * Build route metadata with a unique title, description, canonical URL,
 * Open Graph and Twitter tags. Use from each page's `metadata` export.
 */
export function buildMetadata({ title, description, path = "/", image } = {}) {
  const url = absoluteUrl(path);
  const images = image ? [{ url: image }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: artist.name,
      title: title ? `${title} | ${artist.name}` : siteName,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: title ? `${title} | ${artist.name}` : siteName,
      description,
      ...(images ? { images: [image] } : {}),
    },
  };
}

function socialLinks() {
  return Object.values(artist.socials).filter(Boolean);
}

/** Organization-level JSON-LD. Only fields that are really configured are included. */
export function businessJsonLd() {
  const sameAs = socialLinks();
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${absoluteUrl("/")}#business`,
    name: artist.name,
    description: `${artist.title} based in ${artist.baseCity}, ${artist.baseRegion}, offering bridal, engagement, party and occasion makeup and hairstyling.`,
    url: absoluteUrl("/"),
    ...(artist.phoneDisplay ? { telephone: artist.phoneDisplay } : {}),
    ...(artist.email ? { email: artist.email } : {}),
    ...(artist.address ? { address: { "@type": "PostalAddress", ...artist.address } } : {}),
    areaServed: [
      { "@type": "City", name: artist.baseCity },
      ...(artist.travel.enabled
        ? artist.travel.locations.map((name) => ({ "@type": "City", name: name.replace(/\s*\(.*\)/, "") }))
        : []),
    ],
    founder: { "@type": "Person", name: artist.name },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function personJsonLd() {
  const sameAs = socialLinks();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    jobTitle: artist.title,
    url: absoluteUrl("/about"),
    homeLocation: { "@type": "City", name: artist.baseCity },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    url: absoluteUrl(service.page),
    provider: { "@id": `${absoluteUrl("/")}#business` },
    areaServed: { "@type": "City", name: artist.baseCity },
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
