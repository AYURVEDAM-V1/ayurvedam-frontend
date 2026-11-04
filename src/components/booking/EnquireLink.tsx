"use client";

import Link from "next/link";

import { useBooking } from "@/components/booking/BookingProvider";
import { bookingHref } from "@/config/navigation";
import { cn } from "@/lib/cn";

type EnquireLinkProps = {
  service: string;
  className?: string;
};

export function EnquireLink({ service, className }: EnquireLinkProps) {
  const { selectService } = useBooking();

  return (
    <Link
      href={bookingHref}
      aria-label={`Enquire about ${service}`}
      onClick={() => selectService(service)}
      className={cn("text-[0.9rem] font-bold", className)}
    >
      Enquire →
    </Link>
  );
}
