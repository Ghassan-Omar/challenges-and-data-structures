const LinkedList = require("../linkedList");
const Node = require("../node");
const rotateLeft = require("../rotateLinkedList/rotateLinkedList");

describe("Rotate Linked List by K", () => {
  it("should rotate a non-empty list correctly", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.head = rotateLeft(list.head, 2);
    expect(list.toArray()).toEqual([3, 4, 5, 6, 1, 2]);
  });

  it("should handle k = 0 (no change)", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.head = rotateLeft(list.head, 0);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it("should handle k greater than list length", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.head = rotateLeft(list.head, 7);
    expect(list.toArray()).toEqual([2, 3, 4, 5, 6, 1]);
  });

  it("should handle negative k (rotate right)", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.head = rotateLeft(list.head, -2);
    expect(list.toArray()).toEqual([4, 5, 1, 2, 3]);
  });

  it("should handle empty list", () => {
    const list = new LinkedList();
    list.head = rotateLeft(list.head, 2);
    expect(list.head).toBeNull();
  });

  it("should handle single-node list", () => {
    const list = new LinkedList();
    list.add(10);
    list.head = rotateLeft(list.head, 5);
    expect(list.toArray()).toEqual([10]);
  });

  it("should handle list with duplicate values", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.head = rotateLeft(list.head, 1);
    expect(list.toArray()).toEqual([2, 2, 3, 1]);
  });
});

