import { expect, test } from 'vitest';

/* ## UTILITIES ## */

import { arrayAverage } from '../algorithms/util/arrayAverage';
test('Array Average: O(n)', () => {
	expect(arrayAverage([])).toBe(0);
	expect(arrayAverage([0])).toBe(0);
	expect(arrayAverage([1])).toBe(1);
	expect(arrayAverage([0, 0])).toBe(0);
	expect(arrayAverage([2, 2, 2])).toBe(2);
	expect(arrayAverage([1, 2, 3])).toBe(2);
	expect(arrayAverage([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(5);
});

import { arrayCumulativeSum } from '../algorithms/util/arrayCumulativeSum';
test('Cumulative Sum: O(n)', () => {
	expect(arrayCumulativeSum([])).toBe(0);
	expect(arrayCumulativeSum([0])).toBe(0);
	expect(arrayCumulativeSum([1])).toBe(1);
	expect(arrayCumulativeSum([0, 0])).toBe(0);
	expect(arrayCumulativeSum([11, 3, 7])).toBe(21);
	expect(arrayCumulativeSum([5, 10, 15])).toBe(30);
});

import { arrayMax } from '../algorithms/util/arrayMax';
test('Array Max: O(n)', () => {
	expect(arrayMax([])).toBe(0);
	expect(arrayMax([2, 2, 2])).toBe(2);
	expect(arrayMax([1, 42, 6, 23])).toBe(42);
	expect(arrayMax([1048, 111, 69, 42])).toBe(1048);
	expect(arrayMax([1048, 111, -73, 69, 42])).toBe(1048);
});

import { arrayMerge } from '../algorithms/util/arrayMerge';
test('Array Merge: O(n)', () => {
	expect(arrayMerge([1, 3, 5],[2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
	expect(arrayMerge([1, 3, 5, 7, 8, 9, 10],[2, 4, 6, 11, 12, 13])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
});

import { arrayMin } from '../algorithms/util/arrayMin';
test('Array Min: O(n)', () => {
	expect(arrayMin([])).toBe(0);
	expect(arrayMin([2, 2, 2])).toBe(2);
	expect(arrayMin([1, 42, 6, 23])).toBe(1);
	expect(arrayMin([1048, 111, 69, 42])).toBe(42);
	expect(arrayMin([1048, 111, -73, 69, 42])).toBe(-73);
});

import { arrayMostDigits } from '../algorithms/util/arrayMostDigits';
test('Digit count of the largest Number in an array: O(1)', () => {
	expect(arrayMostDigits([8 , 16])).toBe(2);
	expect(arrayMostDigits([8 , 16, 33, 64, 256, 1024, 123456789])).toBe(9);
});

import { arrayOfNumbers } from '../algorithms/util/arrayOfNumbers';
test('Array of Numbers: O(n)', () => {
	expect(arrayOfNumbers(4)).toStrictEqual([1, 2, 3, 4]);
	expect(arrayOfNumbers(100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
});

import { arrayRandomShuffle } from '../algorithms/util/arrayRandomShuffle';
test('Array Random Shuffle: O(n)', () => {
	const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const shuffledArray = arrayRandomShuffle(inputArray);
	const shuffledArray2 = arrayRandomShuffle(inputArray);
	expect(shuffledArray).toHaveLength(inputArray.length);
	expect(shuffledArray2).toHaveLength(inputArray.length);
	inputArray.forEach((item) => {
		expect(shuffledArray).toContain(item);
		expect(shuffledArray2).toContain(item);
	});
	expect(shuffledArray).not.toEqual(inputArray);
	expect(shuffledArray2).not.toEqual(inputArray);
	expect(shuffledArray).not.toEqual(shuffledArray2);
});

import { numberDigitAt } from '../algorithms/util/numberDigitAt';
test('Number Digit At: O(1)', () => {
	expect(numberDigitAt(123456789, 0)).toBe(9);
	expect(numberDigitAt(123456789, 4)).toBe(5);
	expect(numberDigitAt(123456789, 8)).toBe(1);
});

import { numberDigitCount } from '../algorithms/util/numberDigitCount';
test('Number Digit count: O(1)', () => {
	expect(numberDigitCount(0)).toBe(1);
	expect(numberDigitCount(1)).toBe(1);
	expect(numberDigitCount(12)).toBe(2);
	expect(numberDigitCount(123456789)).toBe(9);
});

import { stringTruncate } from '../algorithms/util/stringTruncate';
test('String Truncate: O(1)', () => {
	expect(stringTruncate('123456789', 1)).toBe('1');
	expect(stringTruncate('123456789', 3)).toBe('123');
	expect(stringTruncate('123456789', 9)).toBe('123456789');
	expect(stringTruncate('123456789', 100)).toBe('123456789');
});

import { stringUUIDv4 } from '../algorithms/util/stringUUIDv4';
test('String UUID v4: O(1)', () => {
	const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
});

import { stringUUIDv5 } from '../algorithms/util/stringUUIDv5';
test('String UUID v5: O(n)', async () => {
	expect(await stringUUIDv5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'example.com')).toBe('3ab92561-7b20-57ee-9658-9b551a047fc6afe6a801');
	expect(await stringUUIDv5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'stackoverflow.com')).toBe('614790c5-95a4-5b3c-af66-e8715d86b09e7d30bdc8');
	expect(await stringUUIDv5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'google.com')).toBe('9e5e4d4d-78d9-5e0e-b6ec-8c5db4f5961f144e0ee9');
});

