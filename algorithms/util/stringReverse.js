// @ts-check
"use strict";

/**
 * String Reverse
 * Reverses a String
 * @param {string} [str=''] - The string to reverse
 * @returns {string} - The rreversed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function stringReverse(str = '') {
	return str.split("").reverse().join("");
}
