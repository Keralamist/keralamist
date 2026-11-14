import type { Metadata } from "next";
import CategoryStrip from "@/components/CategoryStrip";
import ExpansionBanner from "@/components/ExpansionBanner";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Our Properties in Vagamon",
  description:
    "Handpicked resorts, villas, camps and tent stays in Vagamon, Kerala for families, couples and groups. Enquire with KeralaMist.in on WhatsApp.",
  alternates: { canonical: "/properties" },
  openGraph: {
    title: "Our Properties in Vagamon | KeralaMist.in",
    description: "Handpicked stays in Vagamon for families, couples and groups.",
    url: "/properties",
  },
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="Our Properties"
        subtitle="Handpicked stays in Vagamon for families, couples and groups."
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-6">
        <div className="pt-5 lg:pt-6">
          <CategoryStrip />
        </div>

        <section aria-label="Our stays in Vagamon" className="pb-12 pt-10 lg:pb-16 lg:pt-11">
          <SectionHeading
            title="Our Stays in Vagamon"
            subtitle="Explore our curated collection of premium properties in Vagamon."
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
            {properties.map((p, i) => (
              <li key={p.slug}>
                <PropertyCard property={p} priority={i < 4} />
              </li>
            ))}
          </ul>
        </section>

        <div className="pb-12 lg:pb-16">
          <ExpansionBanner />
        </div>
      </div>
    </>
  );
}
