"use client";

import Footer from "@/components/Footer";
import Projects from "./_components/Projects";
import Engagement from "./_components/Engagement";
import Writing from "./_components/Writing";
import Work from "./_components/Work";
import Image from "next/image";
import { useState } from "react";
import TiltCard from "@/components/TiltCard";

function InlineEmail() {
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("krystian.zun@gmail.com").then(() => {
      setCopied(true);
      setHovering(false);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <span
      className="link-muted cursor-pointer"
      onMouseEnter={() => !copied && setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
    >
      {copied
        ? "Copied!"
        : hovering
          ? "Click to copy"
          : "krystian.zun@gmail.com"}
    </span>
  );
}

export default function Home() {
  return (
    <main className="pt-20 mx-auto max-w-lg px-4 min-h-screen flex flex-col">
      <div className="flex-1">
        <article className="mb-12">
          <header className="pb-8 flex flex-row items-center gap-3">
            <div className="profile-flip-container">
              <div className="profile-flipper">
                <div className="profile-front">
                  <Image
                    src="/images/kz-profile.jpeg"
                    alt="Krystian Zun"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="profile-back">
                  <Image
                    src="/images/duckie.png"
                    alt="Duckie"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-0.5 font-medium">
              <h1 className="text-primary">Krystian Zun</h1>
              <div className="text-muted">
                0
                <svg
                  className="inline w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                1 Product Designer, Builder
              </div>
            </div>
          </header>
          <div className="gap-4 text-primary grid">
            <p>
              A maker at heart, in love with building and shipping products that
              create real value.
            </p>
            <p>
              Over the last several years, I’ve worked on end-to-end products
              across blockchain, immersive learning, art and XR, taking ideas
              from early concepts to impactful experiences.
            </p>
            <p>
              I currently work at{" "}
              <a
                href="https://www.meta.com/en-gb/experiences/fitxr/2327205800645550/"
                target="_blank"
                className="link-muted"
              >
                FitXR
              </a>
              , where I’m focused on bringing AI into the day-to-day design
              workflows.
            </p>
            <p>
              You can find me on{" "}
              <a
                href="https://www.linkedin.com/in/krystianzun/"
                target="_blank"
                className="link-muted"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://x.com/krystianzun"
                target="_blank"
                className="link-muted"
              >
                X
              </a>{" "}
              or <InlineEmail />.
            </p>
          </div>
        </article>

        <div>
          <h2 className="mb-4 font-medium">
            Check out some of my work and{" "}
            <a
              href="/Krystian Zun - Resume.pdf"
              target="_blank"
              className="link-muted"
            >
              resume
            </a>
          </h2>
          <a
            href="https://tinyurl.com/kzportfolio26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltCard className="rounded-xl mb-16 h-40 aspect-video bg-[#FDF351]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio-cover.png"
                  alt="Portfolio"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
                    transition: "background 0.1s ease",
                  }}
                />
              </div>
            </TiltCard>
          </a>
        </div>

        <Work />
        <Writing />
        <Engagement />
      </div>

      <Footer />
    </main>
  );
}
