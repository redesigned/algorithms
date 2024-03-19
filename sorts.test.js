import { expect, test } from 'vitest';

import { arrayOfNumbers } from './algorithms/util/arrayOfNumbers';
import { arrayRandomShuffle } from './algorithms/util/arrayRandomShuffle';

/* ## SORTS ## */

import { bubbleSort } from './algorithms/sort/bubbleSort';
test('Bubble Sort: O(n²)', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([9])).toStrictEqual([9]);
	expect(bubbleSort([1, 3])).toStrictEqual([1, 3]);
	expect(bubbleSort([3, 1])).toStrictEqual([1, 3]);
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(bubbleSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { bucketSort } from './algorithms/sort/bucketSort';
test('Bucket Sort: O(n + k)', () => {
	expect(bucketSort([])).to.be.empty;
	expect(bucketSort([9])).toStrictEqual([9]);
	expect(bucketSort([1, 3])).toStrictEqual([1, 3]);
	expect(bucketSort([3, 1])).toStrictEqual([1, 3]);
	expect(bucketSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bucketSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bucketSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(bucketSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { combSort } from './algorithms/sort/combSort';
test('Comb Sort: O(n²)', () => {
	expect(combSort([])).to.be.empty;
	expect(combSort([9])).toStrictEqual([9]);
	expect(combSort([1, 3])).toStrictEqual([1, 3]);
	expect(combSort([3, 1])).toStrictEqual([1, 3]);
	expect(combSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(combSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(combSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(combSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { countingSort } from './algorithms/sort/countingSort';
test('Counting Sort: O(n+k)', () => {
	expect(countingSort([])).to.be.empty;
	expect(countingSort([9])).toStrictEqual([9]);
	expect(countingSort([1, 3])).toStrictEqual([1, 3]);
	expect(countingSort([3, 1])).toStrictEqual([1, 3]);
	expect(countingSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(countingSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(countingSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(countingSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { cycleSort } from './algorithms/sort/cycleSort';
test('Cycle Sort: O(n²)', () => {
	expect(cycleSort([])).to.be.empty;
	expect(cycleSort([9])).toStrictEqual([9]);
	expect(cycleSort([1, 3])).toStrictEqual([1, 3]);
	expect(cycleSort([3, 1])).toStrictEqual([1, 3]);
	expect(cycleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(cycleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(cycleSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(cycleSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { heapSort } from './algorithms/sort/heapSort';
test('Heap Sort: O(n log(n))', () => {
	expect(heapSort([])).to.be.empty;
	expect(heapSort([9])).toStrictEqual([9]);
	expect(heapSort([1, 3])).toStrictEqual([1, 3]);
	expect(heapSort([3, 1])).toStrictEqual([1, 3]);
	expect(heapSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(heapSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(heapSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(heapSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { insertionSort } from './algorithms/sort/insertionSort';
test('Insertion Sort: O(n log(n))', () => {
	expect(insertionSort([])).to.be.empty;
	expect(insertionSort([9])).toStrictEqual([9]);
	expect(insertionSort([1, 3])).toStrictEqual([1, 3]);
	expect(insertionSort([3, 1])).toStrictEqual([1, 3]);
	expect(insertionSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(insertionSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(insertionSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(insertionSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { introSort } from './algorithms/sort/introSort';
test('Intro Sort: O(n log(n))', () => {
	expect(introSort([])).to.be.empty;
	expect(introSort([9])).toStrictEqual([9]);
	expect(introSort([1, 3])).toStrictEqual([1, 3]);
	expect(introSort([3, 1])).toStrictEqual([1, 3]);
	expect(introSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(introSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(introSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(introSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { javascriptSort } from './algorithms/sort/javascriptSort';
test('Javascript Built In String-Based Lexicographic Sort: O(n²)', () => {
	expect(javascriptSort([])).to.be.empty;
	expect(javascriptSort([9])).toStrictEqual([9]);
	expect(javascriptSort([1, 3])).toStrictEqual([1, 3]);
	expect(javascriptSort([3, 1])).toStrictEqual([1, 3]);
	expect(javascriptSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(javascriptSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual([1, 10, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 5, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 6, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 7, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 8, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
});

import { mergeSort } from './algorithms/sort/mergeSort';
test('Merge Sort: O(n log(n))', () => {
	expect(mergeSort([])).to.be.empty;
	expect(mergeSort([9])).toStrictEqual([9]);
	expect(mergeSort([1, 3])).toStrictEqual([1, 3]);
	expect(mergeSort([3, 1])).toStrictEqual([1, 3]);
	expect(mergeSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(mergeSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(mergeSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(mergeSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { pancakeSort } from './algorithms/sort/pancakeSort';
test('Pancake Sort: O(n²)', () => {
	expect(pancakeSort([])).to.be.empty;
	expect(pancakeSort([9])).toStrictEqual([9]);
	expect(pancakeSort([1, 3])).toStrictEqual([1, 3]);
	expect(pancakeSort([3, 1])).toStrictEqual([1, 3]);
	expect(pancakeSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(pancakeSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(pancakeSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(pancakeSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { quickSort } from './algorithms/sort/quickSort';
test('Quick Sort: O(n²)', () => {
	expect(quickSort([])).to.be.empty;
	expect(quickSort([9])).toStrictEqual([9]);
	expect(quickSort([1, 3])).toStrictEqual([1, 3]);
	expect(quickSort([3, 1])).toStrictEqual([1, 3]);
	expect(quickSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(quickSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { radixSort } from './algorithms/sort/radixSort';
test('Radix Sort: O(nk)', () => {
	expect(radixSort([])).to.be.empty;
	expect(radixSort([9])).toStrictEqual([9]);
	expect(radixSort([1, 3])).toStrictEqual([1, 3]);
	expect(radixSort([3, 1])).toStrictEqual([1, 3]);
	expect(radixSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(radixSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(radixSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(radixSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { selectionSort } from './algorithms/sort/selectionSort';
test('Selection Sort: O(n²)', () => {
	expect(selectionSort([])).to.be.empty;
	expect(selectionSort([9])).toStrictEqual([9]);
	expect(selectionSort([1, 3])).toStrictEqual([1, 3]);
	expect(selectionSort([3, 1])).toStrictEqual([1, 3]);
	expect(selectionSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(selectionSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(selectionSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(selectionSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});

import { shellSort } from './algorithms/sort/shellSort';
test('Shell Sort: O(n²)', () => {
	expect(shellSort([])).to.be.empty;
	expect(shellSort([9])).toStrictEqual([9]);
	expect(shellSort([1, 3])).toStrictEqual([1, 3]);
	expect(shellSort([3, 1])).toStrictEqual([1, 3]);
	expect(shellSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(shellSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(shellSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(shellSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
});