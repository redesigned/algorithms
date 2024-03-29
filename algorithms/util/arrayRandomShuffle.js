// @ts-check
"use strict";

/**
 * Array Random Shuffle
 * Fisher-Yates (or Knuth) Shuffle
 * Returns an Array that has been randomly Shuffled
 * @param {Array} myArray - The length of the Array
 * @returns {Array} - A new array containing the numbers
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function arrayRandomShuffle(myArray) {
	const arr = [...myArray];
	return arr.sort(() => Math.random() - 0.5);
}