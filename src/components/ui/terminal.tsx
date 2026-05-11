'use client';

import { useTypewriter } from '@/components/ui/motion-primitives';

type Line = { prompt: string; out: string };

export function Terminal({
  title,
  lines,
  animate = true,
}: {
  title: string;
  lines: Line[];
  animate?: boolean;
}) {
  const shown = useTypewriter(animate ? lines : lines, { startDelay: 350 });
  const display = animate ? shown : lines;

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
        {display.map((line, i) => {
          const fullPrompt = lines[i].prompt;
          const promptDone = line.prompt === fullPrompt;
          const outDone = line.out === lines[i].out && line.out.length > 0;
          const isLast = i === display.length - 1;
          const showCaret = isLast && (!promptDone || !outDone);
          const head = (line.prompt ?? '').split(' ')[0];
          const rest = (line.prompt ?? '').split(' ').slice(1).join(' ');
          return (
            <div key={i}>
              <div>
                <span className="text-accent">{head}</span>
                {rest && <span className="text-fg-soft"> {rest}</span>}
                {showCaret && !promptDone && (
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 -translate-y-[1px] animate-pulse bg-accent align-middle" />
                )}
              </div>
              {line.out && <div className="pl-2 text-muted">{line.out}</div>}
              {i < display.length - 1 && <div className="h-2" />}
            </div>
          );
        })}
        {/* trailing caret when whole sequence is typed */}
        <span className="mt-1 inline-block h-3.5 w-1.5 animate-pulse bg-accent align-middle" />
      </pre>
    </div>
  );
}
