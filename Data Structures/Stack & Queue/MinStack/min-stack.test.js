const MinStack = require('./MinStack');

describe('MinStack', () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  describe('Basic Stack Operations', () => {
    test('should create an empty stack', () => {
      expect(minStack.isEmpty()).toBe(true);
      expect(minStack.top()).toBeUndefined();
      expect(minStack.getMin()).toBeUndefined();
    });

    test('should push elements to the stack', () => {
      minStack.push(15);
      expect(minStack.isEmpty()).toBe(false);
      expect(minStack.top()).toBe(15);
      expect(minStack.getMin()).toBe(15);

      minStack.push(7);
      expect(minStack.top()).toBe(7);
      expect(minStack.getMin()).toBe(7);

      minStack.push(12);
      expect(minStack.top()).toBe(12);
      expect(minStack.getMin()).toBe(7);
    });

    test('should pop elements from the stack', () => {
      minStack.push(15);
      minStack.push(7);
      minStack.push(12);

      expect(minStack.pop()).toBe(12);
      expect(minStack.top()).toBe(7);
      expect(minStack.getMin()).toBe(7);

      expect(minStack.pop()).toBe(7);
      expect(minStack.top()).toBe(15);
      expect(minStack.getMin()).toBe(15);

      expect(minStack.pop()).toBe(15);
      expect(minStack.isEmpty()).toBe(true);
    });
  });

  describe('Minimum Element Retrieval', () => {
    test('should return the minimum element in the stack', () => {
      minStack.push(15);
      expect(minStack.getMin()).toBe(15);

      minStack.push(7);
      expect(minStack.getMin()).toBe(7);

      minStack.push(12);
      expect(minStack.getMin()).toBe(7);

      minStack.push(3);
      expect(minStack.getMin()).toBe(3);
    });

    test('should maintain correct minimum after popping elements', () => {
      minStack.push(15);
      minStack.push(7);
      minStack.push(12);
      minStack.push(3);

      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // Remove 3
      expect(minStack.getMin()).toBe(7);

      minStack.pop(); // Remove 12
      expect(minStack.getMin()).toBe(7);

      minStack.pop(); // Remove 7
      expect(minStack.getMin()).toBe(15);
    });

    test('should handle duplicate minimum values', () => {
      minStack.push(5);
      minStack.push(3);
      minStack.push(3);
      minStack.push(7);

      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // Remove 7
      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // Remove one 3
      expect(minStack.getMin()).toBe(3);

      minStack.pop(); // Remove another 3
      expect(minStack.getMin()).toBe(5);
    });
  });

  describe('Edge Cases', () => {
    test('should handle popping from empty stack', () => {
      expect(minStack.pop()).toBeUndefined();
    });

    test('should handle single element operations', () => {
      minStack.push(42);
      expect(minStack.top()).toBe(42);
      expect(minStack.getMin()).toBe(42);
      expect(minStack.isEmpty()).toBe(false);

      expect(minStack.pop()).toBe(42);
      expect(minStack.isEmpty()).toBe(true);
      expect(minStack.top()).toBeUndefined();
      expect(minStack.getMin()).toBeUndefined();
    });

    test('should handle negative numbers', () => {
      minStack.push(-5);
      minStack.push(-10);
      minStack.push(-3);

      expect(minStack.getMin()).toBe(-10);
      expect(minStack.top()).toBe(-3);

      minStack.pop();
      expect(minStack.getMin()).toBe(-10);
    });
  });

  describe('Console Output Tests', () => {
    test('should print stack correctly', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      minStack.push(15);
      minStack.push(7);
      minStack.push(12);
      minStack.printStack();

      expect(consoleSpy).toHaveBeenCalledWith("Output: 12 -> 7 -> 15");

      consoleSpy.mockRestore();
    });

    test('should print empty stack message', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      minStack.printStack();

      expect(consoleSpy).toHaveBeenCalledWith("Stack is empty.");

      consoleSpy.mockRestore();
    });
  });

  describe('Complex Scenario Tests', () => {
    test('should handle the example scenario from the challenge', () => {
      // Following the example from the challenge images
      minStack.push(15);
      expect(minStack.getMin()).toBe(15);

      minStack.push(7);
      expect(minStack.getMin()).toBe(7);

      minStack.push(12);
      expect(minStack.getMin()).toBe(7);

      minStack.push(3);
      expect(minStack.getMin()).toBe(3);

      let popped = minStack.pop();
      expect(popped).toBe(3);
      expect(minStack.getMin()).toBe(7);

      minStack.push(2);
      expect(minStack.getMin()).toBe(2);
    });

    test('should maintain O(1) time complexity for all operations', () => {
      // This test ensures that operations don't degrade with stack size
      const startTime = Date.now();

      // Push many elements
      for (let i = 1000; i >= 1; i--) {
        minStack.push(i);
      }

      // Perform operations
      minStack.getMin();
      minStack.top();
      minStack.pop();
      minStack.getMin();

      const endTime = Date.now();
      const executionTime = endTime - startTime;

      // Should complete quickly (less than 100ms for this size)
      expect(executionTime).toBeLessThan(100);
      expect(minStack.getMin()).toBe(1);
    });
  });
});

