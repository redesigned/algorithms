import { expect, test } from 'vitest';

/* ## UTILITIES ## */

import { arrayMerge } from './algorithms/util/arrayMerge';
test('Array Merge: O(n)', () => {
	expect(arrayMerge([1, 3, 5],[2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
	expect(arrayMerge([1, 3, 5, 7, 8, 9, 10],[2, 4, 6, 11, 12, 13])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
});

import { arrayOfNumbers } from './algorithms/util/arrayOfNumbers';
test('Array of Numbers: O(n)', () => {
	expect(arrayOfNumbers(4)).toStrictEqual([1, 2, 3, 4]);
	expect(arrayOfNumbers(100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
});

import { arrayRandomShuffle } from './algorithms/util/arrayRandomShuffle';
test('Array Random Shuffle: O(n)', () => {
	const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const shuffledArray = arrayRandomShuffle(inputArray);
	const shuffledArray2 = arrayRandomShuffle(inputArray);
	expect(shuffledArray).toHaveLength(inputArray.length);
	expect(shuffledArray2).toHaveLength(inputArray.length);
	inputArray.forEach((item) => {
		expect(shuffledArray).toContain(item);
		expect(shuffledArray2).toContain(item);
	});
	expect(shuffledArray).not.toEqual(inputArray);
	expect(shuffledArray2).not.toEqual(inputArray);
	expect(shuffledArray).not.toEqual(shuffledArray2);
});