// @ts-check
"use strict";

/**
 * Mean Value (Average)
 * Calculates the mean average value for an array of numbers, returns 0 if empty.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The mean average value.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function meanAverage(arr) {
	return (arr.length === 0) ? 0 : Math.round(arr.reduce((sum, value) => sum + value, 0) / arr.length);
}