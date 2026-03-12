import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack and AI-integrated project case studies by Chathuranga Costa."
};

export default function ProjectsPage() {
  const deepDives = projects.filter((project) => project.deepDive);
  const concise = projects.filter((project) => !project.deepDive);

  return (
    <div className="space-y-14 pb-6">
      <section className="space-y-7">
        <SectionHeading
          eyebrow="Case Studies"
          title="Flagship engineering projects"
          description="Detailed architecture and delivery narratives for the projects most relevant to senior full-stack + AI hiring decisions."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {deepDives.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Additional"
          title="More delivered products"
          description="Projects included for breadth across platform patterns and domain exposure."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {concise.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
