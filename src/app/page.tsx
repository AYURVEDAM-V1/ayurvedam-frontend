import { BookingProvider } from "@/components/booking/BookingProvider";
import { Approach } from "@/components/sections/Approach";
import { Booking } from "@/components/sections/Booking";
import { Concerns } from "@/components/sections/Concerns";
import { DoshaCheck } from "@/components/sections/DoshaCheck";
import { Faq } from "@/components/sections/Faq";
import { FirstVisit } from "@/components/sections/FirstVisit";
import { Hero } from "@/components/sections/Hero";
import { Panchakarma } from "@/components/sections/Panchakarma";
import { Therapies } from "@/components/sections/Therapies";

export default function HomePage() {
  return (
    <BookingProvider>
      <Hero />
      <Approach />
      <Therapies />
      <Panchakarma />
      <DoshaCheck />
      <Concerns />
      <FirstVisit />
      <Faq />
      <Booking />
    </BookingProvider>
  );
}
