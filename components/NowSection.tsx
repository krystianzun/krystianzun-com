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
        Currently{" "}
        <span className="ml-2 text-grey-800">
          。･:*:･°˖✧◝ rebooting ◜✧˖°･:*:･。.
        </span>
      </p>

      <p className=" text-grey-500">Last update: 06.10.24</p>
    </section>
  );
}

export default NowSection;
