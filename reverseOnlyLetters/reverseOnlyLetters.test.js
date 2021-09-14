const reverseOnlyLetters = require('./reverseOnlyLetters');

describe('Reverse Only Letter', () => {
  it('should be a function', () => {
    expect(typeof reverseOnlyLetters).toBe('function');
  });

  it('should return a string', () => {
    const result = reverseOnlyLetters('');
    expect(typeof result).toBe('string');
    expect(result).toEqual('');
  });

  it('should swap 5 chars', () => {
    const result = reverseOnlyLetters('ab-cd');
    const expected = 'dc-ba';
    expect(result).toEqual(expected);
  });

  it('should swap 13 chars', () => {
    const result = reverseOnlyLetters('a-bC-dEf-ghIj');
    const expected = 'j-Ih-gfE-dCba';
    expect(result).toEqual(expected);
  });

  it('should swap 20 chars', () => {
    const result = reverseOnlyLetters('Test1ng-Leet=code-Q!');
    const expected = 'Qedo1ct-eeLg=ntse-T!';
    expect(result).toEqual(expected);
  });
});
