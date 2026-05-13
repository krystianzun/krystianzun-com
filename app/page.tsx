import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20 pb-4 mx-auto max-w-lg">
      <article className="mb-8">
        <header className="pb-4">
          <h1 className="text-heading">Krystian Zun</h1>
          <time className="text-muted">Updated 13th May, 2026</time>
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
