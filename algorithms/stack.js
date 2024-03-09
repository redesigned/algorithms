/* # Complexity: O(1) */
export default class Stack {
    constructor() {
        this.elements = {};
        this.head = this.tail = 0;
    }

    push(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }

    pop() {
        if (this.isEmpty) {
            return undefined;
        }
        const item = this.elements[this.tail - 1];
        delete this.elements[this.tail - 1];
        this.tail--;
        return item;
    }

    peek() {
        return this.elements[this.tail - 1];
    }

    get length() {
        return this.tail - this.head;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

module.exports.Stack = Stack;
