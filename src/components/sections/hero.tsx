'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Terminal } from '@/components/ui/terminal';
import { GithubIcon } from '@/components/ui/icons';
import { FleetSceneLoader } from '@/components/fleet-scene-loader';
import {
  MagneticButton,
  StaggerGroup,
  StaggerItem,
} from '@/components/ui/motion-primitives';

export function Hero() {
  const t = useTranslations('hero');
  const lines = t.raw('terminalLines') as Array<{ prompt: string; out: string }>;

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-36">
      {/* Schematic backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <StaggerGroup delay={0.1} step={0.08}>
          <StaggerItem>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t('eyebrow')}
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              {t('title')}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              {t('subtitle')}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="https://peasantsai.github.io/joch-docs/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
              >
                {t('ctaPrimary')}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="https://github.com/peasantsai"
                target="_blank"
                rel="noreferrer"
                strength={4}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface/80 px-5 text-sm font-medium text-fg backdrop-blur transition hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                {t('ctaSecondary')}
              </MagneticButton>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
              <span>Apache-2.0</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span>OWASP AOS</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span>OpenTelemetry · OCSF</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span>CycloneDX · SPDX</span>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Right column: 3D fleet backdrop with the terminal sitting on top. */}
        <StaggerGroup delay={0.55} step={0.1}>
          <StaggerItem>
            <div className="relative isolate">
              {/* Soft accent glow */}
              <div className="absolute -inset-6 -z-20 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-accent/15 blur-3xl" />
              {/* 3D fleet scene — behind terminal, contained to this column */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 overflow-hidden rounded-2xl opacity-80 dark:opacity-90"
              >
                <FleetSceneLoader count={9} />
              </div>
              <Terminal title={t('terminalTitle')} lines={lines} />
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
