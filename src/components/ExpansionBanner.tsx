import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hills from "./Hills";

/** Simplified outline of Kerala with a location pin. Decorative. */
function KeralaOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 164" aria-hidden="true" className={className}>
      <path
        d="M9 5 L21 9 L27 21 L37 26 L43 39 L41 46 L52 52 L57 63 L55 70 L66 77 L71 90 L69 98 L79 106 L83 121 L80 136 L74 149 L67 158 L60 152 L62 141 L55 131 L53 118 L45 108 L43 95 L36 86 L33 72 L27 61 L25 48 L18 38 L15 24 L8 15 Z"
        fill="#fff"
        stroke="#063f21"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M62 84c-6.6 0-11 4.9-11 10.6 0 7.4 11 17.4 11 17.4s11-10 11-17.4C73 88.9 68.6 84 62 84Z"
        fill="#5aae1e"
      />
      <circle cx="62" cy="94.5" r="4.2" fill="#fff" />
    </svg>
  );
}

export default function ExpansionBanner() {
  return (
    <section
      aria-labelledby="expansion-heading"
      className="relative isolate overflow-hidden rounded-[26px] border border-forest/10 bg-gradient-to-r from-sage via-ivory to-sage shadow-soft"
    >
      <Hills className="absolute inset-y-0 right-0 -z-10 h-full w-full lg:w-[70%]" />
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center lg:flex-row lg:gap-9 lg:px-16 lg:py-6 lg:text-left">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <KeralaOutline className="h-32 w-auto shrink-0 lg:h-[160px]" />
          <h2
            id="expansion-heading"
            className="font-serif text-4xl font-bold leading-[1.08] tracking-tight whitespace-nowrap text-forest-dark lg:text-[3.1rem]"
          >
            Expanding
            <br />
            Across Kerala
          </h2>
        </div>
        <span aria-hidden="true" className="hidden h-24 w-0.5 shrink-0 bg-forest-dark lg:block" />
        <p className="max-w-[26rem] text-[17px] leading-snug text-charcoal lg:text-[20px]">
          From our established presence in Vagamon to extraordinary destinations across Kerala. Stay
          tuned for our upcoming locations.
        </p>
        <Link
          href="/about-us#expansion"
          className="btn-green inline-flex h-[52px] shrink-0 items-center gap-4 rounded-full px-7 text-[18px] font-semibold text-white lg:ml-auto"
        >
          Our Expansion Plan
          <ArrowRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </section>
  );
}
