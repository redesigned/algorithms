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

/**
 * xOR Encrypt
 * Encrypts a string using xOR operation with a given key.
 * @param {string} [input=''] - The input string to be encoded.
 * @param {string} [key='TopSecret123!'] - The XOR key (default is 'TopSecret123!').
 * @returns {string} - The encoded string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function xOREncrypt(input = '', key = 'TopSecret123!') {
	const keyBytes = new TextEncoder().encode(key);
	const inputBytes = new TextEncoder().encode(input);
	const encryptedBytes = inputBytes.map((byte, index) => byte ^ keyBytes[index % keyBytes.length]);
	const encryptedBase64 = btoa(String.fromCharCode(...encryptedBytes));
	return encryptedBase64;
}

/**
 * xOR Decrypt
 * Decrypts a string using xOR operation with a given key.
 * @param {string} [input=''] - The input string to be decoded.
 * @param {string} [key='TopSecret123!'] - The XOR key (default is 'TopSecret123!').
 * @returns {string} - The encoded string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function xORDecrypt(input, key = 'TopSecret123!') {
	const keyBytes = new TextEncoder().encode(key);
	const encryptedBytes = new Uint8Array(atob(input || '').split('').map(char => char.charCodeAt(0)));
	const decryptedBytes = encryptedBytes.map((byte, index) => byte ^ keyBytes[index % keyBytes.length]);
	const decryptedText = new TextDecoder().decode(decryptedBytes);
	return decryptedText;
}