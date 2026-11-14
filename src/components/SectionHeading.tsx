export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-5 lg:gap-12">
        <span aria-hidden="true" className="hidden h-0.5 w-16 bg-forest sm:block lg:w-24" />
        <h2 className="font-serif text-[2rem] font-bold leading-tight tracking-tight text-forest-dark sm:text-4xl lg:text-[3.1rem]">
          {title}
        </h2>
        <span aria-hidden="true" className="hidden h-0.5 w-16 bg-forest sm:block lg:w-24" />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-[16px] text-forest-dark lg:text-[20px]">{subtitle}</p>
      ) : null}
    </div>
  );
}
