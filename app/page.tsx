import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Therapies from "@/components/Therapies";
import SocialProof from "@/components/SocialProof";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-cream">
      <Header />
      <Hero />
      <Benefits />
      <Therapies />
      <SocialProof />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
