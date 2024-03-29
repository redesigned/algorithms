// @ts-check
"use strict";

/**
 * Number Digit At
 * Given a number it returns the digit as a specific location
 * @param {number} num - The number
 * @param {number} place - The place to get the digit at 0-x starting at 0
 * @returns {number} - The digit at that location starting at 0th place
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function numberDigitAt(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
