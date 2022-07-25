/*
    VALID SUBSEQUENCE

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.


  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4]  form a subsequence of the array [1, 2, 3, 4]
*/
export function isValidSubsequence(
  array: number[],
  sequence: number[]
): boolean {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      j++;
    }
  }

  return j === sequence.length;
}
