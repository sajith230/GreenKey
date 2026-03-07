import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/room", label: "Room" },
  { href: "/food", label: "Food" },
  { href: "/safari", label: "Safari" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--green-key-dark)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl font-semibold text-white tracking-tight hover:text-white/90 transition-colors"
              aria-label="GreenKey — Home"
            >
              GreenKey
            </Link>
            <p className="mt-3 text-[var(--cream)]/80 text-sm leading-relaxed max-w-sm">
              Where nature meets luxury. Dine, stay, and explore in the heart of
              serenity.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-[var(--accent-gold)] font-medium text-sm hover:text-[var(--accent-gold-light)] transition-colors"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-4">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--cream)]/85 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--cream)]/90">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--accent-gold)]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <a href="tel:0788362020" className="hover:text-white transition-colors">078-8362020</a>
                  <a href="tel:0768927245" className="hover:text-white transition-colors">076-8927245</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--accent-gold)]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:greenkeypvt@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  greenkeypvt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-[var(--cream)]/70">
          <p>© {new Date().getFullYear()} GreenKey. All rights reserved.</p>
          <p className="text-[var(--cream)]/60">Built with care for nature & hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
