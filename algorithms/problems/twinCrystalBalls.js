// @ts-check
"use strict";

/**
 * Twin Crystal Balls
 * Finds the index of the first true value in the array using a jump search approach.
 * @param {boolean[]} arr - The array to search.
 * @returns {number} - The index of the first true value, or -1 if not found.
 * @complexity O(√n) - The time complexity of the Twin Crystal Ball algorithm.
 */
export function twinCrystalBalls(arr) {
	const length = arr.length - 1;
	const jump = Math.floor(Math.sqrt(length)) || 1;
	let i = jump;
	for (; i <= length; i += jump) {
		if (arr[i]) {
			break;
		}
	}
	const brokeAt = (i <= length) ? i : length + 1;
	i -= jump;
	for (; i < brokeAt; i++) {
		if (arr[i]) {
			break;
		}
	}
	return (i >= 0 && length >= 0) ? i - 1 : -1;
}