// @ts-check
"use strict";

/**
 * Intro Sort
 * Sorts an array using a combination of Quick Sort and Heap Sort or Insertion Sort
 * @param {Array} myArray - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n log(n))
 */
export function introSort(myArray) {
	return myArray.toSorted((a, b) => a - b);
	// const arr = [...myArray];
	// return arr.sort((a, b) => a - b);
}