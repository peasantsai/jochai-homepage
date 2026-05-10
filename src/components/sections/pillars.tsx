import { useTranslations } from 'next-intl';
import {
  Boxes,
  ShieldCheck,
  ArrowLeftRight,
  Radar,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const ICON = {
  inventory: Boxes,
  governance: ShieldCheck,
  portability: ArrowLeftRight,
  observability: Radar,
  release: GitBranch,
} as const;

type Pillar = {
  key: keyof typeof ICON;
  name: string;
  summary: string;
  href: string;
};

export function Pillars() {
  const t = useTranslations('pillars');
  const items = t.raw('items') as Pillar[];

  return (
    <section id="pillars" className="anchor-offset relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeader
          kicker={t('kicker')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
          {items.map((p, i) => {
            const Icon = ICON[p.key];
            return (
              <a
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-4 bg-surface p-6 transition hover:bg-surface-2"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-[color:var(--bg)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.summary}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-fg-soft transition group-hover:text-accent">
                  read <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
