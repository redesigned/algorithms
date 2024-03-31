// @ts-check
"use strict";

/**
 * Array Cumulative Sum
 * Calculates the cumulative sum of an array of numbers.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The cumulative sum.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function arrayCumulativeSum(arr) {
	return arr.reduce((sum, value) => sum + value, 0);
}