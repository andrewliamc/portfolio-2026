import { Linkedin, Github, Youtube, Instagram } from "lucide-react";

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/andrewliamcox/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/andrewliamc", icon: Github, label: "GitHub" },
  {
    href: "https://www.youtube.com/@andrewengineers",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/andrewengineers/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@andrewengineers",
    icon: TikTokIcon,
    label: "TikTok",
  },
];
