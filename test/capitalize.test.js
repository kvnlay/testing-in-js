const capitalize = require('../src/capitalize');

test('capitalize', () => {
  expect(capitalize('boy')).toMatch('Boy');
});

test('capitalize', () => {
  expect(capitalize('musa')).toMatch('Musa');
});

test('capitalize', () => {
  expect(capitalize('kingsley')).not.toMatch('kingsley');
  expect(capitalize('kingsley')).toMatch('Kingsley');
});