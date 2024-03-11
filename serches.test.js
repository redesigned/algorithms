import { expect, test } from 'vitest';

/* ## SEARCHES ## */

/* # Complexity: O(N) */
import { binarySearch } from './algorithms/binarySearch';
test('Binary Search', () => {
	expect(binarySearch([], 5)).toBe(-1);
	expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
	expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
	expect(binarySearch([3, 5, 7, 9], 9)).toBe(3);
	expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
});