import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import { offeredServices } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { serviceEnquiryUrl } from "@/lib/whatsapp";

/** Cards for every confirmed service. Each links to its page when one exists. */
export default function ServiceCards({ services = offeredServices }) {
  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const image = galleryItems.find((item) => item.category === service.category);
        return (
          <li key={service.slug}>
            <Reveal delay={(index % 3) * 0.08}>
              <article className="group flex h-full flex-col">
                {service.page ? (
                  <Link href={service.page} aria-label={`${service.name} details`}>
                    <PhotoSlot
                      image={image}
                      category={service.category}
                      ratio="4 / 5"
                      className="transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </Link>
                ) : (
                  <PhotoSlot image={image} category={service.category} ratio="4 / 5" />
                )}
                <h3 className="display-md mt-6">
                  {service.page ? (
                    <Link href={service.page} className="hover:text-gold-dark">
                      {service.name}
                    </Link>
                  ) : (
                    service.name
                  )}
                </h3>
                <p className="mt-3 flex-1 text-espresso/75">{service.short}</p>
                {service.startingPrice ? (
                  <p className="mt-3 text-sm text-espresso/70">
                    Starting from {service.startingPrice}
                  </p>
                ) : null}
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.76rem] font-medium uppercase tracking-[0.16em]">
                  <a
                    href={serviceEnquiryUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-b border-gold pb-0.5 hover:text-gold-dark"
                  >
                    Enquire <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  {service.page ? (
                    <Link href={service.page} className="text-espresso/60 hover:text-gold-dark">
                      Details
                    </Link>
                  ) : null}
                </div>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
