// @ts-check
"use strict";

/**
 * Gnome Sort
 * Compare adjacent elements. If they are out of order, swap them. Move the gnome one step backward
 * @param {number[]} myArray - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function gnomeSort(myArray) {
	const arr = [...myArray];
	let pos = 0;
	while (pos < arr.length) {
		if (pos === 0 || arr[pos] >= arr[pos - 1]) {
			pos++;
		} else {
			// Swap adjacent elements
			[arr[pos], arr[pos - 1]] = [arr[pos - 1], arr[pos]];
			pos--;
		}
	}
	return arr;
}