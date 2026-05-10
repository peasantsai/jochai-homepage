import type { SVGProps } from 'react';

/**
 * Joch yoke logomark — vector recreation matching the brand sample sheet.
 * Theme-aware via currentColor.
 */
export function BrandMark({ size = 28, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 40"
      width={size}
      height={(size * 40) / 64}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {/* Crossbar of the yoke */}
      <rect x="6" y="14" width="52" height="6" rx="1" />
      {/* Left arm + collar */}
      <path d="M6 20 L6 30 L14 30 L14 22 Z" />
      <rect x="10" y="28" width="8" height="6" rx="1" />
      {/* Right arm + collar */}
      <path d="M58 20 L58 30 L50 30 L50 22 Z" />
      <rect x="46" y="28" width="8" height="6" rx="1" />
      {/* Center post */}
      <rect x="29" y="6" width="6" height="14" rx="1" />
    </svg>
  );
}
