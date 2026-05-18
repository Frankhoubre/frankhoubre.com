import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";

export const metadata = buildOutilPageMetadata("annuaireImages");

const structuredData = getOutilStructuredData("annuaireImages");

export default function AnnuaireGenerateursImagesIaGratuitsPage() {
  return (
    <>
      <JsonLd data={buildWebApplicationJsonLd(structuredData)} />
      <ToolIframePage
        title="Annuaire des generateurs d'images IA gratuits"
        subtitle="Compare les plateformes image IA gratuites avec une interface claire pour trouver rapidement l'outil adapte a ton style et ton niveau."
        iframeTitle="Annuaire generateurs images IA gratuits"
        iframeSrc="/outils/annuaire-generateurs-images-ia-gratuits/index.html"
      />
    </>
  );
}
