import { Kicker } from "@/components/ui/Kicker";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-3 font-display text-display-lg">{title}</h2>
      {lead ? (
        <p className="mt-5 text-lead text-muted in-data-[tone=dark]:text-sand">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
