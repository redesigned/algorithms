// @ts-check
"use strict";

/**
 * Javascript Sort Algorithm (String-Based Lexicographic Sort with Timsort)
 * Sorts an array using the built in Javascript Sort algorithm.
 * @param {Array} myArray - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n log(n)) to O(n²)
 */
export function javascriptSort(myArray) {
	const arr = [...myArray];
	return arr.sort();
}