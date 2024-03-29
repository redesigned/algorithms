// @ts-check
"use strict";

/**
 * Array Min
 * Return the smallest value from an array of numbers or 0 if empty.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The smallest number in the array or 0 if empty.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function arrayMin(arr) {
	return (arr.length === 0) ? 0 : Math.min(...arr);
}