'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/section-header';
import { PRODUCT_ICONS, type ProductSlug } from '@/components/ui/product-icons';
import { Reveal, TiltCard } from '@/components/ui/motion-primitives';

type Product = {
  key: ProductSlug;
  name: string;
  summary: string;
  tag: string;
  image: string;
};

export function Products() {
  const t = useTranslations('products');
  const items = t.raw('items') as Product[];

  return (
    <section
      id="products"
      className="anchor-offset relative bg-surface-2 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeader
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => {
            const Icon = PRODUCT_ICONS[p.key];
            return (
            <Reveal key={p.key} delay={idx * 0.05} className="h-full">
            <TiltCard className="h-full" max={3}>
            <Link
              href={`/products/${p.key}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border-soft bg-[color:var(--bg)]">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 grid place-items-center p-10 transition duration-500 group-hover:scale-[1.04]">
                  <Icon className="h-32 w-32" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {p.name}
                  </h3>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      p.tag.toLowerCase().includes('open')
                        ? 'border-accent/40 text-accent'
                        : 'border-border text-muted'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-fg-soft transition group-hover:text-accent">
                  Explore{' '}
                  <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            </TiltCard>
            </Reveal>
          );})}
        </div>
      </div>
    </section>
  );
}
