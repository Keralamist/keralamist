import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import type { Property } from "@/lib/properties";
import FeatureIcon from "./FeatureIcon";

export default function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  const href = `/properties/${property.slug}`;
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-forest/[0.07] bg-white shadow-card">
      <div className="relative aspect-[12/7] overflow-hidden rounded-[20px]">
        <Image
          src={property.cover}
          alt={property.coverAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 310px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {property.featured ? (
          <span
            className="absolute left-0 top-0 flex h-[19%] w-[53%] items-center gap-2 bg-ribbon pl-[8%] text-[clamp(15px,1.45vw,19px)] font-semibold text-forest-dark"
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
          >
            <Star aria-hidden="true" className="size-[1.15em] fill-forest-dark" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 xl:px-5">
        <h3
          className={`font-serif font-bold leading-tight tracking-tight text-forest-dark ${
            property.name.length > 18 ? "text-[1.6rem] xl:text-[1.55rem] xl:tracking-tighter 2xl:text-[1.7rem]" : "text-[1.75rem] xl:text-[2rem]"
          }`}
        >
          <Link href={href} className="hover:text-forest">
            {property.name}
          </Link>
        </h3>
        <p className="mt-1.5 flex items-center gap-2 text-[17px] xl:text-[19px] text-charcoal">
          <MapPin aria-hidden="true" strokeWidth={2.5} className="size-5 text-forest" />
          {property.location}
        </p>
        <p className="mt-2 px-1 text-[15.5px] leading-snug xl:text-[16.5px] text-charcoal">{property.description}</p>

        <ul className="mb-4 mt-auto grid grid-cols-[auto_auto_auto_auto] justify-between gap-1 pt-4">
          {property.features.map((f) => (
            <li key={f.label} className="flex flex-col items-center gap-1 text-center">
              <FeatureIcon name={f.icon} className="size-8 text-forest xl:size-9" />
              <span className="text-[12.5px] leading-tight xl:text-[13px] text-charcoal">{f.label}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          aria-label={`View details of ${property.name}`}
          className="btn-green flex h-12 items-center justify-center gap-3 rounded-full text-[18px] xl:h-[54px] xl:text-[21px] font-semibold text-white"
        >
          View Details
          <ArrowRight aria-hidden="true" className="size-5 xl:size-6" />
        </Link>
      </div>
    </article>
  );
}
