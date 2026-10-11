import Link from "next/link";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import { artist } from "@/data/artist";
import { galleryItems } from "@/data/gallery";
import { servicePages } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { serviceEnquiryUrl } from "@/lib/whatsapp";

/** Shared layout for every service page. All copy comes from src/data/services.js. */
export default function ServicePageView({ service }) {
  const photos = galleryItems
    .filter((item) => item.category === service.galleryCategory)
    .slice(0, 3);
  const others = servicePages.filter((item) => item.slug !== service.slug);
  const enquiryUrl = serviceEnquiryUrl(service.name);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: service.page },
        ])}
      />

      <section aria-labelledby="service-heading">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-espresso/60">
            <Link href="/" className="hover:text-gold-dark">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/services" className="hover:text-gold-dark">Services</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{service.name}</span>
          </nav>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">{service.hero.eyebrow}</p>
              <h1 id="service-heading" className="display-lg mt-5">
                {service.hero.title}
              </h1>
              <span className="rule-gold mt-7 block" aria-hidden="true" />
              <p className="mt-7 max-w-2xl text-lg text-espresso/75">{service.hero.intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href={enquiryUrl} external>
                  <WhatsAppIcon size={16} />
                  Enquire on WhatsApp
                </Button>
                <Button href="/gallery" variant="outline">
                  See the gallery
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <PhotoSlot
                image={photos[0]}
                category={service.galleryCategory}
                ratio="4 / 5"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                className="max-h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <h2 className="display-md">About this service</h2>
            <span className="rule-gold mt-5 block" aria-hidden="true" />
          </Reveal>
          <Reveal className="space-y-5 text-espresso/80 lg:col-span-2" delay={0.08}>
            {service.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.startingPrice ? (
              <p className="border-l-2 border-gold pl-4 text-espresso">
                Starting from {service.startingPrice}. Final pricing depends on the look, date and location.
              </p>
            ) : (
              <p className="border-l-2 border-gold pl-4 text-espresso">
                Pricing is shared directly on WhatsApp once Pallavi knows your date, look and location.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="display-md">Suitable occasions</h2>
            <ul className="mt-6 divide-y divide-champagne border-y border-champagne">
              {service.occasions.map((item) => (
                <li key={item} className="py-3.5">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-md">Makeup styles</h2>
            <ul className="mt-6 divide-y divide-champagne border-y border-champagne">
              {service.styles.map((item) => (
                <li key={item} className="py-3.5">{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-espresso/60">
              Not sure what suits you? Describe the occasion and your outfit and Pallavi will guide you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="service-photos">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 id="service-photos" className="display-md">
            Related looks
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <li key={photo.id}>
                <PhotoSlot image={photo} category={photo.category} ratio="4 / 5" sizes="(min-width: 640px) 33vw, 100vw" />
                {photo.label ? (
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-espresso/55">{photo.label}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <h2 className="display-md flex items-center gap-3">
            <MapPin size={26} className="text-gold-dark" aria-hidden="true" />
            Location and travel
          </h2>
          <p className="mt-5 text-espresso/80">{service.travelNote}</p>
          <p className="mt-3 text-espresso/80">
            Primary base: {artist.baseCity}, {artist.baseRegion}.
            {artist.travel.enabled ? ` ${artist.travel.note}` : ""}
          </p>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <h2 id="faq-heading" className="display-md">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-champagne border-y border-champagne">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {faq.q}
                  <span aria-hidden="true" className="text-2xl text-gold-dark transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-espresso/75">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Also offered</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-serif text-2xl">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={item.page} className="border-b border-gold hover:text-gold-dark">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        service={service.name}
        title={`Enquire about ${service.name.toLowerCase()}.`}
      />
    </>
  );
}
