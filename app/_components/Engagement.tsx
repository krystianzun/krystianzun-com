"use client";

import { useState } from "react";

interface EngagementItem {
  title: string;
  href: string;
  date: string;
  description?: string;
  isNew?: boolean;
}

const engagements: EngagementItem[] = [
  {
    title: "Designing at Scale: Creating Leverage with AI",
    href: "https://maven.com/p/c0cd6c/designing-at-scale-creating-leverage-with-ai",
    date: "2026",
    description: "AI-Powered Design Workflows — Season 2",
    isNew: true,
  },
  {
    title: "From Zero to Product, Building with AI as a Designer",
    href: "https://www.youtube.com/watch?v=zwlQzb7QyRA",
    date: "2025",
    description: "Design with AI — Lightning Lessons",
    isNew: false,
  },

  {
    title: "Fuck Around and Find Out",
    href: "https://www.linkedin.com/posts/krystianzun_last-week-luke-murphy-pulled-off-one-of-ugcPost-7348690990477504513-ec4K",
    date: "2025",
    description: "Side Quest #001",
  },
  {
    title: "Principles of designing for XR – Guest Lecture & Workshop",
    href: "https://www.linkedin.com/posts/krystianzun_xr-design-uiux-ugcPost-7191809695270031360-zVJN",
    date: "2024",
    description: "NYU Steinhardt, Pratt Institute",
  },
];

function EngagementRow({
  title,
  href,
  date,
  description,
  isNew,
  dimmed,
  onEnter,
  onLeave,
}: EngagementItem & {
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
              <span className="text-xs font-medium px-1.5 py-0.5 bg-cyan-100 text-cyan-600 rounded-sm">
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

export default function Engagement() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Engagements</h3>
      <div>
        {engagements.map((item, i) => (
          <EngagementRow
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
