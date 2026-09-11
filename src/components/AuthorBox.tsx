import Link from "next/link";
import { person } from "@/lib/site";

type Props = {
  locale?: "fr" | "en";
  imageSrc: string;
  /** Description sous le nom (métier). */
  jobTitle: string;
  /** Paragraphes de bio (FR) ; vide en EN pour rester court. */
  bio?: readonly string[];
  links: { label: string; href: string }[];
};

/** Bloc auteur en fin d'article : portrait carré, nom, métier, bio, liens. */
export function AuthorBox({ locale = "fr", imageSrc, jobTitle, bio = [], links }: Props) {
  return (
    <footer className="mt-16 border-t border-line pt-8" aria-label={locale === "en" ? "Author" : "Auteur"}>
      <p className="meta">{locale === "en" ? "Author" : "Auteur"}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-[5rem_1fr] sm:gap-8">
        <div className="frame relative aspect-square w-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={person.authorDisplayName}
            width={80}
            height={80}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="h-item text-cream">{person.authorDisplayName}</p>
          <p className="mt-1 text-sm text-fog">{jobTitle}</p>
          {bio.length ? (
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-stone">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          <nav className="meta mt-5 flex flex-wrap gap-x-5 gap-y-2" aria-label={locale === "en" ? "Author links" : "Liens auteur"}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="line-link text-fog hover:text-cream">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
