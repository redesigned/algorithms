// @ts-check
"use strict";

/**
 * Babylonian Square Root
 * Calculates the square root of a number using the Babylonian method.
 * @param {number} n - The input number.
 * @returns {number} - The square root of the input number (rounded to 6 decimal places).
 * @complexity O(log(n))
 * @author Joshua Jarman
 */

export function babylonianSquareRoot(n) {
	let x = n;
	let y = 1;
	const epsilon = 0.000001;
	const maxIterations = 1000;
	for (let i = 0; i < maxIterations; i++) {
		x = (x + y) / 2;
		y = n / x;
		if (Math.abs(x - y) < epsilon) {
			return parseFloat(x.toFixed(6));
		}
	}
	return parseFloat(x.toFixed(6));
}