import { expect, test } from 'vitest';

/* # Complexity: O(N) */
import { binarySearch } from './algorithms/binarySearch';
test('Binary Search', () => {
	expect(binarySearch([], 5)).toBe(-1);
	expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
	expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
	expect(binarySearch([3, 5, 7, 9], 9)).toBe(3);
	expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
});

/* # Complexity: O(√N) */
import { twinCrystalBalls } from './algorithms/twinCrystalBalls';
test('Twin Crystal Balls', () => {
	expect(twinCrystalBalls([])).toBe(-1);
	expect(twinCrystalBalls([1])).toBe(-1);
	expect(twinCrystalBalls([0])).toBe(0);
	expect(twinCrystalBalls([0, 0])).toBe(1);
	expect(twinCrystalBalls([0, 0, 1])).toBe(1);
	expect(twinCrystalBalls([0, 0, 0])).toBe(2);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 1, 1])).toBe(4);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 1])).toBe(5);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0])).toBe(5);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0])).toBe(6);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 1])).toBe(6);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0])).toBe(7);
	expect(twinCrystalBalls([1, 1, 1, 1, 1, 1, 1])).toBe(-1);
	expect(twinCrystalBalls([0, 1, 1, 1, 1, 1, 1])).toBe(0);
	expect(twinCrystalBalls([1, 1, 1, 1, 1, 1, 1])).toBe(-1);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(23);
	expect(twinCrystalBalls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1])).toBe(21);
});

/* # Complexity: O(N²) */
import { bubbleSort } from './algorithms/bubbleSort';
test('Bubble Sort', () => {
	expect(bubbleSort([])).to.be.empty;
	expect(bubbleSort([1, 3, 5, 7, 9])).toStrictEqual([1, 3, 5, 7, 9]);
	expect(bubbleSort([9, 3, 7, 5, 1])).toStrictEqual([1, 3, 5, 7, 9]);
});

/* # Complexity: O(1) */
import { Queue } from './algorithms/queue';
test('Queue' , () => {
	const myQueue = new Queue();
	expect(myQueue.length).toBe(0);
	expect(myQueue.isEmpty).toBe(true);
	expect(myQueue.peek()).toBe(undefined);
	expect(myQueue.dequeue()).toBe(undefined);
	myQueue.enqueue('Alice');
	expect(myQueue.length).toBe(1);
	expect(myQueue.isEmpty).toBe(false);
	expect(myQueue.peek()).toBe('Alice');
	myQueue.enqueue('Bob');
	myQueue.enqueue('Charlie');
	expect(myQueue.length).toBe(3);
	expect(myQueue.isEmpty).toBe(false);
	expect(myQueue.peek()).toBe('Alice');
	expect(myQueue.dequeue()).toBe('Alice');
	expect(myQueue.length).toBe(2);
	expect(myQueue.isEmpty).toBe(false);
	expect(myQueue.peek()).toBe('Bob');
	expect(myQueue.dequeue()).toBe('Bob');
	expect(myQueue.length).toBe(1);
	myQueue.enqueue('Fred');
	expect(myQueue.length).toBe(2);
	expect(myQueue.dequeue()).toBe('Charlie');
	expect(myQueue.length).toBe(1);
	expect(myQueue.dequeue()).toBe('Fred');
	expect(myQueue.length).toBe(0);
	expect(myQueue.isEmpty).toBe(true);
});

/* # Complexity: O(1) */
import { Stack } from './algorithms/stack';
test('Stack' , () => {
	const myStack = new Stack();
	expect(myStack.length).toBe(0);
	expect(myStack.isEmpty).toBe(true);
	expect(myStack.peek()).toBe(undefined);
	expect(myStack.pop()).toBe(undefined);
	myStack.push('Alice');
	expect(myStack.length).toBe(1);
	expect(myStack.isEmpty).toBe(false);
	expect(myStack.peek()).toBe('Alice');
	myStack.push('Bob');
	myStack.push('Charlie');
	expect(myStack.length).toBe(3);
	expect(myStack.isEmpty).toBe(false);
	expect(myStack.peek()).toBe('Charlie');
	expect(myStack.pop()).toBe('Charlie');
	expect(myStack.length).toBe(2);
	expect(myStack.isEmpty).toBe(false);
	expect(myStack.peek()).toBe('Bob');
	expect(myStack.pop()).toBe('Bob');
	expect(myStack.length).toBe(1);
	myStack.push('Fred');
	expect(myStack.length).toBe(2);
	expect(myStack.pop()).toBe('Fred');
	expect(myStack.length).toBe(1);
	expect(myStack.pop()).toBe('Alice');
	expect(myStack.length).toBe(0);
	expect(myStack.isEmpty).toBe(true);
});

// import { cumSum } from './sum';
// test('cumulative sum of an array', () => {
//   expect(cumSum([1, 3, 5, 7])).toBe(16);
//   expect(cumSum([-2, -4, -8])).toBe(-14);
// });


// import { search } from './bs';
// test('binary search', () => {
//   expect(search([1, 3, 5, 7], 5)).toBe(2);
//   expect(search([1, 3, 5, 7], 2)).toBe(-1);
// } );

// import { LRU } from './lru';
// test('LRU cache', () => {
//   const cache = new LRU(2);
//   cache.putItem(1, 1);
//   cache.putItem(2, 2);
//   expect(cache.getItem(1)).toBe(1);
//   cache.putItem(3, 3);
//   expect(cache.getItem(2)).toBe(undefined);
// });