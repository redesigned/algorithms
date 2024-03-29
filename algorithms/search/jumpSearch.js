// @ts-check
"use strict";

/**
 * Jump Search
 * Performs Jump search on a sorted array to find the index of a target value
 * @param {Array} arr - The array to search.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the first true value, or -1 if not found.
 * @complexity O(√n) - The time complexity of the Jump Search algorithm.
 * @author Joshua Jarman
 */
export function jumpSearch(arr, target) {
	const length = arr.length;
	const jump = Math.floor(Math.sqrt(length)) || 1;
	let i = jump;
	for (; i < length; i += jump) {
		if (arr[i] === target) {
			return i;
		} else if (arr[i] > target) {
			break;
		}
	}
	const end = i;
	i -= jump;
	for (; i <= end; ++i) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}