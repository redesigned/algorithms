// @ts-check
"use strict";

/**
 * Newtons Square Root
 * Calculates the square root of the number with given tolerance (precision)
 * by using Newton's method.
 * @param number - the number we want to find a square root of.
 * @param [tolerance] - how many precise numbers after the floating point we want to get.
 * @return {number} - retuns square root, or 0 if a negative number.
 * @complexity O(log(n))
 * @author Joshua Jarman
 */
export function newtonsSquareRoot(number, tolerance = 0) {
	if (number <= 0) {
		return 0;
	}
	let root = 1;
	const delta = 1 / (10 ** tolerance);
	while (Math.abs(number - (root ** 2)) > delta) {
		root -= ((root ** 2) - number) / (2 * root);
	}
	return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}