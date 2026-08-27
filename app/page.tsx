import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eae7e0]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <Process />
      <Pricing />
      <About />
    </main>
  );
}