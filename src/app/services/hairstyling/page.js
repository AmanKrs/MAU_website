import ServicePageView from "@/components/services/ServicePageView";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("hairstyling");

export const metadata = buildMetadata({
  title: "Hairstyling in Patna | Bridal & Occasion Hair",
  description: "Hairstyling in Patna by Pallavi Verma for bridal, engagement, party and festive occasions, planned to complete your makeup look.",
  path: service.page,
});

export default function Page() {
  return <ServicePageView service={service} />;
}
