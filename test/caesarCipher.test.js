const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher', () => {
  test('wrapping from z to a', () => {
    expect(caesarCipher('zoo', 1)).toMatch('app');
    expect(caesarCipher('z', 1)).not.toMatch('A');
  });

  test('keeping the same case', () => {
    expect(caesarCipher('BinD', 1)).toMatch('CjoE');
    expect(caesarCipher('BIND', 1)).toMatch('CJOE');
  });

  test('punctuation', () => {
    expect(caesarCipher('zoo! BinD', 1)).toMatch('app! CjoE');
    expect(caesarCipher('! @.., "', 1)).toMatch('! @.., "');
  });
});
