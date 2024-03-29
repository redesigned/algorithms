// @ts-check
"use strict";

/**
 * ROT47
 * Encrypts or decrypts all ASCII characters in a given string using the rot47 cipher.  Use again to decrypt.
 * Note that the \ character needs to be escaped in the string passed into the fucntion due to limitations with javascript string escaping.
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string after applying the Caesar cipher.
 * @complexity O(n)
 */
export function rot47(str) {
	let offset = 47;
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		let newChar = (charCode == 45) ? '\\'
			: (charCode >= 33 && charCode <= 126) ? String.fromCharCode((charCode + offset - 33) % 94 + 33)
			: String.fromCharCode(charCode);
		newStr += newChar;
	}
	return newStr;
}
