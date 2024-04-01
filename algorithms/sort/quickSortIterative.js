// @ts-check
"use strict";

/**
 * Quick Sort Pivot
 * Chooses a pivot, partitions the array, and iterativly sorts the elements to either side of the pivot.  Mutates the array passed to it, to be used by Quick Sort Iterative Algorithm
 * @param {number[]} arr - The input array to be sorted.
 * @param {number} low - The low index.
 * @param {number} high - The high index.
 * @return {number} - The pivot.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
function partition(arr, low, high) {
	let temp;
	let pivot = arr[high];
	let i = (low - 1);
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] <= pivot) {
			i++;
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	temp = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = temp;
	return i + 1;
}

/**
 * Quick Sort Iterative Algorithm
 * Chooses a pivot, partitions the array, and iterativly sorts the array.
 * @param {number[]} myArray - The input array to be sorted.
 * @return {number[]} - The sorted array.
 * @complexity O(n²)
 * @author Joshua Jarman
 */
export function quickSortIterative(myArray) {
	let arr = [...myArray];
	if (arr.length === 0) {
		return arr;
	}
	let l = 0;
	let h = arr.length - 1;
	let stack = new Array(h - l + 1);
	stack.fill(0);
	let top = -1;
	stack[++top] = l;
	stack[++top] = h;
	while (top >= 0) {
		h = stack[top--];
		l = stack[top--];
		let p = partition(arr, l, h);
		if (p - 1 > l) {
			stack[++top] = l;
			stack[++top] = p - 1;
		}
		if (p + 1 < h) {
			stack[++top] = p + 1;
			stack[++top] = h;
		}
	}
	return arr;
}