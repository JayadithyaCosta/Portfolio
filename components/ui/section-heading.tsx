import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({ eyebrow, title, description, className, descriptionClassName }: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-3", className)}>
      {eyebrow ? <p className="text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <div className={clsx("max-w-3xl text-sm leading-7 text-slate-100 sm:text-base", descriptionClassName)}>{description}</div>
      ) : null}
    </div>
  );
}
