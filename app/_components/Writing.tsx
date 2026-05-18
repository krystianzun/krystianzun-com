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

function WritingRow({ title, href, date, description, isNew }: WritingItem) {
  return (
    <div className="border-b border-border">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start justify-between py-2.5 transition-opacity duration-250 group-hover/list:opacity-30 hover:!opacity-100"
      >
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
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
  return (
    <section className="mb-16">
      <h3 className="pb-2 text-muted font-medium">Writings</h3>
      <div className="group/list">
        {writings.map((item) => (
          <WritingRow key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
