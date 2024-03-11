/**
 * Binary Search Performs binary search on a sorted array to find the index of a target value.
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 */
declare function binarySearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Bubble Sort Sorts an array using the Bubble Sort algorithm.
 * @param myArray - The array to be sorted.
 * @returns - The sorted array.
 */
declare function bubbleSort(myArray: number[]): number[];

/**
 * enqueue Adds an element to the back of the queue.
 * @param element - The element to enqueue.
 * @returns
 */
declare function enqueue(element: any): void;

/**
 * dequeue Removes and returns the front element from the queue.
 * @returns - The dequeued element, or undefined if the queue is empty.
 */
declare function dequeue(): any;

/**
 * peek Returns the front element without removing it from the queue.
 * @returns - The front element, or undefined if the queue is empty.
 */
declare function peek(): any;

/**
 * Sieve of Eratosthenes Generates an array of prime numbers using the Sieve of Eratosthenes algorithm.
 * @param maxNum - The maximum number up to which to find prime numbers.
 * @returns - An array containing prime numbers up to 'maxNum'.
 */
declare function sieveOfEratosthenes(maxNum: number): number[];

/**
 * push Adds an element to the top of the stack.
 * @param element - The element to push onto the stack.
 * @returns
 */
declare function push(element: any): void;

/**
 * pop Removes and returns the element from the top of the stack.
 * @returns - The element, or undefined if the stack is empty.
 */
declare function pop(): any;

/**
 * Twin Crystal Balls Finds the index of the first true value in the array using a jump search approach.
 * @param arr - The array to search.
 * @returns - The index of the first true value, or -1 if not found.
 */
declare function twinCrystalBalls(arr: boolean[]): number;

