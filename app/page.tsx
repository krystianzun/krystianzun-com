import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="px-6 pt-12 pb-4 mx-auto max-w-400">
      <section>
        <div className="pb-4">
          <h2 className="font-medium text-grey-800">
            hello there! *✲ﾟ*, i&apos;m Krystian
          </h2>
        </div>
      </section>

      <section>
        <p className="font-regular text-grey-800 pb-4">
          A product designer and maker in love with building and shipping
          products that provide value.
        </p>
      </section>

      <Footer />
    </main>
  );
}
