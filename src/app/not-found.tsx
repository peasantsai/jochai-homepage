import Link from 'next/link';
import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function NotFound() {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <main className="grid min-h-screen place-items-center bg-[color:var(--color-ink)] px-6 text-[color:var(--color-paper)]">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative z-10 max-w-xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              // 404
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              This route is not in the inventory.
            </h1>
            <p className="mt-4 text-base text-[color:var(--color-paper)]/70 sm:text-lg">
              The path you followed does not match any agent, surface, or
              policy in the Joch control plane.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/en"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition hover:bg-[color:var(--color-accent-hover)]"
              >
                Return home →
              </Link>
              <a
                href="https://peasantsai.github.io/joch-docs/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-[color:var(--color-ink-3)] bg-[color:var(--color-ink-2)] px-5 text-sm font-medium text-[color:var(--color-paper)] transition hover:border-accent hover:text-accent"
              >
                Read the docs ↗
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
