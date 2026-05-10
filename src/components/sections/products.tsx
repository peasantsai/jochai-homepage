import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/section-header';

type Product = {
  key: string;
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
        <SectionHeader
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.key}
              href={`/products/${p.key}`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border-soft bg-[color:var(--bg)]">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-8 transition group-hover:scale-[1.03]"
                />
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
                  Explore <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
