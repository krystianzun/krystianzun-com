import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 py-12 mx-auto">
      <div className="flex flex-row space-x-8">
        <div className="max-w-400 flex-none">
          <HeroSection/>
          <MainSection/>
        </div>
        <div className="flex-grow flex justify-center">
          Right column
        </div>
      </div>


    </main>
  );
}
