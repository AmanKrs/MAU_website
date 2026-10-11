import { artist } from "@/data/artist";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${artist.siteUrl}/sitemap.xml`,
    host: artist.siteUrl,
  };
}
