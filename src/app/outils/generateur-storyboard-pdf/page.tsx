import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";

export const metadata = buildOutilPageMetadata("storyboard");

const structuredData = getOutilStructuredData("storyboard");

export default function GenerateurStoryboardPdfPage() {
  return (
    <>
      <JsonLd data={buildWebApplicationJsonLd(structuredData)} />
      <ToolIframePage
        title="Generateur de storyboard PDF IA"
        subtitle="Collez vos images generees, ajoutez vos notes de plan, puis exportez un storyboard PDF pagine avec cases de texte pour presenter votre projet."
        iframeTitle="Generateur storyboard PDF IA"
        iframeSrc="/outils/generateur-storyboard-pdf/index.html"
      />
    </>
  );
}
