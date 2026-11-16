import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5EF",
        cream: "#F3ECE1",
        beige: "#EAE1D5",
        champagne: "#C5A46D",
        "champagne-dark": "#A88852",
        olive: "#41483A",
        charcoal: "#292A26",
        cocoa: "#3C2318",
        "cocoa-deep": "#2A170F",
        burgundy: "#6B2A20",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
