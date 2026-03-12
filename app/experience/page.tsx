import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline and impact highlights for senior full-stack and AI-focused engineering roles."
};

export default function ExperiencePage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="Experience"
        title="Career progression from full-stack delivery to technical leadership"
        description="Production ownership across backend architecture, cloud deployment, CI/CD quality, and AI feature delivery."
      />

      <div className="space-y-4">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
            <GlassCard>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-xs uppercase tracking-widest text-accent">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{item.company}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
