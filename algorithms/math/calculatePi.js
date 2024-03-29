// @ts-check
"use strict";

/**
 * Substring Indexes
 * Finds all occurrences of a substring in the source string and returns their indices.
 * @param {string} source - The source string to search within.
 * @param {string} find - The substring to find.
 * @returns {number[]} - An array of indices where the substring occurs in the source.
 * @complexity O(n)
 * @author Joshua Jarman
 */
function indexes(source, find) {
	let result = [];
	let pos = 0;
	let i = -1;
	while (pos != -1) {
		pos = source.indexOf(find, i + 1);
		if (pos > -1) {
			result.push(pos);
		}
		i = pos;
	}
	return result;
}

/**
 * Euclid Greatest Common Divisor
 * Computes the greatest common divisor (GCD) of two non-negative integers using the Euclidean algorithm.
 * @param {number} a - First integer.
 * @param {number} b - Second integer.
 * @returns {number} - The GCD of a and b.
 * @complexity O(log(min(a, b))), where a and b are the input integers.
 */
function gcd_euclid(a, b) {
	if (a < 0) a = -a;
	if (b < 0) b = -b;
	if (b > a) {var temp = a; a = b; b = temp;}
	while (true) {
		if (b == 0) {
			return a;
		}
		a %= b;
		if (a == 0) {
			return b;
		}
		b %= a;
	}
}

/**
 * Pell Square Root of 10005
 * Computes the square root of 10005 using the Pell series algorithm.
 * @ignore
 * @param {number} digits - The desired precision (number of decimal digits).
 * @returns {[bigint, bigint]} - A tuple containing two big integers representing the numerator and denominator of the square root.
 * @complexity O(n)
 */
function pell_sqrt_10005(digits) {
	let D = 10005n;
	let [x1, y1] = [1n, 0n];
	let [x2, y2] = [4001n, 40n];
	let y_target = 10n ** (BigInt(digits / 2 + 5));
	while (1) {
		let [x, y] = [x1*x2 + D * y1 * y2, x1 * y2 + y1 * x2];
		if ( y > y_target) {
			return [x, y];
		}
		[x1, y1] = [x2, y2];
		[x2, y2] = [x, y];
	}
}

/**
 * Binary Split
 * Computes partial terms for the Chudnovsky algorithm to approximate π.
 * @ignore
 * @param {bigint} a - Lower bound of the summation.
 * @param {bigint} b - Upper bound of the summation.
 * @param {number} level - Recursion depth (used internally).
 * @returns {[bigint, bigint, bigint]} - A tuple containing three big integers representing partial terms.
 * @complexity O(log(b - a)), where a and b are the input bounds.
 */
function  bs(a, b, level) {
	const C = 640320n;
	const C3_OVER_24 = (C*C*C) / 24n;
	if (BigInt(b) - BigInt(a) == 1n) {
		let Pab = 1n;
		let Qab = 1n;
		if (a != 0n) {
			Pab = (6n * a - 5n) * (2n * a - 1n) * (6n * a - 1n);
			Qab = BigInt(a) * BigInt(a) * BigInt(a) * C3_OVER_24;
		}
		let Tab = Pab * (13591409n + 545140134n*a);
		if (a & 1n) {
			Tab = -Tab;
		}
		return [Pab, Qab, Tab];
	} else {
		const m = (a + b)>>1n;
		const [Pam, Qam, Tam] = bs(a, m, level+1);
		const [Pmb,Qmb,Tmb] = bs(m, b, level+1);
		const Pab = Pam * Pmb;
		const Qab = Qam * Qmb;
		const Tab = Qmb * Tam + Pam * Tmb;
		return [Pab, Qab, Tab];
	}
}

/**
 * Pi Chudnovsky Binary Splitting and Pell
 * Computes an approximation of π using the Chudnovsky algorithm.
 * @ignore
 * @param {number} digits - The desired precision (number of decimal digits).
 * @param {bigint} hexchars - Number of hexadecimal characters (used internally).
 * @param {bigint} hexdigits - Number of hexadecimal digits (used internally).
 * @returns {[bigint, bigint, bigint]} - A tuple containing the approximation of π, the number of hexadecimal characters, and the number of hexadecimal digits.
 * @complexity O(n)
 */
function pi_chudnovsky_bs(digits, hexchars, hexdigits) {
	let DIGITS_PER_TERM = Math.log10( (640320**3) / (6*2*6*24) );
	let N = Math.floor(digits/DIGITS_PER_TERM + 10);
	let P, Q, T, x, y;
	[P, Q, T] = bs(0n, BigInt(N), 1);
	[x,y] = pell_sqrt_10005(digits);
	hexdigits = BigInt(Math.floor(digits/1.20411998266));
	hexchars = (Q * 426880n * x * (16n**(BigInt(hexdigits)+20n)) ) / (T*y);
	return [(Q * 426880n * x * 10n ** BigInt(digits)) / (T*y), hexchars, hexdigits];
}

/**
 * Calculate Pi (π)
 * Calculates an approximation of π with a specified number of decimal digits using Chudnovsky Binary Splitting and Pell
 * @param {number} digits - The desired precision (number of decimal digits).
 * @returns {string} - The approximation of π as a string with the specified precision.
 * @throws {Error} - Throws an error if n exceeds 75,000,000 decimal places.
 * @complexity O(n)
 */
export function calculatePi(digits) {
	if (digits > 75000000) {
		throw new Error("Only works up to 75,000,000 decimal places before the algorithm exceeds range for BiInt calculations in Javascript");
	}
	let desiredLength = digits + 2;
	if (digits % 2 === 1) {
		digits += 11;
	} else {
		digits += 10;
	}
	let hexchars = 0n;
	let hexdigits = 0n;
	let pi = 0n;
	[pi, hexchars, hexdigits] = pi_chudnovsky_bs(digits, hexchars, hexdigits);
	let s = pi.toString().slice(0, digits);
	let s_hex = hexchars.toString(16).slice(Number(hexdigits + 1n), Number(hexdigits + 11n));
	let pretty_pi = s[0] + "." + s.slice(1, 100);
	for (let i = 100; i < s.length; i += 100) {
		let sixes = indexes(s.slice(i - 2, i + 102), '666');
		if (!sixes.length) {
			pretty_pi += s.slice(i, i + 100);
		} else {
			for (let k = sixes.length - 1; k > 0; k--) {
				if ( sixes[k] - sixes[k - 1] < 3) {
					sixes.splice(k, 1);
				}
			}
			let line = "";
			pretty_pi += s.slice(i, i+sixes[0] -2 );
			for (let j = 0; j < sixes.length; j++) {
				let pos = sixes[j];
				if (pos<2) {
					pretty_pi += s.slice(i, i + pos + 1);
					pretty_pi += s.slice(i + pos + 1, (j < sixes.length - 1) ? i + sixes[j + 1] - 2 : i + 100);
				} else if (pos>99) {
					pretty_pi += s.slice(i + pos - 2, i + 100);
				} else {
					pretty_pi += s.slice(i + pos - 2, i + pos + 1);
					pretty_pi += s.slice(i + pos + 1, (j < sixes.length - 1) ? i + sixes[j + 1] - 2 : i + 100);
				}

			}
		}
	}
	return pretty_pi.length > desiredLength ? pretty_pi.substring(0, desiredLength) : pretty_pi;
}