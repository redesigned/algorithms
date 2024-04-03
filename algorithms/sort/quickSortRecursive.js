// @ts-check
"use strict";

/**
 * Quick Sort Recursive
 * Mutates Array In Place. Chooses a pivot, partitions the array, and recursivly sorts the array.
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} low - The low index.
 * @param {number} high - The high index.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortRecursive(arr, low = 0, high = arr.length - 1) {
	if (low <= high) {
		let pivot = high;
		for (let i = low; i <= high && i < pivot; ++i) {
			while (i < pivot && arr[i] > arr[pivot]) {
				if (i < pivot - 1) {
					[arr[pivot - 1], arr[i], arr[pivot]] = [arr[pivot], arr[pivot - 1], arr[i]];
				} else {
					[arr[i], arr[pivot]] = [arr[pivot], arr[i]];
				}
				pivot -= 1;
			}
		}
		quickSortRecursive(arr, low, pivot - 1);
		quickSortRecursive(arr, pivot + 1, high);
	}
	return arr;
}

/**
 * Quick Sort Recursive Non Mutating
 * Chooses a pivot, partitions the array, and recursivly sorts the array.
 * @param {number[]} arr - The input array to be sorted.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortRecursiveNonMutating(arr) {
	const newArr = [...arr];
	quickSortRecursive(newArr, 0, newArr.length - 1);
	return newArr;
}
