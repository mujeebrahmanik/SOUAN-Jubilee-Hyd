"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/navigation";
import { reportCallConversion } from "@/lib/analytics";

function handleCallClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  reportCallConversion(PHONE_HREF);
}

const CTA_IMAGE = "/images/oil.avif"

export default function FinalCTA() {
  return (
    <section className="relative bg-ivory">
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
          {/* Image column */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden md:h-full md:aspect-auto md:min-h-[460px]">
              <Image
                src={CTA_IMAGE}
                alt="A quiet moment during a treatment at Souan Luxury Spa"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content column — centered inside its own column */}
          <div className="flex items-center md:col-span-7">
            <div className="w-full">
              <Reveal>
                <p className="eyebrow">06 / Reserve</p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-6 max-w-[14ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.08] tracking-[-0.025em]">
                  An hour for yourself.{" "}
                  <span className="serif text-burgundy">
                    Begin when you're ready.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md text-[15.5px] leading-[1.75] text-cocoa-deep">
                  Same-day appointments usually available. Call{" "}
                  <a
                    href={PHONE_HREF}
                    onClick={handleCallClick}
                    className="font-semibold text-burgundy underline-offset-4 hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  . Open daily, 9 AM – 10 PM.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href={PHONE_HREF} onClick={handleCallClick} className="btn-cta">
                    Call to Reserve
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <span className="wa-dot" /> WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
