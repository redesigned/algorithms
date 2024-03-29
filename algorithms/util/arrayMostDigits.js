// @ts-check
"use strict";

import { numberDigitCount } from './numberDigitCount';

/**
 * Number Digit Count
 * Calculates the number of Digits of the largest number in an array.
 * @param {number[]} arr - The number to count digits of
 * @returns {number} - The digit count of the largest number in the array
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function arrayMostDigits(arr) {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, numberDigitCount(arr[i]));
	}
	return maxDigits;
}
