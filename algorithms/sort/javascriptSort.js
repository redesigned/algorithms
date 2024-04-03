// @ts-check
"use strict";

/**
 * Javascript Sort Non Mutating
 * Non Mutating. Sorts an array using the built in Javascript Sort algorithm, String-Based Lexicographic Sort with Timsort
 * @param {Array} myArray - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function javascriptSortNonMutating(myArray) {
	return myArray.toSorted();
	// const arr = [...myArray];
	// return arr.sort();
}

/**
 * Merge Sort
 * Mutates the original array with the results from the Non Mutating Merge Javascript
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function javascriptSort(arr) {
	const newArr = [...javascriptSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
