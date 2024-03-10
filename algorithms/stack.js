/* # Complexity: O(1) */
export default class Stack {
	constructor() {
		this.elements = {};
		this.bottom = this.top = 0;
	}

	push(element) {
		this.elements[this.top] = element;
		this.top++;
	}

	pop() {
		if (this.isEmpty) {
			return undefined;
		}
		const item = this.elements[this.top - 1];
		delete this.elements[this.top - 1];
		this.top--;
		return item;
	}

	peek() {
		return this.elements[this.top - 1];
	}

	get length() {
		return this.top - this.bottom;
	}

	get isEmpty() {
		return this.length === 0;
	}
}

module.exports.Stack = Stack;
