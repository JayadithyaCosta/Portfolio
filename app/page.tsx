import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { StackStrip } from "@/components/stack-strip";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getYearsBuildingProducts, profile, projects, stats } from "@/data/site";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const dynamicStats = stats.map((stat) =>
    stat.label === "Years Building Products" ? { ...stat, value: getYearsBuildingProducts() } : stat
  );
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <section className="hero-shell relative overflow-hidden rounded-3xl border border-white/15 bg-hero-radial px-6 py-12 shadow-glass sm:px-10 lg:px-12">
        <div className="hero-blob-a absolute -right-20 top-8 h-52 w-52 rounded-full bg-accent2/30 blur-3xl" />
        <div className="hero-blob-b absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative space-y-8">
          <Reveal delay={0.05}>
            <div className="mx-auto w-full max-w-4xl">
              <GlassCard className="border-white/20 bg-white/[0.07] p-4 sm:p-6">
                <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
                  <div className="flex justify-center">
                    <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-1 shadow-glass">
                      <Image
                        src={`${basePath}/images/chathuranga-costa.jpg`}
                        alt="Chathuranga Costa profile photo"
                        width={220}
                        height={220}
                        priority
                        className="h-[220px] w-[220px] rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Profile Spotlight</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">Senior Engineer Ready for High-Impact Teams</h3>
                    <p className="text-sm leading-7 text-slate-200">
                      End-to-end ownership from API and cloud architecture to production AI features, delivery quality, and team mentorship.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-100">
                        <MapPin size={14} className="text-accent" /> Kelaniya, Sri Lanka
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-100">
                        <Cpu size={14} className="text-accent2" /> Full-Stack + AI Systems
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-100">
                        <ShieldCheck size={14} className="text-emerald-300" /> Production Quality Focus
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-accent">
                <Sparkles size={14} /> Senior Full-Stack + AI
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-5xl font-[var(--font-head)] text-4xl font-semibold leading-tight text-white sm:text-6xl">
                {profile.name}
                <span className="hero-role-text mt-2 block whitespace-nowrap text-[0.56em] leading-tight bg-gradient-to-r from-accent via-slate-100 to-accent2 bg-clip-text text-transparent">
                  {profile.role}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-4xl text-base leading-8 text-slate-200 sm:text-lg">{profile.summary}</p>
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
          </div>
        </div>
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
          {dynamicStats.map((stat, index) => (
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
