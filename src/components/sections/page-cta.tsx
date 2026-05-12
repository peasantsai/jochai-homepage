import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export function PageCta({ namespace = 'productPages.shared' }: { namespace?: string }) {
  const t = useTranslations(namespace);
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
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          {t('finalCtaTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[color:var(--color-paper)]/75">
          {t('finalCtaSubtitle')}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/agenticfleet/cruxcontrol"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
          >
            {t('ctaPrimary')} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/agenticfleet/cruxcontrol"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-[color:var(--color-ink-3)] bg-[color:var(--color-ink-2)] px-5 text-sm font-medium text-paper transition hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            {t('ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
