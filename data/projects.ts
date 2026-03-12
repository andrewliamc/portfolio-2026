export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  alt: string;
  cta: string;
  bgColor: string;
  /** When true, project is excluded from rendering (kept in metadata for later re-enabling) */
  hidden?: boolean;
}

export const featuredProjects: Project[] = [
  {
    title: "Niibl",
    description:
      "A product-focused recipe conversion and meal planning app designed to help users scale recipes, reduce friction in the kitchen, and create a smoother cooking experience across web and mobile.",
    tags: ["React", "Next.js", "TypeScript", "Figma"],
    href: "https://niibl.app/app",
    image: "/images/projects/niibl-cover.jpg",
    alt: "Preview image for Niibl recipe conversion and meal planning app",
    cta: "View project",
    bgColor: "var(--card-1)",
  },
  {
    title: "RootOps",
    description:
      "A workflow and operations platform concept focused on improving visibility, reducing handoff issues, and helping teams work more clearly and efficiently through better interface design.",
    tags: ["React", "TypeScript", "Tailwind", "Figma"],
    href: "/projects/rootops",
    image: "/images/projects/rootops-cover.jpg",
    alt: "Preview image for RootOps workflow and operations platform",
    cta: "View project",
    bgColor: "var(--card-2)",
  },
  {
    title: "Jacksonville Pottery Studio Redesign",
    description:
      "A website redesign concept for a pottery studio focused on creating a more elevated visual identity, showcasing classes and offerings more clearly, and improving the overall user experience for visitors exploring the brand online.",
    tags: ["Web Design", "UI Design", "Figma", "Branding"],
    href: "https://jax-pottery-studio.vercel.app",
    image: "/images/projects/jacksonville-pottery-studio-cover.jpg",
    alt: "Preview image for Jacksonville Pottery Studio website redesign",
    cta: "View project",
    bgColor: "var(--card-3)",
  },
  {
    title: "LifeStance Health Mobile Redesign",
    description:
      "A mobile UX redesign exploring clearer navigation, improved usability, and a more accessible patient experience for a healthcare-focused digital product.",
    tags: ["UX Design", "Mobile Design", "Figma", "Case Study"],
    href: "/projects/lifestance-health",
    image: "/images/projects/lifestance-cover.jpg",
    alt: "Preview image for LifeStance Health mobile redesign",
    cta: "View project",
    bgColor: "var(--card-4)",
    hidden: true,
  },
];
