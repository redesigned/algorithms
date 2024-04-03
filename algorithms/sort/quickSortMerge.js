// @ts-check
"use strict";

/**
 * Quick Sort Merge Non Mutating
 * Non Mutating. Chooses a pivot, partitions the array, and recursively sorts the subarrays through merging.
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortMergeNonMutating(arr) {
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
	return [...quickSortMerge(smallerArr), pivotValue, ...quickSortMerge(largerArr)];
}

/**
 * Quick Sort Merge
 * Mutates the original array with the results from the Non Mutating Quick Sort Merge
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortMerge(arr) {
	const newArr = [...quickSortMergeNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}