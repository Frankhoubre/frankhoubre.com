type JsonLdProps = {
  data: unknown;
};

/**
 * Renders JSON-LD safely by escaping "<" to reduce XSS risk.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
