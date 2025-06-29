const LinkedList = require('./Data Structures/LinkedList/Linked-List-Implementation/linkedList');
const reverse = require('./Data Structures/LinkedList/Linked-List-Implementation/reverse/reverse');

// Create a new linked list
const myLinkedList = new LinkedList();

// Add elements to the list
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.add(4);

console.log('Original List:', myLinkedList.toArray());

// Reverse the linked list
myLinkedList.head = reverse(myLinkedList.head);

console.log('Reversed List:', myLinkedList.toArray());

// Test with an empty list
const emptyList = new LinkedList();
console.log('Original Empty List:', emptyList.toArray());
emptyList.head = reverse(emptyList.head);
console.log('Reversed Empty List:', emptyList.toArray());

// Test with a single-node list
const singleNodeList = new LinkedList();
singleNodeList.add(10);
console.log('Original Single Node List:', singleNodeList.toArray());
singleNodeList.head = reverse(singleNodeList.head);
console.log('Reversed Single Node List:', singleNodeList.toArray());

