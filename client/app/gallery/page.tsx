import { PageHero } from "@/components/layout/PageHero";
import Image from "next/image";

const HERO_IMAGE = "/11.jpeg";

// Add your gallery image paths here (e.g. "/1.jpeg", "/10.jpeg")
const galleryImages = [
  "/1.jpeg",
  "/10.jpeg",
  "/11.jpeg",
  "/13.jpeg",
  
  "/16.jpeg",
  "/17.jpeg",
  "/18.jpeg",
  "/19.jpeg",
  "/20.jpeg",
  "/21.jpeg",
  "/22.jpeg",
  "/23.jpeg",
  "/24.jpeg",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from GreenKey — nature, comfort, and experiences"
        imageUrl={HERO_IMAGE}
        imageAlt="GreenKey gallery"
      />
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            A glimpse of our property, rooms, restaurant, and the natural beauty
            that surrounds GreenKey.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 group"
              >
                <Image
                  src={src}
                  alt={`GreenKey gallery ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
