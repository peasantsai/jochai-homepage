import type { SVGProps } from 'react';

/**
 * The official Joch yoke logomark — verbatim from the brand asset
 * (500×500 viewBox, PostScript-flipped Y via the `<g>` transform wrapper).
 *
 * Theme-aware via currentColor.
 */

export const YOKE_VIEWBOX = '0 0 500 500';
export const YOKE_TRANSFORM = 'translate(0,500) scale(0.1,-0.1)';
export const YOKE_PATH =
  'M310 2970 l0 -300 293 0 c160 0 297 -4 302 -8 9 -6 110 -119 208 -232 17 -19 72 -80 122 -135 51 -55 138 -152 193 -215 l102 -115 0 -407 c0 -224 4 -409 8 -412 7 -4 363 -85 464 -106 21 -4 40 -5 43 -2 3 3 5 258 5 566 0 309 0 567 0 574 0 10 98 12 473 10 l472 -3 3 -578 2 -577 23 4 c12 3 60 14 107 25 164 37 226 52 305 69 l80 18 3 411 2 412 52 58 c29 32 105 114 168 183 64 69 176 193 249 275 74 83 143 158 154 168 17 15 48 17 318 17 l299 0 -2 298 -3 297 -447 3 -447 2 -54 -62 c-111 -127 -221 -255 -294 -343 -41 -49 -79 -94 -84 -99 -5 -6 -360 -10 -895 -10 l-887 -1 -136 155 c-75 85 -172 197 -216 249 -44 51 -90 97 -103 102 -13 5 -217 9 -453 9 l-429 0 0 -300z';

export function BrandMark({
  size = 36,
  ...rest
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={YOKE_VIEWBOX}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <g transform={YOKE_TRANSFORM}>
        <path d={YOKE_PATH} />
      </g>
    </svg>
  );
}
