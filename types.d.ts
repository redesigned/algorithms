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
 * Interpolation Search Performs interpolation search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 */
declare function interpolationSearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Jump Search Performs ump search on a sorted array to find the index of a target value
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
 * Bubble Sort Sorts an array using the Bubble Sort algorithm.
 * @param myArray - The array to be sorted.
 * @returns - The sorted array.
 */
declare function bubbleSort(myArray: number[]): number[];

/**
 * Quick Sort Algorithm Sorts an array using the Quick Sort algorithm.
 * @param arr - The input array to be sorted.
 */
declare function quickSort(arr: any[]): any[];

