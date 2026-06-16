import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";
import { getOutilContent } from "@/lib/outils-content";

export const metadata = buildOutilPageMetadata("reversePrompt");

const structuredData = getOutilStructuredData("reversePrompt");
const content = getOutilContent("reversePrompt");

export default function ReversePromptingImageIaPage() {
  return (
    <>
      <JsonLd
        data={buildWebApplicationJsonLd({ ...structuredData, faq: content.faq })}
      />
      <ToolIframePage
      title="Reverse prompting image IA"
      subtitle="Uploadez une image et reconstruisez un prompt exploitable avec une expérience visuelle premium orientée direction artistique."
      iframeTitle="Reverse prompting image IA"
      iframeSrc="/outils/reverse-prompting-image-ia/index.html"
      content={content}
    />
    </>
  );
}
