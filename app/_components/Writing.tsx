"use client";

import { useState } from "react";
import { writings, type WritingItem } from "@/app/_data/writing";

function WritingRow({
  title,
  href,
  date,
  description,
  isNew,
  dimmed,
  onEnter,
  onLeave,
}: WritingItem & {
  dimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="border-b border-border transition-opacity duration-200"
      style={{ opacity: dimmed ? 0.3 : 1 }}
      onPointerEnter={(e) => e.pointerType === "mouse" && onEnter()}
      onPointerLeave={(e) => e.pointerType === "mouse" && onLeave()}
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
            onEnter={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
