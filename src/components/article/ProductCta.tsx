import { Arrow } from "@/components/ui/Cta";
import type { ArticleLocale } from "@/components/article/labels";

type Product = "screenweaver" | "imaginode";

type Props = {
  product: Product;
  locale: ArticleLocale;
  slug: string;
  titre?: string;
  title?: string;
  texte?: string;
  text?: string;
  bouton?: string;
  button?: string;
  /** Destination /go du site produit (voir automations/liens-utm.md). */
  destination?: string;
};

const BASE: Record<Product, string> = {
  screenweaver: "https://www.screenweaver.ai",
  imaginode: "https://imaginode.ai",
};

const NAME: Record<Product, string> = {
  screenweaver: "ScreenWeaver",
  imaginode: "Imaginode",
};

const COPY: Record<Product, Record<ArticleLocale, { kicker: string; title: string; text: string; button: string; destination: string }>> = {
  screenweaver: {
    fr: {
      kicker: "Écriture et storyboard",
      title: "Du scénario au storyboard, au même endroit",
      text: "ScreenWeaver part de votre scénario : vous découpez la scène en plans et vous générez le storyboard sans changer d'outil. Le texte reste la colonne vertébrale du projet.",
      button: "Essayer ScreenWeaver",
      destination: "fr",
    },
    en: {
      kicker: "Screenwriting and storyboard",
      title: "From screenplay to storyboard, in one place",
      text: "ScreenWeaver starts from your script: you break the scene into shots and generate the storyboard without switching tools. The text stays the backbone of the project.",
      button: "Try ScreenWeaver",
      destination: "home",
    },
  },
  imaginode: {
    fr: {
      kicker: "Image et vidéo IA",
      title: "Comparer les modèles sur un seul canvas",
      text: "Imaginode relie les modèles d'image et de vidéo dans un canvas de nodes : vous lancez le même prompt sur plusieurs modèles et vous gardez le meilleur rendu.",
      button: "Ouvrir Imaginode",
      destination: "home",
    },
    en: {
      kicker: "AI image and video",
      title: "Compare models on a single canvas",
      text: "Imaginode chains image and video models in a node canvas: run the same prompt on several models and keep the best result.",
      button: "Open Imaginode",
      destination: "home",
    },
  },
};

/**
 * Encart produit (fin d'article ou contextuel). Le lien passe par la route
 * /go du produit avec source `bl` (un autre site de Frank), format `a`
 * (article) et le slug en utm_content.
 */
export function ProductCta({ product, locale, slug, ...p }: Props) {
  const c = COPY[product][locale];
  const destination = (p.destination ?? c.destination).toLowerCase().replace(/[^a-z0-9-]/g, "");
  const content = slug.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 80);
  const href = `${BASE[product]}/go/bl-${destination}-a${content ? `/${content}` : ""}`;
  const title = p.titre ?? p.title ?? c.title;

  return (
    <aside
      className="product-cta not-prose my-14 grid gap-6 border-y border-line-strong py-8 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-10"
      aria-label={NAME[product]}
    >
      <div>
        <p className="meta">
          <span className="meta-strong">{NAME[product]}</span>
          <span className="text-fog/50" aria-hidden> / </span>
          {c.kicker}
        </p>
        <p className="mt-4 text-[clamp(1.4rem,2.4vw,1.85rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-cream">
          {title}
        </p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <p className="text-[15px] leading-relaxed text-stone">{p.texte ?? p.text ?? c.text}</p>
        <a href={href} target="_blank" rel="noopener" className="btn btn-sm">
          <span>{p.bouton ?? p.button ?? c.button}</span>
          <Arrow />
        </a>
      </div>
    </aside>
  );
}
