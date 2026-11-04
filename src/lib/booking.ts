import { z } from "zod";

import { siteConfig } from "@/config/site";

export const preferredTimes = [
  "Morning (8–11 am)",
  "Midday (11 am–2 pm)",
  "Afternoon (2–5 pm)",
  "Evening (5–8 pm)",
];

export const therapistPreferences = ["Female therapist", "Male therapist"];

/** Accepts spaces and hyphens, plus an optional +91, 91 or 0 at the start. */
export function normalisePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

function isTodayOrLater(value: string): boolean {
  if (!value) return true;
  const [year, month, day] = value.split("-").map(Number);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month - 1, day) >= today;
}

export const bookingSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => /^[6-9]\d{9}$/.test(normalisePhone(value)),
      "Enter a 10-digit mobile number.",
    ),
  service: z.string(),
  date: z
    .string()
    .refine(isTodayOrLater, "Please choose today or a later date."),
  time: z.string(),
  therapist: z.string(),
  note: z.string().trim().max(500, "Please keep this under 500 characters."),
});

export type BookingValues = z.infer<typeof bookingSchema>;

function formatDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Builds the text the visitor reviews and sends themselves on WhatsApp. */
export function buildBookingMessage(values: BookingValues): string {
  const preferred = values.date
    ? `${formatDate(values.date)}, ${values.time}`
    : values.time;

  const lines = [
    `Namaste ${siteConfig.name},`,
    `I would like to book: ${values.service}`,
    `Name: ${values.name}`,
    `Mobile: ${normalisePhone(values.phone)}`,
    `Preferred: ${preferred}`,
    `Therapist: ${values.therapist}`,
  ];

  if (values.note) lines.push(`Note: ${values.note}`);

  return lines.join("\n");
}
