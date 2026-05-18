"use client";

import { useState } from "react";

interface WritingItem {
  title: string;
  href: string;
  date: string;
  description?: string;
  isNew?: boolean;
}

const writings: WritingItem[] = [
  {
    title:
      "From Idea to Revenue: How I Built XR Jobs Board With 0 Technical Experience",
    href: "https://substack.com/@krystianzun/p-169737381",
    date: "08.2025",
    isNew: false,
  },
  {
    title: "Why product design matters at an API company",
    href: "https://duffel.com/blog/why-product-design-matters-at-an-api-company",
    date: "08.2022",
    isNew: false,
  },
];

function WritingRow({
  title,
  href,
  date,
  description,
  isNew,
  dimmed,
  onMouseEnter,
  onMouseLeave,
}: WritingItem & {
  dimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="border-b border-border transition-opacity duration-200"
      style={{ opacity: dimmed ? 0.3 : 1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start justify-between py-2.5"
      >
        <div className="flex flex-col gap-0.5">
          <div className="flex items-start gap-2">
            <span className="text-primary">{title}</span>
            {isNew && (
              <span className="text-xs font-medium px-1.5 py-0.5 bg-gray-100 text-muted rounded-sm">
                New
              </span>
            )}
          </div>
          {description && (
            <span className="text-muted text-sm">{description}</span>
          )}
        </div>
        <span className="text-muted ml-4 tabular-nums shrink-0">{date}</span>
      </a>
    </div>
  );
}

export default function Writing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Writings</h3>
      <div>
        {writings.map((item, i) => (
          <WritingRow
            key={item.title}
            {...item}
            dimmed={hoveredIndex !== null && hoveredIndex !== i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
