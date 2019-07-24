const reverseString = require('../src/reverseString');

test('reverseString', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('reverseString', () => {
  expect(reverseString('goodbye')).toMatch('eybdoog');
});
