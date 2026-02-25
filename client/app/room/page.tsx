import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80";
const ROOM_1 =
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80";
const ROOM_2 =
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80";
const ROOM_3 =
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80";

const rooms = [
  {
    image: ROOM_1,
    title: "Garden View Suite",
    description: "Spacious suite with private balcony overlooking the gardens. King bed, marble bathroom, and premium amenities.",
  },
  {
    image: ROOM_2,
    title: "Forest Retreat",
    description: "Wake up to the sounds of nature. Floor-to-ceiling windows, wooden accents, and a serene atmosphere.",
  },
  {
    image: ROOM_3,
    title: "Luxury Villa",
    description: "Private villa with pool access, living area, and dedicated butler service. The ultimate GreenKey experience.",
  },
];

export default function RoomPage() {
  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="Elegant accommodation where comfort meets nature"
        imageUrl={HERO_IMAGE}
        imageAlt="GreenKey hotel rooms"
      />
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--muted)] max-w-2xl mx-auto">
            Each room is designed to blend seamlessly with the surrounding landscape.
            Premium linens, organic toiletries, and thoughtful touches await.
          </p>
          <div className="mt-14 space-y-20">
            {rooms.map((room, i) => (
              <div
                key={room.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--green-key-dark)]">
                    {room.title}
                  </h2>
                  <p className="mt-4 text-[var(--muted)] leading-relaxed">
                    {room.description}
                  </p>
                  <Button href="/contact" variant="primary" className="mt-6">
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
