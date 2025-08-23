const { Node, LinkedList } = require('./linkedList');

describe('Node', () => {
  test('should create a new Node with data and next as null', () => {
    const node = new Node(10);
    expect(node.data).toBe(10);
    expect(node.next).toBeNull();
  });
});

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should create an empty LinkedList', () => {
    expect(list.head).toBeNull();
  });

  describe('add', () => {
    test('should add a node to an empty list', () => {
      list.add(5);
      expect(list.head.data).toBe(5);
      expect(list.head.next).toBeNull();
    });

    test('should add multiple nodes to the list', () => {
      list.add(5);
      list.add(10);
      list.add(15);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe(10);
      expect(list.head.next.next.data).toBe(15);
      expect(list.head.next.next.next).toBeNull();
    });
  });

  describe('remove', () => {
    test('should return false when removing from an empty list', () => {
      expect(list.remove(10)).toBe(false);
    });

    test('should remove the head node if it matches the data', () => {
      list.add(5);
      list.add(10);
      list.remove(5);
      expect(list.head.data).toBe(10);
    });

    test('should remove a node from the middle of the list', () => {
      list.add(5);
      list.add(10);
      list.add(15);
      list.remove(10);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe(15);
    });

    test('should remove a node from the end of the list', () => {
      list.add(5);
      list.add(10);
      list.add(15);
      list.remove(15);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe(10);
      expect(list.head.next.next).toBeNull();
    });

    test('should return false if data not found', () => {
      list.add(5);
      list.add(10);
      expect(list.remove(20)).toBe(false);
    });
  });

  describe('printList', () => {
    test('should print "Head -> Null" for an empty list', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      list.printList();
      expect(consoleSpy).toHaveBeenCalledWith('Head -> Null');
      consoleSpy.mockRestore();
    });

    test('should print the list correctly with multiple nodes', () => {
      list.add(5);
      list.add(10);
      list.add(15);
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      list.printList();
      expect(consoleSpy).toHaveBeenCalledWith('Head -> 5 -> 10 -> 15 -> Null');
      consoleSpy.mockRestore();
    });
  });

  describe('includes', () => {
    test('should return true if data exists in the list', () => {
      list.add(5);
      list.add(10);
      expect(list.includes(10)).toBe(true);
    });

    test('should return false if data does not exist in the list', () => {
      list.add(5);
      list.add(10);
      expect(list.includes(20)).toBe(false);
    });

    test('should return false for an empty list', () => {
      expect(list.includes(10)).toBe(false);
    });
  });

  describe('insertAt', () => {
    test('should insert at the beginning of an empty list (index 0)', () => {
      list.insertAt(10, 0);
      expect(list.head.data).toBe(10);
      expect(list.head.next).toBeNull();
    });

    test('should insert at the beginning of a non-empty list (index 0)', () => {
      list.add(5);
      list.insertAt(10, 0);
      expect(list.head.data).toBe(10);
      expect(list.head.next.data).toBe(5);
    });

    test('should insert in the middle of the list', () => {
      list.add(5);
      list.add(15);
      list.insertAt(10, 1);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe(10);
      expect(list.head.next.next.data).toBe(15);
    });

    test('should insert at the end of the list', () => {
      list.add(5);
      list.add(10);
      list.insertAt(15, 2);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe(10);
      expect(list.head.next.next.data).toBe(15);
      expect(list.head.next.next.next).toBeNull();
    });

    test('should throw error for negative index', () => {
      expect(() => list.insertAt(10, -1)).toThrow('Index cannot be negative.');
    });

    test('should throw error for index greater than list length', () => {
      list.add(5);
      expect(() => list.insertAt(10, 5)).toThrow('Index out of bounds.');
    });
  });
});

