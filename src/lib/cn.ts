type ClassValue = string | false | null | undefined;

/** Joins class names and skips empty values. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
