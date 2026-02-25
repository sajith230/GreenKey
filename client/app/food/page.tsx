import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80";
const DISH_1 =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80";
const DISH_2 =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80";
const DISH_3 =
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80";

const highlights = [
  {
    image: DISH_1,
    title: "Fresh Salads & Starters",
    description: "Garden-fresh greens and seasonal produce. Light, vibrant, and full of flavor.",
  },
  {
    image: DISH_2,
    title: "Main Courses",
    description: "Grilled meats, sustainable seafood, and plant-based options. Every dish tells a story.",
  },
  {
    image: DISH_3,
    title: "Desserts & Beverages",
    description: "House-made sweets and a curated selection of wines and signature cocktails.",
  },
];

export default function FoodPage() {
  return (
    <>
      <PageHero
        title="Food & Dining"
        subtitle="Farm-to-table cuisine in an unforgettable setting"
        imageUrl={HERO_IMAGE}
        imageAlt="GreenKey restaurant dining"
      />
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            Our kitchen celebrates local ingredients and time-honored techniques.
            From breakfast by the garden to candlelit dinners, every meal is an experience.
          </p>
          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl overflow-hidden bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[var(--green-key-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/contact" variant="secondary" size="lg">
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
