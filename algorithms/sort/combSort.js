// @ts-check
"use strict";

/**
 * Comb Sort
 * Similar to bubble sort but with a larger gap between compared elements, which reduces the number of swaps.
 * @param {number[]} myArray - The input array to be sorted.
 * @param {number} [shrinkFactor=1.3] - The shrink factor (optional, default is 1.3).
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function combSort(myArray, shrinkFactor = 1.3) {
	const arr = [...myArray];
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