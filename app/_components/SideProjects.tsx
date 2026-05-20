"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import {
  sideProjects,
  type SideProjectItem,
  type SideProjectStatus,
} from "@/app/_data/sideProjects";
import { useHoverDim } from "./useHoverDim";

const STATUS_LABEL: Record<SideProjectStatus, string> = {
  active: "Active",
  hiatus: "On Hiatus",
  cancelled: "Cancelled",
  completed: "Completed",
};

const STATUS_CLASS: Record<SideProjectStatus, string> = {
  active: "bg-green-100 text-green-700",
  hiatus: "bg-amber-100 text-amber-700",
  cancelled: "bg-gray-100 text-gray-600",
  completed: "bg-cyan-100 text-cyan-600",
};

function ProjectLogo({ logo, title }: { logo?: string; title: string }) {
  if (logo) {
    return (
      <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-md shrink-0 bg-gray-100 flex items-center justify-center text-muted text-sm font-medium">
      {title.charAt(0).toUpperCase()}
    </div>
  );
}

function SideProjectRow({
  title,
  href,
  description,
  status,
  logo,
  dimmed,
  onPointerEnter,
  onPointerLeave,
}: SideProjectItem & {
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
        className="flex items-start gap-3 py-2.5"
      >
        <ProjectLogo logo={logo} title={title} />
        <div className="flex-1 flex items-start justify-between gap-3 min-w-0">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-primary">{title}</span>
            {description && (
              <span className="text-muted text-sm">{description}</span>
            )}
          </div>
          <span
            className={`text-xs font-medium px-1.5 py-0.5 rounded-sm shrink-0 ${STATUS_CLASS[status]}`}
          >
            {STATUS_LABEL[status]}
          </span>
        </div>
      </a>
    </div>
  );
}

export default function SideProjects() {
  const { isDimmed, bind } = useHoverDim();

  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Side Projects</h3>
      <div>
        {sideProjects.map((item, i) => (
          <SideProjectRow
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
