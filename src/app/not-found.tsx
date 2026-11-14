import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 text-center">
      <h1 className="font-serif text-5xl font-bold text-forest-dark">Page not found</h1>
      <p className="mt-4 text-[18px] text-charcoal">The page you are looking for does not exist or has moved.</p>
      <Link href="/properties" className="btn-green mt-8 inline-flex h-[52px] items-center rounded-full px-8 text-[18px] font-semibold text-white">
        Explore Properties
      </Link>
    </div>
  );
}
