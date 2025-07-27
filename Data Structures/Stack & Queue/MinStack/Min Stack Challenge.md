# Min Stack Challenge

## Problem Domain

This challenge requires the implementation of a `MinStack` class in JavaScript. A MinStack is a data structure that supports all the regular stack operations (push, pop, top, isEmpty) along with an additional operation, `getMin()`, which retrieves the minimum element currently in the stack. All these operations must have a time complexity of O(1).

## Inputs and Expected Outputs

Here's an example of how the `MinStack` class should behave:

```javascript
const MinStack = require("./MinStack");

const minStack = new MinStack();

// Push elements
minStack.push(15); // Top -> 15 (min: 15)
minStack.push(7);  // Top -> 7 -> 15 (min: 7)
minStack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
minStack.push(3);  // Top -> 3 -> 12 -> 7 -> 15 (min: 3)

// Print the stack
minStack.printStack(); // Output: Top -> 3 -> 12 -> 7 -> 15

// Get the minimum element
let min = minStack.getMin(); // min: 3

// Pop a node from the stack
let popped = minStack.pop(); // popped: 3
minStack.printStack(); // Output: Top -> 12 -> 7 -> 15

// Get the new minimum element
min = minStack.getMin(); // min: 7

// Peek the top node
let peeked = minStack.top(); // peeked: 12

// Push another element
minStack.push(2); // Top -> 2 -> 12 -> 7 -> 15 (min: 2)
minStack.printStack(); // Output: Top -> 2 -> 12 -> 7 -> 15

// Get the new minimum element
min = minStack.getMin(); // min: 2

// Check if the stack is empty
let isEmpty = minStack.isEmpty(); // isEmpty: false
```

## Edge Cases

-   **Empty Stack:** Handling `pop()`, `top()`, or `getMin()` on an empty stack should return `undefined` or a similar indicator.
-   **Single Element Stack:** Operations on a stack with only one element should behave correctly.
-   **Popping Minimums:** When the minimum element is popped, the `getMin()` operation must correctly identify the new minimum from the remaining elements.
-   **Duplicate Minimums:** The `MinStack` should correctly handle scenarios where multiple instances of the minimum value are present.

## Visual Representation

Below is a whiteboard image illustrating the MinStack data structure and its operations:

![MinStack Whiteboard Diagram](https://private-us-east-1.manuscdn.com/sessionFile/EytHvPnUmIcvJL79Oj6UZI/sandbox/pw1K9Jd2h5yI6LHoEEJs6r-images_1753639542696_na1fn_L2hvbWUvdWJ1bnR1L0RhdGEgU3RydWN0dXJlcy9TdGFja0FuZFF1ZXVlL01pblN0YWNrL3doaXRlYm9hcmQ.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRXl0SHZQblVtSWN2Skw3OU9qNlVaSS9zYW5kYm94L3B3MUs5SmQyaDV5STZMSG9FRUpzNnItaW1hZ2VzXzE3NTM2Mzk1NDI2OTZfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwUmhkR0VnVTNSeWRXTjBkWEpsY3k5VGRHRmphMEZ1WkZGMVpYVmxMMDFwYmxOMFlXTnJMM2RvYVhSbFltOWhjbVEucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Vs3bi77p4tRtH4i5JPPrSj0B-v4-N0toSMq0ppqoAa80IaSaY0xj3Ay-uA05sUzsPyuSfYbWTmhs4mrSP2CkCBC8h51r6SvaLdk0~RuciWgQ8P1SgDw~oaHloAMd10M1cBHgAV-Jm7pyHVeRfMrldvZLzqGvl~ySXSv3FY4Q-8bYnKh1rBxY8E3pkkJZaZZjI~QrV9Hp4VkdJM6eNoWZF1kKoB-VZloh29rH9ygyjEnZJneInKl2esNmfsQcbx~ymM0A0A97cZ38gv~l~9eBhj2n~hYD8ybAQmkJO2ehal67zkdzSjXi8GpNXIZyHOBmkPm3wXtHFdFte~m3rBWsYA__)

## Algorithm

The `MinStack` class uses two internal arrays (or stacks): one for the main stack (`this.stack`) and another to keep track of the minimum elements (`this.minStack`).

-   **`constructor()`**: Initializes both `this.stack` and `this.minStack` as empty arrays.

-   **`push(value)`**: 
    1.  Adds `value` to `this.stack`.
    2.  If `this.minStack` is empty or `value` is less than or equal to the top element of `this.minStack`, `value` is also added to `this.minStack`.

-   **`pop()`**: 
    1.  Removes and returns the top element from `this.stack`.
    2.  If the popped element is equal to the top element of `this.minStack`, the top element is also removed from `this.minStack`.

-   **`top()`**: Returns the top element of `this.stack` without removing it.

-   **`isEmpty()`**: Returns `true` if `this.stack` is empty, `false` otherwise.

-   **`getMin()`**: Returns the top element of `this.minStack` without removing it.

-   **`printStack()`**: Iterates through `this.stack` and prints its contents in a readable format.

## Real Code Snippet

```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  // ... other methods
}

module.exports = MinStack;
```

## Big O Time/Space Complexity

All core operations of the `MinStack` class achieve O(1) time complexity:

-   **`push(value)`**: O(1) - Array push operations are typically amortized O(1).
-   **`pop()`**: O(1) - Array pop operations are typically O(1).
-   **`top()`**: O(1) - Accessing the last element of an array is O(1).
-   **`isEmpty()`**: O(1) - Checking array length is O(1).
-   **`getMin()`**: O(1) - Accessing the last element of the `minStack` is O(1).

**Space Complexity**: O(N), where N is the number of elements in the stack. In the worst case (e.g., elements pushed in decreasing order), the `minStack` can grow to the same size as the main stack.

