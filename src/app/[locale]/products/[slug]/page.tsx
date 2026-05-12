import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Terminal } from '@/components/ui/terminal';
import { GithubIcon } from '@/components/ui/icons';
import { PRODUCT_ICONS, type ProductSlug } from '@/components/ui/product-icons';
import { PageCta } from '@/components/sections/page-cta';
import { routing } from '@/i18n/routing';

const SLUGS = ['console', 'registry', 'operator', 'cloud', 'enterprise', 'marketplace'] as const;
type Slug = (typeof SLUGS)[number];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!SLUGS.includes(slug as Slug)) return {};
  const t = await getTranslations({ locale, namespace: 'productPages' });
  const name = t(`items.${slug}.name`);
  const tagline = t(`items.${slug}.tagline`);
  return {
    title: `${name} — ${tagline}`,
    description: t(`items.${slug}.summary`),
  };
}

type Feature = { name: string; summary: string };
type Cli = { prompt: string; out: string };

function ProductBody({ slug }: { slug: Slug }) {
  const t = useTranslations('productPages');
  const item = `items.${slug}`;
  const name = t(`${item}.name`);
  const tag = t(`${item}.tag`);
  const tagline = t(`${item}.tagline`);
  const summary = t(`${item}.summary`);
  const Icon = PRODUCT_ICONS[slug];
  const features = t.raw(`${item}.features`) as Feature[];
  const includes = t.raw(`${item}.includes`) as string[];
  const cli = t.raw(`${item}.cli`) as Cli[];
  const isOss = tag.toLowerCase().includes('open');

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-50" />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition hover:text-accent"
          >
            <ArrowLeft className="h-3 w-3" /> {t('shared.back')}
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                    isOss ? 'border-accent/40 text-accent' : 'border-border text-muted'
                  }`}
                >
                  {tag}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {name}
                </span>
              </div>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
                {tagline}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/agenticfleet/cruxcontrol"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
                >
                  {t('shared.ctaPrimary')} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/agenticfleet/cruxcontrol"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" /> {t('shared.ctaSecondary')}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-xl bg-gradient-to-tr from-transparent via-transparent to-accent/20 blur-2xl" />
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface-2 sm:aspect-[5/4]">
                <div className="grid-bg absolute inset-0 opacity-30" />
                <div className="absolute inset-0 grid place-items-center p-16">
                  <Icon className="h-full w-full max-h-72 max-w-72" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-surface-2 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {'// '}
            {t('shared.featuresLabel')}
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {features.map((f, i) => (
              <div key={f.name} className="flex flex-col gap-3 bg-surface p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {f.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{f.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes + CLI */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {'// '}
              {t('shared.includesLabel')}
            </p>
            <ul className="mt-8 space-y-3">
              {includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-fg-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {'// '}
              {t('shared.cliLabel')}
            </p>
            <div className="mt-8">
              <Terminal title={`crux - ${name.toLowerCase()}`} lines={cli} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!SLUGS.includes(slug as Slug)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <ProductBody slug={slug as Slug} />
        <PageCta />
      </main>
      <Footer />
    </>
  );
}
