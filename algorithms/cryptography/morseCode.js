// @ts-check
"use strict";

/**
 * Morse Code
 * Converts a string to or from Morse Code. Strips all characters not letters, numbers, or .,?/@ and converts to uppercase.
 * @param {string} [str=''] - The input string to be transformed.
 * @param {boolean} [enc=true] - Whether we should encode or decode.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
function morseCode(str = '', enc = true) {
	const morseCode = [
		['A', '•-'],
		['B', '-•••'],
		['C', '-•-•'],
		['D', '-••'],
		['E', '•'],
		['F', '••-•'],
		['G', '--•'],
		['H', '••••'],
		['I', '••'],
		['J', '•---'],
		['K', '-•-'],
		['L', '•-••'],
		['M', '--'],
		['N', '-•'],
		['O', '---'],
		['P', '•--•'],
		['Q', '--•-'],
		['R', '•-•'],
		['S', '•••'],
		['T', '-'],
		['U', '••-'],
		['V', '•••-'],
		['W', '•--'],
		['X', '-••-'],
		['Y', '-•--'],
		['Z', '--••'],
		['0', '-----'],
		['1', '•----'],
		['2', '••---'],
		['3', '•••--'],
		['4', '••••-'],
		['5', '•••••'],
		['6', '-••••'],
		['7', '--•••'],
		['8', '---••'],
		['9', '----•'],
		['_', '|'],
		['.', '•-•-•-'],
		[',', '--••--'],
		['?', '••--••'],
		['/', '-••-•'],
		['@', '•--•-•']
	]
	str = (enc) ? str.replace(/[^A-Za-z0-9 \/\.\?@,]/g, '').replace(/[ ]/g, '_').toUpperCase() : str.replace(/[^-• |/]/g, '');
	const strArr = (enc) ? str.split('') : str.split(' ');
	const encArray = strArr.map(i => (enc) ? morseCode.filter(([key]) => key === i).map(([_, value]) => value)[0] : morseCode.filter(([_, value]) => value === i).map(([key]) => key)[0]);
	return (enc) ? encArray.join(' ') : encArray.join('').replace(/[_]/g, ' ');
}

/**
 * Morse Code Encode
 * Converts a string to Morse Code. Strips all characters not letters, numbers, or .,?/@ and converts to uppercase.
 * @param {string} [str=''] - The input string to be transformed.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function morseCodeEncode(str = '') {
	return morseCode(str, true);
}

/**
 * Morse Code Decode
 * Converts a string from Morse Code.
 * @param {string} [str=''] - The input string to be transformed.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function morseCodeDecode(str = '') {
	return morseCode(str, false);
}
