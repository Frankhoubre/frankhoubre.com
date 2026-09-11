/**
 * Plan de la séquence email (ordre, décalage, libellés). Module sans
 * dépendance serveur : partagé entre l'envoi (emails.ts) et le back-office.
 */

export const SEQUENCE_META = [
  { key: "acces", label: "Accès (Jour 1)", dayOffset: 0, kicker: "Challenge film IA · Jour 1 · La vision" },
  { key: "jour-2", label: "Jour 2", dayOffset: 1, kicker: "Challenge film IA · Jour 2 · Le storyboard" },
  { key: "jour-3", label: "Jour 3", dayOffset: 2, kicker: "Challenge film IA · Jour 3 · Le montage" },
  { key: "preuve", label: "Preuve (Lost Garden)", dayOffset: 3, kicker: "Après le challenge · La preuve" },
  { key: "offre", label: "Offre AI Studios", dayOffset: 4, kicker: "AI Studios · L'offre" },
  { key: "personnages", label: "Personnages (imaginode)", dayOffset: 5, kicker: "Méthode · Les personnages" },
  { key: "credits", label: "Crédits (imaginode)", dayOffset: 6, kicker: "Méthode · Les crédits" },
  { key: "decors", label: "Décors (ScreenWeaver)", dayOffset: 7, kicker: "Méthode · Les décors" },
  { key: "prompts", label: "Prompts (Film Mental)", dayOffset: 8, kicker: "Méthode · Les prompts" },
  { key: "montage", label: "Montage", dayOffset: 9, kicker: "Méthode · Le montage" },
  { key: "30-jours", label: "30 jours", dayOffset: 10, kicker: "AI Studios · Dans 30 jours" },
  { key: "objections", label: "Objections", dayOffset: 11, kicker: "AI Studios · Vos questions" },
  { key: "annuel", label: "Accès annuel", dayOffset: 12, kicker: "AI Studios · L'accès annuel" },
  { key: "outils", label: "Pipeline outils", dayOffset: 13, kicker: "Méthode · Mon pipeline" },
  { key: "derniere", label: "Dernier email", dayOffset: 14, kicker: "Dernière séquence" },
] as const;

export type SequenceKey = (typeof SEQUENCE_META)[number]["key"];

export const SEQUENCE_KEYS: SequenceKey[] = SEQUENCE_META.map((m) => m.key);

/** Heure d'envoi des emails programmés (heure de Paris). */
export const SEQUENCE_SEND_HOUR = 9;

/** Libellé « quand » pour le back-office. */
export function sequenceWhen(dayOffset: number): string {
  return dayOffset === 0 ? "tout de suite" : `J+${dayOffset}, ${SEQUENCE_SEND_HOUR} h`;
}

/** Étapes telles qu'affichées dans le back-office. */
export const SEQUENCE_STEPS = SEQUENCE_META.map((m) => ({
  key: m.key,
  label: m.label,
  when: sequenceWhen(m.dayOffset),
}));
