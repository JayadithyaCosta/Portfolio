import { stackIcons } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export function StackStrip() {
  return (
    <GlassCard className="py-5">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stackIcons.map(({ label, icon: Icon, iconColor, glow }) => (
          <div
            key={label}
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] px-3 py-2.5 transition duration-300 hover:border-white/20"
          >
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#0A1322] transition duration-300 group-hover:scale-105"
              style={{ boxShadow: `0 0 18px ${glow}` }}
            >
              <Icon className="h-4.5 w-4.5" style={{ color: iconColor }} />
            </span>
            <span className="text-sm font-medium text-slate-100">{label}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
