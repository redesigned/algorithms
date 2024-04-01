/**
 * Encode Base64 Encodes a string to Base64.
 * @param str - The input string to encode.
 * @returns The Base64-encoded string.
 * @author Joshua Jarman
 */
declare function encodeBase64(str: string): string;

/**
 * Decode Base64 Decodes a string from Base64.
 * @param str - The input string to decode.
 * @returns The Base64-decoded string.
 * @author Joshua Jarman
 */
declare function decodeBase64(str: string): string;

/**
 * Cesars Cipher Encrypts or decrypts a given string using the Caesar cipher.  Use the negative of the value used to encrypt to decrypt.
 * @param str - The input string to be transformed.
 * @param offset - The offset value for the cipher (defaults to 0).
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function ceasarsCipher(str: string, offset?: number): string;

/**
 * Interleave Interleaves characters from the input.
 * @param str - The input string to be interleaved.
 * @param segments - The number of segments to create.
 * @returns - The interleaved string.
 * @author Joshua Jarman
 */
declare function interleave(str?: string, segments?: number): string;

/**
 * Deinterlave Deinterleaves characters from the input string.
 * @param str - The input string to be deinterleaved.
 * @param segments - The number of segments to create.
 * @returns - The deinterleaved string.
 * @author Joshua Jarman
 */
declare function deinterleave(str?: string, segments?: number): string;

/**
 * Processes a block of input data for MD5 hashing.
 * @param x - An array of 16 32-bit integers representing the current state.
 * @param k - An array of 64 32-bit integers representing the input block.
 */
declare function md5cycle(x: number[], k: number[]): void;

/**
 * Performs a common operation on the input values.
 * @param q - A number.
 * @param a - First operand.
 * @param b - Second operand.
 * @param x - Third operand.
 * @param s - Shift value.
 * @param t - Fourth operand.
 * @returns - Result of the operation.
 */
declare function cmn(q: number, a: number, b: number, x: number, s: number, t: number): number;

/**
 * Applies the FF function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the FF function.
 */
declare function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the GG function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the GG function.
 */
declare function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the HH function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the HH function.
 */
declare function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Applies the II function to the input values.
 * @param a - First operand.
 * @param b - Second operand.
 * @param c - Third operand.
 * @param d - Fourth operand.
 * @param x - Fifth operand.
 * @param s - Shift value.
 * @param t - Sixth operand.
 * @returns - Result of the II function.
 */
declare function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number;

/**
 * Computes the MD5 hash of the input string.
 * @param s - The input string.
 * @returns - The MD5 hash state (array of four 32-bit integers).
 */
declare function md51(s: string): number[];

/**
 * Processes a block of input data for MD5 hashing.
 * @param s - The input block (64 characters).
 * @returns - An array of 16 32-bit integers representing the processed block.
 */
declare function md5blk(s: string): number[];

/**
 * Converts a 32-bit integer to a hexadecimal string.
 * @param n - The input integer.
 * @returns - The hexadecimal representation.
 */
declare function rhex(n: number): string;

/**
 * Converts an array of 32-bit integers to a concatenated hexadecimal string.
 * @param x - The array of integers.
 * @returns - The concatenated hexadecimal string.
 */
declare function hex(x: number[]): string;

/**
 * Computes the MD5 hash of the input string.
 * @param str - The input string.
 * @returns - The MD5 hash.
 */
declare function md5(str: string): string;

/**
 * Adds two 32-bit integers.
 * @param a - First operand.
 * @param b - Second operand.
 * @returns - Sum of the two integers.
 */
declare function add32(a: number, b: number): number;

/**
 * ROT13 Encrypts or decrypts letters in a given string using the rot13 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot13(str: string): string;

/**
 * ROT18 Encrypts or decrypts letters and numbers in a given string using the rot18 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot18(str: string): string;

/**
 * ROT47 Encrypts or decrypts all ASCII characters in a given string using the rot47 cipher.  Use again to decrypt. Note that the \ character needs to be escaped in the string passed into the fucntion due to limitations with javascript string escaping.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot47(str: string): string;

/**
 * ROT5 Encrypts or decrypts numbers in a given string using the rot5 cipher.  Use again to decrypt.
 * @param str - The input string to be transformed.
 * @returns - The transformed string after applying the Caesar cipher.
 * @author Joshua Jarman
 */
declare function rot5(str: string): string;

/**
 * xOR Encodes a string using XOR operation with a given key.
 * @param str - The input string to be encoded.
 * @param key - The XOR key (default is 51).
 * @returns - The encoded string.
 * @author Joshua Jarman
 */
declare function xOR(str?: string, key?: number): string;

/**
 * Queue
 * Represents a queue data structure.
 */
declare class Queue {
    /**
     * Queue Represents a queue data structure.
     * @author Joshua Jarman
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
     * @author Joshua Jarman
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
 * Babylonian Square Root Calculates the square root of a number using the Babylonian method.
 * @param n - The input number.
 * @returns - The square root of the input number (rounded to 6 decimal places).
 * @author Joshua Jarman
 */
declare function babylonianSquareRoot(n: number): number;

/**
 * Fake Pi Returns Pi up to 1000000 decimal places from proven pi calculation for testing Pi generation functions
 * @param n - The number of terms to use.
 * @returns - The value of pi as a string.
 * @throws - Throws an error if n exceeds 1,000,000.
 * @author Joshua Jarman
 */
declare function fakePi(n: number): string;

/**
 * Fibonacci Numbers Generates the Fibonacci numbers up to a given limit.
 * @param limit - The maximum value for the Fibonacci numbers.
 * @returns - An array of Fibonacci numbers.
 * @author Joshua Jarman
 */
declare function fibonacciNumbers(limit: number): number[];

/**
 * Newtons Square Root Calculates the square root of the number with given tolerance (precision) by using Newton's method.
 * @param number - the number we want to find a square root of.
 * @param tolerance - how many precise numbers after the floating point we want to get.
 * @author Joshua Jarman
 */
declare function newtonsSquareRoot(number: any, tolerance?: any): number;

/**
 * Sieve of Eratosthenes Generates an array of prime numbers using the Sieve of Eratosthenes algorithm.
 * @param maxNum - The maximum number up to which to find prime numbers.
 * @returns - An array containing prime numbers up to 'maxNum'.
 * @author Joshua Jarman
 */
declare function sieveOfEratosthenes(maxNum: number): number[];

/**
 * Dijkstra Maze Solver Solves a maze using Dijkstra's algorithm to find the shortest path through a maze, returns -1 if no path can be found.
 * @param maze - The maze to be solved, represented as a 2D array of strings.
 * @param wallChar - The character that represents a wall in the maze.
 * @param startChar - The character that represents the start point in the maze.
 * @param endChar - The character that represents the end point in the maze.
 * @returns - The path from start to end as an array of coordinates, or -1 if no solution exists.
 * @author Joshua Jarman
 */
declare function dijkstraMazeSolver(maze: (string[])[], wallChar: string, startChar: string, endChar: string): (number[])[] | number;

/**
 * Twin Crystal Balls Finds the index of the first true value in the array using a jump search approach.
 * @param arr - The array to search.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function twinCrystalBalls(arr: boolean[]): number;

/**
 * Binary Search Performs binary search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function binarySearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Fibonacci Search Performs a Fibonacci search on a sorted array.
 * @param arr - The sorted array to search.
 * @param target - The target value to find.
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function fibonacciSearch(arr: number[], target: number): number;

/**
 * Interpolation Search Performs interpolation search on a sorted array to find the index of a target value
 * @param arr - The sorted array to search.
 * @param target - The value to search for.
 * @param start - The starting index for the search (default is 0).
 * @param end - The ending index for the search (default is arr.length - 1).
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function interpolationSearch(arr: number[], target: number, start?: number, end?: number): number;

/**
 * Javascript Search Performs default indexOf search on an array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function javascriptSearch(arr: any[], target: any): number;

/**
 * Jump Search Performs Jump search on a sorted array to find the index of a target value
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the first true value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function jumpSearch(arr: any[], target: any): number;

/**
 * Linear Search Performs linear search on a n array to find the index of a target value.
 * @param arr - The array to search.
 * @param target - The value to search for.
 * @returns - The index of the target value, or -1 if not found.
 * @author Joshua Jarman
 */
declare function linearSearch(arr: any[], target: any): number;

/**
 * Bubble Sort Repeatedly compares adjacent elements and swaps them if they’re in the wrong order.
 * @param myArray - The array to be sorted.
 * @returns - The sorted array.
 * @author Joshua Jarman
 */
declare function bubbleSort(myArray: number[]): number[];

/**
 * Bucket Sort Distributes elements into buckets and sorts each bucket individually.
 * @param arr - The input array to be sorted.
 * @param size - The size of each bucket (optional, default is 5).
 * @returns - The sorted array.
 * @author Joshua Jarman
 */
declare function bucketSort(arr: number[], size?: number): number[];

/**
 * Comb Sort Similar to bubble sort but with a larger gap between compared elements, which reduces the number of swaps.
 * @param myArray - The input array to be sorted.
 * @param shrinkFactor - The shrink factor (optional, default is 1.3).
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function combSort(myArray: number[], shrinkFactor?: number): number[];

/**
 * Counting Sort Suitable for non-negative integers with a limited range.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function countingSort(myArray: number[]): number[];

/**
 * Cycle Sort Minimizes the number of writes to the array by cyclically rotating elements to their correct positions.
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function cycleSort(myArray: number[]): number[];

/**
 * Gnome Sort Compare adjacent elements. If they are out of order, swap them. Move the gnome one step backward
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function gnomeSort(myArray: number[]): number[];

/**
 * Heapify Heapify a subtree rooted at index i.
 * @param arr - The input array.
 * @param n - Size of the heap.
 * @param i - Index of the root of the subtree.
 * @returns
 * @author Joshua Jarman
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
 * @author Joshua Jarman
 */
declare function insertionSort(myArray: number[]): number[];

/**
 * Intro Sort Sorts an array using a combination of Quick Sort and Heap Sort or Insertion Sort
 * @param myArray - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function introSort(myArray: any[]): any[];

/**
 * Javascript Sort Sorts an array using the built in Javascript Sort algorithm, String-Based Lexicographic Sort with Timsort
 * @param myArray - The input array to be sorted.
 * @author Joshua Jarman
 */
declare function javascriptSort(myArray: any[]): any[];

/**
 * Merge Sort Divides the array into halves until smallest units reached, and merges them back together in a sorted manner.
 * @param arr - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
 */
declare function mergeSort(arr: number[]): number[];

/**
 * Pancake Sort Moves elements backward if they’re in the wrong order
 * @param myArray - The input array to be sorted.
 * @returns - A new array containing the sorted elements.
 * @author Joshua Jarman
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
 * Average Average Calculates the average value for an array of numbers, returns 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The average value.
 * @author Joshua Jarman
 */
declare function arrayAverage(arr: number[]): number;

/**
 * Array Cumulative Sum Calculates the cumulative sum of an array of numbers.
 * @param arr - The input array of numbers.
 * @returns - The cumulative sum.
 * @author Joshua Jarman
 */
declare function arrayCumulativeSum(arr: number[]): number;

/**
 * Array Max Return the largest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The largest number in the array or 0 if empty.
 * @author Joshua Jarman
 */
declare function arrayMax(arr: number[]): number;

/**
 * Array Merge Merges two sorted arrays into a single sorted array.
 * @param leftArr - The left sorted array.
 * @param rightArr - The right sorted array.
 * @returns - The merged sorted array.
 * @author Joshua Jarman
 */
declare function arrayMerge(leftArr: number[], rightArr: number[]): number[];

/**
 * Array Min Return the smallest value from an array of numbers or 0 if empty.
 * @param arr - The input array of numbers.
 * @returns - The smallest number in the array or 0 if empty.
 * @author Joshua Jarman
 */
declare function arrayMin(arr: number[]): number;

/**
 * Number Digit Count Calculates the number of Digits of the largest number in an array.
 * @param arr - The number to count digits of
 * @returns - The digit count of the largest number in the array
 * @author Joshua Jarman
 */
declare function arrayMostDigits(arr: number[]): number;

/**
 * Array of Numbers Returns an Array of a given Length filled with the numbers 1 through X
 * @param num - The length of the Array
 * @returns - A new array containing the numbers
 * @author Joshua Jarman
 */
declare function arrayOfNumbers(num: number): number[];

/**
 * Array Random Shuffle Fisher-Yates (or Knuth) Shuffle Returns an Array that has been randomly Shuffled
 * @param myArray - The length of the Array
 * @returns - A new array containing the numbers
 * @author Joshua Jarman
 */
declare function arrayRandomShuffle(myArray: any[]): any[];

/**
 * Number Digit At Given a number it returns the digit as a specific location
 * @param num - The number
 * @param place - The place to get the digit at 0-x starting at 0
 * @returns - The digit at that location starting at 0th place
 * @author Joshua Jarman
 */
declare function numberDigitAt(num: number, place: number): number;

/**
 * Number Digit Count Calculates the number of Digits in a given Number.
 * @param num - The number to count digits of
 * @returns - The number of digits in the number
 * @author Joshua Jarman
 */
declare function numberDigitCount(num: number): number;

/**
 * String Random Generates a random string of specified length.
 * @param length - The desired length of the random string.
 * @param possible - A string containing possible characters for the random string.
 * @returns - The randomly generated string.
 * @author Joshua Jarman
 */
declare function stringRandom(length?: number, possible?: string): string;

/**
 * String Random Binary Generates a random binary string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated binary string.
 * @author Joshua Jarman
 */
declare function stringRandomBinary(length?: number): string;

/**
 * String Random Hexidecimal Generates a random hexidecimal string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated hexidecimal string.
 * @author Joshua Jarman
 */
declare function stringRandomHexidecimal(length?: number): string;

/**
 * String Random Numeric Generates a random hexidecimal string of specified length.
 * @param length - The desired length of the random string.
 * @returns - The randomly generated hexidecimal string.
 * @author Joshua Jarman
 */
declare function stringRandomNumeric(length?: number): string;

/**
 * String Reverse Reverses a String
 * @param str - The string to reverse
 * @returns - The rreversed string
 * @author Joshua Jarman
 */
declare function stringReverse(str?: string): string;

/**
 * String Truncate Truncates a string to a specific length.
 * @param inputString - The input string to truncate.
 * @param maxLength - The maximum length of the truncated string.
 * @returns - The truncated string.
 * @author Joshua Jarman
 */
declare function stringTruncate(inputString: string, maxLength: number): string;

/**
 * String UUI vX Generates a unique identifier (UII) alphanumeric string upper and lower case.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @param charset - The character set for the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated UII.
 * @author Joshua Jarman
 */
declare function stringUIIvX(length?: number, dateKey?: Date, charset?: string): string;

/**
 * String UUI Numeric Generates a unique identifier (UII) numeric string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated numeric UII.
 * @author Joshua Jarman
 */
declare function stringUIINumeric(length?: number, dateKey?: Date): string;

/**
 * String UUI Hexidecimal Generates a unique identifier (UII) hexidecimal string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated hexidecimal UII.
 * @author Joshua Jarman
 */
declare function stringUIIHexidecimal(length?: number, dateKey?: Date): string;

/**
 * String UUI AlphaNumeric Generates a unique identifier (UII) alphanumeric string.
 * @param length - The desired length of the UII.
 * @param dateKey - The date key used in generating the UII.
 * @throws Throws an error if the specified length is less than 32.
 * @returns The generated alphanumeric UII.
 * @author Joshua Jarman
 */
declare function stringUIIAlphaNumeric(length?: number, dateKey?: Date): string;

/**
 * String UUID v4 Generates a Version 4 UUID (randomly generated UUID) in string format following the IETF RFC 4122
 * @returns A randomly generated UUID.
 * @author Joshua Jarman
 */
declare function stringUUIDv4(): string;

/**
 * String UUID v8 Generates a Version 8 UUID (randomly generated UUID v8 not time based v8) in string format
 * @returns A randomly generated UUID.
 * @author Joshua Jarman
 */
declare function stringUUIDv8(): string;

