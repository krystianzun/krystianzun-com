import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-12 pb-4 mx-auto max-w-lg">
      <article>
        <header className="pb-4">
          <h1 className="text-heading">Krystian Zun</h1>
          <time className="text-muted">Updated 13th May, 2026</time>
        </header>
        <div className="gap-4 text-primary grid">
          <p>
            A product designer and maker in love with building and shipping
            products that provide value.
          </p>
          <p>
            A product designer and maker in love with building and shipping
            products that provide value.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
