export type NavItem = {
  label: string;
  href: string;
};

/** Sits to the left of the centred wordmark on large screens. */
export const navLeft: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Therapies", href: "/therapies" },
  { label: "Panchakarma", href: "/panchakarma" },
];

/** Sits to the right of the centred wordmark on large screens. */
export const navRight: NavItem[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const primaryNav: NavItem[] = [...navLeft, ...navRight];

export const bookingHref = "/book";

export function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
