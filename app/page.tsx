import Footer from "@/components/Footer";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="px-6 pt-12 pb-4 mx-auto max-w-400">
      <section>
        <div className="pb-4">
          <h1 className="pb-14 text-grey-800">(ﾉ◕ヮ◕)ﾉ *:･ﾟ</h1>
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
        <p className="font-regular text-grey-800">
          Currently, ...
          {/* Currently, i'm leading design practice at */}
          {/* <span className='group'> */}
          {/*   <span>&nbsp;</span> */}
          {/*   <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'> */}
          {/*     <a href="https://www.superbright.me/" target="_blank" rel="noopener noreferrer">Superbright</a> */}
          {/*   </span> */}
          {/*   <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span> */}
          {/* </span> & <span className='hidden md:inline-block'><br/></span> */}
          {/* <span className='group'> */}
          {/*   <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'> */}
          {/*     <a href="https://vortic.art/discover" target="_blank" rel="noopener noreferrer">Vortic</a> */}
          {/*   </span> */}
          {/*   <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span> */}
          {/* </span> focused on spatial & immersive experiences. */}
        </p>
        <hr className="w-full h-px bg-gray-300 border-0 my-14" />
      </section>

      <Projects />

      <section>
        <h3 className="pb-4 text-grey-800 font-medium">Now,</h3>
        <p className="pb-4">
          If not I&apos;m not designing, I like moving heavy weights, running
          and travelling (a lot, over 180 days last year).
        </p>
        <p className="pb-4 flex text-grey-500">
          Currently{" "}
          <span className="ml-2 text-grey-800">
            。･:*:･°˖✧◝ rebooting ◜✧˖°･:*:･。.
          </span>
        </p>
        <p className="text-grey-500">Last update: 06.10.24</p>
      </section>

      <Footer />
    </main>
  );
}
