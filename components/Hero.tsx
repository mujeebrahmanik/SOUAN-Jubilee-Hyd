"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/navigation";
import { reportCallConversion } from "@/lib/analytics";

function handleCallClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  reportCallConversion(PHONE_HREF);
}



export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-cocoa-deep text-ivory"
    >
      {/* Image + layered gradients — image breathes on the right */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_38%] opacity-[0.6]"
        style={{ backgroundImage: `url(/images/oil.avif)` }}
        aria-hidden
      />
      {/* Gentle flat overlay — just enough for text contrast */}
      <div
        className="absolute inset-0 -z-10 bg-cocoa-deep/25"
        aria-hidden
      />
      {/* Horizontal shaping — deeper on the content side, lighter toward the image */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa-deep/70 via-cocoa-deep/35 to-cocoa-deep/10"
        aria-hidden
      />
      {/* Vertical vignette — anchor top and bottom */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cocoa-deep/40 via-transparent to-cocoa-deep/70"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pb-16 pt-[148px] md:px-10 md:pb-20 md:pt-[184px]">
        {/* Primary — eyebrow, headline, description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[960px]"
        >
          <p className="text-[10.5px] uppercase tracking-[0.42em] text-champagne/85">
             Jubilee Hills · Est. in Wellness
          </p>

          <h1 className="mt-10 font-display text-[clamp(2.6rem,7.2vw,6.2rem)] font-light leading-[1.02] tracking-[-0.03em]">
            A quiet pause,
            <br />
            thoughtfully{" "}
            <span className="serif text-champagne">composed.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-ivory/70 md:text-[16px]">
            Hyderabad's most considered spa experience. Full-body massages, deep tissue, aromatherapy and signature rituals, booked in minutes with up to 30% off across all services.
          </p>

          <div className="mt-9 inline-flex w-fit max-w-full items-stretch overflow-hidden border border-champagne/45 bg-cocoa-deep/55 shadow-[0_20px_55px_-22px_rgba(197,164,109,0.45)] backdrop-blur-md">
            {/* Left — rating / badge stack */}
            <div className="flex items-center gap-3 px-5 py-3.5 sm:px-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-champagne/60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-champagne shadow-[0_0_0_4px_rgba(197,164,109,0.25)]" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-[12px] uppercase tracking-[0.26em] text-ivory">
                  Best Spa in Hyderabad
                </span>
                <span className="mt-1 text-[9.5px] uppercase tracking-[0.3em] text-ivory/55">
                  Same-Day Booking Open
                </span>
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className="w-px bg-gradient-to-b from-transparent via-champagne/40 to-transparent"
              aria-hidden
            />

            {/* Right — the money-shot: big 30% */}
            {/* <div className="relative flex items-center gap-2.5 bg-champagne px-5 py-3.5 sm:px-6">
              <span className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-cocoa-deep/70">
                Flat
              </span>
              <span className="flex items-baseline gap-1 leading-none">
                <span className="font-display text-[30px] font-semibold text-cocoa-deep sm:text-[34px]">
                  30%
                </span>
                <span className="font-display text-[12px] font-semibold uppercase tracking-[0.3em] text-cocoa-deep">
                  Off
                </span>
              </span>
            </div> */}
          </div>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {/* Primary CTA — champagne gold, maximum pop on dark hero */}
            <a
              href={PHONE_HREF}
              onClick={handleCallClick}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-champagne px-7 py-[18px] font-display text-[12.5px] font-medium uppercase tracking-[0.22em] text-cocoa-deep shadow-[0_22px_55px_-18px_rgba(197,164,109,0.75)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_28px_65px_-18px_rgba(197,164,109,0.95)]"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-cocoa-deep">
                <span className="absolute inset-0 animate-ping rounded-full bg-cocoa-deep/35" />
                <Phone
                  size={14}
                  strokeWidth={2.5}
                  className="relative text-champagne"
                />
              </span>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[9.5px] font-medium tracking-[0.3em] text-cocoa-deep/75">
                  Call for Instant Slot
                </span>
                <span className="mt-1.5 text-[13.5px] font-semibold tracking-[0.18em]">
                  {PHONE_DISPLAY}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="ml-1 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[400%]" />
            </a>

            {/* WhatsApp — dark brand green */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#075E54] px-7 py-[18px] font-display text-[12.5px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_22px_55px_-18px_rgba(7,94,84,0.7)] transition-all duration-500 hover:-translate-y-[2px] hover:bg-[#128C7E] hover:shadow-[0_28px_65px_-18px_rgba(18,140,126,0.9)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366]/90">
                <MessageCircle
                  size={14}
                  strokeWidth={0}
                  fill="currentColor"
                  className="text-white"
                />
              </span>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[9.5px] tracking-[0.3em] text-white/70">
                  Chat on
                </span>
                <span className="mt-1.5 text-white">WhatsApp</span>
              </span>
            </a>
          </div>

          {/* Supporting trust line under CTAs */}
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.26em] text-ivory/85">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/60" />
                <span className="relative h-2 w-2 rounded-full bg-[#25d366] shadow-[0_0_0_3px_rgba(37,211,102,0.25)]" />
              </span>
              Slots Open Today
            </span>
            <span className="hidden h-3 w-px bg-ivory/30 sm:inline-block" />
            <span className="text-ivory/75">Instant Confirmation</span>
          </p>
        </motion.div>

        

        {/* Editorial pause — pushes the base row to the bottom of the hero */}
        <div className="flex-1" />

        {/* Base — info row + CTAs anchored to the bottom of the composition */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12 md:items-end">
            <dl className="grid grid-cols-1 border-t border-ivory/15 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-ivory/15 sm:border-0 sm:pt-0 md:col-span-7">
              <InfoItem label="Open Daily" value="09:00 – 22:00" />
              <InfoItem label="Location" value="Sun City · Hyd." pad />
              <InfoItem label="Best For" value="Instant phone bookings" pad />
            </dl>

            
          </div>

          <p className="mt-14 hidden items-center gap-5 text-[11px] uppercase tracking-[0.35em] text-ivory/40 md:flex">
            <span>Scroll</span>
            <span className="h-px flex-1 bg-ivory/15" />
            <span className="index-num">01 / 06</span>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
  pad,
}: {
  label: string;
  value: string;
  pad?: boolean;
}) {
  return (
    <div className={`${pad ? "sm:pl-5" : ""} sm:pr-5`}>
      <p className="text-[9.5px] uppercase tracking-[0.3em] text-ivory/45">
        {label}
      </p>
      <p className="mt-2 font-display text-sm font-light text-ivory">{value}</p>
    </div>
  );
}
