import { expect, test } from 'vitest';

import { arrayOfNumbers } from '../algorithms/util/arrayOfNumbers';
import { arrayRandomShuffle } from '../algorithms/util/arrayRandomShuffle';

/* ## SORTS ## */

import { bubbleSort, bubbleSortNonMutating } from '../algorithms/sort/bubbleSort';
test('Bubble Sort: O(n²)', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([9])).toStrictEqual([9]);
	expect(bubbleSort([1, 3])).toStrictEqual([1, 3]);
	expect(bubbleSort([3, 1])).toStrictEqual([1, 3]);
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(bubbleSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = bubbleSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	bubbleSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { bucketSort, bucketSortNonMutating } from '../algorithms/sort/bucketSort';
test('Bucket Sort: O(n+k)', () => {
	expect(bucketSort([])).to.be.empty;
	expect(bucketSort([9])).toStrictEqual([9]);
	expect(bucketSort([1, 3])).toStrictEqual([1, 3]);
	expect(bucketSort([3, 1])).toStrictEqual([1, 3]);
	expect(bucketSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bucketSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bucketSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(bucketSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = bucketSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	bucketSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { combSort, combSortNonMutating } from '../algorithms/sort/combSort';
test('Comb Sort: O(n²)', () => {
	expect(combSort([])).to.be.empty;
	expect(combSort([9])).toStrictEqual([9]);
	expect(combSort([1, 3])).toStrictEqual([1, 3]);
	expect(combSort([3, 1])).toStrictEqual([1, 3]);
	expect(combSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(combSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(combSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(combSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = combSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	combSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { countingSort, countingSortNonMutating } from '../algorithms/sort/countingSort';
test('Counting Sort: O(n+k)', () => {
	expect(countingSort([])).to.be.empty;
	expect(countingSort([9])).toStrictEqual([9]);
	expect(countingSort([1, 3])).toStrictEqual([1, 3]);
	expect(countingSort([3, 1])).toStrictEqual([1, 3]);
	expect(countingSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(countingSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(countingSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(countingSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = countingSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	countingSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { cycleSort, cycleSortNonMutating } from '../algorithms/sort/cycleSort';
test('Cycle Sort: O(n²)', () => {
	expect(cycleSort([])).to.be.empty;
	expect(cycleSort([9])).toStrictEqual([9]);
	expect(cycleSort([1, 3])).toStrictEqual([1, 3]);
	expect(cycleSort([3, 1])).toStrictEqual([1, 3]);
	expect(cycleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(cycleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(cycleSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(cycleSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = cycleSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	cycleSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { gnomeSort, gnomeSortNonMutating } from '../algorithms/sort/gnomeSort';
test('Gonome Sort: O(n²)', () => {
	expect(gnomeSort([])).to.be.empty;
	expect(gnomeSort([9])).toStrictEqual([9]);
	expect(gnomeSort([1, 3])).toStrictEqual([1, 3]);
	expect(gnomeSort([3, 1])).toStrictEqual([1, 3]);
	expect(gnomeSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(gnomeSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(gnomeSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(gnomeSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = gnomeSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	gnomeSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { heapSort, heapSortNonMutating } from '../algorithms/sort/heapSort';
test('Heap Sort: O(n log(n))', () => {
	expect(heapSort([])).to.be.empty;
	expect(heapSort([9])).toStrictEqual([9]);
	expect(heapSort([1, 3])).toStrictEqual([1, 3]);
	expect(heapSort([3, 1])).toStrictEqual([1, 3]);
	expect(heapSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(heapSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(heapSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(heapSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = heapSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	heapSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { insertionSort, insertionSortNonMutating } from '../algorithms/sort/insertionSort';
test('Insertion Sort: O(n log(n))', () => {
	expect(insertionSort([])).to.be.empty;
	expect(insertionSort([9])).toStrictEqual([9]);
	expect(insertionSort([1, 3])).toStrictEqual([1, 3]);
	expect(insertionSort([3, 1])).toStrictEqual([1, 3]);
	expect(insertionSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(insertionSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(insertionSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(insertionSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = insertionSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	insertionSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { introSort, introSortNonMutating } from '../algorithms/sort/introSort';
test('Intro Sort: O(n log(n))', () => {
	expect(introSort([])).to.be.empty;
	expect(introSort([9])).toStrictEqual([9]);
	expect(introSort([1, 3])).toStrictEqual([1, 3]);
	expect(introSort([3, 1])).toStrictEqual([1, 3]);
	expect(introSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(introSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(introSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(introSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = introSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	introSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { javascriptSort, javascriptSortNonMutating } from '../algorithms/sort/javascriptSort';
test('Javascript Built In String-Based Lexicographic Sort: O(n²)', () => {
	expect(javascriptSort([])).to.be.empty;
	expect(javascriptSort([9])).toStrictEqual([9]);
	expect(javascriptSort([1, 3])).toStrictEqual([1, 3]);
	expect(javascriptSort([3, 1])).toStrictEqual([1, 3]);
	expect(javascriptSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(javascriptSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(javascriptSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual([1, 10, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 5, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 6, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 7, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 8, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = javascriptSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	javascriptSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { maxSort, maxSortNonMutating } from '../algorithms/sort/maxSort';
test('Max Sort: O(n²)', () => {
	expect(maxSort([])).to.be.empty;
	expect(maxSort([9])).toStrictEqual([9]);
	expect(maxSort([1, 3])).toStrictEqual([1, 3]);
	expect(maxSort([3, 1])).toStrictEqual([1, 3]);
	expect(maxSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(maxSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(maxSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(maxSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = maxSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	maxSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { mergeSort, mergeSortNonMutating } from '../algorithms/sort/mergeSort';
test('Merge Sort: O(n log(n))', () => {
	expect(mergeSort([])).to.be.empty;
	expect(mergeSort([9])).toStrictEqual([9]);
	expect(mergeSort([1, 3])).toStrictEqual([1, 3]);
	expect(mergeSort([3, 1])).toStrictEqual([1, 3]);
	expect(mergeSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(mergeSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(mergeSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(mergeSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = mergeSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	mergeSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);

});

import { minSort, minSortNonMutating } from '../algorithms/sort/minSort';
test('Min Sort: O(n²)', () => {
	expect(minSort([])).to.be.empty;
	expect(minSort([9])).toStrictEqual([9]);
	expect(minSort([1, 3])).toStrictEqual([1, 3]);
	expect(minSort([3, 1])).toStrictEqual([1, 3]);
	expect(minSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(minSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(minSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(minSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = minSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	minSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { pancakeSort, pancakeSortNonMutating } from '../algorithms/sort/pancakeSort';
test('Pancake Sort: O(n²)', () => {
	expect(pancakeSort([])).to.be.empty;
	expect(pancakeSort([9])).toStrictEqual([9]);
	expect(pancakeSort([1, 3])).toStrictEqual([1, 3]);
	expect(pancakeSort([3, 1])).toStrictEqual([1, 3]);
	expect(pancakeSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(pancakeSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(pancakeSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(pancakeSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = pancakeSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	pancakeSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { quickSortIterative, quickSortIterativeNonMutating } from '../algorithms/sort/quickSortIterative';
test('Quick Sort Iterative: O(n²)', () => {
	expect(quickSortIterative([])).to.be.empty;
	expect(quickSortIterative([9])).toStrictEqual([9]);
	expect(quickSortIterative([1, 3])).toStrictEqual([1, 3]);
	expect(quickSortIterative([3, 1])).toStrictEqual([1, 3]);
	expect(quickSortIterative([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortIterative([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortIterative([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(quickSortIterative(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = quickSortIterativeNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	quickSortIterative(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { quickSortMerge, quickSortMergeNonMutating } from '../algorithms/sort/quickSortMerge';
test('Quick Sort Merge: O(n²)', () => {
	expect(quickSortMerge([])).to.be.empty;
	expect(quickSortMerge([9])).toStrictEqual([9]);
	expect(quickSortMerge([1, 3])).toStrictEqual([1, 3]);
	expect(quickSortMerge([3, 1])).toStrictEqual([1, 3]);
	expect(quickSortMerge([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortMerge([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortMerge([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(quickSortMerge(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = quickSortMergeNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	quickSortMerge(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { quickSortRecursive, quickSortRecursiveNonMutating } from '../algorithms/sort/quickSortRecursive';
test('Quick Sort Recursive: O(n²)', () => {
	expect(quickSortRecursive([])).to.be.empty;
	expect(quickSortRecursive([9])).toStrictEqual([9]);
	expect(quickSortRecursive([1, 3])).toStrictEqual([1, 3]);
	expect(quickSortRecursive([3, 1])).toStrictEqual([1, 3]);
	expect(quickSortRecursive([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortRecursive([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(quickSortRecursive([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(quickSortRecursive(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = quickSortRecursiveNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	quickSortRecursive(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { radixSort, radixSortNonMutating } from '../algorithms/sort/radixSort';
test('Radix Sort: O(nk)', () => {
	expect(radixSort([])).to.be.empty;
	expect(radixSort([9])).toStrictEqual([9]);
	expect(radixSort([1, 3])).toStrictEqual([1, 3]);
	expect(radixSort([3, 1])).toStrictEqual([1, 3]);
	expect(radixSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(radixSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(radixSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(radixSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = radixSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	radixSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { selectionSort, selectionSortNonMutating } from '../algorithms/sort/selectionSort';
test('Selection Sort: O(n²)', () => {
	expect(selectionSort([])).to.be.empty;
	expect(selectionSort([9])).toStrictEqual([9]);
	expect(selectionSort([1, 3])).toStrictEqual([1, 3]);
	expect(selectionSort([3, 1])).toStrictEqual([1, 3]);
	expect(selectionSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(selectionSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(selectionSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(selectionSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = selectionSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	selectionSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});

import { shellSort, shellSortNonMutating } from '../algorithms/sort/shellSort';
test('Shell Sort: O(n²)', () => {
	expect(shellSort([])).to.be.empty;
	expect(shellSort([9])).toStrictEqual([9]);
	expect(shellSort([1, 3])).toStrictEqual([1, 3]);
	expect(shellSort([3, 1])).toStrictEqual([1, 3]);
	expect(shellSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(shellSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(shellSort([7, 2, 9, 1, 6, 8, 5, 3, 4])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(shellSort(arrayRandomShuffle(arrayOfNumbers(100)))).toStrictEqual(arrayOfNumbers(100));
	let arr = [3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2];
	let sorted = shellSortNonMutating(arr);
	expect(sorted).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
	expect(arr).toStrictEqual([3, 0, 1, 2, 6, 7, 9, 4, 5, 4, 5, 9, 9, 0, 1, 2]);
	shellSort(arr);
	expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 9, 9, 9]);
});