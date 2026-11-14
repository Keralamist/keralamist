"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Images, Star } from "lucide-react";

import type { Photo } from "@/lib/properties";

function Thumb({ photo, active, onSelect, className }: { photo: Photo; active: boolean; onSelect: () => void; className: string }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show photo: ${photo.alt}`}
      aria-pressed={active}
      className={`relative block w-full overflow-hidden rounded-2xl bg-sage ${className} ${active ? "ring-[3px] ring-forest ring-offset-2" : ""}`}
    >
      <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 20vw, 25vw" className="object-cover transition-transform hover:scale-105" style={{ objectPosition: photo.position }} />
    </button>
  );
}

/** Photo gallery: large image with previous/next controls and clickable thumbnails. */
export default function Gallery({ photos, featured }: { photos: Photo[]; featured?: boolean }) {
  const [index, setIndex] = useState(0);
  const many = photos.length > 1;
  const go = (d: number) => setIndex((i) => (i + d + photos.length) % photos.length);
  const current = photos[index];
  const arrow =
    "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest-dark shadow-md hover:bg-sage";

  return (
    <section aria-label="Photo gallery" className={many ? "grid gap-3 lg:grid-cols-[3fr_2fr]" : ""}>
      <div className={`relative overflow-hidden rounded-[22px] bg-sage ${many ? "aspect-[15/8]" : "aspect-[16/9] lg:aspect-[21/9]"}`}>
        {current.fit === "contain" ? (
          <Image src={current.src} alt="" fill aria-hidden="true" sizes="20vw" className="scale-110 object-cover opacity-70 blur-2xl" />
        ) : null}
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes={many ? "(min-width: 1024px) 60vw, 100vw" : "100vw"}
          className={current.fit === "contain" ? "object-contain" : "object-cover"}
          style={current.fit === "contain" ? undefined : { objectPosition: current.position }}
        />
        {featured && index === 0 ? (
          <span
            className="absolute left-0 top-0 flex h-[15%] min-h-10 w-[46%] max-w-72 items-center gap-2 bg-ribbon pl-5 text-[clamp(14px,1.6vw,20px)] font-semibold text-forest-dark"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <Star aria-hidden="true" className="size-[1.15em] fill-forest-dark" />
            Featured Property
          </span>
        ) : null}
        {many ? (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={`${arrow} left-3`}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className={`${arrow} right-3`}>
              <ChevronRight aria-hidden="true" />
            </button>
            <p aria-live="polite" className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-[15px] font-medium text-white">
              <Images aria-hidden="true" className="size-4" />
              {index + 1} / {photos.length}
            </p>
          </>
        ) : null}
      </div>

      {many ? (
        <ul className="grid grid-cols-4 gap-3 lg:grid-cols-2">
          {photos.slice(1, 5).map((p, i) => (
            <li key={p.src}>
              <Thumb photo={p} active={index === i + 1} onSelect={() => setIndex(i + 1)} className="aspect-[5/4] lg:aspect-auto lg:h-full" />
            </li>
          ))}
        </ul>
      ) : null}

      {photos.length > 5 ? (
        <ul aria-label="More photos" className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:col-span-2 lg:grid-cols-8">
          {photos.slice(5).map((p, i) => (
            <li key={p.src}>
              <Thumb photo={p} active={index === i + 5} onSelect={() => setIndex(i + 5)} className="aspect-[5/4]" />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
