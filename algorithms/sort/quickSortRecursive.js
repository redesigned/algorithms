// @ts-check
"use strict";

/**
 * Quick Sort Pivot
 * Chooses a pivot, partitions the array, and iterativly sorts the elements to either side of the pivot.  Mutates the array passed to it, to be used by Quick Sort Iterative Algorithm
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} start - The low index.
 * @param {number} end - The high index.
 * @return {number} - The pivot.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
function pivot(arr, start = 0, end = arr.length + 1) {
	const swap = (list, a, b) => { if (list[a] && list[b]) {[list[a], list[b]] = [list[b], list[a]]; } }
	let pivot = arr[start],
		pointer = start;
	for (let i = start; i < arr.length; i++) {
		if (arr[i] < pivot  ) {
			pointer++;
			swap(arr, pointer, i);
		}
	};
	swap(arr, start, pointer);
	return pointer;
}

/**
 * Quick Sort Recursive Algorithm
 * Chooses a pivot, partitions the array, and iterativly sorts the array.
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} start - The low index.
 * @param {number} end - The high index.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortRecursive(arr, start = 0, end = arr.length - 1) {
	if (arr.length === 0) {
		return arr;
	}
	let pivotIndex = pivot(arr, start, end);
	if (start >= end) return arr;
	quickSortRecursive(arr, start, pivotIndex);
	quickSortRecursive(arr, pivotIndex + 1, end);
	return arr;
}
