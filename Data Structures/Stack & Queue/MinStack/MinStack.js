
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // To keep track of minimums
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return undefined; // Or throw an error
    }
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  top() {
    if (this.stack.length === 0) {
      return undefined; // Or throw an error
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return undefined; // Or throw an error
    }
    return this.minStack[this.minStack.length - 1];
  }

  printStack() {
    if (this.stack.length === 0) {
      console.log("Stack is empty.");
      return;
    }
    let output = "";
    for (let i = this.stack.length - 1; i >= 0; i--) {
      output += this.stack[i];
      if (i > 0) {
        output += " -> ";
      }
    }
    console.log("Output: " + output);
  }
}

module.exports = MinStack;


