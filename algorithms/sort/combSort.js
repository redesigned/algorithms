// @ts-check
"use strict";

/**
 * Comb Sort
 * Similar to bubble sort but with a larger gap between compared elements, which reduces the number of swaps.
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} [shrinkFactor=1.3] - The shrink factor (optional, default is 1.3).
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function combSort(arr, shrinkFactor = 1.3) {
	const n = arr.length;
	if (n > 0) {
		let gap = Math.floor(n / shrinkFactor);
		let swapped;
		do {
			swapped = false;
			for (let i = 0; i + gap < n; i++) {
				const j = i + gap;
				if (arr[i] > arr[j]) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
					swapped = true;
				}
			}
			gap = Math.max(1, Math.floor(gap / shrinkFactor));
		} while (gap > 1 || swapped);
	}
	return arr;
}

/**
 * Comb Sort Non Mutating
 * Copies the array and calls Comb Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function combSortNonMutating(arr) {
	const newArr = [...arr];
	combSort(newArr);
	return newArr;
}
