import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Opens WhatsApp in a new tab with a pre-filled message. */
export default function WhatsAppButton({
  message,
  children,
  variant = "solid",
  className = "",
}: {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const style =
    variant === "solid"
      ? "btn-green text-white"
      : "border-2 border-forest bg-white/80 text-forest transition-colors hover:bg-sage";
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full px-7 py-2 text-center text-[18px] font-semibold ${style} ${className}`}
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      {children}
      <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
    </a>
  );
}
