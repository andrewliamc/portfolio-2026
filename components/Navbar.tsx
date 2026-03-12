"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { socialLinks } from "@/data/social";

const navLinks = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about me" },
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const base = isHome ? "" : "/";

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        {/* Main nav pill */}
        <nav
          className={`flex flex-1 min-w-0 items-center justify-between gap-4 rounded-full bg-[var(--navbar)] px-4 py-3 shadow-lg md:px-6 md:py-3 ${
            isOpen ? "flex-col rounded-lg px-5 pb-5 pt-4" : ""
          }`}
        >
          <div className="flex w-full items-center justify-between md:w-auto md:flex-1">
            <Link
              href={`${base}#home`}
              className="font-display text-sm font-bold uppercase tracking-tighter text-[var(--on-dark)] md:text-base"
            >
              ANDREW
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--on-dark)] transition-colors hover:bg-white/10 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div
            className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-8 ${
              isOpen ? "flex w-full items-stretch pb-4" : "hidden md:flex"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${base}${link.href}`}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-medium text-[var(--on-dark)] transition-colors hover:text-[var(--on-dark-muted)] md:text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:jobs.andrewliam@use.startmail.com"
              onClick={() => setIsOpen(false)}
              className={`rounded-full bg-[var(--cta-bg)] px-5 py-2.5 font-sans text-sm font-semibold text-[var(--cta-text)] transition-all hover:-translate-y-0.5 hover:shadow-lg md:ml-2 ${
                isOpen ? "block w-full text-center" : ""
              }`}
            >
              let&apos;s chat
            </Link>
            {/* Mobile: social links inside expanded menu */}
            {isOpen && (
              <div className="flex justify-center gap-3 pt-4 border-t border-white/20 md:hidden">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--on-dark)] transition-colors hover:bg-white/10"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Social pill - desktop only */}
        <div className="hidden shrink-0 items-center gap-2 rounded-full bg-[var(--navbar)] px-4 py-2.5 shadow-lg md:flex">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--on-dark)] transition-colors hover:bg-white/10 hover:text-[var(--on-dark-muted)]"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
