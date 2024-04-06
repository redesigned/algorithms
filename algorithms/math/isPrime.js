// @ts-check
"use strict";

/**
 * Is Prime
 * Checks if a number is prime
 * @param {number} num - the number to check for prime
 * @returns {boolean} - Boolean if prime is true or false
 * @complexity O(√n)
 * @author Joshua Jarman
 */
export function isPrime(num) {
	const limit = Math.floor(Math.sqrt(num));
	for (let i = 2; i <= limit; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num >= 2;
};