"use client";

import { socialLinks } from "@/data/social";

export default function SocialLinks() {
  return (
    <section className="border-t border-[var(--marquee-bg)] px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <h2 className="font-display text-2xl font-bold text-[var(--primary-text)] md:text-3xl">
          Connect with me
        </h2>
        <div className="flex gap-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--marquee-bg)] text-[var(--primary-text)] transition-all hover:scale-110 hover:bg-[var(--accent)] hover:text-[var(--on-dark)]"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
