import almostEqual from 'almost-equal';
import { sech } from 'sech';
import { describe, expect, it } from 'vitest';

describe('sech', () => {
  it('calculates the hyperbolic secant', () => {
    expect(sech(0)).toBe(1);
    expect(sech(1)).toBe(0.648_054_273_663_885_5);
    expect(sech(2)).toBe(0.265_802_228_834_079_7);
    expect(sech(3)).toBe(0.099_327_927_419_433_2);
    expect(almostEqual(sech(Math.PI), 0.086_266_738_334_054_43, 1e-16)).toBe(
      true
    );
  });
});
