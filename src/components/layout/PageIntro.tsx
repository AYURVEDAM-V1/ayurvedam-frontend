import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

type PageIntroProps = {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** The dark opening band shared by inner pages. It holds the page's h1. */
export function PageIntro({ kicker, title, lead, children }: PageIntroProps) {
  return (
    <div data-tone="dark" className="bg-cocoa text-ivory">
      <Container className="pt-36 pb-14 sm:pt-44 sm:pb-20">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-3 max-w-4xl font-display text-display-lg">{title}</h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lead text-sand">{lead}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
      <div aria-hidden="true" className="kasavu" />
    </div>
  );
}
