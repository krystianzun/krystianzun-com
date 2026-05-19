"use client";

import { writings, type WritingItem } from "@/app/_data/writing";
import { useHoverDim } from "./useHoverDim";
import type { PointerEvent } from "react";

function WritingRow({
  title,
  href,
  date,
  description,
  isNew,
  dimmed,
  onPointerEnter,
  onPointerLeave,
}: WritingItem & {
  dimmed: boolean;
  onPointerEnter: (e: PointerEvent) => void;
  onPointerLeave: (e: PointerEvent) => void;
}) {
  return (
    <div
      className="border-b border-border transition-opacity duration-200"
      style={{ opacity: dimmed ? 0.3 : 1 }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
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
  const { isDimmed, bind } = useHoverDim();

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Writings</h3>
      <div>
        {writings.map((item, i) => (
          <WritingRow
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
