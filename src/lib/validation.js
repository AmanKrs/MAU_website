import { z } from "zod";
import { serviceOptions } from "@/data/services";

/** Accepts 10-digit Indian mobiles (starting 6-9), optionally with +91, 91 or 0. */
const INDIAN_MOBILE = /^(?:\+?91|0)?[6-9]\d{9}$/;

export function normalizeIndianPhone(value) {
  return String(value || "").replace(/[\s\-()]/g, "");
}

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone or WhatsApp number.")
    .refine(
      (value) => INDIAN_MOBILE.test(normalizeIndianPhone(value)),
      "Enter a valid 10-digit Indian mobile number (with or without +91).",
    ),
  email: z
    .string()
    .trim()
    .max(120, "Please keep your email under 120 characters.")
    .refine(
      (value) => value === "" || z.email().safeParse(value).success,
      "Enter a valid email address, or leave this blank.",
    ),
  service: z
    .string()
    .min(1, "Please choose a service.")
    .refine((value) => serviceOptions.includes(value), "Please choose a service from the list."),
  eventDate: z
    .string()
    .min(1, "Please choose your event date.")
    .refine((value) => value >= todayIso(), "Please choose today or a future date."),
  eventLocation: z
    .string()
    .trim()
    .min(2, "Please tell us the city or venue.")
    .max(120, "Please keep the location under 120 characters."),
  notes: z.string().trim().max(600, "Please keep this under 600 characters."),
  consent: z.literal(true, {
    error: "Please confirm you are happy for your details to be used to start this WhatsApp enquiry.",
  }),
});

export const enquiryDefaults = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  eventDate: "",
  eventLocation: "",
  notes: "",
  consent: false,
};

/** Format yyyy-mm-dd as a readable date for the WhatsApp message (e.g. 12 Dec 2026). */
export function formatEventDate(iso) {
  const [year, month, day] = String(iso).split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
