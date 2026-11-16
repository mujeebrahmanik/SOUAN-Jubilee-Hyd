export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya R.",
    role: "Happy Guest · Hyderabad",
    rating: 5,
    quote:
      "Hands down the best spa in Hyderabad. The deep tissue massage was incredible. Clean rooms, professional staff, and a genuinely calming atmosphere.",
  },
  {
    name: "Kiran M.",
    role: "Repeat Customer",
    rating: 5,
    quote:
      "Booked same day and got an instant slot. Best massage centre in Hyderabad, easy to find and very affordable with the current offers.",
  },
  {
    name: "Sneha T.",
    role: "Weekend Visitor",
    rating: 5,
    quote:
      "Souan is my go-to for stress relief, no doubt. The Swedish and aromatherapy combo was exactly what I needed. Highly recommend!",
  },
];
