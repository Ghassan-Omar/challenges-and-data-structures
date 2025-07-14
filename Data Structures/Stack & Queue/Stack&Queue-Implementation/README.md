# Data Structures Whiteboard Explanations

This repository contains whiteboard explanations for common data structures: Stack and Queue.

## Stack

### Problem Domain

A Stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. This means the last element added to the stack is the first one to be removed.

### Inputs and Expected Outputs

- **push(element)**: Adds an element to the top of the stack. Expected output: The stack with the new element added.
- **pop()**: Removes and returns the top element from the stack. Expected output: The removed element, or null if the stack is empty.
- **peek()**: Returns the top element of the stack without removing it. Expected output: The top element, or null if the stack is empty.

### Edge Cases

- Popping or peeking from an empty stack.

### Visual

![Stack Whiteboard](/home/ubuntu/stack_whiteboard.png)

### Algorithm

- **push**: Add the new element to the end of an array.
- **pop**: Remove the last element from the array.
- **peek**: Return the last element of the array without removing it.

### Real Code

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Stack;
```

### Big O Time/Space Complexity

- **push**: O(1) time, O(1) space (amortized)
- **pop**: O(1) time, O(1) space
- **peek**: O(1) time, O(1) space

## Queue

### Problem Domain

A Queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. This means the first element added to the queue is the first one to be removed.

### Inputs and Expected Outputs

- **enqueue(element)**: Adds an element to the back of the queue. Expected output: The queue with the new element added.
- **dequeue()**: Removes and returns the front element from the queue. Expected output: The removed element, or null if the queue is empty.
- **peek()**: Returns the front element of the queue without removing it. Expected output: The front element, or null if the queue is empty.

### Edge Cases

- Dequeuing or peeking from an empty queue.

### Visual

![Queue Whiteboard](/home/ubuntu/queue_whiteboard.png)

### Algorithm

- **enqueue**: Add the new element to the end of an array.
- **dequeue**: Remove the first element from the array.
- **peek**: Return the first element of the array without removing it.

### Real Code

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
}

module.exports = Queue;
```

### Big O Time/Space Complexity

- **enqueue**: O(1) time, O(1) space (amortized)
- **dequeue**: O(n) time (due to shifting elements in array), O(1) space
- **peek**: O(1) time, O(1) space


