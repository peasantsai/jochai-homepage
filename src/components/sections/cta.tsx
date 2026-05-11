'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { MagneticButton, Reveal } from '@/components/ui/motion-primitives';

export function FinalCta() {
  const t = useTranslations('cta');

  return (
    <section className="relative bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            // {t('kicker')}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {t('title')}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-[color:var(--color-paper)]/75 sm:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="https://peasantsai.github.io/joch-docs/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
            >
              {t('primary')} <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="https://github.com/peasantsai"
              target="_blank"
              rel="noreferrer"
              strength={4}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-[color:var(--color-ink-3)] bg-[color:var(--color-ink-2)] px-5 text-sm font-medium text-paper transition hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              {t('secondary')}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
