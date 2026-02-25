import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
};

export function PageHero({ title, subtitle, imageUrl, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6, 45, 28, 0.4), rgba(6, 45, 28, 0.75))",
          }}
        />
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
