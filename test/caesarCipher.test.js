const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher', () => {
  test('wrapping from z to a', () => {
    expect(caesarCipher('zoo', 1)).toMatch('app');
  });

  test('keeping the same case', () => {
    expect(caesarCipher('BinD', 1).toMatch('CjoE'));
  });

  test('punctuation', () => {
    expect(caesarCipher('zoo! BinD', 1)).toMatch('app! CjoE');
  });
});
