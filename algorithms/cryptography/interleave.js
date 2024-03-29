// @ts-check
"use strict";

/**
 * Interleave
 * Interleaves characters from the input.
 * @param {string} [str=''] - The input string to be interleaved.
 * @param {number} [segments=Math.floor(str.length / 4)] - The number of segments to create.
 * @returns {string} - The interleaved string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function interleave(str = '', segments = Math.floor(str.length / 4)) {
	let newStr = '';
	let arr = Array(segments).fill('');
	let segRemainder = str.length % segments;
    let segSize = Math.floor(str.length / segments);
    let extraChar = (segRemainder > 0) ? str.slice(-1 * segRemainder) : '';
	let length = str.length - segRemainder ;
	let strReturn = '';
	for (let i = 0; i < length; i += segments) {
		for (let s = 0; s <= arr.length - 1; s++) {
			if (str[i + s]) {
				arr[s] += str[i + s];
			}
		}
	}
	for (let r = 0; r <= arr.length - 1; r++) {
		strReturn += arr[r];
	}
	strReturn += extraChar;
	return strReturn;
}

/**
 * Deinterlave
 * Deinterleaves characters from the input string.
 * @param {string} [str=''] - The input string to be deinterleaved.
 * @param {number} [segments=Math.floor(str.length / 4)] - The number of segments to create.
 * @returns {string} - The deinterleaved string.
 * @complexity O(segsize * length)
 * @author Joshua Jarman
 */
export function deinterleave(str = '', segments = Math.floor(str.length / 4)) {
	let newStr = '';
	let segRemainder = str.length % segments;
    let segSize = Math.floor(str.length / segments);
    let extraChar = (segRemainder > 0) ? str.slice(-1 * segRemainder) : '';
	let length = str.length - segRemainder ;
	let strReturn = '';
	for (let i = 0; i < segSize; i ++) {
		for (let s = 0; s < length; s += segSize) {
			if (str[i + s]) {
				strReturn += str[i + s];
			}
		}
	}
	strReturn += extraChar;
	return strReturn;
}