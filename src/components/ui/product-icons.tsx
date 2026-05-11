import type { SVGProps } from 'react';

/**
 * Hand-authored SVG product icons. Per-product accent colors match the brand
 * sample sheet; outline / strokes use currentColor so the surrounding card
 * theme can tint them.
 */

const COMMON: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 240 240',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/* The yoke "head" mark — used inside every product icon to anchor the brand. */
function YokeHead({
  cx = 120,
  cy = 132,
  scale = 1,
  color,
}: {
  cx?: number;
  cy?: number;
  scale?: number;
  color: string;
}) {
  const w = 56 * scale;
  const h = 26 * scale;
  return (
    <g transform={`translate(${cx - w / 2} ${cy - h / 2})`}>
      <rect x="0" y="0" width={w} height={h * 0.45} rx={2 * scale} fill={color} />
      <path d={`M0 ${h * 0.45} L0 ${h} L${w * 0.22} ${h} L${w * 0.22} ${h * 0.6} Z`} fill={color} />
      <path
        d={`M${w} ${h * 0.45} L${w} ${h} L${w * 0.78} ${h} L${w * 0.78} ${h * 0.6} Z`}
        fill={color}
      />
      <rect
        x={w * 0.45}
        y={-h * 0.5}
        width={w * 0.1}
        height={h * 0.95}
        rx={1 * scale}
        fill={color}
      />
    </g>
  );
}

export function ConsoleIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#7C8AFF';
  return (
    <svg {...COMMON} {...props}>
      {/* monitor frame */}
      <rect
        x="36"
        y="48"
        width="168"
        height="112"
        rx="10"
        stroke={accent}
        strokeWidth="6"
      />
      {/* title bar */}
      <line x1="36" y1="72" x2="204" y2="72" stroke={accent} strokeWidth="3" opacity="0.5" />
      <circle cx="48" cy="60" r="2.5" fill={accent} />
      <circle cx="58" cy="60" r="2.5" fill={accent} opacity="0.6" />
      <circle cx="68" cy="60" r="2.5" fill={accent} opacity="0.4" />
      {/* stand */}
      <rect x="108" y="160" width="24" height="16" fill={accent} />
      <rect x="80" y="174" width="80" height="6" rx="3" fill={accent} />
      {/* yoke head inside */}
      <YokeHead cx={120} cy={116} scale={1.05} color={accent} />
    </svg>
  );
}

export function RegistryIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#A78BFA';
  return (
    <svg {...COMMON} {...props}>
      {/* isometric cube */}
      <path d="M120 36 L196 78 L196 162 L120 204 L44 162 L44 78 Z" stroke={accent} strokeWidth="6" />
      <path d="M120 36 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      <path d="M44 78 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      <path d="M196 78 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      {/* version dots on top edge */}
      <circle cx="80" cy="60" r="3" fill={accent} />
      <circle cx="120" cy="50" r="3" fill={accent} />
      <circle cx="160" cy="60" r="3" fill={accent} />
      {/* yoke head on cube face */}
      <YokeHead cx={120} cy={158} scale={0.95} color={accent} />
    </svg>
  );
}

export function OperatorIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#F59E0B';
  return (
    <svg {...COMMON} {...props}>
      {/* hexagon */}
      <path
        d="M120 24 L208 76 L208 164 L120 216 L32 164 L32 76 Z"
        stroke={accent}
        strokeWidth="6"
      />
      {/* inner hex grid */}
      <path
        d="M120 60 L172 92 L172 148 L120 180 L68 148 L68 92 Z"
        stroke={accent}
        strokeWidth="3"
        opacity="0.35"
      />
      {/* small connection nodes */}
      <circle cx="120" cy="24" r="5" fill={accent} />
      <circle cx="208" cy="76" r="5" fill={accent} />
      <circle cx="208" cy="164" r="5" fill={accent} />
      <circle cx="120" cy="216" r="5" fill={accent} />
      <circle cx="32" cy="164" r="5" fill={accent} />
      <circle cx="32" cy="76" r="5" fill={accent} />
      <YokeHead cx={120} cy={120} scale={1.05} color={accent} />
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#60A5FA';
  return (
    <svg {...COMMON} {...props}>
      {/* cloud silhouette */}
      <path
        d="M72 132
           a44 44 0 0 1 88 -22
           a36 36 0 0 1 28 64
           h-128
           a32 32 0 0 1 12 -42 z"
        stroke={accent}
        strokeWidth="6"
      />
      <path
        d="M88 132 a32 32 0 0 1 64 -16"
        stroke={accent}
        strokeWidth="3"
        opacity="0.35"
      />
      {/* yoke head inside cloud */}
      <YokeHead cx={120} cy={142} scale={0.95} color={accent} />
    </svg>
  );
}

export function EnterpriseIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#34D399';
  return (
    <svg {...COMMON} {...props}>
      {/* shield */}
      <path
        d="M120 28
           L196 56
           L196 120
           Q196 176 120 212
           Q44 176 44 120
           L44 56 Z"
        stroke={accent}
        strokeWidth="6"
      />
      {/* check mark accent */}
      <path
        d="M88 116 L112 140 L160 92"
        stroke={accent}
        strokeWidth="5"
        opacity="0.4"
      />
      <YokeHead cx={120} cy={120} scale={1.0} color={accent} />
    </svg>
  );
}

export function MarketplaceIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#FBBF24';
  return (
    <svg {...COMMON} {...props}>
      {/* cart body */}
      <path
        d="M48 52 L72 52 L92 152 L188 152"
        stroke={accent}
        strokeWidth="6"
      />
      <path
        d="M82 96 L196 96 L184 144 L92 144"
        stroke={accent}
        strokeWidth="6"
      />
      {/* wheels */}
      <circle cx="104" cy="184" r="12" stroke={accent} strokeWidth="5" />
      <circle cx="172" cy="184" r="12" stroke={accent} strokeWidth="5" />
      <YokeHead cx={140} cy={120} scale={0.95} color={accent} />
    </svg>
  );
}

export const PRODUCT_ICONS = {
  console: ConsoleIcon,
  registry: RegistryIcon,
  operator: OperatorIcon,
  cloud: CloudIcon,
  enterprise: EnterpriseIcon,
  marketplace: MarketplaceIcon,
} as const;

export type ProductSlug = keyof typeof PRODUCT_ICONS;
