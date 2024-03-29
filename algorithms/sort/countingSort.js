// @ts-check
"use strict";

/**
 * Counting Sort
 * Suitable for non-negative integers with a limited range.
 * @param {number[]} myArray - The input array to be sorted.
 * @returns {number[]} - A new array containing the sorted elements.
 * @complexity O(n+k)
 * @author Joshua Jarman
 */
export function countingSort(myArray) {
	const arr = [...myArray];
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