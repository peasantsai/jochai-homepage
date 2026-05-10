import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Pricing } from '@/components/sections/pricing';
import { SectionHeader } from '@/components/ui/section-header';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricingPage.hero' });
  return { title: `${t('title')} — Joch`, description: t('subtitle') };
}

type Principle = { name: string; summary: string };
type AddOn = { name: string; summary: string; price: string };
type Faq = { q: string; a: string };

function PricingPageBody() {
  const t = useTranslations('pricingPage');
  const principles = t.raw('principles.items') as Principle[];
  const addOns = t.raw('addOns') as AddOn[];
  const faq = t.raw('faq') as Faq[];

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
        <div className="mx-auto max-w-4xl px-5 pb-12 text-center sm:px-8 sm:pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            // {t('hero.kicker')}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tier table — reuse the homepage Pricing section */}
      <Pricing />

      {/* Principles */}
      <section className="relative bg-surface-2 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeader kicker={t('principles.kicker')} title={t('hero.title')} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.name} className="flex flex-col gap-3 bg-surface p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            // {t('addOnsLabel')}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((a) => (
              <article
                key={a.name}
                className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-accent"
              >
                <div className="grid h-9 w-9 place-items-center rounded-md border border-border text-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-fg">
                  {a.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {a.summary}
                </p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {a.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-surface-2 border-y border-border">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            // {t('faqLabel')}
          </p>
          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-fg">
                  {f.q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border text-muted transition group-open:rotate-45 group-open:text-accent">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <main>
        <PricingPageBody />
      </main>
      <Footer />
    </>
  );
}
