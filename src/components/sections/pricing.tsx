import { useTranslations } from 'next-intl';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

type Tier = {
  key: string;
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  ctaKey: 'cta' | 'ctaContact';
  ctaHref: string;
  highlight: boolean;
};

export function Pricing() {
  const t = useTranslations('pricing');
  const tiers = t.raw('tiers') as Tier[];

  return (
    <section id="pricing" className="anchor-offset relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeader
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.key}
              className={`relative flex flex-col rounded-xl border bg-surface p-6 transition ${
                tier.highlight
                  ? 'border-accent shadow-[0_0_0_1px_var(--color-accent)]'
                  : 'border-border hover:border-accent/60'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-sm bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                {tier.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-fg">
                  {tier.price}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {tier.priceNote}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tier.summary}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-fg-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                target={tier.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-accent text-white hover:bg-[color:var(--color-accent-hover)]'
                    : 'border border-border bg-[color:var(--bg)] text-fg hover:border-accent hover:text-accent'
                }`}
              >
                {t(tier.ctaKey)}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface-2 p-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-base font-semibold tracking-tight text-fg">
              {t('footnoteTitle')}
            </h4>
            <p className="mt-1 max-w-2xl text-sm text-muted">{t('footnoteBody')}</p>
          </div>
          <a
            href={t('footnoteHref')}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm text-fg transition hover:border-accent hover:text-accent"
          >
            {t('footnoteCta')} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
