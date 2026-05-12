import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/ui/brand-mark';

type Column = { label: string; links: { label: string; href: string }[] };
type Columns = {
  product: Column;
  developers: Column;
  resources: Column;
  company: Column;
};

export function Footer() {
  const t = useTranslations('footer');
  const cols = t.raw('columns') as Columns;
  const badges = t.raw('badges') as string[];
  const year = new Date().getFullYear();

  const renderColumn = (col: Column) => (
    <div key={col.label}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {col.label}
      </p>
      <ul className="mt-3.5 space-y-2.5">
        {col.links.map((l) => {
          const isExternal = l.href.startsWith('http') || l.href.startsWith('mailto:');
          if (isExternal) {
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-[13px] text-fg-soft transition hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            );
          }
          return (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-[13px] text-fg-soft transition hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-fg">
              <BrandMark size={28} />
              <span className="text-lg font-semibold tracking-tight">Crux</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              {t('tagline')}
            </p>
          </div>
          {renderColumn(cols.product)}
          {renderColumn(cols.developers)}
          {renderColumn(cols.resources)}
          {renderColumn(cols.company)}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center">
          <p>{t('copyright', { year })}</p>
          <p className="inline-flex flex-wrap gap-x-4 gap-y-1">
            {badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
