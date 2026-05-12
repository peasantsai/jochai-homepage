'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { MagneticButton, Reveal } from '@/components/ui/motion-primitives';

export function FinalCta() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden border-y border-border bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 100%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {t('title')}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-[color:var(--color-paper)]/75 sm:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="https://github.com/agenticfleet/cruxcontrol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-base font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
            >
              {t('primary')} <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="https://github.com/agenticfleet/cruxcontrol"
              target="_blank"
              rel="noreferrer"
              strength={4}
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[color:var(--color-ink-3)] bg-[color:var(--color-ink-2)] px-6 text-base font-medium text-paper transition hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              {t('secondary')}
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-8 font-mono text-xs text-[color:var(--color-paper)]/60">
            {t('install')}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
