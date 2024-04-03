// @ts-check
"use strict";

/**
 * Selection Sort
 * Mutates Array In Place. AFinds the smallest element and places it at the beginning, then repeats the process for the remaining elements.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function selectionSort(arr) {
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min !== i) {
			const tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
	return arr;
}

/**
 * Selection Sort Non Mutating
 * Copies the array and calls Selection Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function selectionSortNonMutating(arr) {
	const newArr = [...arr];
	selectionSort(newArr);
	return newArr;
}
