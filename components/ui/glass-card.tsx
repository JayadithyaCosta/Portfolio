import { ReactNode } from "react";
import clsx from "clsx";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <article
      className={clsx(
        "glass-card rounded-xl2 border border-white/15 bg-white/5 p-6 shadow-glass backdrop-blur-xl",
        className
      )}
    >
      {children}
    </article>
  );
}
