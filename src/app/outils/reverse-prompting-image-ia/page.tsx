import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";

export const metadata = buildOutilPageMetadata("reversePrompt");

const structuredData = getOutilStructuredData("reversePrompt");

export default function ReversePromptingImageIaPage() {
  return (
    <>
      <JsonLd data={buildWebApplicationJsonLd(structuredData)} />
      <ToolIframePage
      title="Reverse prompting image IA"
      subtitle="Upload une image et reconstruis un prompt exploitable avec une experience visuelle premium orientee direction artistique."
      iframeTitle="Reverse prompting image IA"
      iframeSrc="/outils/reverse-prompting-image-ia/index.html"
    />
    </>
  );
}
