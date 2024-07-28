import React from "react";
import Link from "next/link";
import Image from "next/image";
import lisaRockstar from "@/public/images/lisaRockstar.jpg";

function NowSection() {
  return (
    <section>
      <h3 className="pb-4 text-grey-800 font-medium">Now,</h3>
      <p className="pb-4">
        If not I&apos;m not designing, I like moving heavy weights, running and
        travelling (a lot, over 180 days last year).
      </p>
      <p className="pb-4 flex text-grey-500">
        Listening to
        <Image
          src={lisaRockstar}
          alt=""
          width={24}
          height={24}
          className="mx-2 rounded"
        />
        <span className="group text-grey-800">
          <span className="border-b-2 border-grey-300 hover:border-grey-800">
            <a
              href="https://www.youtube.com/watch?v=hbcGx4MGUMg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LISA - Rockstar
            </a>
          </span>
          <span className="text-grey-400 group-hover:text-grey-800 font-medium">
            &#x2197;
          </span>
        </span>
        <span>&nbsp;</span>on repeat
      </p>
      <p className="pb-4 text-grey-500">
        Reading
        <span className="group text-grey-800">
          <span>&nbsp;</span>
          <span className="border-b-2 border-grey-300 hover:border-grey-800">
            <a
              href="https://noahkagan.com/mdwbook/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Million Dollar Weekend by Noah Kagan
            </a>
          </span>
          <span className="text-grey-400 group-hover:text-grey-800 font-medium">
            &#x2197;
          </span>
        </span>
      </p>
      <p className="pb-8 text-grey-500">
        Preparing for a{" "}
        <span className="text-grey-800">
          road trip around Croatia, Bosnia, and Montenegro
        </span>
      </p>
      <p className="text-sm text-grey-500">Last update: 16.07.24</p>
    </section>
  );
}

export default NowSection;
