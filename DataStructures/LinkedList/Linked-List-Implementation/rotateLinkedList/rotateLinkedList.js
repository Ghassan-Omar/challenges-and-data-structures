const Node = require("../node");
const LinkedList = require("../linkedList");

function rotateLeft(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let current = head;
  let length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }
  current.next = head; // Make it a circular list

  k = k % length;
  if (k < 0) {
    k = k + length; // Convert right rotation to left rotation
  }

  let newTail = head;
  for (let i = 0; i < k - 1; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null; // Break the circle

  return newHead;
}

module.exports = rotateLeft;

