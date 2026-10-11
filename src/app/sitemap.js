import { servicePages } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

// Update this date when page content changes meaningfully.
const LAST_UPDATED = "2026-10-11";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...servicePages.map((service) => ({
      path: service.page,
      priority: 0.9,
      changeFrequency: "monthly",
    })),
    { path: "/gallery", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
