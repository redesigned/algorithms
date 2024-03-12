import { expect, test } from 'vitest';

/* ## SEARCHES ## */

import { linearSearch } from './algorithms/search/linearSearch';
test('Linear Search: O(n)', () => {
	expect(linearSearch([], 5)).toBe(-1);
	expect(linearSearch([1, 9, 3, 4, 7, 0], 5)).toBe(-1);
	expect(linearSearch([1, 9, 3, 4, 7, 0], 7)).toBe(4);
	expect(linearSearch([1, 9, 3, 4, 7, 0], 1)).toBe(0);
	expect(linearSearch([1, 9, 3, 4, 7, 0], 0)).toBe(5);
});

import { jumpSearch } from './algorithms/search/jumpSearch';
test('Jump Search: O(√n)', () => {
	expect(jumpSearch([], 5)).toBe(-1);
	expect(jumpSearch([1], 1)).toBe(0);
	expect(jumpSearch([1, 3], 1)).toBe(0);
	expect(jumpSearch([1, 3, 5, 7, 9], 1)).toBe(0);
	expect(jumpSearch([1, 3, 5, 7, 9], 5)).toBe(2);
	expect(jumpSearch([3, 5, 7, 9], 9)).toBe(3);
	expect(jumpSearch([1, 3, 5, 7, 9], 2)).toBe(-1);
	expect(jumpSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8);
});

import { binarySearch } from './algorithms/search/binarySearch';
test('Binary Search: O(log(n))', () => {
	expect(binarySearch([], 5)).toBe(-1);
	expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
	expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
	expect(binarySearch([3, 5, 7, 9], 9)).toBe(3);
	expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
});