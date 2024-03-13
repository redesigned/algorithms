// @ts-check
"use strict";

/**
 * Interpolation Search
 * Performs interpolation search on a sorted array to find the index of a target value
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The value to search for.
 * @param {number} [start=0] - The starting index for the search (default is 0).
 * @param {number} [end=arr.length - 1] - The ending index for the search (default is arr.length - 1).
 * @returns {number} - The index of the target value, or -1 if not found.
 * @complexity O(log(log(n)))
 */
export function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
	const indexDelta = end - start;
	const rangeDelta = arr[end] - arr[start];
	const valueDelta = target - arr[start];
	if (valueDelta < 0 || indexDelta < 1 || rangeDelta < 1) {
		return (arr?.[start] === target) ? start : -1;
	}
	const targetIndex = start + Math.floor((valueDelta * indexDelta) / rangeDelta);
	const targetValue = arr[targetIndex];
	return (targetValue === target) ? targetIndex
		: (targetValue > target && targetIndex != 0) ? interpolationSearch(arr, target, start, targetIndex - 1)
		: (targetValue < target && targetIndex != 0) ? interpolationSearch(arr, target, targetIndex + 1, end)
		: -1;
}