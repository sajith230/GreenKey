import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.jpeg"
          alt="GreenKey — Restaurant & Hotel"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6, 45, 28, 0.5) 0%, rgba(13, 74, 46, 0.6) 50%, rgba(6, 45, 28, 0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        <p
          className="text-[var(--accent-gold)] font-medium tracking-[0.2em] uppercase text-sm mb-4 opacity-0 animate-fade-up animate-fade-up-delay-1"
          style={{ animationFillMode: "forwards" }}
        >
          Restaurant & Hotel
        </p>
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight opacity-0 animate-fade-up animate-fade-up-delay-2"
          style={{ animationFillMode: "forwards" }}
        >
          GreenKey
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fade-up animate-fade-up-delay-3"
          style={{ animationFillMode: "forwards" }}
        >
          Where nature meets luxury. Dine, stay, and explore in the heart of
          serenity.
        </p>
        <div
          className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/room"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-sm tracking-wide bg-[var(--accent-gold)] text-[var(--green-key-dark)] shadow-lg hover:bg-[var(--accent-gold-light)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 btn-premium"
          >
            Explore Rooms
          </Link>
          <Link
            href="/food"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-sm tracking-wide border-2 border-white text-white hover:bg-white hover:text-[var(--green-key-dark)] hover:-translate-y-0.5 transition-all duration-300 btn-premium"
          >
            Our Menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-80">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
