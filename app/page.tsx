import Footer from "@/components/Footer";
import Projects from "./_components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20 pb-20 mx-auto max-w-lg px-4">
      <article className="mb-8">
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
          <div className="grid gap-0.5">
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
            across blockchain, immersive learning, art and XR, taking ideas from
            early concepts to launched experiences.
          </p>
          <p>
            I currently work at FitXR, where I’m focused on bringing AI into the
            day-to-day design workflows.
          </p>
          <p>
            You can find me on LinkedIn, X or reach me via
            krystian.zun@gmail.com.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
