import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { buildWebApplicationJsonLd } from "@/lib/metadata";
import {
  buildOutilPageMetadata,
  getOutilStructuredData,
} from "@/lib/outils-metadata";
import { getOutilContent } from "@/lib/outils-content";

export const metadata = buildOutilPageMetadata("annuaireAudio");

const structuredData = getOutilStructuredData("annuaireAudio");
const content = getOutilContent("annuaireAudio");

export default function AnnuaireIaAudioSfxMusicalesPage() {
  return (
    <>
      <JsonLd
        data={buildWebApplicationJsonLd({ ...structuredData, faq: content.faq })}
      />
      <ToolIframePage
        title="Annuaire des IA audio, SFX et musicales"
        subtitle="Comparez musique, voix, bruitages et sound design IA avec filtres et score intelligent pour trouver l'outil adapte a votre projet."
        iframeTitle="Annuaire IA audio SFX musicales"
        iframeSrc="/outils/annuaire-ia-audio-sfx-musicales/index.html"
        content={content}
      />
    </>
  );
}
