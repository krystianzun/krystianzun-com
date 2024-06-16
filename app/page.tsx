import DividerSection from "@/components/DividerSection";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import NowSection from "@/components/NowSection";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 py-12 mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="w-full max-w-400 flex-none">
          <HeroSection/>
          <MainSection/>
          <ProjectsSection />
          <NowSection />
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          Right column
        </div>
      </div>
      <DividerSection />

    </main>
  );
}
