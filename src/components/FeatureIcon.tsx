import {
  Bed,
  Binoculars,
  Coffee,
  FlameKindling,
  Heart,
  House,
  Infinity as InfinityIcon,
  Mountain,
  Sprout,
  Tent,
  TreePine,
  Trees,
  Users,
  Utensils,
  Waves,
  Flower2,
  type LucideIcon,
} from "lucide-react";

const ICONS = {
  bed: Bed,
  pool: Waves,
  mountain: Mountain,
  dining: Utensils,
  tent: Tent,
  campfire: FlameKindling,
  group: Users,
  sprout: Sprout,
  binoculars: Binoculars,
  forest: Trees,
  cafe: Coffee,
  garden: Flower2,
  heart: Heart,
  infinity: InfinityIcon,
  pines: TreePine,
  home: House,
} satisfies Record<string, LucideIcon>;

// Hand-drawn to match the approved design: twin peaks and a group of three.
const CUSTOM = {
  mountain: (
    <>
      <path d="M1.5 19.5 8.5 7l3.6 5.6 2.6-3.9 7.8 10.800Z" />
      <path d="m6.4 10.8 2.2 1.7 2-2.4" />
    </>
  ),
  group: (
    <>
      <circle cx="12" cy="5.8" r="2.5" />
      <circle cx="5" cy="8.3" r="2" />
      <circle cx="19" cy="8.3" r="2" />
      <path d="M7.5 19.500v-2.300a4.5 4.5 0 0 1 9 0v2.3" />
      <path d="M1.5 19v-1.700a3.5 3.5 0 0 1 5.2-3" />
      <path d="M22.5 19v-1.700a3.5 3.5 0 0 0-5.2-3" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICONS;

export default function FeatureIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  if (name in CUSTOM) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        {CUSTOM[name as keyof typeof CUSTOM]}
      </svg>
    );
  }
  const Icon = ICONS[name];
  return <Icon aria-hidden="true" strokeWidth={1.75} className={className} />;
}
