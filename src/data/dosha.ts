export const doshaNames = ["Vata", "Pitta", "Kapha"] as const;

export type DoshaQuestion = {
  question: string;
  /** In order: the answer that scores Vata, then Pitta, then Kapha. */
  options: [string, string, string];
};

export const doshaQuestions: DoshaQuestion[] = [
  {
    question: "Your build",
    options: ["Slim, light frame", "Medium, athletic", "Broad, sturdy"],
  },
  {
    question: "Your appetite",
    options: [
      "Irregular, I forget meals",
      "Strong, I get irritable if hungry",
      "Steady, I can skip meals easily",
    ],
  },
  {
    question: "Your sleep",
    options: ["Light, I wake easily", "Moderate, fairly sound", "Deep and long"],
  },
  {
    question: "Under stress you feel",
    options: ["Anxious or scattered", "Irritable or impatient", "Withdrawn or sluggish"],
  },
  {
    question: "You prefer weather that is",
    options: ["Warm", "Cool", "Warm and dry"],
  },
];

export const doshaNotes = [
  "Vata types do best with warmth, routine and grounding oils. Abhyanga and Shirodhara are good places to start.",
  "Pitta types benefit from cooling oils and calm. Shirodhara, Netra Tarpana and a Virechana-based cleanse suit you well.",
  "Kapha types feel lighter with stimulation and warmth. Udvartana, Swedana and Nasya help clear heaviness.",
];

export type DoshaResult = {
  heading: string;
  note: string;
  percentages: number[];
};

/** `answers` holds one entry per question: the option index, or null. */
export function scoreDosha(answers: (number | null)[]): DoshaResult {
  const scores = [0, 0, 0];
  for (const answer of answers) {
    if (answer !== null) scores[answer] += 1;
  }

  const answered = scores[0] + scores[1] + scores[2];
  const percentages = scores.map((score) =>
    answered === 0 ? 0 : Math.round((score / answered) * 100),
  );

  if (answered < answers.length) {
    return {
      heading: `${answered} of ${answers.length} answered`,
      note: "Answer all five questions to see your result.",
      percentages,
    };
  }

  const [first, second] = [0, 1, 2].sort((a, b) => scores[b] - scores[a]);
  const isTied = scores[first] === scores[second];

  return {
    heading: isTied
      ? `${doshaNames[first]}–${doshaNames[second]} leaning`
      : `${doshaNames[first]} dominant`,
    note: doshaNotes[first],
    percentages,
  };
}
