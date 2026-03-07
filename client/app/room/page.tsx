import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80";
const ROOM_1 = "/16.jpeg";
const ROOM_2 = "/17.jpeg";
const ROOM_3 = "/18.jpeg";

const rooms = [
  {
    image: ROOM_1,
    title: "VIP Room",
    description: "Premium accommodation with two rooms. Spacious, comfortable, and fitted with quality amenities for a luxurious stay.",
    price: "LKR 15,000",
  },
  {
    image: ROOM_2,
    title: "Family Room",
    description: "Ideal for families. Plenty of space, comfortable bedding, and everything you need for a relaxing stay together.",
    price: "LKR 12,000",
  },
  {
    image: ROOM_3,
    title: "Triple Room",
    description: "Perfect for small groups or friends. Three beds, clean and cosy, with all the essentials for a great stay.",
    price: "LKR 8,000",
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section">
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
                  <p className="mt-3 text-lg font-semibold text-[var(--green-key)]">
                    {room.price} <span className="text-sm font-normal text-[var(--muted)]">per night</span>
                  </p>
                  <Button
                    href="https://wa.me/94768927245"
                    variant="primary"
                    className="mt-6"
                  >
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
