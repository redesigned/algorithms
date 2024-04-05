// @ts-check
"use strict";

/**
 * Braille
 * Converts a string to or from Braille. Strips all characters not letters, numbers, or common puncuation.
 * @param {string} [str=''] - The input string to be transformed.
 * @param {boolean} [enc=true] - Whether we should encode or decode.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
function brailleConverter(str = '', enc = true) {
	const braille = [
		['A', '⠠⠁'],
		['B', '⠠⠃'],
		['C', '⠠⠉'],
		['D', '⠠⠙'],
		['E', '⠠⠑'],
		['F', '⠠⠋'],
		['G', '⠠⠛'],
		['H', '⠠⠓'],
		['I', '⠠⠊'],
		['J', '⠠⠚'],
		['K', '⠠⠅'],
		['L', '⠠⠇'],
		['M', '⠠⠍'],
		['N', '⠠⠝'],
		['O', '⠠⠕'],
		['P', '⠠⠏'],
		['Q', '⠠⠟'],
		['R', '⠠⠗'],
		['S', '⠠⠎'],
		['T', '⠠⠞'],
		['U', '⠠⠥'],
		['V', '⠠⠧'],
		['W', '⠠⠺'],
		['X', '⠠⠭'],
		['Y', '⠠⠽'],
		['Z', '⠠⠵'],
		['a', '⠁'],
		['b', '⠃'],
		['c', '⠉'],
		['d', '⠙'],
		['e', '⠑'],
		['f', '⠋'],
		['g', '⠛'],
		['h', '⠓'],
		['i', '⠊'],
		['j', '⠚'],
		['k', '⠅'],
		['l', '⠇'],
		['m', '⠍'],
		['n', '⠝'],
		['o', '⠕'],
		['p', '⠏'],
		['q', '⠟'],
		['r', '⠗'],
		['s', '⠎'],
		['t', '⠞'],
		['u', '⠥'],
		['v', '⠧'],
		['w', '⠺'],
		['x', '⠭'],
		['y', '⠽'],
		['z', '⠵'],
		['0', '⠼⠚'],
		['1', '⠼⠁'],
		['2', '⠼⠃'],
		['3', '⠼⠉'],
		['4', '⠼⠙'],
		['5', '⠼⠑'],
		['6', '⠼⠋'],
		['7', '⠼⠛'],
		['8', '⠼⠓'],
		['9', '⠼⠊'],
		['+', '⠼⠖'],
		['-', '⠼⠒'],
		['×', '⠼⠦'],
		['÷', '⠼⠲'],
		['=', '⠼⠶'],
		['<', '⠼⠪'],
		['>', '⠼⠕'],
		['(', '⠼⠣'],
		[')', '⠼⠜'],
		['.', '⠼⠠'],
		['√', '⠼⠩⠱'],
		['%', '⠼⠚⠴'],
		['.', '⠲'],
		[',', '⠂'],
		['!', '⠖'],
		['?', '⠦'],
		[':', '⠒'],
		[';', '⠆'],
		['-', '⠤'],
		['/', '⠌'],
		["'", '⠄'],
		['*', '⠔'],
		['#', '⠼'],
		['@', '⠜'],
		[' ', '⠀']
	]
	str = (enc) ? str.replace(/[^A-Za-z0-9 \+-×÷=<>\(\)\.√%,!\?:;\-/'\*#@]/g, '') : str;
	const strArr = (enc) ? str.split('') : str.split('⁣') /* <= split on zero width unicode joiner */;
	const encArray = strArr.map(i => (enc) ? braille.filter(([key]) => key === i).map(([_, value]) => value)[0] : braille.filter(([_, value]) => value === i).map(([key]) => key)[0]);
	return (enc) ? encArray.join('⁣') /* <= joined on zero width unicode joiner */ : encArray.join('');
}

/**
 * Braille Encode
 * Converts a string to Braillee. Strips all characters not letters, numbers, or common punctuation.
 * @param {string} [str=''] - The input string to be transformed.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function brailleEncode(str = '') {
	return brailleConverter(str, true);
}

/**
 * Braille Decode
 * Converts a string from Braillee.
 * @param {string} [str=''] - The input string to be transformed.
 * @returns {string} - The transformed string
 * @complexity O(n)
 * @author Joshua Jarman
 */
export function brailleDecode(str = '') {
	return brailleConverter(str, false);
}
