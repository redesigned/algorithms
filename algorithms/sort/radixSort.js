// @ts-check
"use strict";

import { numberDigitAt } from '../util/numberDigitAt';
import { arrayMostDigits } from '../util/arrayMostDigits';

/**
 * Radix Sort
 * Sorts by individual digits, from least significant to most significant.
 * @param {number[]} myArray - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 * @complexity O(nk)
 */
export function radixSort(myArray) {
	let arr = [...myArray];
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
