"use client";


const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "Figma",
  "Photoshop",
  "Illustrator",
  "Python",
  "SQL",
  "Firebase",
  "GraphQL",
  "GitHub",
  "Vercel",
  "Notion",
  "Zapier",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-[var(--primary-text)] md:text-4xl">
          About me
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-[var(--secondary-text)]">
          I&apos;m a UI Engineer who loves building interfaces that are both
          beautiful and functional. I combine design thinking with clean code to
          create experiences that users enjoy and teams can maintain. Whether
          I&apos;m prototyping in Figma or shipping features in React, I focus on
          clarity, accessibility, and craft.
        </p>
      </div>

      <div id="skills" className="mt-16 overflow-hidden">
        <p className="mb-4 text-center font-sans text-sm font-medium uppercase tracking-wider text-[var(--secondary-text)]">
          Technologies I use
        </p>
        <div className="relative flex w-full">
          <div
            className="flex animate-marquee gap-4 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="rounded-full bg-[var(--marquee-bg)] px-4 py-2 font-sans text-sm font-medium text-[var(--primary-text)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
