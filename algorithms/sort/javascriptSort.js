// @ts-check
"use strict";

/**
 * Javascript Sort
 * Sorts an array using the built in Javascript Sort algorithm, String-Based Lexicographic Sort with Timsort
 * @param {Array} myArray - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n log(n)) to O(n²)
 */
export function javascriptSort(myArray) {
	return myArray.toSorted();
	// const arr = [...myArray];
	// return arr.sort();
}