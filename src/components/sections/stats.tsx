'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/motion-primitives';

type Stat = { label: string; value: string; delta: string };

const SPARK_COLORS = ['#10B981', '#2563EB', '#10B981', '#2563EB'];

export function Stats() {
  const t = useTranslations('stats');
  const items = t.raw('items') as Stat[];

  return (
    <section className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {'// '}
                {t('kicker')}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                {t('title')}
              </h2>
            </div>
            <p className="font-mono text-xs text-muted">{t('lastSync')}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid overflow-hidden rounded-xl border border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.05}
              className="relative border-border p-6 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:not(:last-child):not(:nth-last-child(2))]:border-b sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 lg:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-r"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {s.label}
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-fg tabular-nums sm:text-[2.25rem]">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-[#10B981]">{s.delta}</div>
                </div>
                <Sparkline color={SPARK_COLORS[i % SPARK_COLORS.length]} seed={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkline({ color, seed }: { color: string; seed: number }) {
  const points = Array.from({ length: 12 }, (_, k) => {
    const y = 11 + Math.sin((k + seed) * 0.7) * 5 + Math.sin(k * 0.3 + seed) * 2;
    return `${(k / 11) * 60 + 2},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 64 22" className="h-6 w-16 flex-none">
      <polyline fill="none" stroke={color} strokeWidth="1.2" points={points} />
    </svg>
  );
}
