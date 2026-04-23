import { ToolIframePage } from "@/components/ToolIframePage";

export default function StoryboardPdfToolPage() {
  return (
    <ToolIframePage
      title="Generateur de storyboard PDF IA"
      subtitle="Transforme tes images IA en storyboard presentable avec mise en page propre, annotations et export PDF pour production ou client."
      iframeTitle="Generateur storyboard PDF IA"
      iframeSrc="/outils/generateur-storyboard-pdf/index.html"
    />
  );
}
