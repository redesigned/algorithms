// @ts-check
"use strict";

/**
 * Rail Fence Cipher Encrypt
 * Encrypts a string using the Rail Fence Cipher
 * @param {string} [text=''] - The input string to be ciphered.
 * @param {number} [key=2] - The number of rails to create.
 * @returns {string} - The encrypted message string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function railFenceEncrypt(text = '', key = 2) {
	let rail = new Array(key).fill('').map(() => new Array(text.length).fill('\n'));
	let dir_down = false;
	let row = 0, col = 0;
	let result = '';
	for (let i = 0; i < text.length; i++) {
		if (row == 0 || row == key - 1) {
			dir_down = !dir_down;
		}
		rail[row][col++] = text[i];
		dir_down ? row++ : row--;
	}
	for (let i = 0; i < key; i++) {
		for (let j = 0; j < text.length; j++) {
			if (rail[i][j] != '\n') {
				result += rail[i][j];
			}
		}
	}
	return result;
}

/**
 * Rail Fence Cipher Decrypt
 * Decrypts a string using the Rail Fence Cipher
 * @param {string} [cipher=''] - The input string to be unciphered.
 * @param {number} [key=2] - The number of rails to create.
 * @returns {string} - The decrypted message string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function railFenceDecrypt(cipher = '', key = 2) {
	let rail = new Array(key).fill('').map(() => new Array(cipher.length).fill('\n'));
	let dir_down = false;
	let row = 0, col = 0;
	let result = '';
	let index = 0;
	for (let i = 0; i < cipher.length; i++) {
		if (row == 0) {
			dir_down = true;
		}
		if (row == key - 1) {
			dir_down = false;
		}
		rail[row][col++] = '*';
		dir_down ? row++ : row--;
	}
	for (let i = 0; i < key; i++) {
		for (let j = 0; j < cipher.length; j++) {
			if (rail[i][j] == '*' && index < cipher.length) {
				rail[i][j] = cipher[index++];
			}
		}
	}
	row = 0, col = 0;
	for (let i = 0; i < cipher.length; i++) {
		if (row == 0) {
			dir_down = true;
		}
		if (row == key - 1) {
			dir_down = false;
		}
		if (rail[row][col] != '*') {
			result += rail[row][col++];
		}
		dir_down ? row++ : row--;
	}
	return result;
}
