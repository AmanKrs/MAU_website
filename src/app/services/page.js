import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import ServiceCards from "@/components/services/ServiceCards";
import { artist } from "@/data/artist";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Makeup & Hairstyling Services in ${artist.baseCity}`,
  description: `Bridal, engagement, reception, party and festive makeup and hairstyling by ${artist.name} in ${artist.baseCity}. See what each service includes and enquire on WhatsApp.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section aria-labelledby="services-page-heading">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
          <p className="eyebrow">Services</p>
          <h1 id="services-page-heading" className="display-xl mt-5 max-w-4xl">
            Makeup and hair, planned around you.
          </h1>
          <span className="rule-gold mt-8 block" aria-hidden="true" />
          <p className="mt-8 max-w-2xl text-lg text-espresso/75">
            Every service starts with a conversation about your occasion, outfit and preferred look. Pricing is
            shared directly by Pallavi once she knows your date and location.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <ServiceCards />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
