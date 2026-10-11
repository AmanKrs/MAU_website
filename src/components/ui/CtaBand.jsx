import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import { generalEnquiryUrl, serviceEnquiryUrl } from "@/lib/whatsapp";

/** Closing call-to-action band, reused on most pages. */
export default function CtaBand({
  title = "Let's Plan Your Perfect Look.",
  text = "Share your occasion, date and location on WhatsApp and Pallavi will get back to you with availability and pricing.",
  service,
}) {
  const url = service ? serviceEnquiryUrl(service) : generalEnquiryUrl();

  return (
    <section className="bg-blush/60" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">Enquire</p>
          <h2 id="cta-heading" className="display-lg mt-4">
            {title}
          </h2>
          <span className="rule-gold mx-auto mt-6 block" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-xl text-espresso/75">{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={url} external>
              <WhatsAppIcon size={16} />
              Enquire on WhatsApp
            </Button>
            <Button href="/contact" variant="outline">
              Contact Pallavi
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
