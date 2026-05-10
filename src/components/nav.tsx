'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/ui/brand-mark';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

const SECTIONS = [
  { id: '#products', key: 'product' as const },
  { id: '#pillars', key: 'pillars' as const },
  { id: '#pricing', key: 'pricing' as const },
];

export function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? 'border-b border-border bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-fg" aria-label="Joch home">
          <BrandMark size={28} />
          <span className="text-lg font-semibold tracking-tight">Joch</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.key}
              href={s.id}
              className="text-sm text-fg-soft transition hover:text-accent"
            >
              {t(s.key)}
            </a>
          ))}
          <a
            href="https://peasantsai.github.io/joch-docs/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fg-soft transition hover:text-accent"
          >
            {t('docs')} ↗
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/peasantsai"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-fg transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            <GithubIcon className="h-4 w-4" />
            <span>{t('github')}</span>
          </a>
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-fg md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={s.id}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-fg-soft hover:text-accent"
              >
                {t(s.key)}
              </a>
            ))}
            <a
              href="https://peasantsai.github.io/joch-docs/"
              target="_blank"
              rel="noreferrer"
              className="py-1 text-sm text-fg-soft hover:text-accent"
            >
              {t('docs')} ↗
            </a>
            <a
              href="https://github.com/peasantsai"
              target="_blank"
              rel="noreferrer"
              className="py-1 text-sm text-fg-soft hover:text-accent"
            >
              {t('github')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
