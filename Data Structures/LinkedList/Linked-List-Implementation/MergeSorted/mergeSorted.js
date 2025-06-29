const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  mergeSortedLists(l1, l2) {
    if (!l1.head && !l2.head) {
      return null;
    }
    const mergedList = new LinkedList();
    let current1 = l1.head;
    let current2 = l2.head;

    while (current1 && current2) {
      if (current1.value <= current2.value) {
        mergedList.add(current1.value);
        current1 = current1.next;
      } else {
        mergedList.add(current2.value);
        current2 = current2.next;
      }
    }

    while (current1) {
      mergedList.add(current1.value);
      current1 = current1.next;
    }

    while (current2) {
      mergedList.add(current2.value);
      current2 = current2.next;
    }

    return mergedList;
  }
}

module.exports = LinkedList;
