import Link from "next/link";
import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-muted sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>{profile.name} - Senior Full-Stack + AI Engineer</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" href={`mailto:${profile.email}`}>
            Email
          </Link>
          <Link className="hover:text-white" href={profile.linkedin} target="_blank">
            LinkedIn
          </Link>
          <Link className="hover:text-white" href="/cv/chathuranga-costa-cv.pdf" target="_blank">
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
