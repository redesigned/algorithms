// @ts-check
"use strict";

/**
 * Shift Key Cipher Encrypt
 * Encrypts a message using the Shift Key Cipher .
 * @param {string} str - The input message to be encrypted.
 * @param {string} [key='$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'] - The keyword for the Shift Key Cipher .
 * @returns {string} The resulting encrypted message.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function shiftKeyEncrypt(str = '', key = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_') {
	let output = Array(str.length);
	let result = 0;
	for (var i = 0; i < str.length; i++) {
		result = ((str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
		output[i] = String.fromCharCode(result);
	}
	return output.join('');
}

/**
 * Shift Key Cipher Decrypt
 * Encrypts a message using the Shift Key Cipher .
 * @param {string} str - The input message to be decrypted.
 * @param {string} [key='$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_'] - The keyword for the Shift KeyCipher .
 * @returns {string} The resulting decrypted message.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function shiftKeyDecrypt(str = '', key = '$3(63+$^|+__Utw:afXjtE,viA>ji2k>.CC_') {
	let output = Array(str.length);
	let result = 0;
	for (var i = 0; i < str.length; i++) {
		result = (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) ? (str.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128 : (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
		output[i] = String.fromCharCode(result);
	}
	return output.join('');
}
