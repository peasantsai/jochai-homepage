'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, ShieldCheck, Boxes, Building2, Scale } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { HexDiagram } from '@/components/ui/hex-diagram';
import {
  MagneticButton,
  StaggerGroup,
  StaggerItem,
} from '@/components/ui/motion-primitives';

const TRUST_ICONS = [ShieldCheck, Boxes, Building2, Scale] as const;

export function Hero() {
  const t = useTranslations('hero');
  const trust = t.raw('trust') as string[];

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
        <StaggerGroup delay={0.1} step={0.08}>
          <StaggerItem>
            <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              {t('titlePrefix')}{' '}
              <span className="text-accent">{t('titleAccent')}</span>
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
                href="https://github.com/agenticfleet/cruxcontrol"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-base font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
              >
                {t('ctaPrimary')}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="https://github.com/agenticfleet/cruxcontrol"
                target="_blank"
                rel="noreferrer"
                strength={4}
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-accent/60 bg-transparent px-6 text-base font-medium text-fg transition hover:border-accent hover:bg-accent/10"
              >
                <GithubIcon className="h-4 w-4" />
                {t('ctaSecondary')}
              </MagneticButton>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup delay={0.4} step={0.1}>
          <StaggerItem>
            <div className="relative isolate aspect-[1/0.86] w-full">
              <RingLabel position="top">{t('ringPolicies')}</RingLabel>
              <RingLabel position="tr">{t('ringApprovals')}</RingLabel>
              <RingLabel position="bl">{t('ringGateways')}</RingLabel>
              <RingLabel position="bottom">{t('ringObservability')}</RingLabel>
              <div className="absolute inset-0">
                <HexDiagram />
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="grid grid-cols-2 gap-y-4 rounded-2xl border border-border bg-surface/70 px-2 py-5 backdrop-blur sm:grid-cols-4 sm:py-6">
          {trust.map((label, i) => {
            const Icon = TRUST_ICONS[i] ?? ShieldCheck;
            return (
              <div
                key={label}
                className="flex items-center justify-center gap-3 px-4 text-base font-medium text-fg"
              >
                <Icon className="h-5 w-5 text-fg-soft" aria-hidden="true" />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RingLabel({
  position,
  children,
}: {
  position: 'top' | 'tr' | 'bl' | 'bottom';
  children: React.ReactNode;
}) {
  const pos: Record<typeof position, string> = {
    top: 'top-[4%] left-1/2 -translate-x-1/2',
    tr: 'top-[30%] right-[1%]',
    bl: 'bottom-[30%] left-[2%]',
    bottom: 'bottom-[4%] left-1/2 -translate-x-1/2',
  };
  return (
    <span
      className={`absolute z-10 inline-flex rounded-md border border-border bg-surface/80 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-soft backdrop-blur ${pos[position]}`}
    >
      {children}
    </span>
  );
}
