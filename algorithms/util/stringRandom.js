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
export function stringRandom (length = 10, possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
	let newrandom = "";
	for (let i = 0; i < length; i++) {
		newrandom += possible.charAt(Math.floor(Math.random() * possible.length));
	};
	return newrandom;
}