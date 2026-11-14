import { MapPinned } from "lucide-react";
import Hills from "./Hills";

/** "Your Local Destination Expert in Vagamon" band, shared by Home and About Us. */
export default function LocalExpert() {
  return (
    <section
      aria-labelledby="expert-heading"
      className="relative isolate overflow-hidden rounded-[26px] bg-gradient-to-br from-forest to-forest-dark px-6 py-9 text-white shadow-card lg:px-14 lg:py-10"
    >
      <Hills className="absolute inset-x-0 bottom-0 -z-10 h-2/3 w-full opacity-60 invert" />
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-12">
        <MapPinned aria-hidden="true" strokeWidth={1.3} className="size-24 shrink-0 text-white lg:size-36" />
        <span aria-hidden="true" className="hidden w-px self-stretch bg-white/40 lg:block" />
        <div>
          <h2 id="expert-heading" className="font-serif text-3xl font-bold tracking-tight lg:text-[2.7rem] lg:leading-tight">
            Your Local Destination Expert in Vagamon
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-32 rounded-full bg-ribbon" />
          <div className="mt-5 space-y-3 text-[17px] leading-relaxed text-white/95 lg:text-[19px]">
            <p>
              At KeralaMist.in, we have a local destination expert in Vagamon who understands the
              hidden gems, best places to stay, scenic spots and local experiences.
            </p>
            <p>
              Not just another tour guide — a local expert who helps you discover Vagamon with the
              right insights and personalised assistance.
            </p>
            <p>
              From choosing the perfect stay to finding the right local experiences, we&rsquo;re
              here to make your Vagamon getaway memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
