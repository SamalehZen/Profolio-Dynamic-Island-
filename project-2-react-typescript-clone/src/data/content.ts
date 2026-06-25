import type { CallToAction, InlineFragment, IslandStatus, NavItem, Project } from "@/types";
import {
  AboutIcon,
  BrainIcon,
  CityIcon,
  ExperienceIcon,
  HomeIcon,
  PaintBrushIcon,
  PlugsConnectedIcon,
  WorksIcon,
} from "@/components/icons";

import workVolium from "@/assets/work-volium.jpeg";
import workFestina from "@/assets/work-festina.jpeg";
import workAthema from "@/assets/work-athema.jpeg";
import workLoganHayes from "@/assets/work-loganhayes.png";

export const profile = {
  name: "Samaleh Arka",
  role: "Dev Ops",
  avatarAlt: "Portrait de Samaleh Arka",
} as const;

/** Live status shown when the dynamic island is expanded. */
export const islandStatus: IslandStatus = {
  location: "Djibouti, DJ",
  temperature: "36°C",
  condition: "Ensoleillé",
  available: true,
};

export const navItems: NavItem[] = [
  { label: "Accueil", shortcut: "1", target: "home", icon: HomeIcon },
  { label: "Expérience", shortcut: "2", target: "experience", icon: ExperienceIcon },
  { label: "À propos", shortcut: "3", target: "home", icon: AboutIcon },
  { label: "Projets", shortcut: "4", target: "works", icon: WorksIcon },
];

export const hero = {
  greeting: "Bonjour 👋, je suis Samaleh Arka.",
  /** Sentence groups; each line break mirrors the Framer original. */
  introLines: [
    [
      { text: "Un Dev Ops dévoué", icon: PaintBrushIcon },
      { text: "qui crée des expériences inspirantes.", icon: BrainIcon },
    ],
    [
      { text: "J'appelle Djibouti chez moi", icon: CityIcon },
      { text: "où l'infrastructure rencontre l'innovation." },
    ],
    [
      {
        text: "Quand je ne code pas, j'explore le monde et capture des moments.",
      },
    ],
    [
      { text: "Bilingue en français et somali, j'adore", icon: PlugsConnectedIcon },
      { text: "me connecter avec des personnes de tous horizons." },
    ],
  ] satisfies InlineFragment[][],
  ctas: [
    { label: "Planifier un appel", href: "mailto:samaleh.arka@mail.com", variant: "primary" },
    { label: "samaleh.arka@mail.com", href: "mailto:samaleh.arka@mail.com", variant: "secondary" },
  ] satisfies CallToAction[],
};

export const experience = {
  heading: "Actuellement",
  /** The body is split so "Arka Infra" can render as a highlight chip. */
  before: "Actuellement Dev Ops Engineer chez ",
  highlight: "Arka Infra",
  after:
    " je dirige des projets axés sur la création d'infrastructures intuitives, accessibles et performantes. Je collabore étroitement avec les équipes produit et développement pour livrer des solutions innovantes.",
  ctas: [
    { label: "Télécharger CV", href: "#", variant: "primary" },
    { label: "Voir l'expérience complète", href: "#experience", variant: "secondary" },
  ] satisfies CallToAction[],
};

export const works = {
  heading: "Projets",
  caption: "Contenu d'exemple à des fins de démonstration uniquement.",
  projects: [
    { name: "Volium", image: workVolium, alt: "Volium — brand and product website" },
    { name: "Festina", image: workFestina, alt: "Festina — investment fund website" },
    { name: "Athema", image: workAthema, alt: "Athema — SaaS productivity platform" },
    { name: "Logan Hayes", image: workLoganHayes, alt: "Logan Hayes — photography portfolio" },
  ] satisfies Project[],
};

export const footer = {
  location: "Djibouti, DJ (UTC +3)",
  rights: "Tous droits réservés",
  builtWith: { label: "Framer", href: "https://framer.com" },
  author: { label: "Samaleh Arka", href: "#" },
};
