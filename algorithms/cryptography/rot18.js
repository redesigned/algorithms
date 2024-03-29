// @ts-check
"use strict";

/**
 * ROT18
 * Encrypts or decrypts letters and numbers in a given string using the rot18 cipher.  Use again to decrypt.
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string after applying the Caesar cipher.
 * @complexity O(n)
 */
export function rot18(str) {
	let charOffset = 13;
	let numOffset = 5;
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		let newChar = (charCode >=97 && charCode <=122) ? String.fromCharCode((charCode + charOffset - 97) % 26 + 97)
			: (charCode >= 65 && charCode <= 92) ? String.fromCharCode((charCode + charOffset - 65) % 26 + 65)
			: (charCode >= 48 && charCode <= 57) ? String.fromCharCode((charCode + numOffset - 48) % 10 + 48)
			: String.fromCharCode(charCode);
		newStr += newChar;
	}
	return newStr;
}