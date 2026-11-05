export type TherapyCategory = "relax" | "pain" | "detox" | "beauty";

export type Therapy = {
  devanagari: string;
  name: string;
  subtitle: string;
  description: string;
  category: TherapyCategory;
  /** Leave as null to hide the session length on the card. */
  duration: string | null;
};

export const categoryLabels: Record<TherapyCategory, string> = {
  relax: "Stress & sleep",
  pain: "Pain & mobility",
  detox: "Detox & weight",
  beauty: "Skin, hair & eyes",
};

export type TherapyFilter = TherapyCategory | "all";

export const therapyFilters: { id: TherapyFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "relax", label: categoryLabels.relax },
  { id: "pain", label: categoryLabels.pain },
  { id: "detox", label: categoryLabels.detox },
  { id: "beauty", label: categoryLabels.beauty },
];

export const therapies: Therapy[] = [
  {
    devanagari: "अभ्यंग",
    name: "Abhyanga",
    subtitle: "Full-body warm oil massage",
    description:
      "Rhythmic, long strokes with dosha-specific oil to ease tiredness, improve circulation and settle a restless mind.",
    category: "relax",
    duration: "60 min",
  },
  {
    devanagari: "शिरोधारा",
    name: "Shirodhara",
    subtitle: "Warm oil stream on the forehead",
    description:
      "A continuous flow of lukewarm oil over the brow. Deeply calming for stress, poor sleep and racing thoughts.",
    category: "relax",
    duration: "45 min",
  },
  {
    devanagari: "पिझिच्चिल",
    name: "Pizhichil",
    subtitle: "Warm oil bath with gentle massage",
    description:
      "Two therapists pour warm oil over the body while massaging in sync. Nourishing for stiffness and fatigue.",
    category: "pain",
    duration: "75 min",
  },
  {
    devanagari: "उद्वर्तन",
    name: "Udvartana",
    subtitle: "Herbal powder massage",
    description:
      "Brisk upward strokes with dry herbal powders that stimulate metabolism and leave skin smooth and firm.",
    category: "detox",
    duration: "45 min",
  },
  {
    devanagari: "कटि बस्ति",
    name: "Kati Basti",
    subtitle: "Lower back oil pool",
    description:
      "Warm medicated oil held in a ring of dough on the lower back to relax tight muscles and support the spine.",
    category: "pain",
    duration: "40 min",
  },
  {
    devanagari: "ग्रीवा बस्ति",
    name: "Greeva Basti",
    subtitle: "Neck oil pool",
    description:
      "The same technique for the neck and upper back. Popular with people who spend long hours at a desk.",
    category: "pain",
    duration: "40 min",
  },
  {
    devanagari: "जानु बस्ति",
    name: "Janu Basti",
    subtitle: "Knee oil pool",
    description:
      "Focused warmth and oil for stiff, tired knees, followed by a gentle massage of the leg.",
    category: "pain",
    duration: "40 min",
  },
  {
    devanagari: "पोटली",
    name: "Patra Pinda Sweda",
    subtitle: "Warm herbal bolus massage",
    description:
      "Linen pouches of fresh leaves, heated in oil and pressed over sore areas to ease pain and swelling.",
    category: "pain",
    duration: "60 min",
  },
  {
    devanagari: "स्वेदन",
    name: "Swedana",
    subtitle: "Herbal steam",
    description:
      "Steam infused with herbs after oil massage, to open channels and help the body release toxins.",
    category: "detox",
    duration: "20 min",
  },
  {
    devanagari: "नस्य",
    name: "Nasya",
    subtitle: "Herbal nasal drops",
    description:
      "Medicated oil drops after a face and head massage to clear the sinuses and refresh the senses.",
    category: "detox",
    duration: "30 min",
  },
  {
    devanagari: "मुखलेपम्",
    name: "Mukha Lepam",
    subtitle: "Ayurvedic face therapy",
    description:
      "Face massage with a herbal pack suited to your skin type, for a clear, calm complexion.",
    category: "beauty",
    duration: "45 min",
  },
  {
    devanagari: "नेत्र तर्पण",
    name: "Netra Tarpana",
    subtitle: "Eye rejuvenation",
    description:
      "Warm ghee held gently over closed eyes. Soothing for dry, strained eyes after long screen hours.",
    category: "beauty",
    duration: "30 min",
  },
  {
    devanagari: "शिरो अभ्यंग",
    name: "Shiro Abhyanga",
    subtitle: "Head, neck and scalp massage",
    description:
      "Warm oil worked into the scalp and shoulders to nourish hair roots and release tension.",
    category: "beauty",
    duration: "30 min",
  },
  // These two are core services in the client's brief but not in the template.
  {
    devanagari: "आयुर्वेदिक मालिश",
    name: "Ayurvedic Massage",
    subtitle: "Traditional oil massage",
    description:
      "Warm oil and steady, flowing strokes, following the Ayurvedic massage tradition.",
    category: "relax",
    duration: "60 min",
  },
  {
    devanagari: "केरल मालिश",
    name: "Traditional Kerala Massage",
    subtitle: "Kerala-style oil massage",
    description:
      "Long, rhythmic strokes with warm oils, in the style of Kerala's massage tradition.",
    category: "relax",
    duration: "60 min",
  },
];

/** The options for "Interested in", as confirmed by the client. */
export const interestOptions: string[] = [
  "Consultation with Vaidya",
  "Abhyanga",
  "Shirodhara",
  "Pizhichil",
  "Udvartana",
  "Kati / Greeva / Janu Basti",
  "Nasya",
  "Netra Tarpana",
  "Patra Pinda Sweda",
  "Swedana",
  "Mukha Lepam",
  "Shiro Abhyanga",
  "Ayurvedic Massage",
  "Traditional Kerala Massage",
  "3-day Weekend Reset",
  "7-day Seasonal Cleanse",
  "14-day Deep Panchakarma",
  "21-day Rasayana Retreat",
  "Gift voucher / corporate",
];
