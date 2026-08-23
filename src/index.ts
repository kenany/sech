import { cosh } from 'cosh';

/**
 * Calculates the hyperbolic secant of a number.
 *
 * @param x The number to calculate the hyperbolic secant of.
 * @returns The hyperbolic secant of `x`.
 *
 * @example
 * ```javascript
 * import { sech } from 'sech';
 *
 * sech(Math.PI);
 * // => 0.08626673833405443
 * ```
 */
export function sech(x: number): number {
  return 1 / cosh(x);
}
