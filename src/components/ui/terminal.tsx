type Line = { prompt: string; out: string };

export function Terminal({ title, lines }: { title: string; lines: Line[] }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-surface-2 shadow-2xl shadow-black/10 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border-soft bg-surface px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate font-mono text-[11px] uppercase tracking-wider text-muted">
          {title}
        </span>
      </div>
      <pre className="px-5 py-4 font-mono text-[13px] leading-relaxed text-fg">
        {lines.map((line, i) => (
          <div key={i} className="group">
            <div>
              <span className="text-accent">{line.prompt.split(' ')[0]}</span>
              <span className="text-fg-soft">
                {' '}
                {line.prompt.split(' ').slice(1).join(' ')}
              </span>
            </div>
            <div className="pl-2 text-muted">{line.out}</div>
            {i < lines.length - 1 && <div className="h-2" />}
          </div>
        ))}
        <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
      </pre>
    </div>
  );
}
