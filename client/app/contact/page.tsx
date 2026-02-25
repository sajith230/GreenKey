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
      >
        <p>
          Book a room, reserve a table, or plan your safari. Our team is here to help with any question about your stay at GreenKey.
        </p>
        <p>
          Reach us by phone, email, or the form below. We aim to reply within 24 hours.
        </p>
      </PageHero>
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up-section">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 space-y-4">
              <p className="text-[var(--muted)] leading-relaxed">
                We’re here to help with room reservations, table bookings, safari trips, or any questions about your stay at GreenKey. Send us a message and we’ll get back to you as soon as we can.
              </p>
              <p className="text-[var(--muted)] text-sm">
                You can also call or email us directly using the details below. We look forward to hearing from you.
              </p>
            </div>

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
                <p className="text-sm font-medium text-[var(--accent-gold)]">Phone & Email</p>
                <p className="mt-2 text-[var(--muted)]">
                  <a href="tel:0788362020" className="hover:text-[var(--green-key)] transition-colors">078-8362020</a><br />
                  <a href="tel:0768927245" className="hover:text-[var(--green-key)] transition-colors">076-8927245</a><br />
                  <a href="mailto:greenkey@gmail.com" className="hover:text-[var(--green-key)] transition-colors break-all">greenkey@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
