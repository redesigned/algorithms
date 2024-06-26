// @ts-check
"use strict";

/**
 * Shell Sort
 * Mutates Array In Place. An extension of insertion sort that compares elements separated by a fixed gap and gradually reduces the gap until it becomes 1.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function shellSort(arr) {
	const n = arr.length;
	let gap = Math.floor(n / 2);
	while (gap > 0) {
		for (let i = gap; i < n; i++) {
			const temp = arr[i];
			let j = i;
			while (j >= gap && arr[j - gap] > temp) {
				arr[j] = arr[j - gap];
				j -= gap;
			}
			arr[j] = temp;
		}
		gap = Math.floor(gap / 2);
	}
	return arr;
}

/**
 * Shell Sort Non Mutating
 * Copies the array and calls Shell Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function shellSortNonMutating(arr) {
	const newArr = [...arr];
	shellSort(newArr);
	return newArr;
}
