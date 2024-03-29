// @ts-check
"use strict";

/**
 * Binary Search
 * Performs binary search on a sorted array to find the index of a target value
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The value to search for.
 * @param {number} [start=0] - The starting index for the search (default is 0).
 * @param {number} [end=arr.length - 1] - The ending index for the search (default is arr.length - 1).
 * @returns {number} - The index of the target value, or -1 if not found.
 * @complexity O(log(n))
 * @author Joshua Jarman
 */
export function binarySearch(arr, target, start = 0, end = arr.length - 1) {
	const middleIndex = Math.floor((start+end)/2);
	const middleValue = arr[middleIndex];
	return (start > end) ? -1
		: (middleValue === target) ? middleIndex
		: (middleValue > target) ? binarySearch(arr, target, start, middleIndex - 1)
		: (middleValue < target) ? binarySearch(arr, target, middleIndex + 1, end)
		: -1;
}