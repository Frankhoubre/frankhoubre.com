import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { MDXComponents } from "mdx/types";
import type { FaqPair } from "@/lib/mdx-pipeline";

type Props = {
  pairs: FaqPair[];
  components: MDXComponents;
};

export function FaqSection({ pairs, components }: Props) {
  if (!pairs.length) return null;

  return (
    <section
      id="foire-aux-questions"
      className="mt-12 scroll-mt-28 rounded-2xl border-2 border-neutral-300 bg-neutral-50 px-4 py-6 shadow-sm sm:px-6"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-neutral-600">
        FAQ
      </p>
      <h2
        id="faq-heading"
        className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950"
      >
        Foire aux questions
      </h2>
      <p className="mt-2 text-sm text-neutral-700">
        Réponses rapides aux questions les plus fréquentes sur cet article.
      </p>
      <div className="mt-5 space-y-3">
        {pairs.map((pair, i) => (
          <details
            key={i}
            className="group rounded-xl border border-neutral-200 bg-white open:bg-white"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-neutral-950 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                <span itemProp="name">{pair.question}</span>
                <span
                  className="text-neutral-500 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <div
              className="border-t border-neutral-200 px-4 py-3"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div className="prose-cinema" itemProp="text">
                <MDXRemote
                  source={pair.answer}
                  components={components}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
