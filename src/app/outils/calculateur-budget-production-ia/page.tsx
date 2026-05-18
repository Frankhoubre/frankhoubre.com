import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";

export const metadata = buildOutilPageMetadata("budget");

const structuredData = getOutilStructuredData("budget");

export default function CalculateurBudgetProductionIaPage() {
  return (
    <>
      <JsonLd data={buildWebApplicationJsonLd(structuredData)} />
      <ToolIframePage
        title="Calculateur budget production IA"
        subtitle="Estimez le cout reel d'un projet video IA (abonnements, credits, revisions) et convertissez les credits Midjourney, Runway ou ElevenLabs en euros."
        iframeTitle="Calculateur budget production IA"
        iframeSrc="/outils/calculateur-budget-production-ia/index.html"
      />
    </>
  );
}
