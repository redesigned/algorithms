// @ts-check
"use strict";

/**
 * Quick Sort Iterative
 * Mutates Array In Place. Chooses a pivot, partitions the array, and iterativly sorts the array.
 * @param {number[]} arr - The input array to be sorted.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortIterative(arr) {
	let itr = [[0, arr.length - 1]];
	while (itr.length > 0) {
		let [low, high] = itr.pop();
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
			itr = [[low, pivot - 1], [pivot + 1, high], ...itr];
		}
	}
	return arr;
}

/**
 * Quick Sort Iterative Non Mutating
 * Chooses a pivot, partitions the array, and iterativly sorts the array.
 * @param {number[]} arr - The input array to be sorted.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortIterativeNonMutating(arr) {
	const newArr = [...arr];
	quickSortIterative(newArr);
	return newArr;
}