export type PanchakarmaStage = {
  devanagari: string;
  title: string;
  summary: string;
  items: string[];
};

export const panchakarmaStages: PanchakarmaStage[] = [
  {
    devanagari: "पूर्वकर्म",
    title: "Prepare",
    summary: "Loosen and gather toxins so the body is ready to release them.",
    items: [
      "Internal oleation with medicated ghee",
      "Daily Abhyanga oil massage",
      "Herbal steam (Swedana)",
    ],
  },
  {
    devanagari: "प्रधानकर्म",
    title: "Cleanse",
    summary: "One or more of the five classical procedures, chosen for your imbalance.",
    items: [
      "Virechana for Pitta conditions",
      "Basti for Vata conditions",
      "Nasya for head and sinus",
    ],
  },
  {
    devanagari: "पश्चात्कर्म",
    title: "Rebuild",
    summary: "Restore digestion and strength gradually after the cleanse.",
    items: [
      "Graded diet (Samsarjana Krama)",
      "Rasayana rejuvenating herbs",
      "Home routine and follow-up",
    ],
  },
];

export type Programme = {
  days: number;
  title: string;
  description: string;
  /** Matches an option in the booking form. */
  bookingOption: string;
  featured?: boolean;
};

export const programmes: Programme[] = [
  {
    days: 3,
    title: "Weekend Reset",
    description:
      "A short introduction for busy professionals: Abhyanga, Swedana, Shirodhara and a guided light diet.",
    bookingOption: "3-day Weekend Reset",
  },
  {
    days: 7,
    title: "Seasonal Cleanse",
    description:
      "Our most popular programme. Preparation plus one main procedure, ideal at the change of seasons.",
    bookingOption: "7-day Seasonal Cleanse",
    featured: true,
  },
  {
    days: 14,
    title: "Deep Panchakarma",
    description:
      "All three stages at a steady pace, for long-standing digestive, joint or stress concerns.",
    bookingOption: "14-day Deep Panchakarma",
  },
  {
    days: 21,
    title: "Rasayana Retreat",
    description:
      "Full classical Panchakarma followed by rejuvenation therapy. Planned case by case.",
    bookingOption: "21-day Rasayana Retreat",
  },
];
