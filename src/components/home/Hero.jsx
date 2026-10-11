import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { artist } from "@/data/artist";
import { generalEnquiryUrl } from "@/lib/whatsapp";

export default function Hero() {
  const image = artist.heroImage || {
    alt: `Portrait of makeup artist ${artist.name}`,
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="eyebrow">Makeup Artist · Patna, India</p>
          <h1 id="hero-heading" className="display-xl mt-6">
            Your Special Moments,{" "}
            <em className="text-gold-dark">Beautifully</em> Defined.
          </h1>
          <span className="rule-gold mt-8 block" aria-hidden="true" />
          <p className="mt-8 max-w-lg text-lg text-espresso/75">
            Bridal, engagement and occasion makeup tailored to your features,
            personal style and special moments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={generalEnquiryUrl()} external>
              <WhatsAppIcon size={16} />
              Enquire on WhatsApp
            </Button>
            <Button href="/gallery" variant="outline">
              Explore My Looks
            </Button>
          </div>
          <p className="mt-8 max-w-md text-sm text-espresso/60">
            Based in {artist.baseCity}, {artist.baseRegion}.{" "}
            {artist.travel.enabled
              ? "Travel enquiries are welcome for selected locations."
              : ""}
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div
            className="absolute -right-3 -top-3 hidden h-full w-full border border-gold/60 sm:block"
            aria-hidden="true"
          />
          <PhotoSlot
            image={image}
            category="artist"
            ratio="4 / 5"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative max-h-[640px]"
          />
        </div>
      </div>
    </section>
  );
}
