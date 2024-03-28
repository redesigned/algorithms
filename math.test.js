import { expect, test } from 'vitest';

/* ## MATH ## */

import { babylonianSquareRoot } from './algorithms/math/babylonianSquareRoot';
test('Babylonian Square Root: O(log(n))', () => {
	expect(babylonianSquareRoot(4)).toBe(2);
	expect(babylonianSquareRoot(100)).toBe(10);
	expect(babylonianSquareRoot(55)).toBe(7.416199);
	expect(babylonianSquareRoot(9.86958)).toBe(3.141589);
	expect(babylonianSquareRoot(1471369)).toBe(1213);
});

import { fakePi } from './algorithms/math/fakePi';
test('Fake Pi: O(1)', () => {
	expect(fakePi(2)).toBe('3.14');
	expect(fakePi(5)).toBe('3.14159');
	expect(fakePi(15)).toBe('3.141592653589793');
	expect(fakePi(48)).toBe('3.141592653589793238462643383279502884197169399375');
	expect(fakePi(100)).toBe('3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679');
	expect(fakePi(1000)).toBe('3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989');
});

import { calculatePi } from './algorithms/math/calculatePi';
test('Calculate Pi: O(log n)', () => {
	expect(calculatePi(2)).toBe(fakePi(2));
	expect(calculatePi(5)).toBe(fakePi(5));
	expect(calculatePi(15)).toBe(fakePi(15));
	expect(calculatePi(48)).toBe(fakePi(48));
	expect(calculatePi(100)).toBe(fakePi(100));
	expect(calculatePi(1000)).toBe(fakePi(1000));
	expect(calculatePi(10000)).toBe(fakePi(10000));
	// expect(calculatePi(100000)).toBe(fakePi(100000));
	// expect(calculatePi(1000000)).toBe(fakePi(1000000));
});

import { fibonacciNumbers } from './algorithms/math/fibonacciNumbers';
test('Fibonacci Numbers: O(log n)', () => {
	expect(fibonacciNumbers(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
	expect(fibonacciNumbers(100)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
});

import { newtonsSquareRoot } from './algorithms/math/newtonsSquareRoot';
test('Newtons Square Root: O(log(n))', () => {
	expect(newtonsSquareRoot(4)).toBe(2);
	expect(newtonsSquareRoot(100)).toBe(10);
	expect(newtonsSquareRoot(55, 4)).toBe(7.4162);
	expect(newtonsSquareRoot(9.86958, 5)).toBe(3.14159);
	expect(newtonsSquareRoot(1471369)).toBe(1213);
});

import { sieveOfEratosthenes } from './algorithms/math/sieveOfEratosthenes';
test('Sieve of Eratosthenes: O(n log(log(n)))', () => {
	expect(sieveOfEratosthenes(10)).toStrictEqual([2, 3, 5, 7]);
	expect(sieveOfEratosthenes(100)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
	expect(sieveOfEratosthenes(1000)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]);
});