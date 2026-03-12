import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { StackStrip } from "@/components/stack-strip";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, projects, stats } from "@/data/site";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <section className="space-y-8 rounded-3xl border border-white/10 bg-hero-radial px-6 py-12 sm:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-accent">
            <Sparkles size={14} /> Senior Full-Stack + AI
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl font-[var(--font-head)] text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{profile.summary}</p>
        </Reveal>
        <Reveal delay={0.24} className="flex flex-wrap items-center gap-4">
          <Link
            href={profile.calendly}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-6 py-3 text-sm font-semibold text-accent transition hover:shadow-glow"
          >
            Book a call <ArrowRight size={16} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            View case studies
          </Link>
        </Reveal>
      </section>

      <Reveal>
        <StackStrip />
      </Reveal>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Impact"
          title="Engineering outcomes that translate to business value"
          description="A concise view of my focus areas and delivery profile."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <GlassCard>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Featured Work"
          title="Deep case studies from production systems"
          description="Four flagship projects that demonstrate architecture ownership, cloud delivery, and AI integration in real products."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
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
