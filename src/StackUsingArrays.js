/** Stack is a linear data structure that follows LIFO (Last In First Out) Principle,
 * the last element inserted is the first to be popped out. 
 * It means both insertion and deletion operations happen at one end only.
 * Stack support functions like top(), push(), pop(), min() etc. all in T.C. of O(1)
 */ 

class Stack {
    constructor() {
        this.stack = [];
        this.minStack = []; // to support min value in stack at each length
    }
    /**
     * Pushes new value ex: num onto a stack
     * @param {number} value 
     */
    push(value) {
        this.stack.push(value);

        // if previous minStack value is less than "val" to minium stays the same
        if (this.minStack.length && this.minStack[this.minStack.length - 1] < val) {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        } else {
            // else new value is minium value in stack
            this.minStack.push(val);
        }
    }

    /**
     * Pop value from the stack i.e. last element inserted is popped out
     */
    pop() {
        this.stack.pop();
    }

    /**
     * Return top of stack or the last element inserted onto stack
     * @returns {number} value 
     */
    top() {
        return this.stack.length ?? this.stack[this.stack.length - 1];
    }

    /**
     * Returns current minimum value in the stack
     * @returns {number} value 
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

export default Stack;

//Use-age of stack for example
const myStack = new Stack();
myStack.push(1); // 1
myStack.push(2); // 1, 2
myStack.push(5); // 1, 2, 5
myStack.top(); // 5
myStack.pop(); // 1, 2
myStack.top(); // 2  
myStack.getMin(); // 1
myStack.push(-1); // 1, 2, -1
myStack.getMin(); // -1 
myStack.push(0); // 1, 2, -1, 0
myStack.getMin(); // -1