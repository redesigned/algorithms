import { expect, test } from 'vitest';

/* ## SORTS ## */

import { bubbleSort } from './algorithms/sort/bubbleSort';
test('Bubble Sort: O(n²)', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
});