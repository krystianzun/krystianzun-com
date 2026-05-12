import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-12 pb-4 mx-auto max-w-lg">
      <section>
        <div className="pb-4">
          <h2 className=" text-heading">
            hello there! *✲ﾟ*, i&apos;m Krystian
          </h2>
        </div>
      </section>

      <section className="mb-8">
        <p className="text-primary pb-4">
          A product designer and maker in love with building and shipping
          products that provide value.
        </p>
      </section>

      <Footer />
    </main>
  );
}
