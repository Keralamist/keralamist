import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default async function Footer() {
  "use cache";
  return (
    <footer className="bg-forest-dark text-white/85">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-9 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-serif text-2xl font-bold text-white">{SITE.name}</p>
          <p className="mt-1 text-sm">{SITE.slogan}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1400px] px-4 py-4 text-sm text-white/70 sm:px-6 lg:px-10">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
