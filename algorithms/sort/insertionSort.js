// @ts-check
"use strict";

/**
 * Insertion Sort
 * Builds a sorted array by repeatedly inserting unsorted elements into their correct positions.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function insertionSort(arr) {
	const length = arr.length;
	for (let i = 1; i < length; i++) {
		const current = arr[i];
		let j = i - 1;
		while (j >= 0 && current < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

/**
 * Insertion Sort Non Mutating
 * Copies the array and calls Insertion Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function insertionSortNonMutating(arr) {
	const newArr = [...arr];
	insertionSort(newArr);
	return newArr;
}
