// @ts-check
"use strict";

/**
 * Bubble Sort
 * Repeatedly compares adjacent elements and swaps them if they’re in the wrong order.
 * @param {number[]} myArray - The array to be sorted.
 * @returns {number[]} - The sorted array.
 * @complexity O(n²)
 */
export function bubbleSort(myArray) {
	const arr = [...myArray];
	const length = arr.length - 1;
	let swapped = true; // swap tracking adds extra efficiency for early abort
	for (let i = 0; i <= length && swapped == true; ++i) {
		swapped = false;
		for (let j = 0; j <= length - 1 - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				// note: using a tmp variable provides slight efficiency gain over destructuring
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
				swapped = true;
			}
		}
	}
	return arr;
}