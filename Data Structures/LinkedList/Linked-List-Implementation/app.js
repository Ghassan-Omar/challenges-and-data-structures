const { LinkedList } = require("./linkedList");

const list = new LinkedList();

console.log("\n--- Initial List ---");
list.printList();

console.log("\n--- Adding nodes ---");
list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.printList();

console.log("\n--- Removing node 10 ---");
list.remove(10);
list.printList();

console.log("\n--- Checking includes(20) ---");
console.log(list.includes(20));

console.log("\n--- Checking includes(10) ---");
console.log(list.includes(10));
console.log("\n--- Removing node 10 ---");


console.log("\n--- Inserting 15 at index 2 ---");
list.insertAt(15, 2);
list.printList();

console.log("\n--- Removing non-existent node 100 ---");
list.remove(100);
list.printList();

console.log("\n--- Testing insertAt edge cases ---");
try {
  list.insertAt(99, -1);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  list.insertAt(99, 100);
} catch (error) {
  console.log(`Error: ${error.message}`);
}


const emptyList = new LinkedList();
emptyList.printList();

console.log("\n--- Testing remove on empty list ---");
emptyList.remove(5);
emptyList.printList();

