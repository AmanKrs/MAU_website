import ServicePageView from "@/components/services/ServicePageView";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("party-makeup");

export const metadata = buildMetadata({
  title: "Party Makeup Artist in Patna | Festive & Occasion Makeup",
  description: "Party, reception and festive makeup in Patna by Pallavi Verma, from soft glam to bold looks. Enquire on WhatsApp for availability.",
  path: service.page,
});

export default function Page() {
  return <ServicePageView service={service} />;
}
