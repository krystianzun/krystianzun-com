"use client";

import Image from "next/image";

interface WorkItem {
  title: string;
  href?: string;
  company: string;
  companyLogo?: string;
  companyColor?: string;
  collaborator?: string;
  collaboratorLogo?: string;
  collaboratorColor?: string;
  result: string;
  period: string;
  cover?: string;
  coverHover?: string;
}

const work: WorkItem[] = [
  {
    title: "Onboarding Revamp",
    company: "FitXR",
    companyLogo: "/images/portfolio-cover.png",
    companyColor: "#7C3AED",
    collaborator: "In-house",
    collaboratorColor: "#1E40AF",
    result:
      "Increased Paid Membership Conversion by +31% and Free Trial Conversion by +25%.",
    period: "Dec, 2025",
    cover: "/images/portfolio-cover.png",
    coverHover: undefined,
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
      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={src}
          alt={name}
          width={24}
          height={24}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <div
      className="w-6 h-6 rounded-full border-2 border-white shrink-0 flex items-center justify-center text-white text-[9px] font-bold"
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
    <div className="relative w-full h-70 aspect-video rounded-lg overflow-hidden mb-3 group/cover">
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
    </div>
  );
}

function WorkRow({
  title,
  href,
  company,
  companyLogo,
  companyColor,
  collaborator,
  collaboratorLogo,
  collaboratorColor,
  result,
  period,
  cover,
  coverHover,
}: WorkItem) {
  const inner = (
    <div className="py-4">
      <WorkCover cover={cover} coverHover={coverHover} title={title} />
      <div className="flex items-center justify-between gap-4 mb-1.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <LogoCircle src={companyLogo} color={companyColor} name={company} />
            {collaborator && (
              <div className="-ml-2">
                <LogoCircle
                  src={collaboratorLogo}
                  color={collaboratorColor}
                  name={collaborator}
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
      <p className="text-muted text-sm leading-relaxed">{result}</p>
    </div>
  );

  return (
    <div className="border-b border-border group-hover/list:opacity-30 hover:!opacity-100 transition-opacity duration-200">
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
  return (
    <section className="mb-12">
      <h3 className="pb-2 text-muted font-medium">Work</h3>
      <div className="group/list">
        {work.map((item) => (
          <WorkRow key={item.title + item.company} {...item} />
        ))}
      </div>
    </section>
  );
}
