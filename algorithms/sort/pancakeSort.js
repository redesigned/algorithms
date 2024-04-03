// @ts-check
"use strict";

/**
 * Pancake Sort
 * Moves elements backward if they’re in the wrong order
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function pancakeSort(arr) {
	for (let i = arr.length - 1; i >= 1; i--) {
		let max_idx = 0;
		let max_val = arr[0];
		for (let j = 1; j <= i; j++) {
			if (arr[j] > max_val) {
				max_val = arr[j];
				max_idx = j;
			}
		}
		if (max_idx !== i) {
			let start = 0;
			let end = max_idx;
			while (start < end) {
				[arr[start], arr[end]] = [arr[end], arr[start]];
				start++;
				end--;
			}
			start = 0;
			end = i;
			while (start < end) {
				[arr[start], arr[end]] = [arr[end], arr[start]];
				start++;
				end--;
			}
		}
	}
	return arr;
}

/**
 * Pancake Sort Non Mutating
 * Copies the array and calls Pancake Sort on the copy
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n²)
 */
export function pancakeSortNonMutating(arr) {
	const newArr = [...arr];
	pancakeSort(newArr);
	return newArr;
}
