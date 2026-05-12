'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight, Cloud, ShieldCheck, Box, ShoppingCart, AppWindow, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/motion-primitives';
import type { ProductSlug } from '@/components/ui/product-icons';

const ICONS: Record<ProductSlug, LucideIcon> = {
  cloud: Cloud,
  enterprise: ShieldCheck,
  registry: Box,
  marketplace: ShoppingCart,
  console: AppWindow,
  operator: GitBranch,
};

const COLORS: Record<ProductSlug, { fg: string; bg: string }> = {
  cloud: { fg: '#6EA8FE', bg: 'rgba(110,168,254,0.10)' },
  enterprise: { fg: '#10B981', bg: 'rgba(16,185,129,0.10)' },
  registry: { fg: '#8B5CF6', bg: 'rgba(139,92,246,0.10)' },
  marketplace: { fg: '#F59E0B', bg: 'rgba(245,158,11,0.10)' },
  console: { fg: '#2563EB', bg: 'rgba(37,99,235,0.10)' },
  operator: { fg: '#EC4899', bg: 'rgba(236,72,153,0.10)' },
};

const ORDER: ProductSlug[] = ['cloud', 'enterprise', 'registry', 'marketplace', 'console', 'operator'];

type Product = { key: ProductSlug; name: string; summary: string; tag: string };

const ECO_TAGS: Record<ProductSlug, string> = {
  cloud: 'hosted',
  enterprise: 'on-prem',
  registry: 'oci',
  marketplace: 'community',
  console: 'operator ui',
  operator: 'k8s',
};

export function Products() {
  const t = useTranslations('products');
  const raw = t.raw('items') as Product[];
  const byKey = new Map(raw.map((p) => [p.key, p]));
  const items = ORDER.map((k) => byKey.get(k)).filter((x): x is Product => Boolean(x));

  return (
    <section id="products" className="anchor-offset border-t border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => {
            const Icon = ICONS[p.key];
            const c = COLORS[p.key];
            return (
              <Reveal key={p.key} delay={i * 0.04} className="h-full">
                <Link
                  href={`/products/${p.key}`}
                  className="group relative flex h-full items-start gap-4 rounded-lg border border-border bg-surface p-5 transition hover:border-accent"
                >
                  <span
                    className="grid h-10 w-10 flex-none place-items-center rounded-lg border"
                    style={{ background: c.bg, borderColor: c.fg, color: c.fg }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-semibold tracking-tight text-fg">{p.name}</h3>
                      <span
                        className="rounded-sm px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]"
                        style={{ color: c.fg, background: c.bg }}
                      >
                        {ECO_TAGS[p.key]}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.summary}</p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 flex-none text-muted opacity-0 transition group-hover:opacity-100" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
