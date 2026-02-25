import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We’d love to hear from you"
        imageUrl={HERO_IMAGE}
        imageAlt="GreenKey contact"
      />
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-[var(--border)] p-8 sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-[var(--green-key-dark)]">
                Get in Touch
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                For reservations, safari bookings, or any enquiries, reach out below.
              </p>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--green-key-dark)]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--green-key-dark)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--green-key-dark)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white border border-[var(--border)] p-6">
                <p className="text-sm font-medium text-[var(--accent-gold)]">Address</p>
                <p className="mt-2 text-[var(--muted)]">
                  GreenKey Resort & Restaurant<br />
                  Nature Road 1<br />
                  Serenity Valley
                </p>
              </div>
              <div className="rounded-xl bg-white border border-[var(--border)] p-6">
                <p className="text-sm font-medium text-[var(--accent-gold)]">Contact</p>
                <p className="mt-2 text-[var(--muted)]">
                  +1 (555) 123-4567<br />
                  hello@greenkey.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
