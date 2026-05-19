export interface EngagementItem {
  title: string;
  href: string;
  date: string;
  description?: string;
  isNew?: boolean;
}

export const engagements: EngagementItem[] = [
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
