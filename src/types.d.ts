declare module 'almost-equal' {
  function almostEqual(
    a: number,
    b: number,
    absoluteTolerance?: number,
    relativeTolerance?: number
  ): boolean;
  export = almostEqual;
}
