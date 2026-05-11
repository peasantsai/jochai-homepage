'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from 'motion/react';

const FleetScene = dynamic(() => import('./fleet-scene'), {
  ssr: false,
  loading: () => null,
});

/**
 * Static SVG fallback drawn behind the 3D scene so reduced-motion users (and
 * the brief moment before the chunk lands) see something on-brand.
 */
function StaticFleet() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="absolute inset-0 h-full w-full opacity-50"
      aria-hidden
    >
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="200" r="180" fill="url(#g)" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = (i / 9) * Math.PI * 2;
        const x = 300 + Math.cos(a) * 150;
        const y = 200 + Math.sin(a) * 120;
        return (
          <g key={i}>
            <line
              x1="300"
              y1="200"
              x2={x}
              y2={y}
              stroke="#2f343d"
              strokeWidth="1"
              opacity="0.55"
            />
            <circle cx={x} cy={y} r="4" fill="#6b7280" />
          </g>
        );
      })}
      {/* Center yoke abstraction */}
      <rect x="270" y="194" width="60" height="6" rx="1.5" fill="#2563eb" />
      <rect x="297" y="180" width="6" height="14" rx="1.5" fill="#2563eb" />
      <rect x="266" y="200" width="10" height="10" rx="1.5" fill="#6b7280" />
      <rect x="324" y="200" width="10" height="10" rx="1.5" fill="#6b7280" />
    </svg>
  );
}

export function FleetSceneLoader({ count = 9 }: { count?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return <StaticFleet />;
  return (
    <>
      <StaticFleet />
      <FleetScene count={count} />
    </>
  );
}
