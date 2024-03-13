import { expect, test } from 'vitest';

/* ## SORTS ## */

import { bubbleSort } from './algorithms/sort/bubbleSort';
test('Bubble Sort: O(n²)', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([9])).toStrictEqual([9]);
	expect(bubbleSort([1, 3])).toStrictEqual([1, 3]);
	expect(bubbleSort([3, 1])).toStrictEqual([1, 3]);
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

import { quickSort } from './algorithms/sort/quickSort';
test('Quick Sort: O(n log(n)) to O(n²)', () => {
	expect(quickSort([])).to.be.empty;
	expect(quickSort([9])).toStrictEqual([9]);
	expect(quickSort([1, 3])).toStrictEqual([1, 3]);
	expect(quickSort([3, 1])).toStrictEqual([1, 3]);
	expect(quickSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

import { javascriptSort } from './algorithms/sort/javascriptSort';
test('QJavasscript Built In Sort: O(n log(n)) to O(n²)', () => {
	expect(javascriptSort([])).to.be.empty;
	expect(javascriptSort([9])).toStrictEqual([9]);
	expect(javascriptSort([1, 3])).toStrictEqual([1, 3]);
	expect(javascriptSort([3, 1])).toStrictEqual([1, 3]);
	expect(javascriptSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});