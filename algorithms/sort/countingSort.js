// @ts-check
"use strict";

/**
 * Counting Sort Non Mutating
 * Suitable for non-negative integers with a limited range.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n+k)
 * @author Joshua Jarman
 */
export function countingSortNonMutating(arr) {
	const tmpArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!tmpArr[arr[i]]) {
			tmpArr[arr[i]] = 1;
		} else {
			tmpArr[arr[i]] += 1;
		}
	}
	const newArr = [];
	for (const i in tmpArr) {
		while (tmpArr[i] > 0) {
			newArr.push(parseInt(i));
			tmpArr[i]--;
		}
	}
	return newArr;
}

/**
 * Counting Sort
 * Mutates the original array with the results from the Non Mutating Counting Sort
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function countingSort(arr) {
	const newArr = [...countingSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
