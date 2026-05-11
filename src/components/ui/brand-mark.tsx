import type { SVGProps } from 'react';

/**
 * Joch yoke logomark — vector recreation closely matching the brand sample
 * sheet: a horizontal crossbar with two outward-flaring collars and a
 * center post. Theme-aware via currentColor.
 */
export function BrandMark({ size = 28, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 50"
      width={size}
      height={(size * 50) / 80}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {/* Crossbar */}
      <rect x="4" y="18" width="72" height="9" rx="1.5" />
      {/* Left flare */}
      <path d="M4 27 L4 38 Q4 40 6 40 L18 40 Q20 40 20 38 L20 28 Z" />
      {/* Left collar */}
      <rect x="9" y="38" width="11" height="8" rx="1" />
      {/* Right flare */}
      <path d="M76 27 L76 38 Q76 40 74 40 L62 40 Q60 40 60 38 L60 28 Z" />
      {/* Right collar */}
      <rect x="60" y="38" width="11" height="8" rx="1" />
      {/* Center post (hitch) */}
      <rect x="36" y="6" width="8" height="14" rx="1.5" />
      {/* Top cap on hitch */}
      <rect x="33" y="3" width="14" height="5" rx="1" />
    </svg>
  );
}
