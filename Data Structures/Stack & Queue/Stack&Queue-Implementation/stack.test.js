const Stack = require('./stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should push a node onto the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should pop a node from the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test('should return null when popping from an empty stack', () => {
    expect(stack.pop()).toBeNull();
  });

  test('should peek the top node from the stack without removing it', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.items.length).toBe(2);
  });

  test('should return null when peeking from an empty stack', () => {
    expect(stack.peek()).toBeNull();
  });

  test('should check if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });
});

