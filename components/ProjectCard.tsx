"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  zIndex: number;
}

export default function ProjectCard({ project, zIndex }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="sticky top-0 min-h-[90vh] overflow-hidden"
      style={{ zIndex }}
    >
      <div
        className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-8 px-4 py-16 md:flex-row md:gap-16 md:px-6"
        style={{ backgroundColor: project.bgColor }}
      >
        <div className="relative h-48 w-full max-w-lg overflow-hidden rounded-xl md:h-64 md:flex-1">
          {imageError ? (
            <div
              className="flex h-full w-full items-center justify-center bg-[var(--marquee-bg)] text-[var(--secondary-text)]"
              role="img"
              aria-label={project.alt}
            >
              <span className="font-sans text-sm">Image</span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col md:max-w-md">
          <h3 className="font-display text-3xl font-bold text-[var(--primary-text)] md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-[var(--secondary-text)]">
            {project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--marquee-bg)] px-3 py-1 font-sans text-sm font-medium text-[var(--primary-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.href.startsWith("http") ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--navbar)]"
            >
              {project.cta}
              <ArrowRight size={18} />
            </a>
          ) : (
            <Link
              href={project.href}
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--navbar)]"
            >
              {project.cta}
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
