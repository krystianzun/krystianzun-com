"use client";

import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { useState } from "react";

interface WorkParty {
  name: string;
  logo?: string;
  color?: string;
}

type ResultSegment = string | { h: string };

interface WorkItem {
  title: string;
  href?: string;
  company: WorkParty;
  collaborator?: WorkParty;
  result: ResultSegment[][];
  period: string;
  cover?: string;
  coverHover?: string;
}

const work: WorkItem[] = [
  {
    title: "Hyper-Personalised Onboarding",
    company: {
      name: "FitXR",
      logo: "/images/fitxr-logo.png",
      color: "#7C3AED",
    },
    result: [
      [
        "Led a revamp of the onboarding, introducing hyper-personalised flows that ",
        { h: "increased Paid Membership Conversion by +31%" },
        " and ",
        { h: "Free Trial Conversion by +25%" },
        ".",
      ],
    ],
    href: "https://www.meta.com/en-gb/experiences/fitxr/2327205800645550/",
    period: "2025",
    cover: "/images/pf-cover.png",
  },
  {
    title: "World-class exhibitions anywhere in the world",
    company: {
      name: "Superbright",
      logo: "/images/superbright-logo.jpg",
      color: "#7C3AED",
    },
    collaborator: {
      name: "Vortic",
      logo: "/images/vortic-logo.jpg",
      color: "#1E40AF",
    },
    result: [
      [
        "Designed a multi-platform art ecosystem (desktop, mobile, Meta Quest, Apple Vision Pro) ",
        { h: "driving $1M+ in art sales" },
        ".",
      ],
    ],
    href: "https://vortic.art/discover",
    period: "2024",
    cover: "/images/avp-cover.png",
  },
  {
    title: "Remembering The Gates",
    company: {
      name: "Superbright",
      logo: "/images/superbright-logo.jpg",
      color: "#7C3AED",
    },
    collaborator: {
      name: "Bloomberg Philanthropies",
      logo: "/images/bloomberg-logo.png",
      color: "#1E40AF",
    },
    result: [
      [
        'Led UX for "The Gates" AR experience in Central Park, NYC, commissioned by Bloomberg Philanthropies, ',
        { h: "attracting ~50,000+ visitors" },
        " over its month-long run.",
      ],
    ],
    href: "https://christojeanneclaude.net/thegates20/",
    period: "2025",
    cover: "/images/gates-cover.png",
  },
];

function LogoCircle({
  src,
  color,
  name,
}: {
  src?: string;
  color?: string;
  name: string;
}) {
  if (src) {
    return (
      <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={src}
          alt={name}
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <div
      className="w-8 h-8 rounded-full border-2 border-white shrink-0 flex items-center justify-center text-white text-[9px] font-bold"
      style={{ backgroundColor: color ?? "#6B7280" }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function WorkCover({
  cover,
  coverHover,
  title,
}: {
  cover?: string;
  coverHover?: string;
  title: string;
}) {
  if (!cover) {
    return (
      <div className="w-full h-40 aspect-video rounded-lg bg-gray-100 overflow-hidden mb-3" />
    );
  }

  return (
    <TiltCard className="relative w-full h-70 aspect-video rounded-lg overflow-hidden mb-3 group/cover">
      <Image
        src={cover}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-200 ${coverHover ? "group-hover/cover:opacity-0" : ""}`}
      />
      {coverHover && (
        <Image
          src={coverHover}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200"
        />
      )}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
          transition: "background 0.1s ease",
        }}
      />
    </TiltCard>
  );
}

function WorkRow({
  title,
  href,
  company,
  collaborator,
  result,
  period,
  cover,
  coverHover,
  dimmed,
  onMouseEnter,
  onMouseLeave,
}: WorkItem & {
  dimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const inner = (
    <div className="py-4">
      <WorkCover cover={cover} coverHover={coverHover} title={title} />
      <div className="flex items-center justify-between gap-4 mb-1.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <LogoCircle
              src={company.logo}
              color={company.color}
              name={company.name}
            />
            {collaborator && (
              <div className="-ml-2">
                <LogoCircle
                  src={collaborator.logo}
                  color={collaborator.color}
                  name={collaborator.name}
                />
              </div>
            )}
          </div>
          <span className="text-primary font-medium">{title}</span>
        </div>
        <span className="text-muted tabular-nums text-sm shrink-0">
          {period}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        {result.map((para, i) => (
          <p key={i} className="text-muted text-sm leading-relaxed">
            {para.map((seg, j) =>
              typeof seg === "string" ? (
                seg
              ) : (
                <span key={j} className="text-primary font-medium">
                  {seg.h}
                </span>
              ),
            )}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="border-b border-border transition-opacity duration-200"
      style={{ opacity: dimmed ? 0.3 : 1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Impact</h3>
      <div>
        {work.map((item, i) => (
          <WorkRow
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
