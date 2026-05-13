import Footer from "@/components/Footer";
import Projects from "./_components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20 pb-20 mx-auto max-w-lg">
      <article className="mb-8">
        <header className="pb-8 flex flex-row items-center gap-4">
          <Image
            src="/images/kz-profile.jpeg"
            alt="Krystian Zun"
            width={48}
            height={48}
            className="rounded-full"
          />
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
          <p>I was born in London, UK, and now live in Los Angeles, CA.</p>
          <p>
            I founded Los Feliz Engineering, a consumer software company named
            after the first neighbourhood I moved to in the U.S. We created
            Honk, a real-time messaging app, and Family, a self-custody crypto
            wallet. In September 2023, LFE was acquired by Aave Labs, where I
            served as CPO until October 2025.
          </p>
          <p>
            I currently work at SpaceX/xAI, where I lead design for X.
            Previously, I was Head of Design at Base, a division of Coinbase.
          </p>
          <p>
            I’m also a co-founder at Dip, which creates and publishes tools for
            achieving interface excellence, such as cmdk and Agentation.
          </p>
          <p>
            I consider myself a designer at heart and enjoy building highly
            polished products.
          </p>
          <p>You can find me on X, Instagram, or reach me via email.</p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
