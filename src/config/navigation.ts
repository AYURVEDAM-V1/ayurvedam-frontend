export type NavItem = {
  label: string;
  href: string;
};

/** Links start with "/" so they also work from the 404 page. */
export const primaryNav: NavItem[] = [
  { label: "Our approach", href: "/#approach" },
  { label: "Therapies", href: "/#therapies" },
  { label: "Panchakarma", href: "/#panchakarma" },
  { label: "Know your dosha", href: "/#prakriti" },
  { label: "FAQ", href: "/#faq" },
];

export const bookingHref = "/#book";

export const footerNav: NavItem[] = [
  { label: "Our approach", href: "/#approach" },
  { label: "Therapies", href: "/#therapies" },
  { label: "Panchakarma programmes", href: "/#panchakarma" },
  { label: "Know your dosha", href: "/#prakriti" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book a session", href: bookingHref },
];
