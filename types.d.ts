/**
 * Queue
 * Represents a queue data structure.
 */
declare class Queue {
    /**
     * Queue Represents a queue data structure.
     */
    constructor();

    /**
     * enqueue Adds an element to the back of the queue.
     * @param element - The element to enqueue.
     * @returns
     */
    enqueue(element: any): void;

    /**
     * dequeue Removes and returns the front element from the queue.
     * @returns - The dequeued element, or undefined if the queue is empty.
     */
    dequeue(): any;

    /**
     * peek Returns the front element without removing it from the queue.
     * @returns - The front element, or undefined if the queue is empty.
     */
    peek(): any;

    /**
     * length Gets the current length of the queue.
     */
    length: number;

    /**
     * isEmpty Checks if the queue is empty.
     */
    isEmpty: boolean;

}

declare module 'Queue' {
}

/**
 * Stack
 * Represents a stack data structure.
 */
declare class Stack {
    /**
     * Stack Represents a stack data structure.
     */
    constructor();

    /**
     * push Adds an element to the top of the stack.
     * @param element - The element to push onto the stack.
     * @returns
     */
    push(element: any): void;

    /**
     * pop Removes and returns the element from the top of the stack.
     * @returns - The element, or undefined if the stack is empty.
     */
    pop(): any;

    /**
     * peek Returns the top element without removing it from the stack.
     * @returns - The front element, or undefined if the stack is empty.
     */
    peek(): any;

    /**
     * length Gets the current length of the stack.
     */
    length: number;

    /**
     * isEmpty Checks if the stack is empty.
     */
    isEmpty: boolean;

}

declare module 'Stack' {
}

/**
 * Calculate Pi Calculates Pi up to 48 decimals places, Fakes Calculating Pi up to 10000 decemil places.
 * @param n - The number of terms to use.
 * @returns - The value of pi as a string.
 * @throws - Throws an error if n exceeds 10,000.
 */
declare function calculatePi(n: number): string;

/**
 * Fibonacci Numbers Generates the Fibonacci numbers up to a given limit.
 * @param limit - The maximum value for the Fibonacci numbers.
 * @returns - An array of Fibonacci numbers.
 */
declare function fibonacciNumbers(limit: number): number[];

/**
 * Sieve of Eratosthenes Generates an array of prime numbers using the Sieve of Eratosthenes algorithm.
 * @param maxNum - The maximum number up to which to find prime numbers.
 * @returns - An array containing prime numbers up to 'maxNum'.
 */
declare function sieveOfEratosthenes(maxNum: number): number[];

/**
 * Twin Crystal Balls Finds the index of the first true value in the array using a jump search approach.
 * @param arr - The array to search.
 * @returns - The index of the first true value, or -1 if not found.
 */
declare function twinCrystalBalls(arr: boolean[]): number;

/**
 * Binary Search Performs binary search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 */
declare function binarySearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Fibonacci Search Performs a Fibonacci search on a sorted array.
 * @param arr - The sorted array to search.
 * @param target - The target value to find.
 * @returns - The index of the target value, or -1 if not found.
 */
declare function fibonacciSearch(arr: number[], target: number): number;

/**
 * Interpolation Search Performs interpolation search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 */
declare function interpolationSearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Javascript Search Performs default indexOf search on an array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 */
declare function javascriptSearch(arr: any[], target: any): number;

/**
 * Jump Search Performs Jump search on a sorted array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 */
declare function jumpSearch(arr: any[], target: any): number;

/**
 * Linear Search Performs linear search on a n array to find the index of a target value.
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the target value, or -1 if not found.
 */
declare function linearSearch(arr: any[], target: any): number;

/**
 * Bubble Sort Repeatedly compares adjacent elements and swaps them if they’re in the wrong order.
 * @param myArray - The array to be sorted.
 * @returns - The sorted array.
 */
declare function bubbleSort(myArray: number[]): number[];

/**
 * Bucket Sort Distributes elements into buckets and sorts each bucket individually.
 * @param arr - The input array to be sorted.
 * @param size - The size of each bucket (optional, default is 5).
 * @returns - The sorted array.
 */
declare function bucketSort(arr: number[], size?: number): number[];

/**
 * Comb Sort Similar to bubble sort but with a larger gap between compared elements, which reduces the number of swaps.
 * @param myArray - The input array to be sorted.
 * @param shrinkFactor - The shrink factor (optional, default is 1.3).
 * @returns - A new array containing the sorted elements.
 */
declare function combSort(myArray: number[], shrinkFactor?: number): number[];

/**
 * Counting Sort Suitable for non-negative integers with a limited range.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function countingSort(myArray: number[]): number[];

/**
 * Cycle Sort Minimizes the number of writes to the array by cyclically rotating elements to their correct positions.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function cycleSort(myArray: number[]): number[];

/**
 * Gnome Sort Compare adjacent elements. If they are out of order, swap them. Move the gnome one step backward
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function gnomeSort(myArray: number[]): number[];

/**
 * Heapify Heapify a subtree rooted at index i.
 * @param arr - The input array.
 * @param n - Size of the heap.
 * @param i - Index of the root of the subtree.
 * @returns
 */
declare function heapify(arr: number[], n: number, i: number): void;

/**
 * Heap Sort Builds a max heap and repeatedly extracts the maximum element.
 * @param arr - The input array.
 * @returns - Sorted array.
 */
declare function heapSort(arr: number[]): number[];

/**
 * Insertion Sort Builds a sorted array by repeatedly inserting unsorted elements into their correct positions.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function insertionSort(myArray: number[]): number[];

/**
 * Intro Sort Sorts an array using a combination of Quick Sort and Heap Sort or Insertion Sort
 * @param myArray - The input array to be sorted.
 */
declare function introSort(myArray: any[]): any[];

/**
 * Javascript Sort Sorts an array using the built in Javascript Sort algorithm, String-Based Lexicographic Sort with Timsort
 * @param myArray - The input array to be sorted.
 */
declare function javascriptSort(myArray: any[]): any[];

/**
 * Merge Sort Divides the array into halves until smallest units reached, and merges them back together in a sorted manner.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function mergeSort(arr: number[]): number[];

/**
 * Pancake Sort Moves elements backward if they’re in the wrong order
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function pancakeSort(myArray: number[]): number[];

/**
 * Quick Sort Algorithm Chooses a pivot, partitions the array, and recursively sorts the subarrays.
 * @param myArray - The input array to be sorted.
 */
declare function quickSort(myArray: any[]): any[];

/**
 * Radix Sort Sorts by individual digits, from least significant to most significant.
 * @param myArray - The input array to be sorted.
 * @returns - The sorted array.
 */
declare function radixSort(myArray: number[]): number[];

/**
 * Selection Sort Finds the smallest element and places it at the beginning, then repeats the process for the remaining elements.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function selectionSort(myArray: number[]): number[];

/**
 * Shell Sort An extension of insertion sort that compares elements separated by a fixed gap and gradually reduces the gap until it becomes 1.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 */
declare function shellSort(myArray: number[]): number[];

/**
 * Array Max Return the largest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The largest number in the array or 0 if empty.
 */
declare function arrayMax(arr: number[]): number;

/**
 * Array Merge Merges two sorted arrays into a single sorted array.
 * @param leftArr - The left sorted array.
 * @param rightArr - The right sorted array.
 * @returns - The merged sorted array.
 */
declare function arrayMerge(leftArr: number[], rightArr: number[]): number[];

/**
 * Array Min Return the smallest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The smallest number in the array or 0 if empty.
 */
declare function arrayMin(arr: number[]): number;

/**
 * Number Digit Count Calculates the number of Digits of the largest number in an array.
 * @param arr - The number to count digits of
 * @returns - The digit count of the largest number in the array
 */
declare function arrayMostDigits(arr: number[]): number;

/**
 * Array of Numbers Returns an Array of a given Length filled with the numbers 1 through X
 * @param num - The length of the Array
 * @returns - A new array containing the numbers
 */
declare function arrayOfNumbers(num: number): number[];

/**
 * Array Random Shuffle Fisher-Yates (or Knuth) Shuffle Returns an Array that has been randomly Shuffled
 * @param myArray - The length of the Array
 * @returns - A new array containing the numbers
 */
declare function arrayRandomShuffle(myArray: any[]): any[];

/**
 * Cumulative Sum Calculates the cumulative sum of an array of numbers.
 * @param arr - The input array of numbers.
 * @returns - The cumulative sum.
 */
declare function cumulativeSum(arr: number[]): number;

/**
 * Mean Value (Average) Calculates the mean average value for an array of numbers, returns 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The mean average value.
 */
declare function meanAverage(arr: number[]): number;

/**
 * Number Digit At Given a number it returns the digit as a specific location
 * @param num - The number
 * @param place - The place to get the digit at 0-x starting at 0
 * @returns - The digit at that location starting at 0th place
 */
declare function numberDigitAt(num: number, place: number): number;

/**
 * Number Digit Count Calculates the number of Digits in a given Number.
 * @param num - The number to count digits of
 * @returns - The number of digits in the number
 */
declare function numberDigitCount(num: number): number;

/**
 * Square Root Calculates the square root of the number with given tolerance (precision) by using Newton's method.
 * @param number - the number we want to find a square root of.
 * @param tolerance - how many precise numbers after the floating point we want to get.
 */
declare function squareRoot(number: any, tolerance?: any): number;

/**
 * Truncate String Truncates a string to a specific length.
 * @param inputString - The input string to truncate.
 * @param maxLength - The maximum length of the truncated string.
 * @returns - The truncated string.
 */
declare function truncateString(inputString: string, maxLength: number): string;

