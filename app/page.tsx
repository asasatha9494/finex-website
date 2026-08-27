import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eae7e0]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
    </main>
  );
}