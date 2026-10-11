import ServicePageView from "@/components/services/ServicePageView";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("engagement-makeup");

export const metadata = buildMetadata({
  title: "Engagement Makeup Artist in Patna",
  description: "Engagement and ring-ceremony makeup in Patna by Pallavi Verma, planned around your outfit and style. Enquire on WhatsApp for availability.",
  path: service.page,
});

export default function Page() {
  return <ServicePageView service={service} />;
}
