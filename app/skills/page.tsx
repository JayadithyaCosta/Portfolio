import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Core technical capabilities in backend, frontend, cloud, and AI systems."
};

export default function SkillsPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical depth across full-stack and AI-enabled product delivery"
        description={
          <span className="!text-white">
            Skills grouped by execution domain to show where I can contribute immediately in senior engineering roles.
          </span>
        }
        descriptionClassName="max-w-6xl !text-white"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <GlassCard>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
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
