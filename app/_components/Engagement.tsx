interface EngagementItem {
  title: string;
  href: string;
  date: string;
  isNew?: boolean;
}

const engagements: EngagementItem[] = [
  {
    title: "Designing for Spatial Computing",
    href: "#",
    date: "12/03/2025",
    isNew: true,
  },
  {
    title: "AI in the Design Workflow — FitXR Podcast",
    href: "#",
    date: "28/01/2025",
    isNew: true,
  },
  {
    title: "From Concept to XR Product — Immersive Design Panel",
    href: "#",
    date: "14/11/2024",
  },
  {
    title: "Building Design Communities — Design Futures Talk",
    href: "#",
    date: "02/07/2024",
  },
  {
    title: "XR Onboarding Patterns — AWE Europe",
    href: "#",
    date: "19/04/2024",
  },
];

function EngagementRow({ title, href, date, isNew }: EngagementItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-2.5 border-b border-border"
    >
      <div className="flex items-center gap-2">
        <span className="text-heading font-medium border-b-2 border-transparent group-hover:border-heading transition-colors duration-150">
          {title}
        </span>
        {isNew && (
          <span className="text-xs font-medium px-1.5 py-0.5 bg-gray-100 text-muted rounded-sm">
            New
          </span>
        )}
      </div>
      <span className="text-muted text-xs shrink-0 ml-4 tabular-nums">
        {date}
      </span>
    </a>
  );
}

export default function Engagement() {
  return (
    <section className="mb-12">
      <h3 className="pb-4 text-heading font-medium">Engagements</h3>
      <div>
        {engagements.map((item) => (
          <EngagementRow key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
