import { useTranslations } from 'next-intl';

export function Problem() {
  const t = useTranslations('problem');
  const items = t.raw('items') as string[];

  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          // {t('kicker')}
        </p>
        <ul className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {items.map((line) => (
            <li
              key={line}
              className="flex gap-3 border-l-2 border-[color:var(--color-ink-3)] pl-4 font-mono text-[13px] leading-relaxed text-[color:var(--color-paper)]/80 sm:text-sm"
            >
              <span className="text-accent">›</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-balance text-lg text-[color:var(--color-paper)]/90 sm:text-xl">
          {t('footnote')}
        </p>
      </div>
    </section>
  );
}
