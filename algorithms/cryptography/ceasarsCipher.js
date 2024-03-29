// @ts-check
"use strict";

/**
 * Cesars Cipher
 * Encrypts or decrypts a given string using the Caesar cipher.  Use the negative of the value used to encrypt to decrypt.
 * @param {string} str - The input string to be transformed.
 * @param {number} [offset=0] - The offset value for the cipher (defaults to 0).
 * @returns {string} - The transformed string after applying the Caesar cipher.
 * @complexity O(n)
 */
export function ceasarsCipher(str, offset = 0) {
	let numOffset = (offset >= 0) ? offset % 10 : 10 + offset % 10;
	let charOffset = (offset >= 0) ? offset % 26 : 26 + offset % 26;
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