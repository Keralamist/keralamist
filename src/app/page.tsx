import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, Bed, Binoculars, Car, Compass, Eye, FlameKindling, Handshake, HeartHandshake,
  Leaf, MapPin, MapPinned, Sprout, Tag, TreePine, Users, Utensils, Waves,
} from "lucide-react";
import ExpansionBanner from "@/components/ExpansionBanner";
import Hills from "@/components/Hills";
import IconStrip from "@/components/IconStrip";
import LocalExpert from "@/components/LocalExpert";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { properties } from "@/lib/properties";
import { GENERAL_ENQUIRY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "KeralaMist.in | Premium Holiday Stays in Vagamon, Kerala" },
  description:
    "Discover handpicked resorts, villas and camps in Vagamon with KeralaMist.in. Personalised travel experiences and trusted local expertise. Enquire on WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { title: "KeralaMist.in | Premium Holiday Stays in Vagamon", url: "/" },
};

const TRIP_MESSAGE =
  "Hello KeralaMist, I'd like help planning a personalised trip to Vagamon. Could you please share package options?";

const WHY = [
  { icon: BadgeCheck, title: "Handpicked and verified stays" },
  { icon: MapPinned, title: "Local destination expertise" },
  { icon: HeartHandshake, title: "Personalised travel assistance" },
  { icon: Eye, title: "Transparent recommendations" },
  { icon: Tag, title: "Exclusive offers and seasonal deals" },
  { icon: Handshake, title: "Strong resort partnerships" },
];

export default function HomePage() {
  const highlighted = properties.filter((p) => p.highlighted);
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fdf3e4] via-ivory to-sage">
        <Hills className="absolute inset-x-0 bottom-0 -z-10 h-40 w-full" />
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 pb-10 pt-14 sm:px-6 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-10 lg:pb-14 lg:pt-16">
          <div className="lg:pl-8">
            <p className="text-[15px] font-semibold uppercase tracking-[0.28em] text-charcoal lg:text-[17px]">
              Kerala Holiday Stays
            </p>
            <h1 className="mt-3 font-serif text-[2.9rem] font-bold leading-[1.02] tracking-tight text-forest-dark sm:text-6xl lg:text-[5rem]">
              Discover Kerala,
              <br />
              Naturally.
            </h1>
            <span aria-hidden="true" className="mt-3 block h-1.5 w-44 rounded-full bg-ribbon" />
            <p className="mt-5 inline-flex items-center gap-3 rounded-full bg-forest px-5 py-2 text-[17px] font-medium text-white lg:text-[21px]">
              <Leaf aria-hidden="true" className="size-6 shrink-0" />
              {SITE.slogan}
            </p>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-charcoal lg:text-[20px]">
              Discover handpicked stays, personalised travel experiences and trusted local expertise
              in Vagamon.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/properties"
                className="btn-green inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full px-8 text-[18px] font-semibold text-white"
              >
                Explore Properties
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <WhatsAppButton message={GENERAL_ENQUIRY} variant="outline">
                Enquire on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-card lg:aspect-[11/10]">
            <Image
              src="/images/hero/home-villa.jpg"
              alt="Illustration of a holiday villa with flowering gardens"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-10 px-4 py-9 sm:px-6 lg:space-y-14">
        <IconStrip
          label="What we offer"
          items={[
            { icon: Bed, title: "Premium Stays" },
            { icon: Sprout, title: "Nature & Tranquillity" },
            { icon: Users, title: "Family & Couple Friendly" },
            { icon: Waves, title: "Curated Experiences" },
            { icon: MapPin, title: "Vagamon, Kerala" },
          ]}
        />

        <LocalExpert />

        <section aria-label="Highlighted properties">
          <SectionHeading
            title="Our Highlighted Properties in Vagamon"
            subtitle="A handpicked collection of our best stays in Vagamon for families, couples and groups."
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {highlighted.map((p) => (
              <li key={p.slug}><PropertyCard property={p} /></li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link href="/properties" className="inline-flex items-center gap-2 text-[18px] font-semibold text-forest underline-offset-4 hover:underline">
              View all properties <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </p>
        </section>

        <section aria-label="Why choose KeralaMist" className="rounded-[26px] bg-ivory px-4 py-10 lg:px-8">
          <SectionHeading title="Why Choose KeralaMist?" />
          <div className="mt-8">
            <IconStrip label="Reasons to choose KeralaMist" items={WHY} />
          </div>
        </section>

        <section aria-labelledby="trip-heading" className="overflow-hidden rounded-[26px] border border-forest/10 shadow-soft">
          <div className="flex flex-col gap-4 bg-gradient-to-r from-forest to-forest-dark px-6 py-7 text-white lg:flex-row lg:items-center lg:gap-10 lg:px-12">
            <h2 id="trip-heading" className="shrink-0 font-serif text-4xl font-bold tracking-tight lg:text-[2.8rem]">
              Your Trip, <span className="text-ribbon">Your Way</span>
            </h2>
            <span aria-hidden="true" className="hidden w-px self-stretch bg-white/40 lg:block" />
            <p className="text-[17px] text-white/95 lg:text-[19px]">
              Build a holiday package around the way you like to travel. Tell us what you have in
              mind and we&rsquo;ll put together a personalised Vagamon plan, which may include:
            </p>
          </div>
          <div className="bg-gradient-to-b from-sage to-ivory px-4 py-8">
            <IconStrip
              label="What a package may include"
              items={[
                { icon: Bed, title: "Accommodation" },
                { icon: Car, title: "Jeep trips" },
                { icon: FlameKindling, title: "Campfires" },
                { icon: Binoculars, title: "Local sightseeing" },
                { icon: Compass, title: "Local guides" },
                { icon: Utensils, title: "Food arrangements" },
                { icon: TreePine, title: "Nature experiences" },
              ]}
            />
            <p className="mt-8 text-center">
              <WhatsAppButton message={TRIP_MESSAGE}>Plan My Trip on WhatsApp</WhatsAppButton>
            </p>
          </div>
        </section>

        <ExpansionBanner />
      </div>
    </>
  );
}
