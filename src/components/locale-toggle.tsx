'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import { useState } from 'react';

export function LocaleToggle() {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const current = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('language')}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-2.5 font-mono text-[11px] uppercase tracking-wider text-fg transition hover:border-accent hover:text-accent"
      >
        <Languages className="h-3.5 w-3.5" />
        {current}
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-11 z-50 min-w-[120px] overflow-hidden rounded-md border border-border bg-surface shadow-xl shadow-black/20"
        >
          {routing.locales.map((loc) => (
            <li key={loc} role="none">
              <button
                role="menuitem"
                onClick={() => {
                  router.replace(pathname, { locale: loc });
                  setOpen(false);
                }}
                className={`block w-full px-3 py-2 text-left font-mono text-xs uppercase tracking-wider transition hover:bg-surface-2 hover:text-accent ${
                  loc === current ? 'text-accent' : 'text-fg'
                }`}
              >
                {loc === 'en' ? 'EN · English' : 'DE · Deutsch'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
