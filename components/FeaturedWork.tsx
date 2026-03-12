"use client";

import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const visibleProjects = featuredProjects.filter((p) => !p.hidden);

export default function FeaturedWork() {
  return (
    <section id="work" className="relative">
      <div className="min-h-[400vh]">
        {visibleProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            zIndex={i + 1}
          />
        ))}
      </div>
    </section>
  );
}
