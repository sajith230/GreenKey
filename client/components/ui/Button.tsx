import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary: `
    bg-[var(--green-key)] text-white
    shadow-[var(--shadow-soft)]
    hover:bg-[var(--green-key-light)] hover:shadow-[var(--shadow-strong)]
    hover:-translate-y-0.5
  `,
  secondary: `
    bg-[var(--accent-gold)] text-[var(--green-key-dark)]
    shadow-[var(--shadow-soft)]
    hover:bg-[var(--accent-gold-light)] hover:shadow-[var(--shadow-strong)]
    hover:-translate-y-0.5
  `,
  outline: `
    border-2 border-[var(--green-key)] text-[var(--green-key)]
    hover:bg-[var(--green-key)] hover:text-white
    hover:-translate-y-0.5
  `,
  ghost: `
    text-[var(--green-key)] bg-transparent
    hover:bg-[var(--green-key)]/10
  `,
};

const baseStyles = `
  inline-flex items-center justify-center gap-2
  px-6 py-3.5 rounded-xl
  font-medium text-sm tracking-wide
  btn-premium
  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-key)] focus-visible:ring-offset-2
  disabled:opacity-60 disabled:pointer-events-none
`;

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
};

const sizeStyles = {
  sm: "text-xs px-4 py-2.5 rounded-lg",
  md: "text-sm px-6 py-3.5 rounded-xl",
  lg: "text-base px-8 py-4 rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "md",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
