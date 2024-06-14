import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 py-12">
      <HeroSection/>
      <MainSection/>
    </main>
  );
}
