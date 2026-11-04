import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

type SharedProps = {
  variant?: ButtonVariant;
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
  "inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-[1.4rem] py-[0.85rem] text-[0.95rem] leading-[normal] font-bold no-underline transition-[translate,background-color] duration-200";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-turmeric text-turmeric-ink hover:-translate-y-0.5",
  ghost:
    "border-current bg-transparent text-inherit hover:bg-[color-mix(in_srgb,currentColor_8%,transparent)]",
};

/**
 * Renders the right element for the job: a Next.js link for internal pages, a
 * plain anchor for tel: and external URLs, or a button when there is no href.
 *
 * `className` is for additions such as `w-full`. It cannot override the styles
 * above, because `cn` only joins classes: wrap the button in an element to
 * show or hide it at a breakpoint.
 */
export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

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
      {opensElsewhere ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </a>
  );
}
