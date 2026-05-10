export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'left',
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        // {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
