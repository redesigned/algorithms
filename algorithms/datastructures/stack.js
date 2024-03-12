// @ts-check
"use strict";

/**
 * Stack
 * Represents a stack data structure.
 * @class
 * @complexity O(1) - The time complexity of a queue
 */
class Stack {

	/**
	 * constructor
	 * Creates a new Stack instance.
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
		 * bottom, top
		 * Index of the top element and bottom element in the stack.
		 * @type {number}
		 * @private
		 */
		this.bottom = this.top = 0;
	}

	/**
	 * push
	 * Adds an element to the top of the stack.
	 * @param {*} element - The element to push onto the stack.
	 * @returns {void}
	 */
	push(element) {
		this.elements[this.top] = element;
		this.top++;
	}

	/**
	 * pop
	 * Removes and returns the element from the top of the stack.
	 * @returns {*} - The element, or undefined if the stack is empty.
	 */
	pop() {
		if (this.isEmpty) {
			return undefined;
		}
		const item = this.elements[this.top - 1];
		delete this.elements[this.top - 1];
		this.top--;
		return item;
	}

	/**
	 * peek
	 * Returns the top element without removing it from the stack.
	 * @returns {*} - The front element, or undefined if the stack is empty.
	 */
	peek() {
		return this.elements[this.top - 1];
	}

	/**
	 * length
	 * Gets the current length of the stack.
	 * @type {number}
	 */
	get length() {
		return this.top - this.bottom;
	}

	/**
	 * isEmpty
	 * Checks if the stack is empty.
	 * @type {boolean}
	 */
	get isEmpty() {
		return this.length === 0;
	}
}

/**
 * @exports Stack
 */
module.exports = Stack;
