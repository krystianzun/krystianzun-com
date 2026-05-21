export type SideProjectStatus = "active" | "hiatus" | "inactive" | "completed";

export interface SideProjectItem {
  title: string;
  href: string;
  description?: string;
  status: SideProjectStatus;
  logo?: string;
}

export const sideProjects: SideProjectItem[] = [
  {
    title: "XR Jobs Board",
    href: "https://www.xrjobsboard.com/",
    description: "All XR jobs and opportunities in one place.",
    status: "inactive",
  },
  {
    title: "XR Design Learning Roadmap",
    href: "https://krystianzun.gumroad.com/l/xrdesignroadmap",
    description:
      "Step-by-step, comprehensive guide to all essential skills to design extended realities.",
    status: "active",
  },
  {
    title: "Design Futures",
    href: "https://discord.com/invite/eUKt8mFqnb",
    description:
      "Community for all into XR, Design, 3D, AI and emerging tech with weekly hang outs.",
    status: "hiatus",
  },
  {
    title: "Touch Some Grass*",
    href: "https://lu.ma/touchsomegrass",
    description:
      "XR, creative tech meetups in the great outdoors of NYC and LDN.",
    status: "hiatus",
    logo: "/images/tsg-logo.png",
  },
];
