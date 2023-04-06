let dateParser = require('../src/utils');

test('Parses date string in 1/2/2023 format to 2023-1-2', () => {
  expect(dateParser('1/2/2023')).toBe('2023-01-02');
});

// const sum = require('./utils');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
