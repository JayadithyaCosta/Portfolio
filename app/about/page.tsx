import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, education, profile } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and certifications of Chathuranga Costa."
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="About"
        title="Engineer profile and professional direction"
        description={profile.summary}
      />

      <Reveal>
        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Professional Snapshot</h3>
          <p className="mt-4 text-sm leading-8 text-slate-300">
            I focus on full-stack systems where API design, cloud architecture, and product UX must work as one coherent system. My core
            contribution is converting ambiguous requirements into maintainable platforms with strong release quality, team ownership, and
            measurable user value.
          </p>
          <p className="mt-4 text-sm leading-8 text-slate-300">
            Over the past several years, I have worked across CRM, HRM, booking, and AI-enabled products, moving from implementation to
            technical leadership and cross-functional mentoring.
          </p>
        </GlassCard>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <p className="mt-4 text-base text-slate-200">{education.degree}</p>
            <p className="mt-2 text-sm text-muted">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-slate-100">{cert.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-muted">{cert.year}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
