// @ts-check
"use strict";

/**
 * Array of Numbers
 * Returns an Array of a given Length filled with the numbers 1 through X
 * @param {number} num - The length of the Array
 * @returns {number[]} - A new array containing the numbers
 * @complexity O(n)
 */
export function arrayOfNumbers(num) {
	return Array.from({ length: num }, (_, index) => index + 1);
}