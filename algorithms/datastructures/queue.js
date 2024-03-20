// @ts-check
"use strict";

/**
 * Queue
 * Represents a queue data structure.
 * @class
 * @complexity O(1) - The time complexity of a queue
 */
class Queue {

	/**
	 * constructor
	 * Creates a new Queue instance.
	 * @constructor
	 */
	constructor() {

		/**
		 * elements
		 * Internal storage for queue elements.
		 * @type {Object}
		 * @private
		 */
		this.elements = {};

		/**
		 * head, tail
		 * Index of the front element and final element in the queue.
		 * @type {number}
		 * @private
		 */
		this.head = this.tail = 0;
	}

	/**
	 * enqueue
	 * Adds an element to the back of the queue.
	 * @param {*} element - The element to enqueue.
	 * @returns {void}
	 */
	enqueue(element) {
		this.elements[this.tail] = element;
		this.tail++;
	}

	/**
	 * dequeue
	 * Removes and returns the front element from the queue.
	 * @returns {*} - The dequeued element, or undefined if the queue is empty.
	 */
	dequeue() {
		if (this.isEmpty) {
			return undefined;
		}
		const item = this.elements[this.head];
		delete this.elements[this.head];
		this.head++;
		return item;
	}

	/**
	 * peek
	 * Returns the front element without removing it from the queue.
	 * @returns {*} - The front element, or undefined if the queue is empty.
	 */
	peek() {
		return this.elements[this.head];
	}
	front() {
		return this.peek();
	}

	/**
	 * length
	 * Gets the current length of the queue.
	 * @type {number}
	 */
	get length() {
		return this.tail - this.head;
	}

	/**
	 * isEmpty
	 * Checks if the queue is empty.
	 * @type {boolean}
	 */
	get isEmpty() {
		return !!(this.length === 0);
	}
}

/**
 * @exports Queue
 */
module.exports = Queue;
