import Link from "next/link";
import Button from "@/components/ui/Button";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";

function GalleryPhoto({ item, index, className = "" }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full min-w-0">
      <Link
        href="/gallery"
        aria-label={`Open gallery: ${item.alt}`}
        className={`group relative block h-full overflow-hidden rounded-xl bg-espresso shadow-sm sm:rounded-2xl ${className}`}
      >
        <PhotoSlot
          image={item}
          category={item.category}
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="!aspect-auto h-full transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-transparent px-3 pb-3 pt-12 text-[0.62rem] uppercase tracking-[0.16em] text-ivory sm:px-4 sm:pb-4 sm:text-[0.7rem]">
          {item.label || item.category}
        </span>
      </Link>
    </Reveal>
  );
}

function GalleryCard({ item, index, className = "" }) {
  return (
    <li className={`min-w-0 ${className}`}>
      <GalleryPhoto item={item} index={index} />
    </li>
  );
}

export default function FeaturedGallery() {
  const featured = galleryItems.filter((item) => item.featured).slice(0, 7);
  const [lead, photoTwo, photoThree, photoFour, photoFive, photoSix, photoSeven] = featured;

  return (
    <section aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Looks from the chair."
            intro="A selection of recent work. Practice and model looks are labelled as such."
          />
          <Button href="/gallery" variant="link">
            View full gallery
          </Button>
        </div>

        {lead && photoTwo && photoThree && photoFour && photoFive && photoSix && photoSeven ? (
          <ul className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 max-[380px]:grid-cols-1 md:auto-rows-[13rem] md:grid-cols-4 xl:auto-rows-[16rem] xl:grid-cols-6">
            <GalleryCard
              item={lead}
              index={0}
              className="col-span-2 h-64 sm:h-80 max-[380px]:col-span-1 md:col-start-1 md:row-start-1 md:row-span-2 md:h-auto xl:col-span-2 xl:row-span-2"
            />
            <GalleryCard
              item={photoTwo}
              index={1}
              className="h-48 sm:h-56 md:col-span-2 md:col-start-3 md:row-start-1 md:h-auto xl:col-span-2 xl:col-start-3 xl:row-start-1"
            />
            <GalleryCard
              item={photoThree}
              index={2}
              className="h-48 sm:h-56 md:col-start-3 md:row-start-2 md:h-auto xl:col-start-5 xl:row-start-1"
            />
            <GalleryCard
              item={photoFour}
              index={3}
              className="h-48 sm:h-56 md:col-start-4 md:row-start-2 md:h-auto xl:col-start-6 xl:row-start-1"
            />
            <GalleryCard
              item={photoFive}
              index={4}
              className="h-48 sm:h-56 md:col-start-1 md:row-start-3 md:h-auto xl:col-start-3 xl:row-start-2"
            />
            <GalleryCard
              item={photoSix}
              index={5}
              className="h-48 sm:h-56 md:col-start-2 md:row-start-3 md:h-auto xl:col-start-4 xl:row-start-2"
            />
            <GalleryCard
              item={photoSeven}
              index={6}
              className="h-48 sm:h-56 md:col-span-2 md:col-start-3 md:row-start-3 md:h-auto xl:col-span-2 xl:col-start-5 xl:row-start-2"
            />
          </ul>
        ) : null}
      </div>
    </section>
  );
}
