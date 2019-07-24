const calculator = require('../src/calculator');

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(5, 5)).toEqual(10);
  });

  test('subtract', () => {
    expect(calculator.subtract(10, 5)).toEqual(5);
  });

  test('divide', () => {
    expect(calculator.divide(10, 5)).toEqual(2);
  });

  test('multiply', () => {
    expect(calculator.multiply(10, 5)).toEqual(50);
  });
});
