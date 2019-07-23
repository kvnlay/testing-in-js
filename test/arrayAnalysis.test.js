const analyze = require('../src/arrayAnalysis');

describe('analyze', () => {
  test('average', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average).toEqual(4);
    expect(analyze([8, 2]).average).toEqual(5);
    expect(analyze([8]).average).toEqual(8);
    expect(analyze([]).average).toEqual(0);
  });

  test('min', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).min).toEqual(5);
    expect(analyze([8, 2]).min).toEqual(2);
    expect(analyze([8]).min).toEqual(8);
    expect(analyze([]).min).toEqual(0);
  });

  test('max', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).max).toEqual(8);
    expect(analyze([8, 2]).max).toEqual(8);
    expect(analyze([8]).max).toEqual(8);
    expect(analyze([]).max).toEqual(0);
  });

  test('length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toEqual(6);
    expect(analyze([8, 2]).length).toEqual(2);
    expect(analyze([8]).length).toEqual(1);
    expect(analyze([]).length).toEqual(0);
  });
});
