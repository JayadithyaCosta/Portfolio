import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Download, Linkedin, Mail, Phone } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with Chathuranga Costa for senior full-stack and AI engineering opportunities."
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Start a hiring conversation"
        description="For senior full-stack or AI-integrated platform roles, use the primary call booking flow or direct professional channels below."
      />

      <Reveal>
        <GlassCard className="border-accent/25">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Primary CTA</p>
              <h3 className="text-2xl font-semibold text-white">Book a call</h3>
              <p className="text-sm text-muted">Fastest way to discuss role fit, project scope, and delivery expectations.</p>
            </div>
            <Link
              href={profile.calendly}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-6 py-3 text-sm font-semibold text-accent transition hover:shadow-glow"
            >
              <CalendarDays size={16} /> Schedule now
            </Link>
          </div>
        </GlassCard>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Professional channels</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li>
                <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={16} /> {profile.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone size={16} /> {profile.phone}
                </Link>
              </li>
              <li>
                <Link href={profile.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
                  <Linkedin size={16} /> LinkedIn Profile
                </Link>
              </li>
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Resume</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Download the latest CV for recruiter handoff and role submission workflows.
            </p>
            <Link
              href="/cv/chathuranga-costa-cv.pdf"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-accent/70 hover:text-accent"
            >
              <Download size={16} /> Download CV
            </Link>
          </GlassCard>
        </Reveal>
      </div>
    </div>
  );
}
