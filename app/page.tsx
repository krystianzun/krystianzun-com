import Footer from "@/components/Footer";
import InlineEmail from "@/components/InlineEmail";
import Engagement from "./_components/Engagement";
import SideProjects from "./_components/SideProjects";
import Writing from "./_components/Writing";
import Work from "./_components/Work";
import Image from "next/image";
import { profile } from "./_data/profile";

export default function Home() {
  return (
    <main className="pt-20 mx-auto max-w-lg px-4 min-h-screen flex flex-col">
      <div className="flex-1">
        <article className="mb-16">
          <header className="pb-8 flex flex-row items-center gap-3">
            <div className="profile-flip-container">
              <div className="profile-flipper">
                <div className="profile-front">
                  <Image
                    src={profile.images.front}
                    alt={profile.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="profile-back">
                  <Image
                    src={profile.images.back}
                    alt="Duckie"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-0.5 font-medium">
              <h1 className="text-primary">{profile.name}</h1>
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
                1 {profile.title}
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
                href={profile.currentWork.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                {profile.currentWork.company}
              </a>
              , where I’m focused on bringing AI into the day-to-day design
              workflows.
            </p>
            <p>
              You can find me on{" "}
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                X
              </a>{" "}
              or <InlineEmail email={profile.email} />.
            </p>
            <p>
              Check out some of my{" "}
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                work
              </a>{" "}
              and{" "}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                resume
              </a>
              .
            </p>
          </div>
        </article>
        <Work />
        <SideProjects />
        <Engagement />
        <Writing />
      </div>

      <Footer />
    </main>
  );
}
