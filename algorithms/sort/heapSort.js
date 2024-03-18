// @ts-check
"use strict";

/**
 * Heapify
 * Heapify a subtree rooted at index i.
 * @param {number[]} arr - The input array.
 * @param {number} n - Size of the heap.
 * @param {number} i - Index of the root of the subtree.
 * @returns {void}
 */
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

/**
 * Heap Sort
 * Sorts an array using heap sort.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - Sorted array.
 * @complexity O(n log(n))
 */
export function heapSort(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]; // Swap
        heapify(arr, i, 0);
    }
    return arr;
}
