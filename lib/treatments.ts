export type Therapy = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const popularTherapies: Therapy[] = [
  {
    slug: "deep-tissue",
    title: "Deep Tissue Massage",
    description:
      "Releases deep muscle tension and body stiffness. A restorative full-body ritual.",
    image:
      "/images/deep.avif",
  },
  {
    slug: "swedish",
    title: "Full Body Swedish",
    description:
      "Gentle, full-body relaxation. A calm reset for first-time spa guests.",
    image:
      "/images/swedish.avif",
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    description:
      "Healing essential-oil massage designed to ease mental and physical fatigue.",
    image:"/images/aroma.avif",
  },
  {
    slug: "balinese",
    title: "Full Body Balinese Massage",
    description:
      "Traditional combination massage for deep, restorative full-body relaxation.",
    image: "/images/balinese.webp",
  },
  {
    slug: "hot-stone",
    title: "Hot Stone Therapy",
    description:
      "Warm stones relieve muscle tension, improve circulation and ease stress.",
    image:"/images/hotstone.avif",
  },
  {
    slug: "signature-jacuzzi",
    title: "Signature with Jacuzzi",
    description:
      "Premium hydrotherapy. The ultimate spa luxury in Hyderabad.",
    image: "/images/jacuzzi.webp",  },
];
