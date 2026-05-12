'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { Reveal } from '@/components/ui/motion-primitives';
import { BrandMark } from '@/components/ui/brand-mark';

const SIDEBAR: { label: string; icon: string; active?: boolean; badge?: number }[] = [
  { label: 'Overview', icon: '▣', active: true },
  { label: 'Agents', icon: '○' },
  { label: 'Executions', icon: '▶' },
  { label: 'Traces', icon: '⧗' },
  { label: 'Approvals', icon: '✓', badge: 7 },
  { label: 'Policies', icon: '▥' },
  { label: 'MCP Servers', icon: '⧈' },
  { label: 'Costs', icon: '$' },
  { label: 'Settings', icon: '⚙' },
];

const TRACES = [
  { id: 'exec-2026-05-11-001', agent: 'support-triage', status: 'ok', ms: 2100 },
  { id: 'exec-2026-05-11-002', agent: 'refund-processor', status: 'ok', ms: 1830 },
  { id: 'exec-2026-05-11-003', agent: 'code-reviewer', status: 'warn', ms: 2410 },
  { id: 'exec-2026-05-11-004', agent: 'lead-scorer', status: 'ok', ms: 1640 },
  { id: 'exec-2026-05-11-005', agent: 'incident-router', status: 'ok', ms: 2280 },
  { id: 'exec-2026-05-11-006', agent: 'doc-extractor', status: 'ok', ms: 1110 },
];

const KPIS = [
  { lbl: 'EXECUTIONS', val: '18,142', delta: '+12.4%', color: '#10B981' },
  { lbl: 'SUCCESS RATE', val: '98.7%', delta: '+0.3%', color: '#10B981' },
  { lbl: 'P95 LATENCY', val: '24ms', delta: '-3ms', color: '#10B981' },
  { lbl: 'COST (7d)', val: '$12,430', delta: '+6.1%', color: '#F59E0B' },
];

const APPROVALS = [
  { v: 23, l: 'PENDING', c: 'text-muted' },
  { v: 7, l: 'ESCALATED', c: 'text-[#F59E0B]' },
  { v: 182, l: 'APPROVED', c: 'text-[#10B981]' },
];

const TOP_AGENTS = [
  { name: 'support-triage', v: 4812, w: 100, c: '#2563EB' },
  { name: 'refund-processor', v: 2941, w: 62, c: '#6EA8FE' },
  { name: 'code-reviewer', v: 1732, w: 36, c: '#8B5CF6' },
  { name: 'lead-scorer', v: 1208, w: 25, c: '#10B981' },
];

export function ConsoleSection() {
  const t = useTranslations('console');

  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader
            kicker={t('kicker')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/10 dark:shadow-black/40">
            <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A323C]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A323C]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A323C]" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-muted">{t('host')}</span>
              <div className="ml-auto flex gap-1 font-mono text-[11px]">
                <span className="rounded px-2.5 py-1 text-fg bg-[color:var(--bg)]">Overview</span>
                <span className="rounded px-2.5 py-1 text-muted">Traces</span>
                <span className="rounded px-2.5 py-1 text-muted">Approvals</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
              <aside className="hidden flex-col gap-0.5 border-r border-border bg-surface-2 px-2.5 py-4 text-xs md:flex">
                <div className="mb-3 flex items-center gap-2 border-b border-border px-2 pb-3">
                  <BrandMark size={16} />
                  <div className="font-semibold text-fg">Crux Console</div>
                </div>
                {SIDEBAR.map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 ${
                      s.active ? 'bg-[color:var(--bg)] font-semibold text-fg' : 'text-muted'
                    }`}
                  >
                    <span className={`w-3.5 font-mono ${s.active ? 'text-accent' : 'text-muted'}`}>
                      {s.icon}
                    </span>
                    <span className="flex-1">{s.label}</span>
                    {s.badge !== undefined && (
                      <span className="rounded-sm bg-[#F59E0B] px-1.5 py-px font-mono text-[10px] font-bold text-[#0B0F14]">
                        {s.badge}
                      </span>
                    )}
                  </div>
                ))}
              </aside>

              <main className="min-w-0 p-5">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {KPIS.map((k) => (
                    <div key={k.lbl} className="rounded-md border border-border bg-surface-2 p-3.5">
                      <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                        {k.lbl}
                      </div>
                      <div className="mt-1 text-xl font-semibold tracking-tight text-fg">
                        {k.val}
                      </div>
                      <div className="mt-1 font-mono text-[10px]" style={{ color: k.color }}>
                        {k.delta}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 grid gap-3 lg:grid-cols-[1fr_1.2fr]">
                  <div className="rounded-md border border-border bg-surface-2 p-3.5">
                    <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-soft">
                      {t('flowLabel')}
                    </div>
                    <ExecFlowSvg />
                  </div>
                  <div className="rounded-md border border-border bg-surface-2 p-3.5">
                    <div className="mb-2.5 flex items-center justify-between">
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-soft">
                        {t('tracesLabel')}
                      </div>
                      <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#10B981]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
                        LIVE
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {TRACES.map((tr) => (
                        <div
                          key={tr.id}
                          className="grid grid-cols-[1.6fr_1fr_56px_56px] items-center gap-2.5 rounded-sm border border-border bg-surface px-2 py-1.5 font-mono text-[11px]"
                        >
                          <span className="truncate text-accent">{tr.id}</span>
                          <span className="truncate text-muted">{tr.agent}</span>
                          <span style={{ color: tr.status === 'ok' ? '#10B981' : '#F59E0B' }}>
                            ● {tr.status}
                          </span>
                          <span className="text-right text-muted">{tr.ms}ms</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.4fr]">
                  <div className="rounded-md border border-border bg-surface-2 p-3.5">
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-soft">
                      {t('approvalsLabel')}
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {APPROVALS.map((a) => (
                        <div key={a.l}>
                          <div className={`text-2xl font-semibold ${a.c}`}>{a.v}</div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                            {a.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-surface-2 p-3.5">
                    <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-soft">
                      {t('topAgentsLabel')}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {TOP_AGENTS.map((r) => (
                        <div
                          key={r.name}
                          className="grid grid-cols-[140px_1fr_56px] items-center gap-2.5 font-mono text-[11px]"
                        >
                          <span className="truncate text-muted">{r.name}</span>
                          <div className="h-1.5 overflow-hidden rounded-sm bg-surface">
                            <div className="h-full" style={{ width: `${r.w}%`, background: r.c }} />
                          </div>
                          <span className="text-right text-fg">{r.v.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <CodeBlock
            title="install · CLI"
            lines={[
              { p: '$ ', t: 'go install github.com/agenticfleet/cruxcontrol/cmd/crux@latest', cls: 'text-fg' },
              { t: '==> Building crux from source', cls: 'text-muted' },
              { t: '==> Installed -> ~/go/bin/crux', cls: 'text-muted' },
              { p: '$ ', t: 'crux up', cls: 'text-fg' },
              { t: '✓ crux server running on http://localhost:7700', cls: 'text-[#10B981]' },
            ]}
          />
          <CodeBlock
            title="profile · crux.yaml"
            lines={[
              { t: 'apiVersion: crux.io/v1alpha1', cls: 'text-muted' },
              { t: 'kind: Fleet', cls: 'text-accent' },
              { t: 'metadata:', cls: 'text-muted' },
              { t: '  name: support-triage', cls: 'text-fg' },
              { t: 'spec:', cls: 'text-muted' },
              { t: '  agents: { min: 4, max: 64 }', cls: 'text-fg' },
              { t: '  gateway: { policy: prod-guardrails }', cls: 'text-fg' },
              { t: '  observability: { otel: true }', cls: 'text-fg' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function CodeBlock({
  title,
  lines,
}: {
  title: string;
  lines: { p?: string; t: string; cls?: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 font-mono text-[11px] text-muted">
        <span>{title}</span>
        <span className="text-muted/70">copy</span>
      </div>
      <pre className="m-0 px-4 py-3.5 font-mono text-[12.5px] leading-7">
        {lines.map((l, i) => (
          <div key={i}>
            {l.p && <span className="text-accent">{l.p}</span>}
            <span className={l.cls}>{l.t}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

function ExecFlowSvg() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 4), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <svg viewBox="0 0 320 160" className="block h-40 w-full" aria-hidden="true">
      <FlowNode x={20} y={70} label="INTAKE" color="#9CA3AF" />
      <FlowNode x={95} y={70} label="GATEWAY" color="#2563EB" />
      <FlowNode x={180} y={25} label="AGENT A" color="#10B981" />
      <FlowNode x={180} y={70} label="AGENT B" color="#10B981" />
      <FlowNode x={180} y={115} label="AGENT C" color="#F59E0B" />
      <FlowNode x={275} y={70} label="RESULTS" color="#9CA3AF" />
      <FlowEdge a={[50, 70]} b={[85, 70]} active={phase >= 0} />
      <FlowEdge a={[125, 70]} b={[170, 25]} active={phase >= 1} />
      <FlowEdge a={[125, 70]} b={[170, 70]} active={phase >= 1} />
      <FlowEdge a={[125, 70]} b={[170, 115]} active={phase >= 1} />
      <FlowEdge a={[210, 25]} b={[265, 70]} active={phase >= 2} />
      <FlowEdge a={[210, 70]} b={[265, 70]} active={phase >= 2} />
      <FlowEdge a={[210, 115]} b={[265, 70]} active={phase >= 2} />
    </svg>
  );
}

function FlowNode({ x, y, label, color }: { x: number; y: number; label: string; color: string }) {
  return (
    <g>
      <rect x={x - 30} y={y - 12} width={60} height={24} rx={4} fill="var(--surface)" stroke={color} strokeOpacity="0.6" />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="1.5"
        fill="var(--fg)"
      >
        {label}
      </text>
    </g>
  );
}

function FlowEdge({ a, b, active }: { a: [number, number]; b: [number, number]; active: boolean }) {
  return (
    <g>
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#374151" strokeWidth="1" />
      <line
        x1={a[0]}
        y1={a[1]}
        x2={b[0]}
        y2={b[1]}
        stroke={active ? '#6EA8FE' : 'transparent'}
        strokeWidth="1.2"
        strokeDasharray="3 6"
        style={{ animation: 'cruxFlow 1.2s linear infinite' }}
      />
    </g>
  );
}
