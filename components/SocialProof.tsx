"use client";

import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} out of 5`}
      className="flex items-center gap-[3px] text-champagne"
    >
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="reviews" className="relative bg-cocoa-deep text-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow !text-champagne !opacity-80">
              04 / Guest Voices
            </p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] tracking-[-0.02em]">
              What people say,{" "}
              <span className="serif text-champagne">
                in their own words.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="flex items-center gap-3 md:justify-end">
              <Stars rating={5} />
              <span className="font-display text-[13px] font-medium uppercase tracking-[0.28em] text-ivory">
                5.0 average
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-[1.7] text-ivory/95 md:ml-auto md:max-w-xs">
              A small selection of recent feedback from Souan guests.
            </p>
          </div>
        </div>

        {/* 3-col testimonial grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <blockquote className="flex h-full flex-col border border-ivory/15 bg-ivory/[0.04] p-8">
                <Stars rating={t.rating} />
                <p className="mt-6 flex-1 text-[15.5px] leading-[1.75] text-ivory">
                  “{t.quote}”
                </p>
                <footer className="mt-8 border-t border-ivory/15 pt-5">
                  <p className="font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ivory">
                    {t.name}
                  </p>
                  <p className="mt-1.5 text-[11.5px] uppercase tracking-[0.25em] text-ivory/85">
                    {t.role}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
