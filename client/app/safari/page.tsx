import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80";
const SAFARI_1 =
  "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80";
const SAFARI_2 =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80";

const experiences = [
  {
    image: SAFARI_1,
    title: "Morning Game Drive",
    description: "Set out at dawn when wildlife is most active. Our expert guides will take you through the reserve in open vehicles.",
  },
  {
    image: SAFARI_2,
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
      />
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            Experience the thrill of the wild from the comfort of our guided safaris.
            Spot iconic wildlife, learn from knowledgeable guides, and create memories that last a lifetime.
          </p>
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="rounded-2xl overflow-hidden bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
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
          <div className="mt-14 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Safari
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
