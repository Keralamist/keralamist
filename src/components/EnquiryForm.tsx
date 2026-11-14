"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CalendarDays, Mail, MessageSquareText, Phone, Send, User, Users } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const field =
  "h-12 w-full rounded-lg border border-forest/25 bg-white pl-11 pr-3 text-[16px] text-charcoal placeholder:text-charcoal/60 focus:border-forest";

function Field({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 text-forest-dark">
        {icon}
      </span>
      {children}
    </label>
  );
}

/**
 * Enquiry form with no backend: on submit it opens WhatsApp with the
 * visitor's details pre-filled. Nothing is stored or sent anywhere else.
 */
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const details = [
      `Name: ${v("name")}`,
      `Phone / WhatsApp: ${v("phone")}`,
      v("email") && `Email: ${v("email")}`,
      v("checkin") && `Check-in: ${v("checkin")}`,
      v("checkout") && `Check-out: ${v("checkout")}`,
      v("guests") && `Guests: ${v("guests")}`,
      v("message") && `Requirements: ${v("message")}`,
    ].filter(Boolean);
    const message = `Hello KeralaMist, I'd like to enquire about a stay in Vagamon.\n\n${details.join("\n")}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const icon = "size-5";
  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby="enquiry-heading"
      className="rounded-[22px] border border-forest/10 bg-white p-5 shadow-card sm:p-7"
    >
      <h2
        id="enquiry-heading"
        className="flex items-center gap-3 font-serif text-[1.9rem] font-bold tracking-tight text-forest-dark lg:text-[2.4rem]"
      >
        <Send aria-hidden="true" strokeWidth={1.75} className="size-8 text-forest lg:size-10" />
        Send us an Enquiry
      </h2>
      <p className="mt-2 text-[16px] text-charcoal lg:text-[18px]">
        Tell us your travel plans and we&rsquo;ll get back to you with the best options.
      </p>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <Field icon={<User className={icon} />} label="Your name (required)">
          <input name="name" required autoComplete="name" placeholder="Your Name *" className={field} />
        </Field>
        <Field icon={<Phone className={icon} />} label="Phone or WhatsApp number (required)">
          <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone / WhatsApp *" className={field} />
        </Field>
        <div className="sm:col-span-2">
          <Field icon={<Mail className={icon} />} label="Email address">
            <input name="email" type="email" autoComplete="email" placeholder="Email Address" className={field} />
          </Field>
        </div>
        <label className="block">
          <span className="mb-1 block text-[14px] font-medium text-charcoal">Check-in Date</span>
          <span className="relative block">
            <CalendarDays aria-hidden="true" className={`${icon} pointer-events-none absolute left-3.5 top-3.5 text-forest-dark`} />
            <input name="checkin" type="date" className={field} />
          </span>
        </label>
        <label className="block">
          <span className="mb-1 block text-[14px] font-medium text-charcoal">Check-out Date</span>
          <span className="relative block">
            <CalendarDays aria-hidden="true" className={`${icon} pointer-events-none absolute left-3.5 top-3.5 text-forest-dark`} />
            <input name="checkout" type="date" className={field} />
          </span>
        </label>
        <div className="sm:col-span-2">
          <Field icon={<Users className={icon} />} label="Number of guests">
            <select name="guests" defaultValue="" className={field}>
              <option value="">Number of Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3–4</option>
              <option>5–8</option>
              <option>9 or more</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field icon={<MessageSquareText className={icon} />} label="Your message or requirements">
            <textarea
              name="message"
              rows={3}
              placeholder="Your Message / Requirements (e.g. stay, jeep trip, camp fire, local exploring, food, etc.)"
              className={`${field} h-auto py-3`}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="btn-green mt-5 flex h-[52px] w-full items-center justify-center gap-3 rounded-full text-[18px] font-semibold text-white"
      >
        Send Enquiry
        <ArrowRight aria-hidden="true" className="size-5" />
      </button>
      <p role="status" className="mt-3 text-center text-[14px] text-charcoal/80">
        {sent
          ? "WhatsApp has opened with your enquiry. Press send there to reach us."
          : "Opens WhatsApp with your details filled in. You press send there."}
      </p>
    </form>
  );
}
