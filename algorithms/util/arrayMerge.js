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
	const mergedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			mergedArr.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			mergedArr.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	return mergedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}