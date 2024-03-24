// @ts-check
"use strict";

/**
 * Array Max
 * Return the largest value from an array of numbers or 0 if empty.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The largest number in the array or 0 if empty.
 * @complexity O(n)
 */
export function arrayMax(arr) {
	return (arr.length === 0) ? 0 : Math.max(...arr);
}