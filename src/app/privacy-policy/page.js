import { artist } from "@/data/artist";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Privacy Policy",
    description: `How ${artist.name} handles the information you share when you enquire about makeup and hairstyling services.`,
    path: "/privacy-policy",
  }),
};

export default function PrivacyPolicyPage() {
  return (
    <section aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow">Legal</p>
        <h1 id="privacy-heading" className="display-lg mt-5">
          Privacy Policy
        </h1>
        <span className="rule-gold mt-7 block" aria-hidden="true" />
        <div className="mt-10 space-y-8 text-espresso/80">
          <p>
            This is a plain-language summary of how this website handles information. It is a starting point and
            should be reviewed by {artist.name} before the site goes live.
          </p>

          <div>
            <h2 className="display-md">The enquiry form</h2>
            <p className="mt-3">
              When you use the enquiry form, your details are checked in your browser and used to prepare a prefilled
              WhatsApp message. This website does not store the form details on a server. Your enquiry is only sent
              if you press Send in WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="display-md">WhatsApp</h2>
            <p className="mt-3">
              Once you send a message, WhatsApp&apos;s own terms and privacy policy apply to that conversation.
              Messages you send are received by {artist.name}, who uses them to reply to your enquiry and discuss
              bookings.
            </p>
          </div>

          <div>
            <h2 className="display-md">Cookies and analytics</h2>
            <p className="mt-3">
              This website does not set advertising cookies. If analytics tools are added later, this policy will be
              updated to describe them.
            </p>
          </div>

          <div>
            <h2 className="display-md">Your choices</h2>
            <p className="mt-3">
              You can ask {artist.name} to stop contacting you or to delete details you have sent by messaging on
              WhatsApp.
              {artist.email ? ` You can also write to ${artist.email}.` : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
