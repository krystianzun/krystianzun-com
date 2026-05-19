export interface WritingItem {
  title: string;
  href: string;
  date: string;
  description?: string;
  isNew?: boolean;
}

export const writings: WritingItem[] = [
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
