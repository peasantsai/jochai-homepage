'use client';

import { useEffect } from 'react';

/**
 * On hard refresh (or first load), browsers default to "auto" scroll
 * restoration — re-jumping to the prior Y. Combined with `scroll-behavior:
 * smooth` on `html`, that produces a visible auto-scroll jolt. We disable
 * the browser's restore and explicitly start at the top when there is no
 * URL hash.
 *
 * In-page anchor clicks (e.g. `/#products`) still scroll smoothly because
 * we leave `scroll-behavior: smooth` in place.
 */
export function ScrollReset() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!window.location.hash) {
      // Disable smooth scroll just for this jump so refresh feels instant.
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      // Restore after a tick so subsequent anchor navigation stays smooth.
      requestAnimationFrame(() => {
        root.style.scrollBehavior = prev;
      });
    }
  }, []);

  return null;
}
