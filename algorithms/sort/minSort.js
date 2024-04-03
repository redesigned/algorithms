// @ts-check
"use strict";

/**
 * Min Sort Non Mutating
 * Performs a Min sort on a given array
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function minSortNonMutating(arr) {
	let from = [...arr];
	const length = from.length;
	let to = Array(length);
	for (let i = 0; i < length; i++) {
		let v = Math.min(...from);
		let idx = from.indexOf(v);
		to[i] = from[idx];
		from[idx] = Infinity;
	}
	return to;
}

/**
 * Min Sort
 * Mutates the original array with the results from the Non Mutating Min Sort
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function minSort(arr) {
	const newArr = [...minSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
