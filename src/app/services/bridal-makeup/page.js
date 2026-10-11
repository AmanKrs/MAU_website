import ServicePageView from "@/components/services/ServicePageView";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("bridal-makeup");

export const metadata = buildMetadata({
  title: "Bridal Makeup Artist in Patna | Bridal Makeup & Hairstyling",
  description: "Bridal makeup in Patna by Pallavi Verma. Looks tailored to your features and outfit, with hairstyling available. Enquire on WhatsApp for availability.",
  path: service.page,
});

export default function Page() {
  return <ServicePageView service={service} />;
}
