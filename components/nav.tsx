import Link from "next/link";
import { profile } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={profile.calendly}
          target="_blank"
          className="rounded-full border border-accent/60 bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent transition hover:shadow-glow"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
