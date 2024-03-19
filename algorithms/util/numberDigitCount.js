// @ts-check
"use strict";

/**
 * Number Digit Count
 * Calculates the number of Digits in a given Number.
 * @param {number} num - The number to count digits of
 * @returns {number} - The number of digits in the number
 * @complexity O(1)
 */
export function numberDigitCount(num) {
	return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}
