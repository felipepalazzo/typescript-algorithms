import { twoNumberSum } from './twoNumSum';

test('twoNumberSum', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target1 = 17;

  const arr2 = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
  const target2 = 164;

  expect(twoNumberSum(arr1, target1)).toEqual([8, 9]);
  expect(twoNumberSum(arr2, target2)).toEqual([]);
});
