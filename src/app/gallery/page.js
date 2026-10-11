import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import { artist } from "@/data/artist";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Makeup Portfolio | Bridal, Engagement & Party Looks in ${artist.baseCity}`,
  description: `Browse makeup and hairstyling looks by ${artist.name}, a makeup artist in ${artist.baseCity}. Practice and model work is clearly labelled.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <section aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
          <p className="eyebrow">Portfolio</p>
          <h1 id="gallery-heading" className="display-xl mt-5 max-w-4xl">
            Looks from the chair.
          </h1>
          <span className="rule-gold mt-8 block" aria-hidden="true" />
          <p className="mt-8 max-w-2xl text-lg text-espresso/75">
            A growing collection of bridal, engagement, party and hairstyling looks. Much of this work is practice
            or model work, and it is labelled so you always know what you are seeing.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand
        title="Love a look? Let's recreate your version."
        text="Share a reference photo and your occasion details on WhatsApp and Pallavi will tell you what she can do."
      />
    </>
  );
}
