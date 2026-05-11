'use client';

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'motion/react';
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

/* -------------------------------------------------------------------------- */
/*  Reveal — fade + lift on scroll into view                                   */
/* -------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'article' | 'li' | 'span';
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
  y = 14,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.18, once });
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  const initial = reduced ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = reduced
    ? { opacity: 1, y: 0 }
    : { opacity: inView ? 1 : 0, y: inView ? 0 : y };

  return (
    <Tag
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/*  StaggerGroup + StaggerItem — orchestrate child reveals                    */
/* -------------------------------------------------------------------------- */

export function StaggerGroup({
  children,
  className,
  delay = 0,
  step = 0.07,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? 'show' : 'hidden'}
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: step, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MagneticButton — primary CTA that gently tracks the cursor                */
/* -------------------------------------------------------------------------- */

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  /** Maximum cursor pull, in px. Defaults to 6. */
  strength?: number;
};

export function MagneticButton({
  children,
  href,
  className,
  target,
  rel,
  strength = 6,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 240, damping: 20, mass: 0.5 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const cap = strength;
    x.set(Math.max(-cap, Math.min(cap, dx * 0.25)));
    y.set(Math.max(-cap, Math.min(cap, dy * 0.25)));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.a>
  );
}

/* -------------------------------------------------------------------------- */
/*  TiltCard — perspective tilt on cursor hover                                */
/* -------------------------------------------------------------------------- */

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: CSSProperties;
};

export function TiltCard({ children, className, max = 5, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sRx = useSpring(rx, { stiffness: 220, damping: 18 });
  const sRy = useSpring(ry, { stiffness: 220, damping: 18 });
  const transform = useTransform(
    [sRx, sRy] as const,
    ([a, b]) => `perspective(800px) rotateX(${a}deg) rotateY(${b}deg)`,
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * max);
    ry.set(px * max);
  }

  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, transform, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Typewriter — types lines with realistic per-keystroke delay               */
/* -------------------------------------------------------------------------- */

type Line = { prompt: string; out: string };

export function useTypewriter(lines: Line[], { startDelay = 250 } = {}) {
  const [shown, setShown] = useState<Line[]>(
    lines.map(() => ({ prompt: '', out: '' })),
  );
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShown(lines);
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    async function step(i: number) {
      if (cancelled || i >= lines.length) return;
      const { prompt, out } = lines[i];
      // Type the prompt char by char.
      for (let c = 1; c <= prompt.length; c++) {
        if (cancelled) return;
        await new Promise<void>((res) => {
          timer = setTimeout(res, 14 + Math.random() * 28);
        });
        setShown((prev) => {
          const next = [...prev];
          next[i] = { prompt: prompt.slice(0, c), out: '' };
          return next;
        });
      }
      // Pause then drop output as one chunk.
      await new Promise<void>((res) => {
        timer = setTimeout(res, 220);
      });
      if (cancelled) return;
      setShown((prev) => {
        const next = [...prev];
        next[i] = { prompt, out };
        return next;
      });
      // Move on.
      await new Promise<void>((res) => {
        timer = setTimeout(res, 480);
      });
      if (!cancelled) step(i + 1);
    }

    timer = setTimeout(() => step(0), startDelay);
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return shown;
}

/* Re-export motion for sites that want it directly. */
export { motion };
export type { HTMLMotionProps };
