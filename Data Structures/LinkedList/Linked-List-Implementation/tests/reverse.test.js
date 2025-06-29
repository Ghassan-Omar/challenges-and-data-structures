const LinkedList = require("../linkedList");
const Node = require("../node");
const reverse = require("../reverse/reverse");

describe("Reverse Linked List", () => {
  it("should reverse a non-empty list", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.head = reverse(list.head);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  it("should remain unchanged when reversing a single-node list", () => {
    const list = new LinkedList();
    list.add(10);
    list.head = reverse(list.head);
    expect(list.toArray()).toEqual([10]);
  });

  it("should return null when reversing an empty list", () => {
    const list = new LinkedList();
    list.head = reverse(list.head);
    expect(list.head).toBeNull();
  });

  it("should reverse a list with duplicate values", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.head = reverse(list.head);
    expect(list.toArray()).toEqual([3, 2, 2, 1]);
  });
});

