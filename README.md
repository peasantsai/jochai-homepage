# jochai-homepage

The marketing homepage for [Joch AI](https://github.com/peasantsai) — the
vendor-neutral control plane for AI agent fleets.

Static, single-page Next.js 16 site. Dark / light themes. English + German.

## Stack

- Next.js 16 (App Router, RSC, Turbopack)
- TypeScript (strict)
- Tailwind v4
- next-intl (i18n via JSON catalogs)
- next-themes (dark / light)
- next/font for Inter + JetBrains Mono
- lucide-react (icons)

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
PORT=3030 pnpm dev   # if 3000 is taken (e.g. by Open WebUI)
```

## Build

```bash
pnpm build
pnpm start
```

## Project layout

```
src/
  app/
    layout.tsx              # root passthrough
    [locale]/
      layout.tsx            # html, providers, fonts, metadata
      page.tsx              # composes all sections
    not-found.tsx           # 404
    globals.css             # Tailwind + brand tokens
  components/
    nav.tsx, footer.tsx
    theme-provider.tsx, theme-toggle.tsx, locale-toggle.tsx
    sections/{hero,problem,pillars,products,integrations,use-cases,pricing,cta}.tsx
    ui/{brand-mark,terminal,section-header,icons}.tsx
  i18n/{routing.ts, request.ts, navigation.ts}
  messages/{en.json, de.json}
  proxy.ts                  # next-intl middleware (Next 16 "proxy" name)
public/brand/               # logos, favicons, product screenshots
assets/                     # original brand sources (kept for reference)
```

## Adding a locale

1. Add the code to `src/i18n/routing.ts` (`locales`).
2. Create `src/messages/<code>.json` mirroring `en.json`.
3. Add the label to `src/components/locale-toggle.tsx`.

## Brand tokens

Defined in `src/app/globals.css`:

| Token            | Value     |
|------------------|-----------|
| `--color-ink`    | `#0E1117` |
| `--color-ink-2`  | `#1F232B` |
| `--color-ink-3` | `#2F343D` |
| `--color-mute`   | `#6B7280` |
| `--color-line`   | `#E5E7EB` |
| `--color-paper`  | `#F8FAFC` |
| `--color-accent` | `#2563EB` |

Light mode is `paper` background → `ink` text. Dark mode swaps. The accent is
the same in both — used for links, primary CTAs, and focus rings.

## License

Apache-2.0 (matches the rest of the Joch project).
