const LinkedList = require('../LinkedList');
const Node = require('../Node');

describe('LinkedList Reverse', () => {
  it('should reverse a non-empty list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  it('should remain unchanged when reversing a single-node list', () => {
    const list = new LinkedList();
    list.add(10);
    list.reverse();
    expect(list.toArray()).toEqual([10]);
  });

  it('should return null when reversing an empty list', () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.head).toBeNull();
  });

  it('should reverse a list with duplicate values', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 2, 1]);
  });
});

