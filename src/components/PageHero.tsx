import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "/images/hero/vagamon-sunrise.jpg",
  imageAlt = "Sunrise over the misty green hills of Vagamon, Kerala",
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[230px] items-end overflow-hidden sm:min-h-[270px] lg:min-h-[320px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark/55 via-forest-dark/15 to-transparent"
      />
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-9 pt-16 sm:px-6 lg:px-10 lg:pb-11">
        <div className="lg:pl-14">
          <h1 className="font-serif text-[2.75rem] font-bold leading-none tracking-tight text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-[4.75rem]">
            {title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-[5px] w-28 rounded-full bg-lime lg:mt-7 lg:w-36" />
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-[17px] text-white drop-shadow-[0_1px_4px_rgb(0_0_0/0.5)] lg:mt-5 lg:text-[22px]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
