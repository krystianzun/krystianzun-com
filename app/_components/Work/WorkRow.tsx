import type { PointerEvent } from "react";
import type { WorkItem } from "@/app/_data/work";
import LogoCircle from "./LogoCircle";
import WorkCover from "./WorkCover";

export default function WorkRow({
  title,
  href,
  company,
  collaborator,
  result,
  period,
  cover,
  coverHover,
  dimmed,
  onPointerEnter,
  onPointerLeave,
}: WorkItem & {
  dimmed: boolean;
  onPointerEnter: (e: PointerEvent) => void;
  onPointerLeave: (e: PointerEvent) => void;
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
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
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
