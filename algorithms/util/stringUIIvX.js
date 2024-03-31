// @ts-check
"use strict";
/**
 * String UUI vX
 * Generates a unique identifier (UII) alphanumeric string upper and lower case.
 * @param {number} [length=64] - The desired length of the UII.
 * @param {Date} [dateKey=new Date()] - The date key used in generating the UII.
 * @param {string} [charset='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] - The character set for the UII.
 * @throws {Error} Throws an error if the specified length is less than 32.
 * @returns {string} The generated UII.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function stringUIIvX(length = 64, dateKey = new Date(), charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
	if (length < 32) {
		throw new Error("Must be at least 32 characters.");
	}
	const stLen = length - 17;
	let UII = new Date(dateKey).toISOString().replace(/[-:TZ\.]/g, '');
	for (let i = 0; i < stLen; i++) {
		UII += charset.charAt(Math.floor(Math.random() * charset.length));
	};
	return UII;
}

/**
 * String UUI Numeric
 * Generates a unique identifier (UII) numeric string.
 * @param {number} [length=64] - The desired length of the UII.
 * @param {Date} [dateKey=new Date()] - The date key used in generating the UII.
 * @throws {Error} Throws an error if the specified length is less than 32.
 * @returns {string} The generated numeric UII.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function stringUIINumeric(length = 64, dateKey = new Date()) {
	return stringUIIvX(length, dateKey, '0123456789');
}

/**
 * String UUI Hexidecimal
 * Generates a unique identifier (UII) hexidecimal string.
 * @param {number} [length=64] - The desired length of the UII.
 * @param {Date} [dateKey=new Date()] - The date key used in generating the UII.
 * @throws {Error} Throws an error if the specified length is less than 32.
 * @returns {string} The generated hexidecimal UII.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function stringUIIHexidecimal(length = 64, dateKey = new Date()) {
	return stringUIIvX(length, dateKey, '0123456789ABCDEF');
}

/**
 * String UUI AlphaNumeric
 * Generates a unique identifier (UII) alphanumeric string.
 * @param {number} [length=64] - The desired length of the UII.
 * @param {Date} [dateKey=new Date()] - The date key used in generating the UII.
 * @throws {Error} Throws an error if the specified length is less than 32.
 * @returns {string} The generated alphanumeric UII.
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function stringUIIAlphaNumeric(length = 64, dateKey = new Date()) {
	return stringUIIvX(length, dateKey, '0123456789ABCDEFGIJKLMNOPQRSTUVWXYZ');
}