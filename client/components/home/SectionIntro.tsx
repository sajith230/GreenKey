type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {eyebrow && (
        <p className="text-[var(--accent-gold)] font-medium tracking-widest uppercase text-sm mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[var(--green-key-dark)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--muted)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
