import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";
import { getOutilContent } from "@/lib/outils-content";

export const metadata = buildOutilPageMetadata("storyboard");

const structuredData = getOutilStructuredData("storyboard");
const content = getOutilContent("storyboard");

export default function GenerateurStoryboardPdfPage() {
  return (
    <>
      <JsonLd
        data={buildWebApplicationJsonLd({ ...structuredData, faq: content.faq })}
      />
      <ToolIframePage
        title="Generateur de storyboard PDF IA"
        subtitle="Collez vos images generees, ajoutez vos notes de plan, puis exportez un storyboard PDF pagine avec cases de texte pour presenter votre projet."
        iframeTitle="Generateur storyboard PDF IA"
        iframeSrc="/outils/generateur-storyboard-pdf/index.html"
        content={content}
      />
    </>
  );
}
