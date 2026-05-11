'use client';

import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/motion-primitives';

function Tile({ label }: { label: string }) {
  return (
    <StaggerItem
      className="flex h-12 items-center justify-center rounded-md border border-border bg-surface px-4 font-mono text-[11px] uppercase tracking-wider text-fg-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {label}
    </StaggerItem>
  );
}

export function Integrations() {
  const t = useTranslations('integrations');
  const sdks = t.raw('sdks') as string[];
  const providers = t.raw('providers') as string[];
  const runtimes = t.raw('runtimes') as string[];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeader
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {t('sdksLabel')}
            </p>
            <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-7" step={0.04}>
              {sdks.map((s) => (
                <Tile key={s} label={s} />
              ))}
            </StaggerGroup>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {t('providersLabel')}
            </p>
            <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-7" step={0.04}>
              {providers.map((s) => (
                <Tile key={s} label={s} />
              ))}
            </StaggerGroup>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {t('runtimesLabel')}
            </p>
            <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" step={0.05}>
              {runtimes.map((s) => (
                <Tile key={s} label={s} />
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
