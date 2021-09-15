const maxTurbulenceSize = require('./maxTurbulenceSize');

describe('Max Turbulence Size', () => {
  it('should be a function', () => {
    expect(typeof maxTurbulenceSize).toBe('function');
  });

  it('should return a number', () => {
    const result = maxTurbulenceSize([100]);
    expect(typeof result).toBe('number');
  });

  it('should return 1 for a single element', () => {
    const result = maxTurbulenceSize([100]);
    expect(result).toBe(1);
  });

  it('should count 5', () => {
    const result = maxTurbulenceSize([9,4,2,10,7,8,8,1,9]);
    expect(result).toBe(5);
  });

  it('should count 2', () => {
    const result = maxTurbulenceSize([4,8,12,16]);
    expect(result).toBe(2);
  });

  it('should return 1 for equal elements', () => {
    const result = maxTurbulenceSize([9, 9]);
    expect(result).toBe(1);
  });
});
