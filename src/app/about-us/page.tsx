import type { Metadata } from "next";
import Image from "next/image";
import { Award, Bed, CalendarCheck, Flag, Handshake, MapPinned, Network, Smile, Sprout, Tag, Target } from "lucide-react";
import ExpansionBanner from "@/components/ExpansionBanner";
import IconStrip from "@/components/IconStrip";
import LocalExpert from "@/components/LocalExpert";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KeralaMist.in connects travellers and resort owners in Vagamon, Kerala. We verify, select and recommend carefully chosen stays. Where every stay begins with trust.",
  alternates: { canonical: "/about-us" },
  openGraph: { title: "About KeralaMist.in", url: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Where Every Stay Begins with Trust" />

      <section className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-12">
        <div className="lg:pl-10">
          <h2 className="font-serif font-bold tracking-tight text-forest-dark">
            <span className="block text-3xl lg:text-[2.6rem]">Welcome to</span>
            <span className="block text-[2.6rem] leading-tight lg:text-[3.6rem]">KeralaMist.in</span>
          </h2>
          <p className="mt-1 font-serif text-2xl italic text-forest lg:text-[2rem]">Where Every Stay Begins with Trust</p>
          <p className="mt-6 border-l-4 border-lime pl-5 text-[19px] font-semibold leading-snug text-charcoal lg:text-[21px]">
            Looking for the perfect hill station escape in Kerala? That&rsquo;s where KeralaMist
            comes in.
          </p>
          <p className="mt-4 pl-6 text-[17px] leading-relaxed text-charcoal lg:text-[19px]">
            We are a dedicated platform connecting travellers and resort owners, ensuring you get
            the best stays, best deals and a hassle-free experience.
          </p>
        </div>
        <div className="relative aspect-[8/5] overflow-hidden rounded-[24px] shadow-card">
          <Image
            src="/images/hero/about-camping.jpg"
            alt="Camping tents under tall trees on a Vagamon hillside"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <div className="bg-sage/60 py-10 lg:py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <LocalExpert />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            { icon: Award, title: "What Makes Us Different?", text: "We don’t just list resorts — we verify, select and recommend carefully chosen stays." },
            { icon: Target, title: "Our Purpose", text: "To make every traveller experience peace, comfort and the beauty of Kerala’s misty destinations without confusion or compromise." },
          ].map((c) => (
            <section key={c.title} className="flex gap-6 rounded-[22px] border border-forest/10 bg-ivory p-7 shadow-soft">
              <c.icon aria-hidden="true" strokeWidth={1.5} className="size-16 shrink-0 text-forest" />
              <div>
                <h2 className="font-serif text-[1.8rem] font-bold tracking-tight text-forest">{c.title}</h2>
                <p className="mt-2 text-[17px] leading-relaxed text-charcoal lg:text-[19px]">{c.text}</p>
              </div>
            </section>
          ))}
        </div>

        {[
          {
            title: "Our Services",
            items: [
              { icon: Bed, title: "Handpicked resorts and camps" },
              { icon: CalendarCheck, title: "Direct booking assistance" },
              { icon: Tag, title: "Exclusive offers and seasonal deals" },
              { icon: MapPinned, title: "Personalised stay recommendations" },
            ],
          },
          {
            title: "Our Core Values",
            items: [
              { icon: Handshake, title: "Transparency" },
              { icon: Bed, title: "Quality Stays" },
              { icon: Smile, title: "Customer Happiness" },
              { icon: Network, title: "Strong Partnerships" },
              { icon: Sprout, title: "Nature-Friendly Tourism" },
            ],
          },
        ].map((s) => (
          <section key={s.title} className="flex flex-col gap-6 pt-4 lg:flex-row lg:items-center lg:gap-10">
            <div className="shrink-0 lg:w-56">
              <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-forest-dark">{s.title}</h2>
              <span aria-hidden="true" className="mt-2 block h-1 w-20 rounded-full bg-lime" />
            </div>
            <div className="flex-1 rounded-[22px] border border-forest/10 bg-ivory px-3 py-7">
              <IconStrip label={s.title} items={s.items} />
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] space-y-10 px-4 pb-12 sm:px-6">
        <section className="flex flex-col gap-6 rounded-[26px] bg-gradient-to-r from-forest to-forest-dark px-7 py-9 text-white shadow-card lg:flex-row lg:items-center lg:gap-10 lg:px-14">
          <Flag aria-hidden="true" strokeWidth={1.4} className="size-20 shrink-0" />
          <span aria-hidden="true" className="hidden w-px self-stretch bg-white/40 lg:block" />
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight lg:text-[2.5rem]">Why Choose KeralaMist?</h2>
            <p className="mt-2 text-[18px] text-white/95 lg:text-[21px]">
              Because we bring you trusted stays, better prices and real experiences — not just bookings.
            </p>
          </div>
        </section>
        <div id="expansion" className="scroll-mt-32">
          <ExpansionBanner />
        </div>
      </div>
    </>
  );
}
