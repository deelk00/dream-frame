import { Test } from '../index';

const t = new Test();
t.test = "awd";

test('Test', () => {
  expect(t.test).toBe('awd');
});