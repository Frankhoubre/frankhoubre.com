import Link from "next/link";
import { siteName } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/90 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-neutral-950"
        >
          {siteName}
        </Link>
        <nav
          className="flex items-center gap-5 text-sm font-medium text-neutral-800"
          aria-label="Navigation principale"
        >
          <Link
            href="/blog"
            className="transition hover:text-neutral-950"
          >
            Blog
          </Link>
          <Link
            href="/a-propos"
            className="transition hover:text-neutral-950"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="transition hover:text-neutral-950"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
