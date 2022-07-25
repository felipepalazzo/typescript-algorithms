import { isValidSubsequence } from './validSubsequence';

test('isValidSubsequence', () => {
  const arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
  const seq1 = [1, 6, -1, 10];

  const arr2 = [5, 1, 22, 25, 6, -1, 8, 10];
  const seq2 = [22, 25, 6];

  const arr3 = [5, 1, 22, 25, 6, -1, 8, 10];
  const seq3 = [5, 1, 22, 22, 25, 6, -1, 8, 10];

  expect(isValidSubsequence(arr1, seq1)).toBe(true);
  expect(isValidSubsequence(arr2, seq2)).toBe(true);
  expect(isValidSubsequence(arr3, seq3)).toBe(false);
});
