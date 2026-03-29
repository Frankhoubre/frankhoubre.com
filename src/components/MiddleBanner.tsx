import Link from "next/link";

export function MiddleBanner() {
  return (
    <aside className="my-10 rounded-xl border border-neutral-200 bg-white px-5 py-4">
      <p className="text-sm leading-relaxed text-neutral-900">
        Une question ou un sujet à proposer ?{" "}
        <Link
          href="/contact"
          className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
        >
          Écrivez-moi
        </Link>
        .
      </p>
    </aside>
  );
}
