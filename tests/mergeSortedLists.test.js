const LinkedList = require('./LinkedList');

describe('LinkedList - mergeSortedLists', () => {
  test("should return null when merging two empty lists", () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList).toBeNull();
  });

  test('should merge an empty list with a non-empty list', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();
    l2.add(1);
    l2.add(2);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2]);
  });

  test('should merge a non-empty list with an empty list', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(2);
    const l2 = new LinkedList();
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2]);
  });

  test('should merge two single-element lists', () => {
    const l1 = new LinkedList();
    l1.add(1);
    const l2 = new LinkedList();
    l2.add(2);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2]);
  });

  test('should merge two sorted lists with even number of elements', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(3);
    const l2 = new LinkedList();
    l2.add(2);
    l2.add(4);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2, 3, 4]);
  });

  test('should merge two sorted lists with odd number of elements', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(3);
    l1.add(5);
    const l2 = new LinkedList();
    l2.add(2);
    l2.add(4);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2, 3, 4, 5]);
  });

  test('should merge two sorted lists with duplicate values', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(2);
    l1.add(2);
    const l2 = new LinkedList();
    l2.add(1);
    l2.add(2);
    l2.add(3);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 1, 2, 2, 2, 3]);
  });

  test('should merge two sorted lists where one list is longer than the other', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(2);
    l1.add(3);
    l1.add(4);
    const l2 = new LinkedList();
    l2.add(5);
    l2.add(6);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should merge two sorted lists with negative numbers', () => {
    const l1 = new LinkedList();
    l1.add(-3);
    l1.add(-1);
    const l2 = new LinkedList();
    l2.add(-2);
    l2.add(0);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([-3, -2, -1, 0]);
  });
});




  test("should merge List 1 and List 2 from the second example", () => {
    const l1 = new LinkedList();
    l1.add(2);
    l1.add(3);
    l1.add(5);
    const l2 = new LinkedList();
    l2.add(10);
    l2.add(15);
    l2.add(20);
    const mergedList = l1.mergeSortedLists(l1, l2);
    expect(mergedList.toArray()).toEqual([2, 3, 5, 10, 15, 20]);
  });

