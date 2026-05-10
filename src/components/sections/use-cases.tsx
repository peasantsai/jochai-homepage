import { useTranslations } from 'next-intl';
import {
  ListChecks,
  ServerCog,
  ArrowLeftRight,
  Wallet,
  GitMerge,
  UserCheck,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const ICON = {
  fleet: ListChecks,
  mcp: ServerCog,
  migration: ArrowLeftRight,
  cost: Wallet,
  release: GitMerge,
  approvals: UserCheck,
} as const;

type UseCase = { key: keyof typeof ICON; name: string; summary: string };

export function UseCases() {
  const t = useTranslations('useCases');
  const items = t.raw('items') as UseCase[];

  return (
    <section className="relative bg-surface-2 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeader kicker={t('kicker')} title={t('title')} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((u) => {
            const Icon = ICON[u.key];
            return (
              <div
                key={u.key}
                className="rounded-xl border border-border bg-surface p-6 transition hover:border-accent"
              >
                <div className="grid h-10 w-10 place-items-center rounded-md border border-border text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-fg">
                  {u.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.summary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
