// @ts-check
"use strict";

/**
 * Quick Sort Recursive Algorithm
 * Chooses a pivot, partitions the array, and recursively sorts the subarrays.
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 */
export function quickSortRecursive(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const pivotIndex = Math.floor(arr.length / 2);
	const pivotValue = arr[pivotIndex];
	const smallerArr = [];
	const largerArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i !== pivotIndex) {
			if (arr[i] < pivotValue) {
				smallerArr.push(arr[i]);
			} else {
				largerArr.push(arr[i]);
			}
		}
	}
	return [...quickSortRecursive(smallerArr), pivotValue, ...quickSortRecursive(largerArr)];
}