import Button from "@/components/ui/Button";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { artist } from "@/data/artist";

export default function AboutPreview() {
  const image = artist.aboutImage || {
    alt: `${artist.name} at work as a makeup artist`,
  };

  return (
    <section className="bg-paper" aria-labelledby="about-preview-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <PhotoSlot
            image={image}
            category="artist"
            ratio="4 / 5"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="max-h-[600px]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Meet Pallavi"
            title="Makeup, thoughtfully tailored to you."
            as="h2"
          />
          <div className="mt-8 space-y-5 text-espresso/80">
            <p>
              I&apos;m Pallavi, a makeup artist based in {artist.baseCity}. I love
              the quiet moment when a look comes together and you see yourself
              feeling more like you, only more polished.
            </p>
            <p>{artist.training}</p>
            <p>
              Every look begins with listening: your features, your outfit and
              the finish you want for photographs and for the day itself.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="link">
              Read Pallavi&apos;s story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
