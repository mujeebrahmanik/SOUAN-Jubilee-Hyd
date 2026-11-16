"use client";

import { Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

const ADDRESS =
  "Metro Pillar C1666, Road No. 36, above Manyavar, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033";
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Souan Luxury Spa Jubilee Hills, Hyderabad, " + ADDRESS,
)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Souan Luxury Spa Jubilee Hills, Hyderabad, " + ADDRESS,
)}&output=embed`;

export default function Location() {
  return (
    <section id="visit" className="relative bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        {/* Top header — intentionally narrow, centered-left */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">05 / Visit Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
                Conveniently placed,
                <br />
                <span className="serif text-burgundy">
                  quietly out of reach.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-[16px] leading-[1.7] text-cocoa-deep">
  Centrally located in Jubilee Hills, on Road No. 36 near Metro Pillar C1666, with easy access from across Hyderabad. A city spa with the feel of a quiet getaway.
            </p>
          </Reveal>
        </div>

        {/* Map-dominant layout: larger map + inset sidebar that reads together */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-0">
            <div className="relative md:col-span-7 lg:col-span-8">
              <iframe
                title="Souan Luxury Spa —  Jubilee Hills, Hyderabad"
                src={MAPS_EMBED}
                className="h-[420px] w-full grayscale md:h-[540px] lg:h-[580px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="relative bg-cocoa-deep p-8 text-ivory md:col-span-5 md:-ml-10 md:mt-20 md:self-start md:p-10 lg:col-span-4 lg:-ml-14 lg:mt-24">
              <p className="eyebrow !text-champagne !opacity-80">
                Souan ·  Souan · Jubilee Hills
              </p>
              <h3 className="mt-4 font-display text-[1.45rem] font-light leading-[1.2] lg:text-[1.6rem]">
                 Metro Pillar C1666, 
                <br />
                Road No. 36.
              </h3>
              <p className="mt-4 max-w-[36ch] text-[14.5px] leading-[1.7] text-ivory">
               above Manyavar, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033

              </p>

              <dl className="mt-8 space-y-4 border-t border-ivory/15 pt-6 text-[14px]">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-ivory/85">Open</dt>
                  <dd className="font-display font-medium text-ivory">
                    09:00 – 22:00 daily
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-ivory/85">Phone</dt>
                  <dd>
                    <a
                      href={PHONE_HREF}
                      className="font-display font-medium text-ivory hover:text-champagne"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full"
                >
                  <Navigation size={14} /> Directions
                </a>
                <a
                  href={PHONE_HREF}
                  className="btn-whatsapp !border-ivory/30 w-full !text-ivory hover:!bg-ivory hover:!text-cocoa-deep hover:!border-ivory"
                >
                  <Phone size={14} /> Call to Reserve
                </a>
              </div>
            </aside>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
