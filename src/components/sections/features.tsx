'use client';

import { useTranslations } from 'next-intl';
import { Route, Eye, Gavel, Plug } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/motion-primitives';

const ICONS = { orchestrate: Route, observe: Eye, govern: Gavel, extend: Plug } as const;

type Feature = {
  key: keyof typeof ICONS;
  name: string;
  summary: string;
  tags: string[];
};

export function Features() {
  const t = useTranslations('features');
  const items = t.raw('items') as Feature[];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = ICONS[it.key];
            return (
              <Reveal key={it.key} delay={i * 0.06}>
                <div className="flex h-full min-h-[14rem] flex-col rounded-xl border border-border bg-surface-2 p-6 transition hover:border-accent">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-border bg-[color:var(--bg)] text-fg">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-fg">{it.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{it.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {it.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border bg-[color:var(--bg)] px-1.5 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
