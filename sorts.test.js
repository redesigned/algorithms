import { expect, test } from 'vitest';

/* ## SORTS ## */

/* # Complexity: O(N²) */
import { bubbleSort } from './algorithms/bubbleSort';
test('Bubble Sort', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
});