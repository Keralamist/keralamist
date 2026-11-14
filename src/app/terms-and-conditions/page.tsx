import type { Metadata } from "next";
import {
  Building2, CalendarCheck, ClipboardList, Clock, CreditCard, FileCheck, Mail, PencilLine, Phone,
  RefreshCcw, Tag, TriangleAlert, Users, type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using KeralaMist.in, covering booking enquiries, availability, payments, cancellations, guest responsibilities and liability.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title: "Terms & Conditions | KeralaMist.in", url: "/terms-and-conditions" },
};

type Section = { icon: LucideIcon; title: string; body: string[] };

const SECTIONS: Section[] = [
  {
    icon: CalendarCheck,
    title: "Booking Enquiries and Confirmations",
    body: [
      "KeralaMist.in does not take bookings or payments through this website. All enquiries are made by WhatsApp, phone or email.",
      "An enquiry is not a reservation. A booking is confirmed only when you receive a written confirmation from KeralaMist.in.",
    ],
  },
  {
    icon: Tag,
    title: "Availability and Pricing",
    body: [
      "All stays are subject to availability at the time of confirmation. Prices can vary by property, season, dates and group size, and are shared with you when you enquire.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments",
    body: ["Payment terms depend on the property and will be explained to you clearly before you confirm a booking."],
  },
  {
    icon: RefreshCcw,
    title: "Cancellation and Refunds",
    body: [
      "Cancellation and refund terms depend on the individual property. We will share the applicable policy with you before you make any payment.",
    ],
  },
  {
    icon: Clock,
    title: "Check-in and Check-out",
    body: ["Check-in and check-out timings are set by each property and will be shared with your booking confirmation."],
  },
  {
    icon: Users,
    title: "Guest Responsibilities",
    body: [
      "Guests are expected to provide accurate details when enquiring, carry valid identification, treat the property and its staff with respect, and follow local laws and safety instructions.",
      "Guests may be held responsible for damage they cause to a property.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Property Rules",
    body: ["Each property has its own house rules. Guests must follow the rules of the property they stay at."],
  },
  {
    icon: PencilLine,
    title: "Changes to Reservations",
    body: [
      "Requests to change dates, guest numbers or other details should be made to KeralaMist.in as early as possible. Changes depend on availability and on the property's terms.",
    ],
  },
  {
    icon: Building2,
    title: "Third-Party Accommodation Providers",
    body: [
      "KeralaMist.in is a platform that connects travellers with independently owned and operated resorts, villas, camps and local experience providers. The accommodation and services are provided by those third parties.",
    ],
  },
  {
    icon: TriangleAlert,
    title: "Liability and Limitations",
    body: [
      "KeralaMist.in acts as a facilitator between travellers and property owners. We are not directly responsible for the services, facilities or conduct of third-party providers, but we will always assist you in resolving genuine concerns.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using KeralaMist.in."
      />
      <div className="mx-auto max-w-[1400px] space-y-5 px-4 py-9 sm:px-6 lg:py-11">
        <section className="flex flex-col gap-5 rounded-[22px] border border-forest/10 bg-gradient-to-r from-sage to-ivory p-7 sm:flex-row sm:items-center sm:gap-8">
          <FileCheck aria-hidden="true" strokeWidth={1.5} className="size-16 shrink-0 text-forest" />
          <span aria-hidden="true" className="hidden w-0.5 self-stretch bg-forest/40 sm:block" />
          <div>
            <h2 className="font-serif text-[1.9rem] font-bold tracking-tight text-forest">About KeralaMist.in</h2>
            <p className="mt-2 text-[17px] leading-relaxed text-charcoal lg:text-[19px]">
              KeralaMist.in is a travel accommodation platform that connects travellers with
              carefully selected resorts, villas, camps and local experiences, with a focus on
              Vagamon. By using this website or our services, you agree to these terms.
            </p>
          </div>
        </section>

        <ol className="grid gap-5 lg:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-[22px] border border-forest/[0.07] bg-ivory p-6 lg:p-7">
              <s.icon aria-hidden="true" strokeWidth={1.6} className="size-12 shrink-0 text-forest lg:size-14" />
              <div>
                <h2 className="font-serif text-[1.5rem] font-bold leading-tight tracking-tight text-forest lg:text-[1.75rem]">
                  {i + 1}. {s.title}
                </h2>
                {s.body.map((b) => (
                  <p key={b} className="mt-2 text-[16px] leading-relaxed text-charcoal lg:text-[18px]">{b}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <section className="flex flex-col gap-6 rounded-[22px] border border-forest/10 bg-gradient-to-r from-sage to-ivory p-7 lg:flex-row lg:items-center lg:gap-10">
          <div className="lg:flex-1">
            <h2 className="font-serif text-[1.9rem] font-bold tracking-tight text-forest">{SECTIONS.length + 1}. Contact Information</h2>
            <p className="mt-2 text-[17px] text-charcoal lg:text-[19px]">
              For any questions or clarifications regarding these Terms &amp; Conditions, please contact us:
            </p>
          </div>
          <ul className="space-y-3 text-[18px] font-semibold text-forest lg:text-[20px]">
            {SITE.phones.map((p) => (
              <li key={p.tel} className="flex items-center gap-4">
                <Phone aria-hidden="true" className="size-6" />
                <a href={`tel:${p.tel}`} className="hover:underline">{p.display}</a>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <Mail aria-hidden="true" className="size-6" />
              <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
