import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { MDXComponents } from "mdx/types";
import type { FaqPair } from "@/lib/mdx-pipeline";

type Props = {
  pairs: FaqPair[];
  components: MDXComponents;
};

export function Plus() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="plus"
      aria-hidden
    >
      <path d="M7 1v12M1 7h12" />
    </svg>
  );
}

/** FAQ d'article : accordéon sur lignes fines, balisage FAQPage conservé. */
export function FaqSection({ pairs, components }: Props) {
  if (!pairs.length) return null;

  return (
    <section
      id="foire-aux-questions"
      className="not-prose my-14 scroll-mt-28"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <p id="faq-heading" className="meta">
        FAQ
      </p>
      <h2 className="h-block mt-3 !mt-3 !border-0 !pt-0 text-cream">Foire aux questions</h2>
      <p className="mt-2 text-sm text-fog">
        Réponses rapides aux questions les plus fréquentes sur cet article.
      </p>
      <div className="mt-6">
        {pairs.map((pair, i) => (
          <details
            key={i}
            className="faq-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <summary>
              <h3 className="text-[inherit] font-[inherit] leading-[inherit] tracking-[inherit]" itemProp="name">
                {pair.question}
              </h3>
              <Plus />
            </summary>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div className="prose-cinema text-[0.97rem]" itemProp="text">
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
