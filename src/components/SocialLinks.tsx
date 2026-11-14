import { GENERAL_ENQUIRY, SITE, whatsappUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const icon = "size-5";

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={icon}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={icon}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.500h1.500V4.400c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 3.900v2.300H8v3h2.500V21h3Z" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={icon}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.800C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.200C2 8.8 2 12 2 12s0 3.2.4 4.800a2.5 2.5 0 0 0 1.8 1.800C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.800c.4-1.6.4-4.8.4-4.800s0-3.2-.4-4.800ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

/** Social media links shown in the footer. URLs live in src/lib/site.ts. */
export default function SocialLinks() {
  const links = [
    { label: "Instagram", href: SITE.instagram.url, icon: <Instagram /> },
    { label: "Facebook", href: SITE.facebook, icon: <Facebook /> },
    { label: "YouTube", href: SITE.youtube, icon: <YouTube /> },
    { label: "WhatsApp", href: whatsappUrl(GENERAL_ENQUIRY), icon: <WhatsAppIcon className={icon} /> },
  ];
  return (
    <ul aria-label="Social media" className="flex gap-3">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`KeralaMist.in on ${l.label}`}
            title={l.label}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-lime hover:bg-lime hover:text-forest-dark"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
