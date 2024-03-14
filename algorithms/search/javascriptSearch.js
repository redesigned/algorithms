// @ts-check
"use strict";

/**
 * Javascript Search
 * Performs default indexOf search on an array to find the index of a target value
 * @param {Array} arr - The array to search.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the first true value, or -1 if not found.
 * @complexity O(n) - The time complexity of the indexOf Search array method, it uses a linear search algorithm.
 */
export function javascriptSearch(arr, target) {
	return arr.indexOf(target);
}