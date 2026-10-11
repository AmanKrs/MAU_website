import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import JsonLd from "@/components/ui/JsonLd";
import { artist } from "@/data/artist";
import { businessJsonLd, siteName } from "@/lib/seo";

// Fonts are self-hosted (src/fonts) so builds never depend on Google Fonts being reachable.
const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
});

const jost = localFont({
  variable: "--font-jost",
  display: "swap",
  src: [{ path: "../fonts/jost-latin-wght-normal.woff2", weight: "100 900", style: "normal" }],
});

export const metadata = {
  metadataBase: new URL(artist.siteUrl),
  title: {
    default: `${artist.name} | Bridal & Occasion Makeup Artist in ${artist.baseCity}`,
    template: `%s | ${artist.name}`,
  },
  description: `${artist.name} is a makeup artist in ${artist.baseCity}, ${artist.baseRegion}, offering bridal, engagement, party and occasion makeup and hairstyling.`,
  applicationName: siteName,
  authors: [{ name: artist.name }],
  creator: artist.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: artist.name,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={businessJsonLd()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
