/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "souanluxuryspa.com" },
      { protocol: "https", hostname: "suncity.souanluxuryspa.com" },
    ],
  },
};

module.exports = nextConfig;
