// @ts-check
"use strict";

/**
 * Max Sort Non Mutating
 * Performs a Min sort on a given array
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function maxSortNonMutating(arr) {
	let from = [...arr];
	const length = from.length;
	let to = Array(length);
	for (let i = length - 1; i >= 0; i--) {
		let v = Math.max(...from);
		let idx = from.indexOf(v);
		to[i] = from[idx];
		from[idx] = -Infinity;
	}
	return to;
}

/**
 * Max Sort
 * Mutates the original array with the results from the Non Mutating Max Sort
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function maxSort(arr) {
	const newArr = [...maxSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
