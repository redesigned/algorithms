// @ts-check
"use strict";

/**
 * Fibonacci Numbers
 * Generates the Fibonacci numbers up to a given limit.
 * @param {number} limit - The maximum value for the Fibonacci numbers.
 * @returns {number[]} - An array of Fibonacci numbers.
 * @complexity O(log n)
 * @author Joshua Jarman
 */
export function fibonacciNumbers(limit) {
    const fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= limit) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}
