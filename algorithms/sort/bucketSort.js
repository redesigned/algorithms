// @ts-check
"use strict";

/**
 * Bucket Sort
 * Distributes elements into buckets and sorts each bucket individually.
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} [size=5] - The size of each bucket (optional, default is 5).
 * @returns {number[]} - The sorted array.
 * @complexity O(n + k)
 * @author Joshua Jarman
 */
export function bucketSort(arr, size = 5) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const buckets = Array.from(
		{ length: Math.floor((max - min) / size) + 1 },
		() => []
	);
	arr.forEach(val => {
		buckets[Math.floor((val - min) / size)].push(val);
	});
	return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};