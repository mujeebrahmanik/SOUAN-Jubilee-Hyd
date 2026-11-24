"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { popularTherapies } from "@/lib/treatments";
import { PHONE_HREF } from "@/lib/navigation";
import { reportCallConversion } from "@/lib/analytics";

function handleCallClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  reportCallConversion(PHONE_HREF);
}

export default function Therapies() {
  return (
    <section id="therapies" className="relative bg-cream">
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
        {/* Section header */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">03 / Popular Therapies</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Hyderabad's full range of massage therapies,{" "}
                <span className="serif text-burgundy">under one roof.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="md:col-span-4 md:col-start-9">
            <p className="text-[15.5px] leading-[1.7] text-cocoa-deep">
              Every treatment is available at{" "}
              <span className="font-semibold text-burgundy">up to 30% off</span>
              , with same-day slots open.
            </p>
          </Reveal>
        </div>

        {/* 3-col grid with bordered editorial cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {popularTherapies.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 0.06} className="h-full">
              <article className="group flex h-full flex-col border border-cocoa-deep/10 bg-ivory/60 transition-colors duration-500 hover:border-cocoa-deep/25">
                <a href={PHONE_HREF} onClick={handleCallClick} className="block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="index-num text-[11px] text-cocoa-deep/75">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-[1.3rem] font-medium leading-tight text-cocoa-deep">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-cocoa-deep/95">
                    {t.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div className="mb-5 h-px bg-cocoa-deep/10" />
                    <a
                      href={PHONE_HREF}
                      onClick={handleCallClick}
                      aria-label={`Call for availability — ${t.title}`}
                      className="btn-cta w-full"
                    >
                      <Phone size={13} /> Call for Availability
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Quiet footer note */}
        <Reveal>
          <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-cocoa-deep/15 pt-8 md:flex-row md:items-center">
            <p className="max-w-md text-[15px] leading-[1.7] text-cocoa-deep">
              Prefer to talk it through? Our front-desk team will help you
              choose the right ritual for how your body feels today.
            </p>
            <a href="#visit" className="btn-ghost">
              Visit Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
