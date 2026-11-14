"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { GENERAL_ENQUIRY, NAV, SITE, whatsappUrl } from "@/lib/site";
import { properties } from "@/lib/properties";
import WhatsAppIcon from "./WhatsAppIcon";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  // Close menus whenever a link inside the header is followed.
  const closeOnLink = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) {
      setMenuOpen(false);
      setDropOpen(false);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: globalThis.MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const enquireHref = whatsappUrl(GENERAL_ENQUIRY);

  return (
    <header onClick={closeOnLink} className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgb(6_63_33/0.08),0_4px_14px_-8px_rgb(6_63_33/0.25)]">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[88px] lg:px-10">
        {/* Circular logo hangs below the bar, as in the approved design */}
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="relative z-10 block h-[68px] w-[92px] shrink-0 lg:h-[88px] lg:w-[150px]"
        >
          <Image
            src="/images/logo/keralamist-logo.png"
            alt={`${SITE.name} logo: ${SITE.slogan}`}
            width={512}
            height={512}
            priority
            sizes="(min-width: 1024px) 146px, 92px"
            className="absolute left-0 top-1.5 size-[92px] max-w-none rounded-full bg-white shadow-md ring-[3px] ring-white lg:top-2 lg:size-[146px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[17px] font-medium xl:gap-14 xl:text-[20px]">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              const linkClass = `relative inline-flex items-center gap-1.5 py-2 transition-colors hover:text-forest ${
                active ? "font-semibold text-forest" : "text-charcoal"
              }`;
              const underline = active ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-[#4caa1f]"
                />
              ) : null;

              if (item.href !== "/properties") {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={linkClass}
                    >
                      {item.label}
                      {underline}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.href}
                  ref={dropRef}
                  className="relative"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <span className={linkClass}>
                    <Link href={item.href} aria-current={active ? "page" : undefined}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show all properties"
                      aria-expanded={dropOpen}
                      aria-controls="properties-menu"
                      onClick={() => setDropOpen((v) => !v)}
                      className="-m-1 rounded p-1"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        strokeWidth={2.5}
                        className={`size-[18px] transition-transform ${dropOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {underline}
                  </span>
                  <div
                    id="properties-menu"
                    className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 ${
                      dropOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul className="overflow-hidden rounded-2xl border border-forest/10 bg-white p-2 text-[15px] font-medium shadow-card">
                      {properties.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/properties/${p.slug}`}
                            className="block rounded-xl px-4 py-2.5 text-charcoal hover:bg-sage hover:text-forest"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-1 border-t border-forest/10 pt-1">
                        <Link
                          href="/properties"
                          className="block rounded-xl px-4 py-2.5 font-semibold text-forest hover:bg-sage"
                        >
                          View all properties
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={enquireHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex h-11 items-center gap-2 rounded-full px-4 text-[15px] font-semibold text-white sm:px-5 lg:h-[56px] lg:px-7 lg:text-[20px]"
          >
            <WhatsAppIcon className="size-5 lg:size-6" />
            Enquire Now
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-forest/15 text-forest lg:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${menuOpen ? "block" : "hidden"} max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-forest/10 bg-white lg:hidden`}
      >
        <ul className="mx-auto max-w-[1320px] px-4 pb-5 pt-12 text-[17px] font-medium sm:px-6">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            const cls = `block flex-1 py-3.5 ${active ? "font-semibold text-forest" : "text-charcoal"}`;
            if (item.href !== "/properties") {
              return (
                <li key={item.href} className="border-b border-forest/10">
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={cls}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.href} className="border-b border-forest/10">
                <div className="flex items-center">
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={cls}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label="Show all properties"
                    aria-expanded={mobileDropOpen}
                    aria-controls="mobile-properties"
                    onClick={() => setMobileDropOpen((v) => !v)}
                    className="inline-flex size-11 items-center justify-center rounded-full text-forest"
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`transition-transform ${mobileDropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                <ul
                  id="mobile-properties"
                  className={`${mobileDropOpen ? "block" : "hidden"} mb-3 rounded-2xl bg-sage/70 p-2 text-[16px]`}
                >
                  {properties.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/properties/${p.slug}`}
                        className="block rounded-xl px-4 py-3 text-charcoal active:bg-white"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
