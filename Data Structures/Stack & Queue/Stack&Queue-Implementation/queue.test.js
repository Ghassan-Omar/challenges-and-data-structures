
const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should enqueue a node into the queue", () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should dequeue a node from the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  test("should return null when dequeuing from an empty queue", () => {
    expect(queue.dequeue()).toBeNull();
  });

  test("should peek the front node from the queue without removing it", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
    expect(queue.items.length).toBe(2);
  });

  test("should return null when peeking from an empty queue", () => {
    expect(queue.peek()).toBeNull();
  });

  test("should check if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });
});

