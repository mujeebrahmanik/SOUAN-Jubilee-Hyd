"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  navItems,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "@/lib/navigation";

function Wordmark({ tone }: { tone: "light" | "dark" }) {
  const text = tone === "light" ? "text-ivory" : "text-cocoa-deep";
  const sub =
    tone === "light" ? "text-ivory/80" : "text-cocoa-deep/70";
  return (
    <a href="#home" className="inline-flex flex-col leading-none">
      <span className={`font-display text-[17px] font-medium tracking-[0.42em] ${text}`}>
        SOUAN
      </span>
      <span className={`mt-1.5 text-[9px] font-medium uppercase tracking-[0.36em] ${sub}`}>
        Luxury Spa — Jubilee Hills · Hyd.
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Thin utility strip — single tone, no coloured chips */}
      <div className="border-b border-ivory/10 bg-cocoa-deep text-ivory/90">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-[9px] md:px-10">
          <p className="truncate text-[10.5px] font-medium uppercase tracking-[0.32em]">
            {/* <span className="text-champagne">Instant Discount ·</span>{" "} */}
            Same-Day Bookings Open
          </p>
          <div className="hidden items-center gap-5 text-[10.5px] font-medium uppercase tracking-[0.3em] md:flex">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-[#25d366] shadow-[0_0_0_3px_rgba(37,211,102,0.18)]" />
              WhatsApp
            </a>
            <span className="h-3 w-px bg-ivory/15" />
            <a
              href={PHONE_HREF}
              className="transition-colors hover:text-ivory"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <div
        className={`transition-colors duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-cocoa-deep/8"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <Wordmark tone={scrolled ? "dark" : "light"} />

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-display text-[11.5px] font-medium uppercase tracking-[0.26em] transition-colors duration-300 ${
                  scrolled
                    ? "text-cocoa-deep hover:text-burgundy"
                    : "text-ivory hover:text-champagne"
                }`}
              >
                <span className="mr-2 text-[9.5px] font-normal opacity-70">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={PHONE_HREF} className="btn-cta">
              Reserve
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden ${
              scrolled || open
                ? "border-cocoa-deep/20 text-cocoa-deep"
                : "border-ivory/35 text-ivory"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-cream pt-24 lg:hidden"
          >
            {/* Dedicated close button inside the panel */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-5 inline-flex h-10 w-10 items-center justify-center border border-cocoa-deep/20 text-cocoa-deep transition-colors hover:bg-cocoa-deep hover:text-ivory"
            >
              <X size={16} />
            </button>

            <div className="flex h-full flex-col px-6 pb-10">
              <nav className="flex flex-col divide-y divide-cocoa-deep/10">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="group flex items-baseline gap-5 py-5 text-cocoa-deep"
                  >
                    <span className="index-num text-[11px] text-cocoa-deep/40">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl font-light tracking-tight transition-colors group-hover:text-burgundy">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-10 space-y-3">
                <a href={PHONE_HREF} className="btn-cta w-full">
                  Call · {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <span className="wa-dot" /> WhatsApp Booking
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
