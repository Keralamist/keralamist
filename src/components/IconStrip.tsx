import type { LucideIcon } from "lucide-react";

export type StripItem = { icon: LucideIcon; title: string; note?: string };

/** Row of icon + label items separated by thin dividers. */
export default function IconStrip({ items, label }: { items: StripItem[]; label: string }) {
  const cols: Record<number, string> = {
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
  };
  return (
    <ul aria-label={label} className={`grid grid-cols-2 gap-y-7 sm:grid-cols-3 ${cols[items.length] ?? "lg:grid-cols-4"}`}>
      {items.map((it, i) => (
        <li
          key={it.title}
          className={`flex flex-col items-center px-3 text-center lg:border-forest/20 ${i > 0 ? "lg:border-l" : ""}`}
        >
          <it.icon aria-hidden="true" strokeWidth={1.6} className="size-11 text-forest lg:size-12" />
          <h3 className="mt-2 text-[17px] font-semibold leading-snug text-charcoal lg:text-[19px]">{it.title}</h3>
          {it.note ? <p className="mt-1 text-[14px] leading-snug text-charcoal">{it.note}</p> : null}
        </li>
      ))}
    </ul>
  );
}
