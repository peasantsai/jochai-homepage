import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/ui/brand-mark';

type Column = { label: string; links: { label: string; href: string }[] };
type Columns = { product: Column; resources: Column; community: Column };

export function Footer() {
  const t = useTranslations('footer');
  const cols = t.raw('columns') as Columns;
  const year = new Date().getFullYear();

  const renderColumn = (col: Column) => (
    <div key={col.label}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {col.label}
      </p>
      <ul className="mt-4 space-y-2">
        {col.links.map((l) => {
          const isExternal = l.href.startsWith('http');
          if (isExternal) {
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-fg-soft transition hover:text-accent"
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
                className="text-sm text-fg-soft transition hover:text-accent"
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
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2 text-fg">
              <BrandMark size={28} />
              <span className="text-lg font-semibold tracking-tight">Joch</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">{t('tagline')}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {renderColumn(cols.product)}
            {renderColumn(cols.resources)}
            {renderColumn(cols.community)}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {t('license')}
          </p>
          <p className="text-xs text-muted">{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
