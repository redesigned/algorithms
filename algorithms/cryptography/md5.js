// @ts-check
"use strict";

/**
 * md5-jkmyers Server Side Implimentation
 * Computes the MD5 hash of the input string.
 * @param {string} str - The input string.
 * @returns {string} - The MD5 hash.
 */
// pnpm install md5-jkmyers;
// export const md5 = require('md5-jkmyers');

/**
 * The Following code is ported over from:
 * https://raw.githubusercontent.com/AndreasPizsa/md5-jkmyers/master/src/md5.js
 * with jsdoc type definitions added.  This way we can use it standalone client or server side as needed.
 * @author JKMyers
*/

/**
 * Processes a block of input data for MD5 hashing.
 * @param {number[]} x - An array of 16 32-bit integers representing the current state.
 * @param {number[]} k - An array of 64 32-bit integers representing the input block.
 */
function md5cycle(x, k) {
	var a = x[0],
		b = x[1],
		c = x[2],
		d = x[3];

	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17, 606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12, 1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7, 1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7, 1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22, 1236535329);

	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14, 643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9, 38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5, 568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20, 1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14, 1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);

	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16, 1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11, 1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4, 681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23, 76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16, 530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);

	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10, 1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6, 1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6, 1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21, 1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15, 718787259);
	b = ii(b, c, d, a, k[9], 21, -343485551);

	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);

}

/**
 * Performs a common operation on the input values.
 * @param {number} q - A number.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @param {number} x - Third operand.
 * @param {number} s - Shift value.
 * @param {number} t - Fourth operand.
 * @returns {number} - Result of the operation.
 */
function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

/**
 * Applies the FF function to the input values.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @param {number} c - Third operand.
 * @param {number} d - Fourth operand.
 * @param {number} x - Fifth operand.
 * @param {number} s - Shift value.
 * @param {number} t - Sixth operand.
 * @returns {number} - Result of the FF function.
 */
function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

/**
 * Applies the GG function to the input values.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @param {number} c - Third operand.
 * @param {number} d - Fourth operand.
 * @param {number} x - Fifth operand.
 * @param {number} s - Shift value.
 * @param {number} t - Sixth operand.
 * @returns {number} - Result of the GG function.
 */
function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

/**
 * Applies the HH function to the input values.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @param {number} c - Third operand.
 * @param {number} d - Fourth operand.
 * @param {number} x - Fifth operand.
 * @param {number} s - Shift value.
 * @param {number} t - Sixth operand.
 * @returns {number} - Result of the HH function.
 */
function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

/**
 * Applies the II function to the input values.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @param {number} c - Third operand.
 * @param {number} d - Fourth operand.
 * @param {number} x - Fifth operand.
 * @param {number} s - Shift value.
 * @param {number} t - Sixth operand.
 * @returns {number} - Result of the II function.
 */
function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/**
 * Computes the MD5 hash of the input string.
 * @param {string} s - The input string.
 * @returns {number[]} - The MD5 hash state (array of four 32-bit integers).
 */
function md51(s) {
	let txt = '';
	var n = s.length,
		state = [1732584193, -271733879, -1732584194, 271733878],
		i;
	for (i = 64; i <= s.length; i += 64) {
		md5cycle(state, md5blk(s.substring(i - 64, i)));
	}
	s = s.substring(i - 64);
	var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (i = 0; i < s.length; i++)
		tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	if (i > 55) {
		md5cycle(state, tail);
		for (i = 0; i < 16; i++) tail[i] = 0;
	}
	tail[14] = n * 8;
	md5cycle(state, tail);
	return state;
}

/**
 * Processes a block of input data for MD5 hashing.
 * @param {string} s - The input block (64 characters).
 * @returns {number[]} - An array of 16 32-bit integers representing the processed block.
 */
function md5blk(s) {
	var md5blks = [],
		i;
	for (i = 0; i < 64; i += 4) {
		md5blks[i >> 2] = s.charCodeAt(i) +
			(s.charCodeAt(i + 1) << 8) +
			(s.charCodeAt(i + 2) << 16) +
			(s.charCodeAt(i + 3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

/**
 * Converts a 32-bit integer to a hexadecimal string.
 * @param {number} n - The input integer.
 * @returns {string} - The hexadecimal representation.
 */
function rhex(n) {
	var s = '',
		j = 0;
	for (; j < 4; j++)
		s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
		hex_chr[(n >> (j * 8)) & 0x0F];
	return s;
}

/**
 * Converts an array of 32-bit integers to a concatenated hexadecimal string.
 * @param {number[]} x - The array of integers.
 * @returns {string} - The concatenated hexadecimal string.
 */
function hex(x) {
	for (var i = 0; i < x.length; i++)
		// @ts-ignore
		x[i] = rhex(x[i]);
	return x.join('');
}

/**
 * Computes the MD5 hash of the input string.
 * @param {string} str - The input string.
 * @returns {string} - The MD5 hash.
 */
export function md5(str) {
	return hex(md51(str));
}

/**
 * Adds two 32-bit integers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} - Sum of the two integers.
 */
function add32(a, b) {
	return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	/**
	 * Adds two 32-bit integers.
	 * @param {number} x - First operand.
	 * @param {number} y - Second operand.
	 * @returns {number} - Sum of the two integers.
	 */
	function add32(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF),
			msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
}