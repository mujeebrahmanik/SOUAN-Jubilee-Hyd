import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Luxury Spa in Jubilee Hills, Hyderabad | Up to 30% Off | Souan",
  description:
    " Book a full-body massage, deep tissue or aromatherapy session at Souan Luxury Spa, Jubilee Hills. Up to 30% off. Same-day slots. Call 073374 82255.",
  openGraph: {
    title: "Best Luxury Spa in Jubilee Hills, Hyderabad | Up to 30% Off | Souan",
    description:
      " Book a full-body massage, deep tissue or aromatherapy session at Souan Luxury Spa, Jubilee Hills. Up to 30% off. Same-day slots. Call 073374 82255.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="bg-cream text-cocoa-deep antialiased">{children}</body>
    </html>
  );
}
