// @ts-check
"use strict";

import { numberDigitAt } from '../util/numberDigitAt';
import { arrayMostDigits } from '../util/arrayMostDigits';

/**
 * Radix Sort Non Mutating
 * Non Mutating. Sorts by individual digits, from least significant to most significant.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 * @complexity O(nk)
 * @author Joshua Jarman
 */
export function radixSortNonMutating(arr) {
	let maxDigitCount = arrayMostDigits(arr);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => []);
		for (let i = 0; i < arr.length; i++) {
			let digit = numberDigitAt(arr[i], k);
			digitBuckets[digit].push(arr[i]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}

/**
 * Radix Sort
 * Mutates the original array with the results from the Non Mutating Radix Sort
 * @param {Array} arr - The input array to be sorted.
 * @return {Array} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function radixSort(arr) {
	const newArr = [...radixSortNonMutating(arr)];
	arr.length = 0;
	arr.push(...newArr);
	return arr;
}
