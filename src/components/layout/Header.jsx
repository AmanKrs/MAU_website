"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { artist, navLinks } from "@/data/artist";
import { generalEnquiryUrl } from "@/lib/whatsapp";

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const enquiryUrl = generalEnquiryUrl();

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-champagne/70 bg-ivory/90 backdrop-blur">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            onClick={close}
            className="font-serif text-2xl tracking-wide text-espresso sm:text-[1.7rem]"
            aria-label={`${artist.name}, home`}
          >
            {artist.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-dark ${
                  isActive(pathname, link.href)
                    ? "text-gold-dark"
                    : "text-espresso"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-espresso bg-espresso px-6 py-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold-dark hover:bg-gold-dark"
            >
              Enquire Now
            </a>
          </nav>

          <button
            type="button"
            className="-mr-2 p-2 text-espresso lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-30 overflow-y-auto bg-ivory lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col px-5 pb-10 pt-6 sm:px-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`border-b border-champagne py-5 font-serif text-3xl ${
                  isActive(pathname, link.href) ? "text-gold-dark" : "text-espresso"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-8 border border-espresso bg-espresso px-6 py-4 text-center text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
