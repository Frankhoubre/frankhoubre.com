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
      className="scroll-mt-28"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="mb-6 text-2xl font-semibold tracking-tight text-neutral-950"
      >
        Foire aux questions
      </h2>
      <div className="space-y-3">
        {pairs.map((pair, i) => (
          <details
            key={i}
            className="group rounded-lg border border-neutral-200 bg-white/70 open:bg-white"
          >
            <summary className="cursor-pointer list-none px-4 py-3 font-medium text-neutral-950 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {pair.question}
                <span className="text-neutral-500 transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <div className="prose-cinema border-t border-neutral-200 px-4 py-3">
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
          </details>
        ))}
      </div>
    </section>
  );
}
