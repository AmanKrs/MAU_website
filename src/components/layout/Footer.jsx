import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { artist, navLinks } from "@/data/artist";
import { servicePages } from "@/data/services";
import { InstagramIcon } from "@/components/ui/BrandIcons";

// Fixed year keeps the page fully static (Cache Components disallows new Date() in static output).
const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  const socials = Object.entries(artist.socials).filter(([, url]) => url);

  return (
    <footer className="mt-24 border-t border-champagne bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">{artist.name}</p>
          <p className="eyebrow mt-3 !text-gold">
            {artist.title} · {artist.baseCity}, {artist.baseCountry}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
            Bridal, engagement and occasion makeup and hairstyling, based in{" "}
            {artist.baseCity} with travel enquiries welcome for selected
            locations.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ivory/80">
            {artist.phoneDisplay ? (
              <li className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                {artist.phoneDisplay}
              </li>
            ) : null}
            {artist.email ? (
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${artist.email}`} className="hover:text-gold">
                  {artist.email}
                </a>
              </li>
            ) : null}
            {socials.map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 capitalize hover:text-gold"
                >
                  {name === "instagram" ? <InstagramIcon size={18} /> : null}
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow !text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className="eyebrow !text-gold">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={service.page} className="hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ivory/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-ivory/55 sm:px-8">
          © {COPYRIGHT_YEAR} {artist.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
