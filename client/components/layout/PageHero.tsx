import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  children?: ReactNode;
};

export function PageHero({ title, subtitle, imageUrl, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[560px] flex items-center justify-center overflow-hidden pt-16">
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
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight animate-hero-title animate-hero-title-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto opacity-0 animate-fade-up animate-fade-up-delay-2">{subtitle}</p>
        )}
        {children && (
          <div className="mt-6 space-y-3 text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up animate-fade-up-delay-3">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
