import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverse"
  | "outline-inverse"
  | "whatsapp";

type ButtonSize = "sm" | "md";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = SharedProps &
  Omit<ComponentProps<"a">, keyof SharedProps | "href"> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<ComponentProps<"button">, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 py-3 text-[0.9375rem] leading-tight font-medium transition-colors duration-300 ease-soft disabled:cursor-not-allowed disabled:opacity-60";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5",
  md: "min-h-12 px-6",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-laterite text-ivory hover:bg-laterite-deep",
  secondary:
    "border border-cocoa text-cocoa hover:bg-cocoa hover:text-ivory",
  inverse: "bg-ivory text-cocoa hover:bg-sand",
  "outline-inverse":
    "border border-ivory/60 text-ivory hover:bg-ivory hover:text-cocoa",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-deep",
};

/**
 * Renders the right element for the job: a Next.js link for internal pages, a
 * plain anchor for tel: and external URLs, or a button when there is no href.
 *
 * `className` is for additions such as `w-full`. It cannot override the styles
 * above, because `cn` only joins classes: use `size` and `variant` instead, and
 * wrap the button in an element to show or hide it at a breakpoint.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const styles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if (rest.href === undefined) {
    return (
      <button type="button" {...rest} className={styles}>
        {children}
      </button>
    );
  }

  const { href, ...anchorProps } = rest;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...anchorProps} className={styles}>
        {children}
      </Link>
    );
  }

  const opensElsewhere = href.startsWith("http");

  return (
    <a
      href={href}
      target={opensElsewhere ? "_blank" : undefined}
      rel={opensElsewhere ? "noopener noreferrer" : undefined}
      {...anchorProps}
      className={styles}
    >
      {children}
    </a>
  );
}
