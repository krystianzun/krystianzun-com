export interface WorkParty {
  name: string;
  logo?: string;
  color?: string;
}

export type ResultSegment = string | { h: string };

export interface WorkItem {
  title: string;
  href?: string;
  company: WorkParty;
  collaborator?: WorkParty;
  result: ResultSegment[][];
  period: string;
  cover?: string;
  coverHover?: string;
}

export const work: WorkItem[] = [
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
