// @ts-check
"use strict";

/**
 * ROT5
 * Encrypts or decrypts numbers in a given string using the rot5 cipher.  Use again to decrypt.
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string after applying the Caesar cipher.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function rot5(str) {
	let numOffset = 5;
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		let newChar = (charCode >= 48 && charCode <= 57) ? String.fromCharCode((charCode + numOffset - 48) % 10 + 48)
			: String.fromCharCode(charCode);
		newStr += newChar;
	}
	return newStr;
}