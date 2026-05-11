import type { SVGProps } from 'react';

/**
 * The Joch yoke logomark. A single connected silhouette traced from the
 * official brand asset `joch_logo_no_text_white_bg.png`:
 *   - horizontal crossbar at top with chamfered outer ends
 *   - two rectangular legs hanging from the crossbar
 *   - a small center peg between the legs
 *
 * Theme-aware via currentColor; only ratio is fixed.
 */

export const YOKE_VIEWBOX = '0 0 200 130';
export const YOKE_PATH =
  'M10 25 L190 25 L175 65 L175 110 L140 110 L140 65 L118 65 L118 110 L82 110 L82 65 L60 65 L60 110 L25 110 L25 65 Z';

export function BrandMark({
  size = 28,
  ...rest
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={YOKE_VIEWBOX}
      width={size}
      height={(size * 130) / 200}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d={YOKE_PATH} />
    </svg>
  );
}
