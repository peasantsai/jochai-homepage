'use client';

import type { ReactNode } from 'react';

/* Isometric (30°) projection. */
function iso(x: number, y: number, z: number, scale = 1) {
  const c = Math.cos(Math.PI / 6);
  const s = Math.sin(Math.PI / 6);
  return { x: (x - y) * c * scale, y: ((x + y) * s - z) * scale };
}

type IconKey =
  | 'branch'
  | 'code'
  | 'person'
  | 'personLayers'
  | 'search'
  | 'database'
  | 'net'
  | 'hex'
  | 'layers'
  | 'doc'
  | 'squiggle'
  | 'bars'
  | 'diamond'
  | 'wrench'
  | 'code2'
  | 'star'
  | 'crux';

const Icons: Record<IconKey, (c: string) => ReactNode> = {
  branch: (c) => (
    <g stroke={c} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="0" cy="-8" r="1.6" fill={c} />
      <circle cx="-7" cy="6" r="1.6" fill={c} />
      <circle cx="7" cy="6" r="1.6" fill={c} />
      <path d="M 0 -8 L 0 -2 L -7 6 M 0 -2 L 7 6" />
    </g>
  ),
  code: (c) => (
    <g stroke={c} strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M -7 -5 L -2 0 L -7 5" />
      <path d="M 7 -5 L 2 0 L 7 5" />
      <path d="M 2 -7 L -2 7" strokeWidth="1.4" opacity="0.7" />
    </g>
  ),
  person: (c) => (
    <g fill={c} stroke="none">
      <circle cx="0" cy="-4" r="2.8" />
      <path d="M -5 7 Q 0 0 5 7 Z" />
    </g>
  ),
  personLayers: (c) => (
    <g fill={c} stroke="none">
      <circle cx="0" cy="-5" r="2.4" />
      <path d="M -5 5 Q 0 0 5 5 Z" />
      <path d="M -6 8 L 6 8 M -6 10 L 6 10" stroke={c} strokeWidth="1.6" />
    </g>
  ),
  search: (c) => (
    <g stroke={c} strokeWidth="1.9" fill="none" strokeLinecap="round">
      <circle cx="-1.5" cy="-1.5" r="4.5" />
      <path d="M 2.5 2.5 L 6.5 6.5" />
    </g>
  ),
  database: (c) => (
    <g stroke={c} strokeWidth="1.5" fill="none">
      <ellipse cx="0" cy="-5" rx="6" ry="2" />
      <path d="M -6 -5 L -6 5 a 6 2 0 0 0 12 0 L 6 -5" />
      <ellipse cx="0" cy="0" rx="6" ry="2" />
    </g>
  ),
  net: (c) => (
    <g stroke={c} strokeWidth="1.4" fill={c}>
      <circle cx="0" cy="-6" r="1.4" />
      <circle cx="-6" cy="4" r="1.4" />
      <circle cx="6" cy="4" r="1.4" />
      <circle cx="0" cy="0" r="1.4" />
      <path d="M 0 -6 L 0 0 L -6 4 M 0 0 L 6 4" fill="none" strokeWidth="1.2" />
    </g>
  ),
  hex: (c) => (
    <g stroke={c} strokeWidth="1.5" fill="none">
      <path d="M -6 0 L -3 -5 L 3 -5 L 6 0 L 3 5 L -3 5 Z" />
      <circle cx="0" cy="0" r="1.6" fill={c} />
    </g>
  ),
  layers: (c) => (
    <g stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round">
      <path d="M 0 -7 L 7 -3 L 0 1 L -7 -3 Z" />
      <path d="M -7 0 L 0 4 L 7 0" />
      <path d="M -7 3 L 0 7 L 7 3" />
    </g>
  ),
  doc: (c) => (
    <g stroke={c} strokeWidth="1.6" fill="none">
      <path d="M -4 -7 L -4 7 L 4 7 L 4 -3 L 1 -7 Z" />
      <path d="M -2 -2 L 2 -2 M -2 1 L 2 1 M -2 4 L 2 4" />
    </g>
  ),
  squiggle: (c) => (
    <g stroke={c} strokeWidth="1.7" fill="none" strokeLinecap="round">
      <path d="M -7 -3 Q -3 -7 0 -3 T 7 -3" />
      <path d="M -7 3 Q -3 -1 0 3 T 7 3" />
    </g>
  ),
  bars: (c) => (
    <g stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M -5 -5 L 5 -5" />
      <path d="M -5 0 L 5 0" />
      <path d="M -5 5 L 2 5" />
    </g>
  ),
  diamond: (c) => (
    <g stroke={c} strokeWidth="1.6" fill="none">
      <path d="M 0 -7 L 7 0 L 0 7 L -7 0 Z" />
      <circle cx="0" cy="0" r="1.6" fill={c} />
    </g>
  ),
  wrench: (c) => (
    <g stroke={c} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="-3" cy="-3" r="3" />
      <path d="M -1 -1 L 6 6" />
      <path d="M 4 4 L 6 6 L 4 8" />
    </g>
  ),
  code2: (c) => (
    <g stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round">
      <rect x="-7" y="-6" width="14" height="12" rx="1.5" />
      <path d="M -3 -2 L -5 0 L -3 2 M 3 -2 L 5 0 L 3 2 M 1 -3 L -1 3" />
    </g>
  ),
  star: (c) => (
    <g stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round">
      <path d="M 0 -7 L 2 -2 L 7 -2 L 3 1 L 5 6 L 0 3 L -5 6 L -3 1 L -7 -2 L -2 -2 Z" />
    </g>
  ),
  crux: (c) => (
    <g transform="scale(0.34)" fill={c}>
      <path d="M -22 -10 C -22 -12 -20 -14 -18 -14 L -10 -14 C -8 -14 -6 -12 -6 -10 L -6 -2 C -6 2 -3 4 0 4 C 3 4 6 2 6 -2 L 6 -10 C 6 -12 8 -14 10 -14 L 18 -14 C 20 -14 22 -12 22 -10 L 22 0 C 22 10 14 16 0 16 C -14 16 -22 10 -22 0 Z" />
    </g>
  ),
};

type Palette = {
  face: string;
  side: string;
  edge: string;
  glow: string;
  accent: string;
  line: string;
};

const P: Record<string, Palette> = {
  core: { face: '#0E1A2E', side: '#070C18', edge: '#3B82F6', glow: '#3B82F6', accent: '#60A5FA', line: '#3B82F6' },
  glass: { face: '#101824', side: '#080D17', edge: '#384256', glow: '#0F172A', accent: '#E5E7EB', line: '#cbd5e1' },
  cyan: { face: '#0E1A2E', side: '#08111F', edge: '#06B6D4', glow: '#06B6D4', accent: '#67E8F9', line: '#06B6D4' },
  teal: { face: '#0E1A2E', side: '#08111F', edge: '#10B981', glow: '#10B981', accent: '#6EE7B7', line: '#10B981' },
  pink: { face: '#0E1A2E', side: '#08111F', edge: '#EC4899', glow: '#EC4899', accent: '#F9A8D4', line: '#EC4899' },
  pinkSoft: { face: '#0E1A2E', side: '#08111F', edge: '#F472B6', glow: '#F472B6', accent: '#FBCFE8', line: '#F472B6' },
  blue: { face: '#0E1A2E', side: '#08111F', edge: '#3B82F6', glow: '#3B82F6', accent: '#93C5FD', line: '#3B82F6' },
};

type CubeProps = {
  wx: number;
  wy: number;
  wz?: number;
  size?: number;
  height?: number;
  cx: number;
  cy: number;
  scale: number;
  palette: Palette;
  iconKey: IconKey;
  faceOpacity?: number;
  base?: boolean;
  glow?: number;
  pulse?: boolean;
  pulseDelay?: number;
};

function GlassCube({
  wx,
  wy,
  wz = 0,
  size = 1.5,
  height = 1.5,
  cx,
  cy,
  scale,
  palette,
  iconKey,
  faceOpacity = 0.22,
  base = true,
  glow = 0.7,
  pulse = false,
  pulseDelay = 0,
}: CubeProps) {
  const v = (x: number, y: number, z: number) => {
    const p = iso(x, y, z, scale);
    return { x: p.x + cx, y: p.y + cy };
  };
  const s2 = size / 2;
  const x0 = wx - s2, x1 = wx + s2, y0 = wy - s2, y1 = wy + s2, z0 = wz, z1 = wz + height;
  const A = v(x0, y0, z1), B = v(x1, y0, z1), C = v(x1, y1, z1), D = v(x0, y1, z1);
  const E = v(x0, y0, z0), F = v(x1, y0, z0), G = v(x1, y1, z0), H = v(x0, y1, z0);
  const top = [A, B, C, D];
  const right = [B, F, G, C];
  const front = [D, C, G, H];
  const left = [A, D, H, E];
  const poly = (pts: { x: number; y: number }[]) =>
    pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
  const topCenter = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
  const baseCenter = { x: (E.x + G.x) / 2, y: (E.y + G.y) / 2 };
  const iconScale = (size * scale) / 32;
  const Icon = Icons[iconKey];

  const bs = size * 1.15;
  const bx0 = wx - bs / 2, bx1 = wx + bs / 2, by0 = wy - bs / 2, by1 = wy + bs / 2;
  const bH = 0.18, bzTop = wz, bzBot = wz - bH;
  const bA = v(bx0, by0, bzTop);
  const bB = v(bx1, by0, bzTop);
  const bC = v(bx1, by1, bzTop);
  const bD = v(bx0, by1, bzTop);
  const bE = v(bx0, by0, bzBot);
  const bG = v(bx1, by1, bzBot);
  const bH2 = v(bx0, by1, bzBot);

  return (
    <g>
      <ellipse
        cx={baseCenter.x}
        cy={baseCenter.y + 4}
        rx={size * scale * 0.78}
        ry={size * scale * 0.3}
        fill={palette.glow}
        opacity={glow * 0.3}
        style={{ filter: 'blur(10px)' }}
      />
      {base && (
        <g>
          <polygon points={poly([bA, bD, bH2, bE])} fill="#0A1018" stroke="#1f2937" strokeWidth="0.5" />
          <polygon points={poly([bD, bC, bG, bH2])} fill="#0C131D" stroke="#1f2937" strokeWidth="0.5" />
          <polygon points={poly([bA, bB, bC, bD])} fill="#0F1724" stroke="#22304a" strokeWidth="0.6" />
        </g>
      )}
      <polygon points={poly(left)} fill={palette.side} fillOpacity={faceOpacity + 0.05} stroke={palette.edge} strokeOpacity="0.55" strokeWidth="0.8" />
      <polygon points={poly(front)} fill={palette.side} fillOpacity={faceOpacity + 0.1} stroke={palette.edge} strokeOpacity="0.7" strokeWidth="0.8" />
      <polygon points={poly(right)} fill={palette.side} fillOpacity={faceOpacity + 0.05} stroke={palette.edge} strokeOpacity="0.55" strokeWidth="0.8" />
      <polygon points={poly(top)} fill={palette.face} fillOpacity={faceOpacity} stroke={palette.edge} strokeOpacity="0.85" strokeWidth="0.9" />
      <ellipse
        cx={topCenter.x}
        cy={topCenter.y}
        rx={size * scale * 0.4}
        ry={size * scale * 0.22}
        fill={palette.glow}
        opacity={glow * 0.55}
        style={{ filter: 'blur(6px)' }}
      />
      {Icon && (
        <g transform={`translate(${topCenter.x}, ${topCenter.y}) scale(${iconScale})`}>
          {Icon(palette.accent)}
        </g>
      )}
      {pulse && (
        <ellipse
          cx={topCenter.x}
          cy={topCenter.y}
          rx={size * scale * 0.55}
          ry={size * scale * 0.28}
          fill="none"
          stroke={palette.edge}
          strokeWidth="1"
          opacity="0.55"
          style={{
            transformOrigin: `${topCenter.x}px ${topCenter.y}px`,
            animation: 'cruxCubePulse 3.2s ease-out infinite',
            animationDelay: `${pulseDelay}s`,
          }}
        />
      )}
    </g>
  );
}

function Pedestal({ cx, cy, scale }: { cx: number; cy: number; scale: number }) {
  const v = (x: number, y: number, z: number) => {
    const p = iso(x, y, z, scale);
    return { x: p.x + cx, y: p.y + cy };
  };
  const bigS = 5.6, bigH = 1.6;
  const bA = v(-bigS / 2, -bigS / 2, bigH);
  const bB = v(bigS / 2, -bigS / 2, bigH);
  const bC = v(bigS / 2, bigS / 2, bigH);
  const bD = v(-bigS / 2, bigS / 2, bigH);
  const bE = v(-bigS / 2, -bigS / 2, 0);
  const bG = v(bigS / 2, bigS / 2, 0);
  const bH = v(-bigS / 2, bigS / 2, 0);

  const innS = 3.2, innTop = bigH + 0.4;
  const pA = v(-innS / 2, -innS / 2, innTop);
  const pB = v(innS / 2, -innS / 2, innTop);
  const pC = v(innS / 2, innS / 2, innTop);
  const pD = v(-innS / 2, innS / 2, innTop);
  const pE = v(-innS / 2, -innS / 2, bigH);
  const pG = v(innS / 2, innS / 2, bigH);
  const pH = v(-innS / 2, innS / 2, bigH);

  const poly = (pts: { x: number; y: number }[]) =>
    pts.map((q) => `${q.x.toFixed(2)},${q.y.toFixed(2)}`).join(' ');
  const topCenter = v(0, 0, innTop);

  return (
    <g>
      <ellipse cx={cx} cy={cy + bigS * scale * 0.36} rx={bigS * scale * 0.8} ry={bigS * scale * 0.3} fill="#3B82F6" opacity="0.35" style={{ filter: 'blur(20px)' }} />
      <polygon points={poly([bA, bD, bH, bE])} fill="#0E1726" stroke="#1A2A45" strokeWidth="0.8" />
      <polygon points={poly([bD, bC, bG, bH])} fill="#101D32" stroke="#1A2A45" strokeWidth="0.8" />
      <polygon points={poly([bA, bB, bC, bD])} fill="#152544" stroke="#2A3B62" strokeWidth="1" />
      <polygon points={poly([pA, pD, pH, pE])} fill="#0E2C6B" stroke="#3B82F6" strokeOpacity="0.6" strokeWidth="0.8" />
      <polygon points={poly([pD, pC, pG, pH])} fill="#103580" stroke="#3B82F6" strokeOpacity="0.6" strokeWidth="0.8" />
      <polygon points={poly([pA, pB, pC, pD])} fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1" />
      <polygon
        points={poly(
          [pA, pB, pC, pD].map((q) => ({
            x: q.x + (topCenter.x - q.x) * 0.2,
            y: q.y + (topCenter.y - q.y) * 0.2,
          })),
        )}
        fill="#3B82F6"
        fillOpacity="0.55"
        stroke="#93C5FD"
        strokeWidth="0.8"
        strokeOpacity="0.85"
      />
      <ellipse cx={topCenter.x} cy={topCenter.y} rx={innS * scale * 0.55} ry={innS * scale * 0.3} fill="#3B82F6" opacity="0.65" style={{ filter: 'blur(14px)' }} />
    </g>
  );
}

function CircuitPath({ d, color, dur = 3.0, delay = 0 }: { d: string; color: string; dur?: number; delay?: number }) {
  return (
    <g>
      <path d={d} stroke={color} strokeOpacity="0.2" strokeWidth="3.5" fill="none" style={{ filter: 'blur(2px)' }} />
      <path d={d} stroke={color} strokeOpacity="0.85" strokeWidth="1.2" fill="none" />
      <path
        d={d}
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="1.5 7"
        strokeLinecap="round"
        style={{ animation: `cruxFlow ${dur}s linear infinite`, animationDelay: `${delay}s`, opacity: 0.9 }}
      />
      <circle r="2.2" fill={color}>
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} path={d} rotate="auto" />
      </circle>
    </g>
  );
}

type RingCube = {
  wx: number;
  wy: number;
  z: number;
  size: number;
  palette: Palette;
  iconKey: IconKey;
};

const RING: RingCube[] = [
  { wx: -1.8, wy: -4.8, z: 1.6, size: 1.5, palette: P.cyan, iconKey: 'branch' },
  { wx: -0.4, wy: -5.4, z: 2.0, size: 1.5, palette: P.cyan, iconKey: 'crux' },
  { wx: 1.0, wy: -4.8, z: 1.4, size: 1.5, palette: P.pink, iconKey: 'branch' },
  { wx: 2.4, wy: -4.4, z: 1.0, size: 1.5, palette: P.pinkSoft, iconKey: 'branch' },
  { wx: 3.8, wy: -3.8, z: 1.4, size: 1.5, palette: P.pinkSoft, iconKey: 'code' },
  { wx: 4.6, wy: -1.6, z: 0.9, size: 1.5, palette: P.pinkSoft, iconKey: 'branch' },
  { wx: 4.0, wy: 0.4, z: 1.0, size: 1.5, palette: P.teal, iconKey: 'personLayers' },
  { wx: 4.6, wy: 1.8, z: 0.6, size: 1.5, palette: P.teal, iconKey: 'diamond' },
  { wx: 5.0, wy: 3.0, z: 1.2, size: 1.5, palette: P.cyan, iconKey: 'person' },
  { wx: 3.4, wy: 4.2, z: 0.6, size: 1.5, palette: P.blue, iconKey: 'layers' },
  { wx: 1.6, wy: 4.6, z: 0.7, size: 1.5, palette: P.pink, iconKey: 'net' },
  { wx: 0.0, wy: 5.0, z: 0.5, size: 1.5, palette: P.glass, iconKey: 'person' },
  { wx: -1.8, wy: 4.6, z: 0.6, size: 1.5, palette: P.glass, iconKey: 'bars' },
  { wx: -3.2, wy: 4.2, z: 1.0, size: 1.5, palette: P.glass, iconKey: 'wrench' },
  { wx: -4.6, wy: 2.0, z: 0.9, size: 1.5, palette: P.glass, iconKey: 'search' },
  { wx: -4.4, wy: 0.4, z: 0.7, size: 1.5, palette: P.teal, iconKey: 'hex' },
  { wx: -4.4, wy: -1.6, z: 1.1, size: 1.5, palette: P.glass, iconKey: 'branch' },
  { wx: -3.6, wy: -3.4, z: 1.6, size: 1.5, palette: P.glass, iconKey: 'branch' },
];

export function HexDiagram() {
  const CX = 360, CY = 290, SCALE = 23;
  const pedTopWorldZ = 2.0;

  const exit = {
    N: (() => { const p = iso(0, -2.4, 1.0, SCALE); return { x: p.x + CX, y: p.y + CY }; })(),
    S: (() => { const p = iso(0, 2.4, 1.0, SCALE); return { x: p.x + CX, y: p.y + CY }; })(),
    E: (() => { const p = iso(2.4, 0, 1.0, SCALE); return { x: p.x + CX, y: p.y + CY }; })(),
    W: (() => { const p = iso(-2.4, 0, 1.0, SCALE); return { x: p.x + CX, y: p.y + CY }; })(),
  };

  const sideOf = (c: RingCube, side: 'left' | 'right' | 'near' | 'far') => {
    let lx = c.wx, ly = c.wy;
    if (side === 'left') lx = c.wx - c.size / 2;
    if (side === 'right') lx = c.wx + c.size / 2;
    if (side === 'near') ly = c.wy + c.size / 2;
    if (side === 'far') ly = c.wy - c.size / 2;
    const p = iso(lx, ly, c.z + c.size * 0.45, SCALE);
    return { x: p.x + CX, y: p.y + CY };
  };

  const chooseSide = (c: RingCube): 'left' | 'right' | 'near' | 'far' => {
    if (Math.abs(c.wx) > Math.abs(c.wy)) return c.wx > 0 ? 'left' : 'right';
    return c.wy > 0 ? 'far' : 'near';
  };

  const buildCircuitPath = (c: RingCube) => {
    const exitKey: keyof typeof exit =
      Math.abs(c.wx) > Math.abs(c.wy) ? (c.wx > 0 ? 'E' : 'W') : c.wy > 0 ? 'S' : 'N';
    const ex = exit[exitKey];
    const side = chooseSide(c);
    const from = sideOf(c, side);
    if (exitKey === 'E' || exitKey === 'W') {
      const midX = (from.x + ex.x) / 2;
      const bend = { x: midX, y: from.y };
      return { d: `M ${from.x} ${from.y} L ${bend.x} ${bend.y} L ${ex.x} ${ex.y}`, midDot: bend };
    } else {
      const midY = (from.y + ex.y) / 2;
      const bend = { x: from.x, y: midY };
      return { d: `M ${from.x} ${from.y} L ${bend.x} ${bend.y} L ${ex.x} ${ex.y}`, midDot: bend };
    }
  };

  const paths = RING.map((c, i) => {
    const p = buildCircuitPath(c);
    return { ...p, color: c.palette.line, dur: 3.0 + (i % 5) * 0.4, delay: (i * 0.22) % 3 };
  });

  const cubesWithDepth = RING.map((c, i) => ({ ...c, _i: i, depth: c.wx + c.wy }));
  cubesWithDepth.sort((a, b) => a.depth - b.depth);
  const backCubes = cubesWithDepth.filter((c) => c.depth < 0);
  const frontCubes = cubesWithDepth.filter((c) => c.depth >= 0);

  return (
    <svg
      viewBox="0 0 720 580"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block', overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cruxAmbientGlow" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.30" />
          <stop offset="60%" stopColor="#0E1A2E" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0E1A2E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={CX} cy={CY + 60} rx="320" ry="160" fill="url(#cruxAmbientGlow)" />

      {backCubes.map((c) => (
        <GlassCube
          key={`bc-${c._i}`}
          wx={c.wx}
          wy={c.wy}
          wz={c.z}
          size={c.size}
          height={c.size}
          cx={CX}
          cy={CY}
          scale={SCALE}
          palette={c.palette}
          iconKey={c.iconKey}
          glow={0.7}
        />
      ))}

      <Pedestal cx={CX} cy={CY} scale={SCALE} />

      <GlassCube
        wx={0}
        wy={0}
        wz={pedTopWorldZ}
        size={1.7}
        height={1.7}
        cx={CX}
        cy={CY}
        scale={SCALE}
        palette={P.core}
        iconKey="crux"
        faceOpacity={0.35}
        base={false}
        glow={1.0}
        pulse
        pulseDelay={0}
      />

      {paths.map((p, i) => (
        <CircuitPath key={`pa-${i}`} d={p.d} color={p.color} dur={p.dur} delay={p.delay} />
      ))}
      {paths.map((p, i) => (
        <circle key={`jd-${i}`} cx={p.midDot.x} cy={p.midDot.y} r="1.8" fill={p.color} opacity="0.95" />
      ))}

      {frontCubes.map((c) => (
        <GlassCube
          key={`fc-${c._i}`}
          wx={c.wx}
          wy={c.wy}
          wz={c.z}
          size={c.size}
          height={c.size}
          cx={CX}
          cy={CY}
          scale={SCALE}
          palette={c.palette}
          iconKey={c.iconKey}
          glow={0.7}
        />
      ))}
    </svg>
  );
}
