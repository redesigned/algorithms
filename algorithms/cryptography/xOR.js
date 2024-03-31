// @ts-check
"use strict";

/**
 * xOR
 * Encodes a string using XOR operation with a given key.
 * @param {string} [str=''] - The input string to be encoded.
 * @param {number} [key=51] - The XOR key (default is 51).
 * @returns {string} - The encoded string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function xOR(str = '', key = 51) {
	let encoded = '';
	for (let i = 0; i < str.length; i++) {
		let a = str.charCodeAt(i);
		let b = a ^ key;
		encoded = encoded + String.fromCharCode(b);
	};
	return encoded;
}
