import { expect, test } from 'vitest';

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
});

import { javascriptSort } from './algorithms/sort/javascriptSort';
test('Javasscript Built In Sort: O(n²)', () => {
	expect(javascriptSort([])).to.be.empty;
	expect(javascriptSort([9])).toStrictEqual([9]);
	expect(javascriptSort([1, 3])).toStrictEqual([1, 3]);
	expect(javascriptSort([3, 1])).toStrictEqual([1, 3]);
	expect(javascriptSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
});