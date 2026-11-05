"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type BookingSelection = {
  service: string;
  /** Changes on every pick, so choosing the same service again still applies. */
  version: number;
};

type BookingContextValue = {
  selection: BookingSelection | null;
  selectService: (service: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

/** Lets an "Enquire" link elsewhere on the page preselect a service in the form. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<BookingSelection | null>(null);

  const selectService = useCallback((service: string) => {
    setSelection((current) => ({
      service,
      version: (current?.version ?? 0) + 1,
    }));
  }, []);

  const value = useMemo(
    () => ({ selection, selectService }),
    [selection, selectService],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return context;
}
