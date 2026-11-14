import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Award, Bed, Clock, Mail, MapPin, Phone, Signpost, Sprout } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import Hills from "@/components/Hills";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GENERAL_ENQUIRY, SITE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact KeralaMist.in by phone, WhatsApp, email or Instagram to plan your stay in Vagamon, Kerala. Send an enquiry and our local team will help.",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact KeralaMist.in", url: "/contact-us" },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Vagamon%2C%20Kerala";

const WHY = [
  { icon: Award, title: "Local Destination Expert in Vagamon" },
  { icon: Signpost, title: "Personalised Trip Planning" },
  { icon: Bed, title: "Handpicked Stays" },
  {
    icon: Sprout,
    title: "Complete Travel Assistance",
    note: "(Stay, Jeep Trip, Camp Fire, Local Exploring, Food & more)",
  },
];

function Row({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-5 border-b border-forest/15 py-4 last:border-0">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-sage text-forest">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-[19px] font-semibold text-forest lg:text-[21px]">{title}</h3>
        <div className="text-[17px] text-charcoal lg:text-[19px]">{children}</div>
      </div>
    </li>
  );
}

export default function ContactPage() {
  const wa = whatsappUrl(GENERAL_ENQUIRY);
  const link = "underline-offset-4 hover:text-forest hover:underline";
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We’re here to help you plan your perfect Vagamon getaway."
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14 lg:pt-12">
          <section aria-labelledby="touch-heading" className="lg:pl-6">
            <h2 id="touch-heading" className="font-serif text-4xl font-bold tracking-tight text-forest-dark lg:text-[3.1rem]">
              Get in Touch
            </h2>
            <p className="mt-4 font-serif text-[1.45rem] font-semibold text-forest">
              Let&rsquo;s Plan Your Perfect Escape
            </p>
            <p className="mt-2 max-w-xl text-[17px] leading-relaxed text-charcoal lg:text-[19px]">
              Whether you&rsquo;re looking for a peaceful couple&rsquo;s getaway, a family holiday or
              an adventure in Vagamon, our team is here to help.
            </p>
            <ul className="mt-5">
              <Row icon={<Phone aria-hidden="true" className="size-7" />} title="Call / WhatsApp">
                {SITE.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className={`block ${link}`}>
                    {p.display}
                  </a>
                ))}
              </Row>
              <Row icon={<Mail aria-hidden="true" className="size-7" />} title="Email">
                <a href={`mailto:${SITE.email}`} className={link}>
                  {SITE.email}
                </a>
              </Row>
              <Row icon={<InstagramIcon className="size-7" />} title="Instagram">
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className={link}>
                  {SITE.instagram.handle}
                </a>
              </Row>
              <Row icon={<MapPin aria-hidden="true" className="size-7" />} title="Our Base (Vagamon)">
                Vagamon, Idukki, Kerala – 685503
              </Row>
              <Row icon={<Clock aria-hidden="true" className="size-7" />} title="Support Hours">
                8:00 AM – 8:00 PM
              </Row>
            </ul>
          </section>

          <EnquiryForm />
        </div>

        <section
          aria-labelledby="quick-heading"
          className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-0 lg:py-12"
        >
          <div className="relative aspect-[12/5] overflow-hidden rounded-[24px] shadow-soft">
            <Image
              src="/images/hero/vagamon-camping.jpg"
              alt="Tent and campfire on a Vagamon hilltop at sunrise"
              fill
              sizes="(min-width: 1024px) 660px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-6 text-center lg:ml-10 lg:border-l-2 lg:border-forest/20 lg:pl-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
              <WhatsAppIcon className="size-20 shrink-0 text-[#25d366]" />
              <div>
                <h2 id="quick-heading" className="font-serif text-3xl font-bold tracking-tight text-forest-dark lg:text-[2.4rem]">
                  Prefer a Quick Response?
                </h2>
                <p className="mt-1 text-[17px] text-charcoal lg:text-[19px]">
                  Chat with us directly on WhatsApp for instant assistance and best package options.
                </p>
              </div>
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[60px] w-full max-w-md items-center justify-center gap-3 rounded-full border-2 border-forest bg-sage/50 text-[20px] font-semibold text-forest transition-colors hover:bg-sage"
            >
              <WhatsAppIcon className="size-7" />
              Enquire on WhatsApp
              <ArrowRight aria-hidden="true" className="size-6" />
            </a>
          </div>
        </section>

        <section
          aria-labelledby="location-heading"
          className="flex flex-col items-center gap-6 rounded-[26px] border border-forest/10 bg-gradient-to-r from-sage via-ivory to-sage px-6 py-8 text-center shadow-soft lg:flex-row lg:px-16 lg:text-left"
        >
          <MapPin aria-hidden="true" strokeWidth={1.5} className="size-20 shrink-0 text-forest" />
          <div className="lg:flex-1">
            <h2 id="location-heading" className="font-serif text-4xl font-bold tracking-tight text-forest-dark">
              Our Location
            </h2>
            <p className="mt-1 text-[19px] text-charcoal">Vagamon, Idukki, Kerala – 685503</p>
            <p className="text-[16px] text-charcoal">(Our local destination expert is based in Vagamon)</p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[56px] items-center gap-3 rounded-full border-2 border-forest bg-white px-8 text-[19px] font-semibold text-forest transition-colors hover:bg-sage"
          >
            <MapPin aria-hidden="true" className="size-6" />
            View on Google Maps
            <ArrowRight aria-hidden="true" className="size-5" />
          </a>
        </section>

        <section aria-label="Why contact KeralaMist.in" className="pb-6 pt-12">
          <SectionHeading title="Why Contact KeralaMist.in?" />
          <ul className="mt-8 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <li
                key={w.title}
                className={`flex flex-col items-center px-4 text-center lg:border-forest/20 ${i > 0 ? "lg:border-l" : ""}`}
              >
                <w.icon aria-hidden="true" strokeWidth={1.6} className="size-12 text-forest lg:size-14" />
                <h3 className="mt-2 max-w-[13rem] text-[18px] font-semibold leading-snug text-charcoal lg:text-[21px]">
                  {w.title}
                </h3>
                {w.note ? <p className="mt-1 max-w-[15rem] text-[14.5px] text-charcoal">{w.note}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Hills className="h-24 w-full lg:h-32" />
    </>
  );
}
