"use client";

export default function Footer() {
  return (
    <footer className="bg-cocoa-deep text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-7 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-[13px] md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Souan Luxury Spa, Jubilee Hills, Hyderabad. All rights reserved.
          </p>
          <p className="font-display text-[12px] font-medium uppercase tracking-[0.25em] text-champagne">
            Luxury Spa in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
