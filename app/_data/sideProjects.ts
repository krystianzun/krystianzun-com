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
    description:
      "Stop wasting time searching through countless job portals. All XR jobs and opportunities in one place.",
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
      "Community for all into XR, Design, 3D, AI and generally emerging and creative tech with weekly hang outs, world hopping sessions and themed discussions.",
    status: "hiatus",
  },
  {
    title: "Touch Some Grass*",
    href: "https://lu.ma/touchsomegrass",
    description:
      "Fun, informal meet-up where we chat about XR and creative tech in the great outdoors, immersed in the best reality (nature) ٩( ✩'ω'✩ )و",
    status: "hiatus",
  },
];
