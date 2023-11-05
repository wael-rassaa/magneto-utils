import { expect, test } from 'vitest';
import { pluck } from '.';

const test_array = [
  { name: 'Name 1', age: 24 },
  { name: 'Name 2', age: 2 },
];

test('pluck array', () => {
  expect(pluck(test_array, 'name')).toStrictEqual(['Name 1', 'Name 2']);
});
