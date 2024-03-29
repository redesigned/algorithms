// @ts-check
"use strict";

/**
 * Linear Search
 * Performs linear search on a n array to find the index of a target value.
 * @param {Array} arr - The array to search.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the target value, or -1 if not found.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}