import { artist } from "@/data/artist";

/** Keep only digits, so "+91 98765-43210" becomes "919876543210". */
export function cleanNumber(value) {
  return String(value || "").replace(/\D/g, "");
}

/**
 * Build the default enquiry message. Missing details are left as open blanks
 * so the visitor can complete them before sending.
 */
export function buildEnquiryMessage({
  service = "your makeup services",
  date = "",
  location = "",
} = {}) {
  const dateText = date || "[date]";
  const locationText = location || "[location]";
  return `Hello Pallavi, I found your website and would like to enquire about ${service}. My event date is ${dateText}, and my event location is ${locationText}. Please share your availability and pricing.`;
}

/**
 * Standard click-to-chat URL with a URL-encoded message.
 * With no number configured, https://wa.me/?text= opens WhatsApp with the
 * message ready and lets the visitor choose the chat.
 */
export function buildWhatsAppUrl(message) {
  const number = cleanNumber(artist.whatsappNumber);
  const text = encodeURIComponent(message);
  return number
    ? `https://wa.me/${number}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

/** Enquiry link for a service name (or a general enquiry when omitted). */
export function serviceEnquiryUrl(serviceName) {
  return buildWhatsAppUrl(
    buildEnquiryMessage({ service: serviceName || undefined }),
  );
}

export const generalEnquiryUrl = () => serviceEnquiryUrl();
