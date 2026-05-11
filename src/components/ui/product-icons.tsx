import type { SVGProps } from 'react';
import { YOKE_PATH } from './brand-mark';

/**
 * Hand-authored SVG product icons. Each icon is a container shape (monitor,
 * cube, hexagon, cloud, shield, cart) with the real Joch yoke silhouette
 * embedded inside. Per-product accent colors match the brand sample sheet.
 *
 * The yoke path uses the same `YOKE_PATH` constant traced from
 * `assets/joch_logo_no_text_white_bg.png`, scaled and translated per icon.
 */

const COMMON: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 240 240',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/**
 * Renders the yoke silhouette centered at (cx, cy), scaled to `width` pixels
 * wide. The path natural size is 200 × 130 (aspect 1.538). We translate the
 * origin so (cx, cy) is the center of the bounding box, then scale.
 */
function Yoke({
  cx,
  cy,
  width,
  color,
}: {
  cx: number;
  cy: number;
  width: number;
  color: string;
}) {
  const scale = width / 200;
  const height = 130 * scale;
  const tx = cx - width / 2;
  const ty = cy - height / 2;
  return (
    <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
      <path d={YOKE_PATH} fill={color} />
    </g>
  );
}

export function ConsoleIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#7C8AFF';
  return (
    <svg {...COMMON} {...props}>
      {/* monitor frame */}
      <rect
        x="32"
        y="48"
        width="176"
        height="116"
        rx="10"
        stroke={accent}
        strokeWidth="6"
      />
      {/* title bar */}
      <line x1="32" y1="74" x2="208" y2="74" stroke={accent} strokeWidth="3" opacity="0.5" />
      <circle cx="46" cy="61" r="2.8" fill={accent} />
      <circle cx="56" cy="61" r="2.8" fill={accent} opacity="0.6" />
      <circle cx="66" cy="61" r="2.8" fill={accent} opacity="0.4" />
      {/* stand */}
      <rect x="108" y="164" width="24" height="16" fill={accent} />
      <rect x="78" y="178" width="84" height="6" rx="3" fill={accent} />
      {/* yoke inside */}
      <Yoke cx={120} cy={118} width={120} color={accent} />
    </svg>
  );
}

export function RegistryIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#A78BFA';
  return (
    <svg {...COMMON} {...props}>
      {/* isometric cube */}
      <path
        d="M120 32 L200 76 L200 164 L120 208 L40 164 L40 76 Z"
        stroke={accent}
        strokeWidth="6"
      />
      <path d="M120 32 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      <path d="M40 76 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      <path d="M200 76 L120 120" stroke={accent} strokeWidth="4" opacity="0.45" />
      {/* tag dots on top */}
      <circle cx="80" cy="58" r="3" fill={accent} />
      <circle cx="120" cy="48" r="3" fill={accent} />
      <circle cx="160" cy="58" r="3" fill={accent} />
      {/* yoke on the front face */}
      <Yoke cx={120} cy={162} width={104} color={accent} />
    </svg>
  );
}

export function OperatorIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#F59E0B';
  return (
    <svg {...COMMON} {...props}>
      {/* hexagon */}
      <path
        d="M120 22 L210 74 L210 166 L120 218 L30 166 L30 74 Z"
        stroke={accent}
        strokeWidth="6"
      />
      {/* inner hex */}
      <path
        d="M120 60 L172 92 L172 148 L120 180 L68 148 L68 92 Z"
        stroke={accent}
        strokeWidth="3"
        opacity="0.35"
      />
      {/* corner nodes */}
      <circle cx="120" cy="22" r="5" fill={accent} />
      <circle cx="210" cy="74" r="5" fill={accent} />
      <circle cx="210" cy="166" r="5" fill={accent} />
      <circle cx="120" cy="218" r="5" fill={accent} />
      <circle cx="30" cy="166" r="5" fill={accent} />
      <circle cx="30" cy="74" r="5" fill={accent} />
      {/* yoke at center */}
      <Yoke cx={120} cy={120} width={112} color={accent} />
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#60A5FA';
  return (
    <svg {...COMMON} {...props}>
      {/* cloud silhouette */}
      <path
        d="M68 138
           a44 44 0 0 1 88 -22
           a36 36 0 0 1 32 64
           h-132
           a32 32 0 0 1 12 -42 z"
        stroke={accent}
        strokeWidth="6"
      />
      <path
        d="M84 138 a32 32 0 0 1 64 -16"
        stroke={accent}
        strokeWidth="3"
        opacity="0.35"
      />
      {/* yoke inside cloud */}
      <Yoke cx={120} cy={150} width={108} color={accent} />
    </svg>
  );
}

export function EnterpriseIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#34D399';
  return (
    <svg {...COMMON} {...props}>
      {/* shield */}
      <path
        d="M120 26
           L200 56
           L200 124
           Q200 178 120 214
           Q40 178 40 124
           L40 56 Z"
        stroke={accent}
        strokeWidth="6"
      />
      {/* check accent */}
      <path
        d="M88 118 L112 142 L160 92"
        stroke={accent}
        strokeWidth="5"
        opacity="0.4"
      />
      {/* yoke */}
      <Yoke cx={120} cy={122} width={108} color={accent} />
    </svg>
  );
}

export function MarketplaceIcon(props: SVGProps<SVGSVGElement>) {
  const accent = '#FBBF24';
  return (
    <svg {...COMMON} {...props}>
      {/* cart frame */}
      <path
        d="M44 52 L72 52 L92 156 L192 156"
        stroke={accent}
        strokeWidth="6"
      />
      <path
        d="M82 98 L200 98 L186 146 L94 146"
        stroke={accent}
        strokeWidth="6"
      />
      {/* wheels */}
      <circle cx="106" cy="186" r="12" stroke={accent} strokeWidth="5" />
      <circle cx="176" cy="186" r="12" stroke={accent} strokeWidth="5" />
      {/* yoke on basket */}
      <Yoke cx={141} cy={122} width={92} color={accent} />
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
