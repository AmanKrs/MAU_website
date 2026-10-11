import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { generalEnquiryUrl } from "@/lib/whatsapp";

/** Floating WhatsApp enquiry button, visible on every page. */
export default function WhatsAppFloat() {
  return (
    <a
      href={generalEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#1f7a4d] px-4 py-3.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#17623e] sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon size={20} />
      <span className="hidden text-[0.74rem] uppercase tracking-[0.16em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
