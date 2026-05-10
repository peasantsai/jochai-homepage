import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Terminal } from '@/components/ui/terminal';
import { GithubIcon } from '@/components/ui/icons';

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
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t('eyebrow')}
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="https://peasantsai.github.io/joch-docs/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/peasantsai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              {t('ctaSecondary')}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
            <span>Apache-2.0</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>OWASP AOS</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>OpenTelemetry · OCSF</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>CycloneDX · SPDX</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 -z-10 rounded-xl bg-gradient-to-tr from-transparent via-transparent to-accent/20 blur-2xl" />
          <Terminal title={t('terminalTitle')} lines={lines} />
        </div>
      </div>
    </section>
  );
}
