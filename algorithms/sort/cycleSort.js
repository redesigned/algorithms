// @ts-check
"use strict";

/**
 * Cycle Sort
 * Minimizes the number of writes to the array by cyclically rotating elements to their correct positions.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function cycleSort(arr) {
	const n = arr.length;
	for (let start = 0; start < n - 1; start++) {
		let item = arr[start];
		let pos = start;
		for (let i = start + 1; i < n; i++) {
			if (arr[i] < item) {
				pos++;
			}
		}
		if (pos === start) {
			continue;
		}
		while (item === arr[pos]) {
			pos++;
		}
		[item, arr[pos]] = [arr[pos], item];
		while (pos !== start) {
			pos = start;
			for (let i = start + 1; i < n; i++) {
				if (arr[i] < item) {
					pos++;
				}
			}
			while (item === arr[pos]) {
				pos++;
			}
			[item, arr[pos]] = [arr[pos], item];
		}
	}
	return arr;
}

/**
 * Cycle Sort Non Mutating
 * Copies the array and calls Cycle Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function cycleSortNonMutating(arr) {
	const newArr = [...arr];
	cycleSort(newArr);
	return newArr;
}
