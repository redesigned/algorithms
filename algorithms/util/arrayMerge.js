// @ts-check
"use strict";

/**
 * Array Merge
 * Merges two sorted arrays into a single sorted array.
 * @param {number[]} leftArr - The left sorted array.
 * @param {number[]} rightArr - The right sorted array.
 * @returns {number[]} - The merged sorted array.
 * @complexity O(n)
 */
export function arrayMerge(leftArr, rightArr) {
	return Array.from({ length: leftArr.length + rightArr.length }, () => {
		return (!leftArr.length) ? rightArr.shift()
			: (!rightArr.length) ? leftArr.shift()
			: (leftArr[0] > rightArr[0]) ? rightArr.shift()
			: leftArr.shift();
	});
}