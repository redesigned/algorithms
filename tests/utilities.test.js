import { expect, test, vi, beforeEach, afterEach } from 'vitest';

beforeEach(() => {
	vi.useFakeTimers(); // switch to fake timers before each test
});

afterEach(() => {
	vi.useRealTimers(); // restore real timers after
});

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

import { stringRandom, stringRandomBinary, stringRandomHexidecimal, stringRandomNumeric } from '../algorithms/util/stringRandom';
test('String Random: O(1)', () => {
	let randPattern = /^[0-9a-zA-Z]{10}$/;
	expect(stringRandom(10)).toMatch(randPattern);
	randPattern = /^[0-9a-zA-Z]{100}$/;
	expect(stringRandom(100)).toMatch(randPattern);
	randPattern = /^[A-Z]{15}$/;
	expect(stringRandom(15, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toMatch(randPattern);
	randPattern = /^[0-9]{15}$/;
	expect(stringRandomNumeric(15, '0123456789')).toMatch(randPattern);
	randPattern = /^[0-9A-F]{6}$/;
	expect(stringRandomHexidecimal(6)).toMatch(randPattern);
	randPattern = /^[01]{1024}$/;
	expect(stringRandomBinary(1024)).toMatch(randPattern);
});

import { stringReverse } from '../algorithms/util/stringReverse';
test('String Reverse: O(n)', () => {
	expect(stringReverse('')).toBe('');
	expect(stringReverse('Hello World!')).toBe('!dlroW olleH');
	expect(stringReverse('0123456789')).toBe('9876543210');
});


import { stringTruncate } from '../algorithms/util/stringTruncate';
test('String Truncate: O(1)', () => {
	expect(stringTruncate('123456789', 1)).toBe('1');
	expect(stringTruncate('123456789', 3)).toBe('123');
	expect(stringTruncate('123456789', 9)).toBe('123456789');
	expect(stringTruncate('123456789', 100)).toBe('123456789');
});

import { stringUIIvX, stringUIINumeric, stringUIIHexidecimal, stringUIIAlphaNumeric } from '../algorithms/util/stringUIIvX';
test('String UII vX: O(1)', () => {
	let uiiPattern = /^[0-9a-zA-Z]{32}$/;
	expect(stringUIIvX(32)).toMatch(uiiPattern);
	uiiPattern = /^19741112134723000[0-9a-zA-Z]{15}$/;
	expect(stringUIIvX(32, new Date('1974-11-12T13:47:23Z'))).toMatch(uiiPattern);
	uiiPattern = /^[0-9]{32}$/;
	expect(stringUIINumeric(32)).toMatch(uiiPattern);
	uiiPattern = /^19741112134723000[0-9]{15}$/;
	expect(stringUIINumeric(32, new Date('1974-11-12T13:47:23Z'))).toMatch(uiiPattern);
	uiiPattern = /^[0-9A-F]{32}$/;
	expect(stringUIIHexidecimal(32)).toMatch(uiiPattern);
	uiiPattern = /^19741112134723000[0-9A-F]{15}$/;
	expect(stringUIIHexidecimal(32, new Date('1974-11-12T13:47:23Z'))).toMatch(uiiPattern);
	uiiPattern = /^[0-9A-Z]{32}$/;
	expect(stringUIIAlphaNumeric(32)).toMatch(uiiPattern);
	uiiPattern = /^19741112134723000[0-9A-Z]{15}$/;
	expect(stringUIIAlphaNumeric(32, new Date('1974-11-12T13:47:23Z'))).toMatch(uiiPattern);
});

import { stringUUIDv4 } from '../algorithms/util/stringUUIDv4';
test('String UUID v4: O(1)', () => {
	const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
	expect(stringUUIDv4()).toMatch(uuidPattern);
});

import { stringUUIDv8 } from '../algorithms/util/stringUUIDv8';
test('String UUID v8: O(1)', () => {
	const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
	expect(stringUUIDv8()).toMatch(uuidPattern);
	expect(stringUUIDv8()).toMatch(uuidPattern);
	expect(stringUUIDv8()).toMatch(uuidPattern);
	expect(stringUUIDv8()).toMatch(uuidPattern);
});

import { debounce } from "../algorithms/util/debounce";
test("Debounce Delays Function Execution: O(1)", () => {
	const mockFn = vi.fn();
	const debounced = debounce(mockFn, 100);
	debounced(); // call once
	expect(mockFn).not.toHaveBeenCalled();
	// fast-forward 100ms
	vi.advanceTimersByTime(100);
	expect(mockFn).toHaveBeenCalledTimes(1);
});
test('Debounce Resets Timer: O(1)', () => {
	const mockFn = vi.fn();
	const debounced = debounce(mockFn, 100);
	debounced();
	vi.advanceTimersByTime(50); // halfway
	debounced(); // reset
	vi.advanceTimersByTime(99); // still not enough
	expect(mockFn).not.toHaveBeenCalled();
	vi.advanceTimersByTime(1); // now 100ms since last call
	expect(mockFn).toHaveBeenCalledTimes(1);
});

import { throttle } from "../algorithms/util/throttle";
test("Throttle Executes Immediately: O(1)", () => {
	const mockFn = vi.fn();
	const throttled = throttle(mockFn, 100);
	throttled();
	expect(mockFn).toHaveBeenCalledTimes(1);
});
test("Throttle Blocks Calls Within Limit: O(1)", () => {
	const mockFn = vi.fn();
	const throttled = throttle(mockFn, 100);
	throttled();
	throttled(); // ignored
	expect(mockFn).toHaveBeenCalledTimes(1);
	vi.advanceTimersByTime(100);
	throttled();
	expect(mockFn).toHaveBeenCalledTimes(2);
});

import { poll } from "../algorithms/util/poll";
test("Poll Resolves When Function Returns Truthy: O(n)", async () => {
	let attempts = 0;
	const fn = vi.fn(async () => {
		attempts++;
		return attempts === 3 ? "done" : null;
	});
	const promise = poll(fn, 100, 1000);
	// attempt 1
	await vi.advanceTimersByTimeAsync(100);
	// attempt 2
	await vi.advanceTimersByTimeAsync(100);
	// attempt 3 succeeds
	await vi.advanceTimersByTimeAsync(100);
	await expect(promise).resolves.toBe("done");
	expect(fn).toHaveBeenCalledTimes(3);
});
test("Poll Rejects After Timeout: O(n)", async () => {
	const fn = vi.fn(async () => null);
	const promise = poll(fn, 100, 250);
	vi.advanceTimersByTime(300);
	await Promise.resolve(); // flush
	await expect(promise).rejects.toThrow("Polling timed out");
});
