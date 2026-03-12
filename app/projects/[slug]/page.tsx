import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-6">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <SectionHeading eyebrow={project.timeline} title={project.title} description={project.summary} />

      <Reveal>
        <GlassCard>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Role</p>
              <p className="mt-2 text-sm text-slate-200">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Technology Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Problem & Architecture</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{project.architecture}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.06}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Key Decisions</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">AI Integration</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{project.aiIntegration}</p>
            <h3 className="mt-6 text-lg font-semibold text-white">AWS Deployment Model</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{project.awsModel}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.06}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Impact and Learnings</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {project.impact.map((result) => (
                <li key={result} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted">{project.lessons}</p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <GlassCard>
          <h3 className="text-lg font-semibold text-white">Project Links</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/70 hover:text-accent"
              >
                {link.label} <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </GlassCard>
      </Reveal>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
