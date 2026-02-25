import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/room", label: "Room" },
  { href: "/food", label: "Food" },
  { href: "/safari", label: "Safari" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--green-key-dark)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="font-serif text-2xl font-semibold text-white">
              GreenKey
            </Link>
            <p className="mt-2 text-sm text-[var(--cream)]/80 max-w-xs">
              Where nature meets luxury. Dine, stay, and explore.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--cream)]/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-sm text-[var(--cream)]/70">
          © {new Date().getFullYear()} GreenKey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
