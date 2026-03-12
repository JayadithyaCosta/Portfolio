import { stackIcons } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export function StackStrip() {
  return (
    <GlassCard className="py-5">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stackIcons.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <Icon className="h-5 w-5 text-accent" />
            <span className="text-sm text-slate-300">{label}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
