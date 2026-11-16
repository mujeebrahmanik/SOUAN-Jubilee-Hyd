"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const POINTS = [
  { k: "Same-day availability", d: "Guaranteed slots across the week." },
  { k: "Central access", d: "Minutes from Sun City and Peeramcheru." },
  { k: "Private suites", d: "Spotless, considered, generously lit." },
  { k: "Certified therapists", d: "Trained in Thai, Swedish, Balinese and more." },
  { k: "Transparent offers", d: "Up to 30% off, no surprises at the counter." },
  { k: "Rated city-wide", d: "Among Hyderabad's most-recommended spas." },
];

export default function Benefits() {
  return (
    <section className="relative bg-ivory" id="promise">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-x-16 gap-y-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        {/* Left — editorial list */}
        <div className="lg:col-span-7 lg:pr-4">
          <Reveal>
            <p className="eyebrow">02 / Our Promise</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Real relief. Real relaxation.{" "}
              <span className="serif text-burgundy">Right here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-[16.5px] leading-[1.75] text-cocoa-deep">
              Souan is where the city comes to properly unwind. Same-day
              friendly. Never rushed.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {POINTS.map((p, i) => (
                <div
                  key={p.k}
                  className="group flex items-start gap-5 border-t border-cocoa-deep/10 pt-4"
                >
                  <span className="index-num mt-[2px] text-[11.5px] text-cocoa-deep/75">
                    0{i + 1}
                  </span>
                  <div>
                    <dt className="font-display text-[15.5px] font-medium text-cocoa-deep">
                      {p.k}
                    </dt>
                    <dd className="mt-1 text-[14px] leading-[1.6] text-cocoa-deep/90">
                      {p.d}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — editorial portrait image */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <figure className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/souanspa.webp"
                alt="Guest resting after a treatment at Souan Luxury Spa"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between gap-6 text-[11.5px] uppercase tracking-[0.3em] text-cocoa-deep/90">
              <span>A quiet afternoon · Jubilee Hills Suite</span>
              <span className="serif lowercase tracking-normal text-burgundy">
                no. 03
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
