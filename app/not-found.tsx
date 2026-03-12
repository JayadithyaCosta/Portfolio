import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-4">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="text-4xl font-semibold text-white">Page not found</h1>
      <p className="max-w-xl text-sm text-muted">The route does not exist. Continue browsing the portfolio from the projects overview.</p>
      <Link href="/projects" className="rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200 transition hover:border-accent/70 hover:text-accent">
        Go to projects
      </Link>
    </div>
  );
}
