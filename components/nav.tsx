"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, House, Layers3, Mail, Sparkles, UserRound } from "lucide-react";
import { profile } from "@/data/site";

const links = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/projects", label: "Projects", icon: Layers3 },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: Mail }
];

export function Nav() {
  const pathname = usePathname();
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-base/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-accent/30 to-accent2/30 text-sm font-bold text-white transition group-hover:shadow-glow">
            CC
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">{profile.name}</span>
        </Link>

        <nav className="hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-glass md:flex md:items-center md:gap-1.5">
          {links.map((link) => {
            const isActive = isActiveLink(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                  isActive
                    ? "border border-accent/40 bg-gradient-to-r from-accent/20 to-accent2/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border border-transparent text-slate-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <Icon size={14} className={isActive ? "text-accent" : "text-slate-400"} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={profile.calendly}
            target="_blank"
            className="rounded-full border border-accent/60 bg-gradient-to-r from-accent/25 to-accent2/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent transition hover:shadow-glow"
          >
            Book a call
          </Link>
        </div>
      </div>

      <div className="scrollbar-none mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-6 lg:px-8">
        {links.map((link) => {
          const isActive = isActiveLink(link.href);
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition ${
                isActive
                  ? "border-accent/50 bg-gradient-to-r from-accent/20 to-accent2/10 text-white"
                  : "border-white/20 bg-white/[0.03] text-slate-300 hover:text-white"
              }`}
            >
              <Icon size={13} className={isActive ? "text-accent" : "text-slate-400"} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
