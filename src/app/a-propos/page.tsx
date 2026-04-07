import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, vision et méthode de Frank Houbre autour de l’IA vidéo.",
  alternates: { canonical: `${baseUrl}/a-propos` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">À propos</h1>
      <div className="mt-6 space-y-8 text-lg leading-relaxed text-neutral-800">
        <p>
          <strong className="text-neutral-950">Frank Houbre</strong> explore l’IA générative comme un
          terrain de création, au croisement de l’entrepreneuriat tech et de la réalisation
          cinématographique.
        </p>

        <p>
          Son approche est simple : ne pas subir la révolution de l’IA, mais en comprendre les
          mécanismes pour construire des workflows solides, reproductibles et orientés résultat.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            15 ans d’entrepreneuriat appliqué
          </h2>
          <p>
            Avec un parcours en informatique et management de l’innovation, Frank a passé plus de 15
            ans à lancer, structurer et faire grandir des projets tech. Cette expérience du terrain
            nourrit aujourd’hui sa méthodologie en IA image et vidéo.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Formation hybride : technique solide et vision produit orientée exécution.</li>
            <li>Scale-up & financement : gestion d’équipes et de pipelines de production complexes.</li>
            <li>Web3 & gaming : culture de l’innovation rapide et des écosystèmes créateurs.</li>
            <li>Pédagogie : vulgarisation claire de sujets techniques avancés.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Une vision de réalisateur IA
          </h2>
          <p>
            Ici, l’IA n’est pas un gadget. C’est un levier de production qui permet de transformer
            une intention artistique en images cohérentes, avec un niveau d’exigence proche des
            standards cinéma.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cohérence des personnages et des univers sur des séquences longues.</li>
            <li>Storyboard, world-building et direction artistique assistés par IA.</li>
            <li>Contrôle de la lumière, du cadrage et du mouvement caméra.</li>
            <li>Workflows pensés pour livrer vite, sans sacrifier la qualité visuelle.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Distinctions et reconnaissance internationale
          </h2>
          <p>
            Le travail de Frank a été distingué dans plusieurs festivals IA et cinéma indépendant,
            notamment à Séoul, à Hollywood et lors des Mondial Chroma Awards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            AI Studios : un écosystème pour créer mieux
          </h2>
          <p>
            À travers AI Studios, il accompagne débutants et professionnels pour passer de l’idée au
            film final : outils, méthode, direction artistique et rentabilité de production.
          </p>
          <p>
            L’objectif est de former des créateurs augmentés, capables de produire des contenus plus
            ambitieux, plus vite et avec une vraie signature visuelle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Une approche humaine et exigeante
          </h2>
          <p>
            Au-delà de la technologie, Frank défend une création responsable : transparence, exigence
            de qualité et respect des personnes derrière chaque projet.
          </p>
          <p>
            Tu peux retrouver ses contenus sur le{" "}
            <Link
              href="/blog"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              blog
            </Link>{" "}
            ou prendre contact via la page{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              Contact
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
