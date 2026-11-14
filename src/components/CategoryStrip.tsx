import FeatureIcon, { type IconName } from "./FeatureIcon";

const CATEGORIES: { label: string; icon: IconName }[] = [
  { label: "Resorts & Villas", icon: "bed" },
  { label: "Camps & Experiences", icon: "tent" },
  { label: "Family Friendly", icon: "group" },
  { label: "Couple Friendly", icon: "heart" },
  { label: "Hill View", icon: "mountain" },
  { label: "Nature Stay", icon: "sprout" },
];

export default function CategoryStrip() {
  return (
    <ul
      aria-label="Property categories"
      className="grid grid-cols-2 gap-y-5 rounded-[22px] border border-forest/10 bg-gradient-to-b from-sage to-ivory px-2 py-5 shadow-soft sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0 lg:py-5"
    >
      {CATEGORIES.map((c, i) => (
        <li
          key={c.label}
          className={`flex flex-col items-center gap-1.5 px-2 text-center lg:border-forest/15 ${
            i > 0 ? "lg:border-l" : ""
          }`}
        >
          <FeatureIcon name={c.icon} className="size-9 text-forest lg:size-12" />
          <span className="text-[15px] font-medium text-charcoal lg:text-[17px] xl:whitespace-nowrap xl:text-[19px]">{c.label}</span>
        </li>
      ))}
    </ul>
  );
}
