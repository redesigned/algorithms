// @ts-check
"use strict";

/**
 * Atbash Cipher
 * Encrypts or decrypts a given string using the Atabash cipher.  Use again to decrypt.  Letters and numbers are swapped with their opposites A=Z a=z 0=9 etc.
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string after applying the Atabash Cipher.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function atbash(str) {
	return str.replace(/[A-Z]/g, c => String.fromCharCode(155 - c.charCodeAt(0)))
		.replace(/[a-z]/g, c => String.fromCharCode(219 - c.charCodeAt(0)))
		.replace(/[0-9]/g, c => String.fromCharCode(105 - c.charCodeAt(0)));
}
