import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import { artist } from "@/data/artist";
import { offeredServices } from "@/data/services";
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo";
import { generalEnquiryUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: `About ${artist.name} | Makeup Artist in ${artist.baseCity}`,
  description: `Meet ${artist.name}, a makeup artist based in ${artist.baseCity}. Learn about her approach to bridal, engagement and occasion makeup and how to book.`,
  path: "/about",
});

export default function AboutPage() {
  const image = artist.aboutImage || { alt: `${artist.name}, makeup artist` };

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 id="about-heading" className="display-xl mt-5">
              Hello, I&apos;m {artist.shortName}.
            </h1>
            <span className="rule-gold mt-8 block" aria-hidden="true" />
            <p className="mt-8 max-w-2xl text-lg text-espresso/75">
              I&apos;m a makeup artist based in {artist.baseCity}, {artist.baseRegion}, and I love creating looks
              that feel personal, polished and comfortable to wear.
            </p>
            <div className="mt-9">
              <Button href={generalEnquiryUrl()} external>
                <WhatsAppIcon size={16} />
                Enquire on WhatsApp
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoSlot image={image} category="artist" ratio="4 / 5" priority sizes="(min-width: 1024px) 40vw, 100vw" className="max-h-[600px]" />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-28">
          <Reveal>
            <h2 className="display-md">My journey</h2>
            <span className="rule-gold mt-5 block" aria-hidden="true" />
          </Reveal>
          <Reveal className="space-y-5 text-espresso/80 lg:col-span-2" delay={0.08}>
            <p>
              Makeup began as something I was drawn to and slowly became the craft I wanted to practise every day.
              I&apos;m an emerging artist, and I keep growing through regular practice and by studying the details
              that make a look feel finished.
            </p>
            <p>{artist.training}</p>
            <p>
              Much of the work in my portfolio is practice and model work, and it is labelled that way so you know
              exactly what you are looking at.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-28">
          <Reveal>
            <h2 className="display-md">My approach</h2>
            <span className="rule-gold mt-5 block" aria-hidden="true" />
          </Reveal>
          <Reveal className="space-y-5 text-espresso/80 lg:col-span-2" delay={0.08}>
            <p>
              I begin by listening: your features, your outfit, the lighting of your venue and the finish you want
              for photographs and for the day itself. Then I plan the look so skin, eyes and lips work together.
            </p>
            <p>
              I enjoy soft glam and radiant, skin-first finishes, as well as defined eyes and statement lips for
              occasions that call for more. Whatever the style, the aim is the same: you, beautifully defined.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-28">
          <Reveal>
            <h2 className="display-md">Services</h2>
            <span className="rule-gold mt-5 block" aria-hidden="true" />
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.08}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {offeredServices.map((service) => (
                <li key={service.slug} className="border-b border-champagne py-3.5">
                  {service.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:py-28">
          <Reveal>
            <h2 className="display-md">Where I work</h2>
            <span className="rule-gold mt-5 block" aria-hidden="true" />
          </Reveal>
          <Reveal className="space-y-5 text-espresso/80 lg:col-span-2" delay={0.08}>
            <p>
              My base is {artist.baseCity}, {artist.baseRegion}.{" "}
              {artist.travel.enabled ? artist.travel.note : ""}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your look."
        text="Tell Pallavi about your occasion, date and location, and she will get back to you with availability and pricing."
      />
    </>
  );
}
