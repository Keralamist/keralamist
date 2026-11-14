/** Soft layered hills used as a decorative backdrop. */
export default function Hills({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path d="M0 200 L0 150 L120 110 L220 140 L360 70 L470 120 L560 40 L650 90 L720 60 L800 100 L800 200Z" fill="#00552b" opacity=".06" />
      <path d="M0 200 L0 170 L150 130 L280 160 L420 100 L520 140 L640 80 L740 130 L800 110 L800 200Z" fill="#00552b" opacity=".08" />
      <path d="M0 200 L0 185 L200 160 L340 180 L500 135 L620 170 L720 140 L800 165 L800 200Z" fill="#00552b" opacity=".10" />
    </svg>
  );
}
