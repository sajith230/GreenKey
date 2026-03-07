import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80";

const experiences = [
  {
    image: "/5.jpg",
    title: "Morning Game Drive",
    description: "Set out at dawn when wildlife is most active. Our expert guides will take you through the reserve in open vehicles.",
  },
  {
    image: "/15.jpg",
    title: "Sunset Safari",
    description: "End the day with a golden-hour safari. Watch the landscape transform as the sun sets over the plains.",
  },
];

export default function SafariPage() {
  return (
    <>
      <PageHero
        title="Safari"
        subtitle="Adventure into the wild with guided safaris"
        imageUrl={HERO_IMAGE}
        imageAlt="GreenKey safari experience"
      >
        <p>
          Join our expert guides in open vehicles at dawn or dusk. Spot wildlife, learn about the land, and take home memories that last a lifetime.
        </p>
        <p>
          Morning and sunset drives are included in your stay. Binoculars and refreshments provided. Dress in neutral colours and bring your camera.
        </p>
      </PageHero>
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            Experience the thrill of the wild from the comfort of our guided safaris.
            Spot iconic wildlife, learn from knowledgeable guides, and create memories that last a lifetime.
          </p>

          <div className="mt-12 max-w-3xl mx-auto text-center space-y-4 text-[var(--muted)] leading-relaxed animate-card-in animate-card-in-delay-1">
            <p>
              At GreenKey, our safari experiences are designed to bring you closer to nature without compromising on comfort or safety. Whether you join us at first light for a morning game drive or set out in the golden hour for a sunset safari, our trained guides share their knowledge of the land, its wildlife, and the stories that make each journey unique.
            </p>
            <p>
              We use open vehicles for the best views and photo opportunities. Binoculars and refreshments are provided. Dress in neutral colours and bring your camera — you never know what you might see around the next bend.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`rounded-2xl overflow-hidden bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 group animate-card-in ${
                  i === 0 ? "animate-card-in-delay-2" : "animate-card-in-delay-3"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-[var(--green-key-dark)]">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)]">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center animate-card-in animate-card-in-delay-4">
            <Button href="https://wa.me/94768927245" variant="primary" size="lg">
              Book a Safari
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
