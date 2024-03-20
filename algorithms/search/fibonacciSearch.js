// @ts-check
"use strict";

import { fibonacciNumbers } from '../problems/fibonacciNumbers';

/**
 * Fibonacci Search
 * Performs a Fibonacci search on a sorted array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The target value to find.
 * @returns {number} - The index of the target value, or -1 if not found.
 * @complexity O(log n)
 */
export function fibonacciSearch(arr, target) {
	const n = arr.length;
	if (arr[n - 1] === target) {
		return n - 1;
	}
	let fibNumbers = fibonacciNumbers(n);
	let offset = -1;
	let k = fibNumbers.length - 1;
	while (k > 1) {
		const i = Math.min(offset + fibNumbers[k - 2], n - 1);
		if (arr[i] < target) {
			k--;
			offset = i;
		} else if (arr[i] > target) {
			k -= 2;
		} else {
			return i;
		}
	}
	if (arr[offset + 1] === target) {
		return offset + 1;
	}
	return -1;
}
