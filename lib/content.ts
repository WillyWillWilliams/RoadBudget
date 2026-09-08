export const site = {
  name: "RoadBudget",
  tagline: "Ton road trip complet, calé sur ton budget au centime près.",
  subtagline:
    "Donne-nous tes dates et ton budget total. On construit ton itinéraire jour par jour, avec une répartition claire entre essence, logement, nourriture et activités.",
};

export type ActivityBlock = {
  time: string;
  title: string;
  category: string;
  cost: number;
  note: string;
};

export type DayPlan = {
  day: number;
  title: string;
  drive: string;
  blocks: ActivityBlock[];
};

export const exampleTrip = {
  destination: "Portugal — de Porto à Lisbonne",
  duration: "7 jours",
  travelers: 2,
  budget: 600,
  style: "Route côtière, budget serré",
  breakdown: [
    { label: "Essence / péages", amount: 90 },
    { label: "Logement", amount: 245 },
    { label: "Nourriture", amount: 180 },
    { label: "Activités", amount: 85 },
  ],
  days: [
    {
      day: 1,
      title: "Porto, prise de route",
      drive: "0 km — journée sur place",
      blocks: [
        { time: "10:00", title: "Ribeira, quartier historique", category: "Visite", cost: 0, note: "Marche libre le long du Douro" },
        { time: "13:00", title: "Petisco au marché do Bolhão", category: "Repas", cost: 12, note: "Format tapas, prix serrés" },
        { time: "20:00", title: "Nuit en guesthouse à Vila Nova de Gaia", category: "Logement", cost: 38, note: "Réservé la veille, quartier calme" },
      ],
    },
    {
      day: 2,
      title: "Porto → Aveiro",
      drive: "70 km — 1h",
      blocks: [
        { time: "09:00", title: "Route côtière vers Aveiro", category: "Trajet", cost: 8, note: "Essence, arrêt à Espinho possible" },
        { time: "12:00", title: "Balade en bateau moliceiro", category: "Activité", cost: 10, note: "Départ toutes les 30 min sur le canal central" },
        { time: "19:30", title: "Camping municipal", category: "Logement", cost: 22, note: "Emplacement van, douches incluses" },
      ],
    },
    {
      day: 3,
      title: "Aveiro → Coimbra",
      drive: "60 km — 50 min",
      blocks: [
        { time: "10:00", title: "Université de Coimbra", category: "Visite", cost: 13, note: "Billet bibliothèque Joanina inclus" },
        { time: "13:30", title: "Déjeuner près du Mondego", category: "Repas", cost: 11, note: "Menu du jour, quartier étudiant" },
        { time: "20:00", title: "Auberge à petit prix", category: "Logement", cost: 30, note: "Dortoir 4 places réservable la veille" },
      ],
    },
  ] satisfies DayPlan[],
};
