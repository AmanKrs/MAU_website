import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import VideoPreview from "@/components/home/VideoPreview";
import WhyChoose from "@/components/home/WhyChoose";
import BookingSteps from "@/components/home/BookingSteps";
import ServiceCards from "@/components/services/ServiceCards";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import { artist } from "@/data/artist";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Makeup Artist in ${artist.baseCity} | Bridal, Engagement & Party Makeup`,
  description: `${artist.name} is a makeup artist in ${artist.baseCity} for bridal, engagement, party and festive makeup and hairstyling. Enquire on WhatsApp for availability.`,
  path: "/",
});

// The root title template would repeat the name, so use the absolute form on the home page.
metadata.title = {
  absolute: `${artist.name} | Makeup Artist in ${artist.baseCity} for Bridal, Engagement & Party Makeup`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />

      <section aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Makeup and hair for your occasion."
              intro="Choose a service to see what it includes, or message Pallavi directly to check availability."
            />
            <Button href="/services" variant="link">
              All services
            </Button>
          </div>
          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      <FeaturedGallery />
      <VideoPreview />
      <WhyChoose />

      {testimonials.length > 0 ? (
        <section aria-labelledby="testimonials-heading" className="bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading eyebrow="Kind words" title="From clients." />
            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {testimonials.map((item) => (
                <li key={`${item.name}-${item.occasion}`}>
                  <blockquote className="font-serif text-2xl leading-snug">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm text-espresso/70">
                    {item.name}, {item.occasion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <BookingSteps />
      <CtaBand />
    </>
  );
}
