// @ts-check
"use strict";

/**
 * Intro Sort Non Mutating
 * Non Mutating. Sorts an array using a combination of Quick Sort and Heap Sort or Insertion Sort
 * @param {Array} myArray - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n log(n))
 * @author Joshua Jarman
 */
export function introSortNonMutating(myArray) {
	return myArray.toSorted((a, b) => a - b);
	// const arr = [...myArray];
	// return arr.sort((a, b) => a - b);
}

/**
 * Intro Sort
 * Mutates the original array with the results from the Non Mutating Intro Sort
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function introSort(arr) {
	const newArr = [...introSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
