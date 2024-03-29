// @ts-check
"use strict";

/**
 * Merge Sort
 * Divides the array into halves until smallest units reached, and merges them back together in a sorted manner.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(log(n))
 * @author Joshua Jarman
 */
export function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const leftArr = mergeSort(arr.slice(0, mid));
	const rightArr = mergeSort(arr.slice(mid, arr.length));
	return Array.from({ length: leftArr.length + rightArr.length }, () => {
		return (!leftArr.length) ? rightArr.shift()
			: (!rightArr.length) ? leftArr.shift()
			: (leftArr[0] > rightArr[0]) ? rightArr.shift()
			: leftArr.shift();
	});
};