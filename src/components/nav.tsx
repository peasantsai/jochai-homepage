'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun, Languages, Check } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Link } from '@/i18n/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';
import { BrandMark } from '@/components/ui/brand-mark';
import { routing } from '@/i18n/routing';

const SECTIONS = [
  { id: '/#products', key: 'product' as const },
  { id: '/#pillars', key: 'pillars' as const },
  { id: '/pricing', key: 'pricing' as const },
];

export function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isDark = mounted && resolvedTheme === 'dark';

  function pickLocale(loc: 'en' | 'de') {
    router.replace(pathname, { locale: loc });
    setOpen(false);
  }

  function pickTheme(mode: 'light' | 'dark') {
    setTheme(mode);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open
          ? 'border-b border-border bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-fg" aria-label="Crux Control home">
          <BrandMark size={28} />
          <span className="text-lg font-semibold tracking-tight">Crux</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <Link
              key={s.key}
              href={s.id}
              className="text-sm text-fg-soft transition hover:text-accent"
            >
              {t(s.key)}
            </Link>
          ))}
          <a
            href="https://github.com/agenticfleet/cruxcontrol"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fg-soft transition hover:text-accent"
          >
            {t('docs')} ↗
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? t('closeMenu') : t('openMenu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-fg transition hover:border-accent hover:text-accent"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 sm:px-8 md:flex-row md:items-start md:gap-12 md:py-8">
            {/* Sections — only on mobile where the nav bar hides them. */}
            <div className="flex flex-col gap-3 md:hidden">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {'// navigate'}
              </p>
              {SECTIONS.map((s) => (
                <Link
                  key={s.key}
                  href={s.id}
                  onClick={() => setOpen(false)}
                  className="text-base text-fg transition hover:text-accent"
                >
                  {t(s.key)}
                </Link>
              ))}
              <a
                href="https://github.com/agenticfleet/cruxcontrol"
                target="_blank"
                rel="noreferrer"
                className="text-base text-fg transition hover:text-accent"
              >
                {t('docs')} ↗
              </a>
            </div>

            {/* Language picker */}
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <Languages className="h-3.5 w-3.5" /> {t('language')}
              </p>
              <div className="flex flex-wrap gap-2">
                {routing.locales.map((loc) => {
                  const isActive = loc === locale;
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => pickLocale(loc)}
                      className={`inline-flex h-10 items-center gap-2 rounded-md border px-3 font-mono text-xs uppercase tracking-wider transition ${
                        isActive
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border bg-[color:var(--bg)] text-fg hover:border-accent hover:text-accent'
                      }`}
                    >
                      <span>{loc === 'en' ? 'EN · English' : 'DE · Deutsch'}</span>
                      {isActive && <Check className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Theme picker */}
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {isDark ? (
                  <Moon className="h-3.5 w-3.5" />
                ) : (
                  <Sun className="h-3.5 w-3.5" />
                )}
                {t('theme')}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'light', label: t('themeLightLabel'), Icon: Sun },
                  { id: 'dark', label: t('themeDarkLabel'), Icon: Moon },
                ].map(({ id, label, Icon }) => {
                  const active = mounted && resolvedTheme === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => pickTheme(id as 'light' | 'dark')}
                      className={`inline-flex h-10 items-center gap-2 rounded-md border px-3 font-mono text-xs uppercase tracking-wider transition ${
                        active
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border bg-[color:var(--bg)] text-fg hover:border-accent hover:text-accent'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{label}</span>
                      {active && <Check className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-col gap-3 md:ml-auto">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {'// open source'}
              </p>
              <a
                href="https://github.com/agenticfleet/cruxcontrol"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-[color:var(--bg)] px-3 text-sm text-fg transition hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                {t('github')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
