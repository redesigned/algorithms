// @ts-check
"use strict";

/**
 * String Random
 * Generates a random string of specified length.
 * @param {number} [length=10] - The desired length of the random string.
 * @param {string} [possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"] - A string containing possible characters for the random string.
 * @returns {string} - The randomly generated string.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringRandom(length = 10, possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
	let newrandom = "";
	for (let i = 0; i < length; i++) {
		newrandom += possible.charAt(Math.floor(Math.random() * possible.length));
	};
	return newrandom;
}

/**
 * String Random Binary
 * Generates a random binary string of specified length.
 * @param {number} [length=10] - The desired length of the random string.
 * @returns {string} - The randomly generated binary string.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringRandomBinary(length = 10) {
	return stringRandom(length, '01');
}

/**
 * String Random Hexidecimal
 * Generates a random hexidecimal string of specified length.
 * @param {number} [length=10] - The desired length of the random string.
 * @returns {string} - The randomly generated hexidecimal string.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringRandomHexidecimal(length = 10) {
	return stringRandom(length, '0123456789ABCDEF');
}

/**
 * String Random Numeric
 * Generates a random hexidecimal string of specified length.
 * @param {number} [length=10] - The desired length of the random string.
 * @returns {string} - The randomly generated hexidecimal string.
 * @complexity O(1)
 * @author Joshua Jarman
 */
export function stringRandomNumeric(length = 10) {
	return stringRandom(length, '0123456789');
}
