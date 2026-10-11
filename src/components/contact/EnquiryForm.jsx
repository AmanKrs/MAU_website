"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { serviceOptions } from "@/data/services";
import {
  enquiryDefaults,
  enquirySchema,
  formatEventDate,
  normalizeIndianPhone,
} from "@/lib/validation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const fieldClass =
  "mt-2 w-full border border-champagne bg-paper px-4 py-3.5 text-espresso placeholder:text-espresso/40 focus:border-gold focus:outline-none focus-visible:outline-2 focus-visible:outline-gold aria-[invalid=true]:border-red-700";

function Field({ id, label, optional = false, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.74rem] font-medium uppercase tracking-[0.18em]">
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal text-espresso/50">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
          <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Compose the message the visitor will review and send in WhatsApp. */
function composeMessage(values) {
  const lines = [
    `Hello Pallavi, I found your website and would like to enquire about ${values.service}. My event date is ${formatEventDate(values.eventDate)}, and my event location is ${values.eventLocation}. Please share your availability and pricing.`,
    "",
    `Name: ${values.fullName}`,
    `Phone / WhatsApp: ${normalizeIndianPhone(values.phone)}`,
  ];
  if (values.email) lines.push(`Email: ${values.email}`);
  if (values.notes) lines.push("", `Additional requirements: ${values.notes}`);
  return lines.join("\n");
}

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: enquiryDefaults,
    mode: "onTouched",
  });

  // "idle" | "handoff" | "error"
  const [status, setStatus] = useState("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const handoffRef = useRef(null);

  // Async so react-hook-form keeps `isSubmitting` true (and the button disabled) until hand-off finishes.
  const onSubmit = async (values) => {
    const url = buildWhatsAppUrl(composeMessage(values));
    setWhatsAppUrl(url);

    // Open synchronously within the click so mobile browsers do not treat it as a blocked popup.
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;

    await new Promise((resolve) => window.setTimeout(resolve, 400));

    // A null result means the browser blocked the new tab, so show the manual link.
    setStatus(opened ? "handoff" : "error");
  };

  const startAgain = () => {
    reset(enquiryDefaults);
    setWhatsAppUrl("");
    setStatus("idle");
  };

  // Move focus to the result message so screen-reader users hear it.
  useEffect(() => {
    if (status !== "idle") handoffRef.current?.focus();
  }, [status]);

  if (status === "handoff" || status === "error") {
    return (
      <div
        ref={handoffRef}
        tabIndex={-1}
        role="status"
        className="border border-gold bg-paper p-8 outline-none sm:p-10"
      >
        <h2 className="display-md">
          {status === "error" ? "WhatsApp did not open" : "Your message is ready in WhatsApp"}
        </h2>
        <span className="rule-gold mt-5 block" aria-hidden="true" />
        {status === "error" ? (
          <p className="mt-5 text-espresso/80">
            Your browser may have blocked the new tab. Use the button below to open WhatsApp with your message
            prefilled.
          </p>
        ) : (
          <p className="mt-5 text-espresso/80">
            We opened WhatsApp with your details prefilled. <strong>Your enquiry has not been sent yet.</strong> It
            is only sent when you press Send in WhatsApp. If WhatsApp did not open, use the button below.
          </p>
        )}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-espresso px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory hover:bg-gold-dark"
          >
            <WhatsAppIcon size={16} />
            Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={startAgain}
            className="border border-espresso px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] hover:bg-espresso hover:text-ivory"
          >
            Edit my details
          </button>
        </div>
      </div>
    );
  }

  const loading = isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
        </Field>
        <Field id="phone" label="Phone / WhatsApp number" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            className={fieldClass}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field id="email" label="Email address" optional error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="service" label="Service required" error={errors.service?.message}>
          <select
            id="service"
            className={fieldClass}
            aria-invalid={errors.service ? "true" : "false"}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="eventDate" label="Event date" error={errors.eventDate?.message}>
          <input
            id="eventDate"
            type="date"
            className={fieldClass}
            aria-invalid={errors.eventDate ? "true" : "false"}
            aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
            {...register("eventDate")}
          />
        </Field>
      </div>

      <Field id="eventLocation" label="Event location" error={errors.eventLocation?.message}>
        <input
          id="eventLocation"
          type="text"
          placeholder="City and venue, if known"
          className={fieldClass}
          aria-invalid={errors.eventLocation ? "true" : "false"}
          aria-describedby={errors.eventLocation ? "eventLocation-error" : undefined}
          {...register("eventLocation")}
        />
      </Field>

      <Field id="notes" label="Additional requirements" optional error={errors.notes?.message}>
        <textarea
          id="notes"
          rows={4}
          placeholder="Preferred look, outfit colour, hairstyling, number of people…"
          className={fieldClass}
          aria-invalid={errors.notes ? "true" : "false"}
          aria-describedby={errors.notes ? "notes-error" : undefined}
          {...register("notes")}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-espresso/80">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-[#8c7347]"
            aria-invalid={errors.consent ? "true" : "false"}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            I agree that these details will be used to prepare a WhatsApp message to Pallavi Verma about my enquiry.
            See the{" "}
            <Link href="/privacy-policy" className="underline decoration-gold underline-offset-4">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
            <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 bg-espresso px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Opening WhatsApp…
            </>
          ) : (
            <>
              <WhatsAppIcon size={16} />
              Continue to WhatsApp
            </>
          )}
        </button>
        <p id="form-note" className="mt-4 text-sm text-espresso/65">
          Pressing the button checks your details and opens WhatsApp with your message prefilled.{" "}
          <strong>Nothing is sent until you press Send in WhatsApp.</strong>
        </p>
      </div>
    </form>
  );
}
