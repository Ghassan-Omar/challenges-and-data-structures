class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
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

  remove(data) {
    if (!this.head) {
      return false; // List is empty
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    let prev = null;
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
      return true;
    }
    return false; // Data not found
  }

  printList() {
    let current = this.head;
    let result = "Head";
    while (current) {
      result += ` -> ${current.data}`;
      current = current.next;
    }
    result += " -> Null";
    console.log(result);
    return result; // Return for testing purposes
  }

  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  insertAt(data, index) {
    if (index < 0) {
      throw new Error("Index cannot be negative.");
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === index) {
      newNode.next = current;
      if (prev) {
        prev.next = newNode;
      } else {
        // This case should ideally be handled by index === 0, but as a fallback
        this.head = newNode;
      }
    } else {
      // If current is null, it means index is greater than list length
      // Append to the end if index is exactly the length
      if (currentIndex === index && !current) {
        prev.next = newNode;
      } else {
        throw new Error("Index out of bounds.");
      }
    }
  }
}

module.exports = { Node, LinkedList };

