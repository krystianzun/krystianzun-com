import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-red-500">Hello World</h1>
      <HeroSection/>
      <MainSection/>
    </main>
  );
}
