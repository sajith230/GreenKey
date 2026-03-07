import { Hero } from "@/components/home/Hero";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const ROOM_IMAGE =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80";
const SAFARI_IMAGE =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Paddy field — hotel located near the paddy fields (same design as Finest Garden) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section">
          <SectionIntro
            eyebrow="Our Location"
            title="Nestled by the Paddy Fields"
            description="GreenKey sits beside serene paddy fields. Wake to golden views and the calm of the countryside."
          />
          <div className="mt-6 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
            <div className="relative aspect-[21/9] min-h-[280px]">
              <Image
                src="/13.jpeg"
                alt="GreenKey is located near beautiful paddy fields"
                fill
                unoptimized
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best garden — 4.jpeg */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section animate-fade-up-section-delay-2">
          <SectionIntro
            eyebrow="Our Garden"
            title="The Finest Garden"
            description="GreenKey is home to a stunning garden — a peaceful retreat where you can relax and reconnect with nature."
          />
          <div className="mt-6 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
            <div className="relative aspect-[21/9] min-h-[280px]">
              <Image
                src="/11.jpeg"
                alt="GreenKey hotel garden — our best garden"
                fill
                unoptimized
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section animate-fade-up-section-delay-3">
          <SectionIntro
            eyebrow="Welcome"
            title="Experience GreenKey"
            description="A sanctuary where exceptional cuisine, comfortable stays, and unforgettable safari adventures come together."
          />
          <div className="mt-6 grid gap-10 md:grid-cols-3">
            <Card
              href="/room"
              image={ROOM_IMAGE}
              title="Rooms & Suites"
              description="Elegant accommodation surrounded by nature. Wake up to the sound of birds and the scent of greenery."
            />
            <Card
              href="/food"
              image={FOOD_IMAGE}
              title="Restaurant"
              description="Farm-to-table dining with seasonal ingredients. A culinary journey that celebrates local flavors."
            />
            <Card
              href="/safari"
              image={SAFARI_IMAGE}
              title="Safari"
              description="Explore the wild with guided safaris. Get close to wildlife and create memories that last a lifetime."
            />
          </div>
          <div className="mt-6 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section animate-fade-up-section-delay-4">
          <SectionIntro
            eyebrow="Why GreenKey"
            title="Where Every Moment Matters"
            description="We blend comfort, cuisine, and adventure into one seamless experience."
          />
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="🌿"
              title="Nature First"
              text="Nestled in lush surroundings, every view brings you closer to nature."
            />
            <FeatureCard
              icon="✨"
              title="Luxury Comfort"
              text="Premium amenities and thoughtful design in every room and table."
            />
            <FeatureCard
              icon="🍽️"
              title="Fresh Cuisine"
              text="Locally sourced ingredients and expert chefs create unforgettable meals."
            />
            <FeatureCard
              icon="🦁"
              title="Safari Adventures"
              text="Guided experiences that bring you face-to-face with incredible wildlife."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  href,
  image,
  title,
  description,
}: {
  href: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-strong)] hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-key-dark)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-[var(--green-key)] group-hover:text-[var(--green-key-light)] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-gold)]">
          Discover more
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)]/50 p-6 text-center transition-all duration-300 hover:border-[var(--green-key)]/20 hover:shadow-[var(--shadow-soft)]">
      <span className="text-4xl" aria-hidden>{icon}</span>
      <h3 className="mt-4 font-serif text-lg font-semibold text-[var(--green-key-dark)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
    </div>
  );
}
