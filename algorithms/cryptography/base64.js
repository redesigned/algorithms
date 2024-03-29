// @ts-check
"use strict";

/**
 * Encode Base64
 * Encodes a string to Base64.
 * @param {string} str - The input string to encode.
 * @returns {string} The Base64-encoded string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function encodeBase64(str = '') {
	try {
		return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
			return String.fromCharCode(Number('0x' + p1));
		}));
	} catch (err) {
		return '';
	};
}

/**
 * Decode Base64
 * Decodes a string from Base64.
 * @param {string} str - The input string to encode.
 * @returns {string} The Base64-encoded string.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function decodeBase64(str = '') {
	try {
		return decodeURIComponent(atob(str).split('').map((c) => {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	} catch (err) {
		return '';
	};
}
