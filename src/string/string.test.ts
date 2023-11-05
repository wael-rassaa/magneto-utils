import { expect, test } from 'vitest';
import { toTitleCase } from '.';

test('title case of hello', () => {
  expect(toTitleCase('hello')).toStrictEqual('Hello');
});
