import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="group h-full transition duration-300 hover:-translate-y-1 hover:border-accent/45">
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-accent/90">{project.timeline}</p>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:text-white"
        >
          View case study <ArrowUpRight size={16} />
        </Link>
      </div>
    </GlassCard>
  );
}
