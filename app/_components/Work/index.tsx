"use client";

import { work } from "@/app/_data/work";
import { useHoverDim } from "../useHoverDim";
import WorkRow from "./WorkRow";

export default function Work() {
  const { isDimmed, bind } = useHoverDim();

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Impact</h3>
      <div>
        {work.map((item, i) => (
          <WorkRow
            key={item.title}
            {...item}
            dimmed={isDimmed(i)}
            {...bind(i)}
          />
        ))}
      </div>
    </section>
  );
}
