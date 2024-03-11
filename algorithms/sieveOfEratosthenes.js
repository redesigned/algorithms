// @ts-check
"use strict";

/**
 * Sieve of Eratosthenes
 * Generates an array of prime numbers using the Sieve of Eratosthenes algorithm.
 * @param {number} maxNum - The maximum number up to which to find prime numbers.
 * @returns {number[]} - An array containing prime numbers up to 'maxNum'.
 * @complexity O(N log log N) - The time complexity of the Sieve of Eratosthenes.
 */
export function sieveOfEratosthenes(maxNum) {
	const sieve = new Array(maxNum + 1).fill(true);
	sieve[0] = sieve[1] = false;
	const primes = [];
	for (let num = 2; num <= maxNum; num += 1) {
		if (sieve[num] === true) {
			primes.push(num);
			let nextNum = num * num;
			while (nextNum <= maxNum) {
				sieve[nextNum] = false;
				nextNum += num;
			}
		}
	}
	return primes;
}