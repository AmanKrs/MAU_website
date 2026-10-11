import { Mail, MapPin, Phone } from "lucide-react";
import EnquiryForm from "@/components/contact/EnquiryForm";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import JsonLd from "@/components/ui/JsonLd";
import { artist } from "@/data/artist";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { generalEnquiryUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: `Contact & Enquiry | Makeup Artist in ${artist.baseCity}`,
  description: `Enquire about bridal, engagement or party makeup with ${artist.name} in ${artist.baseCity}. Share your date, service and location and continue on WhatsApp.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h1 id="contact-heading" className="display-xl mt-5">
              Let&apos;s plan your look.
            </h1>
            <span className="rule-gold mt-8 block" aria-hidden="true" />
            <p className="mt-8 text-lg text-espresso/75">
              Tell Pallavi about your occasion. The fastest way to reach her is WhatsApp, where you can also share
              reference photos.
            </p>
            <div className="mt-8">
              <Button href={generalEnquiryUrl()} external>
                <WhatsAppIcon size={16} />
                Chat on WhatsApp
              </Button>
            </div>
            <ul className="mt-10 space-y-4 text-espresso/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-gold-dark" aria-hidden="true" />
                <span>
                  Based in {artist.baseCity}, {artist.baseRegion}.{" "}
                  {artist.travel.enabled ? artist.travel.note : ""}
                </span>
              </li>
              {artist.phoneDisplay ? (
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gold-dark" aria-hidden="true" />
                  {artist.phoneDisplay}
                </li>
              ) : null}
              {artist.email ? (
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-gold-dark" aria-hidden="true" />
                  <a href={`mailto:${artist.email}`} className="underline decoration-gold underline-offset-4">
                    {artist.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-champagne bg-paper/60 p-6 sm:p-10">
              <h2 className="display-md">Send an enquiry</h2>
              <p className="mt-3 mb-8 text-espresso/70">
                Fill in the details below and we&apos;ll open WhatsApp with your message ready to review and send.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
