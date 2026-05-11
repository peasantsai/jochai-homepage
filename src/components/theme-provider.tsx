'use client';

import { ThemeProvider as NextThemes } from 'next-themes';
import { ScrollReset } from '@/components/scroll-reset';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemes
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <ScrollReset />
      {children}
    </NextThemes>
  );
}
