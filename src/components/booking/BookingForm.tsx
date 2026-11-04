"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

import { useBooking } from "@/components/booking/BookingProvider";
import { Button } from "@/components/ui/Button";
import { interestOptions } from "@/data/therapies";
import {
  bookingSchema,
  buildBookingMessage,
  preferredTimes,
  therapistPreferences,
  type BookingValues,
} from "@/lib/booking";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/contact";

const controlStyles =
  "w-full rounded-xl border-[1.5px] border-line bg-page px-[0.9rem] py-3 text-[1rem] leading-[normal] text-ink placeholder:text-muted focus:border-copper focus:outline-none";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  /** Holds a line open for an error, so required fields do not jump. */
  reserveErrorSpace?: boolean;
  className?: string;
  children: ReactNode;
};

function Field({
  id,
  label,
  error,
  reserveErrorSpace = false,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("grid min-w-0 content-start gap-[0.35rem]", className)}>
      <label htmlFor={id} className="text-[0.85rem] font-bold">
        {label}
      </label>
      {children}
      {error || reserveErrorSpace ? (
        <span id={`${id}-error`} className="min-h-[1em] text-[0.8rem] text-error">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function errorProps(id: string, error?: string) {
  return error
    ? { "aria-invalid": true, "aria-describedby": `${id}-error` }
    : {};
}

/** Today in the visitor's own time zone, in the format date fields expect. */
function localToday(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

/**
 * There is no backend yet, so this form only prepares a WhatsApp message. The
 * visitor reviews it and sends it themselves. Nothing leaves this page until
 * they do, so the form must never say that a session is booked.
 */
export function BookingForm() {
  const { selection } = useBooking();
  const [previewSelection, setPreviewSelection] = useState(selection);
  const [message, setMessage] = useState<string | null>(null);
  const [copyNote, setCopyNote] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLPreElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: interestOptions[0],
      date: "",
      time: preferredTimes[0],
      therapist: therapistPreferences[0],
      note: "",
    },
  });

  useEffect(() => {
    if (selection) setValue("service", selection.service);
  }, [selection, setValue]);

  // setValue does not fire the form's onChange, so a new selection has to clear
  // the preview here. Otherwise it would still show the previous service.
  if (selection !== previewSelection) {
    setPreviewSelection(selection);
    setMessage(null);
  }

  useEffect(() => {
    if (message) panelRef.current?.focus();
  }, [message]);

  const prepareMessage = (values: BookingValues) => {
    setCopyNote("");
    setMessage(buildBookingMessage(values));
  };

  // A preview must always match the form, so any edit clears it.
  const clearPreview = () => {
    if (message) setMessage(null);
  };

  const selectMessage = () => {
    const preview = previewRef.current;
    if (!preview) return;
    const range = document.createRange();
    range.selectNodeContents(preview);
    const selected = window.getSelection();
    selected?.removeAllRanges();
    selected?.addRange(range);
    setCopyNote("Message selected. Press Ctrl+C or long-press to copy.");
  };

  const copyMessage = async () => {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopyNote("Copied.");
    } catch {
      selectMessage();
    }
  };

  return (
    <form
      data-tone="card"
      noValidate
      aria-label="Booking request"
      onSubmit={handleSubmit(prepareMessage)}
      onChange={clearPreview}
      className="grid grid-cols-2 gap-4 rounded-3xl bg-surface p-[clamp(20px,3vw,32px)] text-ink max-[561px]:grid-cols-1"
    >
      <Field
        id="booking-name"
        label="Full name"
        error={errors.name?.message}
        reserveErrorSpace
      >
        <input
          id="booking-name"
          autoComplete="name"
          required
          className={controlStyles}
          {...errorProps("booking-name", errors.name?.message)}
          {...register("name")}
        />
      </Field>

      <Field
        id="booking-phone"
        label="Mobile number"
        error={errors.phone?.message}
        reserveErrorSpace
      >
        <input
          id="booking-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile"
          required
          className={controlStyles}
          {...errorProps("booking-phone", errors.phone?.message)}
          {...register("phone")}
        />
      </Field>

      <Field id="booking-service" label="Interested in">
        <select
          id="booking-service"
          className={controlStyles}
          {...register("service")}
        >
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="booking-date"
        label="Preferred date"
        error={errors.date?.message}
      >
        <input
          id="booking-date"
          type="date"
          onFocus={(event) => {
            event.currentTarget.min = localToday();
          }}
          className={controlStyles}
          {...errorProps("booking-date", errors.date?.message)}
          {...register("date")}
        />
      </Field>

      <Field id="booking-time" label="Preferred time">
        <select id="booking-time" className={controlStyles} {...register("time")}>
          {preferredTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </Field>

      <Field id="booking-therapist" label="Therapist preference">
        <select
          id="booking-therapist"
          className={controlStyles}
          {...register("therapist")}
        >
          {therapistPreferences.map((preference) => (
            <option key={preference} value={preference}>
              {preference}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="booking-note"
        label="Anything we should know? (optional)"
        error={errors.note?.message}
        className="col-span-full"
      >
        <textarea
          id="booking-note"
          rows={3}
          placeholder="e.g. lower back pain for 3 months, on BP medication"
          className={controlStyles}
          {...errorProps("booking-note", errors.note?.message)}
          {...register("note")}
        />
      </Field>

      <div className="col-span-full">
        <Button type="submit" disabled={isSubmitting}>
          Prepare my booking request
        </Button>
      </div>

      {message ? (
        <div
          ref={panelRef}
          tabIndex={-1}
          className="col-span-full grid gap-[0.7rem] rounded-[14px] border-[1.5px] border-dashed border-copper p-4 text-[0.93rem]"
        >
          <strong>
            Your request is ready. Send it to us on WhatsApp to confirm your
            slot.
          </strong>
          <pre
            ref={previewRef}
            className="rounded-[10px] bg-page p-[0.8rem] font-sans text-[0.88rem] leading-normal whitespace-pre-wrap"
          >
            {message}
          </pre>
          <div className="flex flex-wrap gap-[0.6rem]">
            <Button href={whatsappHref(message)}>Open WhatsApp</Button>
            <Button variant="ghost" onClick={copyMessage}>
              Copy message
            </Button>
          </div>
          <p className="text-muted">
            Nothing is sent until you press send in WhatsApp.
          </p>
          <small role="status" className="text-muted">
            {copyNote}
          </small>
        </div>
      ) : null}
    </form>
  );
}
