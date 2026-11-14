import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, Bed, ChevronRight, House, MapPin, Mountain, Signpost, Sprout } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";
import Gallery from "@/components/Gallery";
import Hills from "@/components/Hills";
import IconStrip from "@/components/IconStrip";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getProperty, properties, propertyImages } from "@/lib/properties";
import { propertyEnquiry } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/properties/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return {};
  const title = `${p.name}, ${p.location}`;
  return {
    title,
    description: `${p.description} Enquire about ${p.name} in ${p.location}, Kerala with KeralaMist.in on WhatsApp.`,
    alternates: { canonical: `/properties/${p.slug}` },
    openGraph: {
      title: `${title} | KeralaMist.in`,
      description: p.description,
      url: `/properties/${p.slug}`,
      images: [{ url: p.cover, alt: p.coverAlt }],
    },
  };
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 font-serif text-[1.7rem] font-bold tracking-tight text-forest-dark lg:text-[2rem]">
        {children}
      </h2>
      <span aria-hidden="true" className="h-0.5 flex-1 bg-forest" />
    </div>
  );
}

export default async function PropertyPage({ params }: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const photos = propertyImages(p);
  const highlights = p.highlights ?? p.features;
  const message = propertyEnquiry(p.name, p.location);
  const related = properties.filter((x) => x.slug !== p.slug).slice(0, 3);
  const place = `${p.location}, Kerala`;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[230px] items-end overflow-hidden lg:min-h-[290px]">
        <Image src="/images/hero/vagamon-sunrise.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[60%_30%]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark/60 via-forest-dark/20 to-transparent" />
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-7 pt-16 sm:px-6 lg:pb-9">
          <div className="lg:pl-14">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[15px] text-white lg:text-[17px]">
                <li className="flex items-center gap-1.5">
                  <House aria-hidden="true" className="size-4" />
                  <Link href="/" className="hover:underline">Home</Link>
                  <ChevronRight aria-hidden="true" className="size-4" />
                </li>
                <li className="flex items-center gap-1.5">
                  <Link href="/properties" className="hover:underline">Properties</Link>
                  <ChevronRight aria-hidden="true" className="size-4" />
                </li>
                <li aria-current="page">{p.name}</li>
              </ol>
            </nav>
            <h1 className="mt-3 font-serif text-[2.6rem] font-bold leading-none tracking-tight text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-[4.2rem]">
              {p.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-[18px] text-white drop-shadow lg:text-[22px]">
              <MapPin aria-hidden="true" className="size-6" />
              {place}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="pt-6">
          <Gallery photos={photos} featured={p.featured} />
        </div>

        <div className="grid gap-10 py-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)] lg:gap-12">
          <div className="space-y-9">
            <section aria-labelledby="highlights">
              <div id="highlights"><Heading>Property Highlights</Heading></div>
              <ul className={`mt-4 grid grid-cols-2 gap-y-5 rounded-2xl border border-forest/10 bg-gradient-to-b from-sage to-ivory px-2 py-5 ${highlights.length === 5 ? "sm:grid-cols-5" : "sm:grid-cols-4"}`}>
                {highlights.map((f, i) => (
                  <li key={f.label} className={`flex flex-col items-center gap-1.5 px-2 text-center sm:border-forest/15 ${i > 0 ? "sm:border-l" : ""}`}>
                    <FeatureIcon name={f.icon} className="size-10 text-forest" />
                    <span className="text-[16px] font-medium leading-snug text-charcoal">{f.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="about-stay">
              <div id="about-stay"><Heading>About This Stay</Heading></div>
              <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-charcoal lg:text-[19px]">
                {(p.overview ?? [p.description]).map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="details">
              <div id="details"><Heading>Property Details</Heading></div>
              <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[{ label: "Location", value: place }, ...(p.details ?? [])].map((d) => (
                  <div key={d.label} className="border-b border-forest/15 pb-3">
                    <dt className="text-[17px] font-semibold text-forest">{d.label}</dt>
                    <dd className="text-[17px] text-charcoal lg:text-[18px]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="packages" className="flex flex-col gap-5 rounded-2xl border border-forest/10 bg-gradient-to-r from-sage to-ivory p-6 sm:flex-row sm:items-center">
              <Mountain aria-hidden="true" strokeWidth={1.5} className="size-16 shrink-0 text-forest" />
              <span aria-hidden="true" className="hidden w-0.5 self-stretch bg-forest/30 sm:block" />
              <div>
                <h2 id="packages" className="font-serif text-2xl font-bold tracking-tight text-forest lg:text-[1.8rem]">
                  Personalised Packages Available
                </h2>
                <p className="mt-1 text-[16px] text-charcoal lg:text-[18px]">
                  We offer customised Vagamon packages including stays, jeep trips, camp fire, local
                  exploring, local guide, food and more.
                </p>
              </div>
            </section>
          </div>

          {/* The only booking-related action on this page */}
          <aside aria-labelledby="enquire-heading" className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative isolate overflow-hidden rounded-[26px] border border-forest/10 bg-gradient-to-b from-sage to-ivory px-6 pb-24 pt-8 text-center shadow-soft">
              <Hills className="absolute inset-x-0 bottom-0 -z-10 h-28 w-full" />
              <WhatsAppIcon className="mx-auto size-20 text-[#25d366]" />
              <h2 id="enquire-heading" className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight text-forest-dark">
                Enquire on WhatsApp
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-[17px] text-charcoal lg:text-[19px]">
                Have a query or need a personalised Vagamon package? Chat with us on WhatsApp for
                quick assistance.
              </p>
              <WhatsAppButton message={message} className="mt-6 w-full">
                Enquire on WhatsApp
              </WhatsAppButton>
            </div>
          </aside>
        </div>

        <section aria-label="Why KeralaMist.in" className="rounded-[26px] bg-ivory px-4 py-8">
          <IconStrip
            label="Why KeralaMist.in"
            items={[
              { icon: Award, title: "Local Destination Expert in Vagamon" },
              { icon: Signpost, title: "Personalised Trip Planning" },
              { icon: Bed, title: "Handpicked Stays" },
              { icon: Sprout, title: "Complete Travel Assistance", note: "(Stay, Jeep Trip, Camp Fire, Local Exploring, Food & more)" },
            ]}
          />
        </section>

        <section aria-label="Related properties" className="py-12">
          <SectionHeading title="More Stays in Vagamon" subtitle="You may also like these handpicked properties." />
          <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}><PropertyCard property={r} /></li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
