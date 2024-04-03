// @ts-check
"use strict";

/**
 * Vigenère Cipher
 * Encrypts or decrypts a message using the Vigenère cipher.
 * @param {string} message - The input message to be encrypted or decrypted.
 * @param {string} [keyword='$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'] - The keyword for the Vigenère cipher.
 * @param {number} [shift=1] - The shift value for encryption (positive) or decryption (negative).
 * @returns {string} The resulting encrypted or decrypted message.
 * @complexity O(n)
 * @author Joshua Jarman
 */
function vigenere(message = '', keyword = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_', shift = 1) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	let keywordIndex = 0;
	for (let i = 0; i < message.length; i++) {
		const char = message[i];
		const charIndex = alphabet.indexOf(char.toLowerCase());
		if (charIndex >= 0) {
			const keywordChar = keyword[keywordIndex % keyword.length];
			const keywordIndexInAlphabet = alphabet.indexOf(keywordChar.toLowerCase());
			const isUpperCase = char === char.toUpperCase();
			const shiftedCharIndex = (charIndex + shift * keywordIndexInAlphabet + 26) % 26;
			let shiftedChar = alphabet[shiftedCharIndex];
			if (isUpperCase) {
				shiftedChar = shiftedChar.toUpperCase();
			}
			result += shiftedChar;
			keywordIndex++;
		} else {
			result += char;
		}
	}
	return result;
}

/**
 * Vigenere Encrypt
 * Encrypts a message using the Vigenère cipher.
 * @param {string} message - The input message to be encrypted.
 * @param {string} [keyword='$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'] - The keyword for the Vigenère cipher.
 * @returns {string} The resulting encrypted message.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function vigenereEncrypt(message = '', keyword = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_') {
	return vigenere(message, keyword, 1);
}

/**
 * Vigenere Decrypt
 * Decrypts a message using the Vigenère cipher.
 * @param {string} message - The input message to be decrypted.
 * @param {string} [keyword='$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'] - The keyword for the Vigenère cipher.
 * @returns {string} The resulting decrypted message.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function vigenereDecrypt(message = '', keyword= '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_') {
	return vigenere(message, keyword, -1);
}