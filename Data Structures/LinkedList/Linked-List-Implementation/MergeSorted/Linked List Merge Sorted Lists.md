# Linked List Merge Sorted Lists

This project implements a method to merge two sorted linked lists into a single sorted linked list.

## Problem Domain

Use your previous linked list implementation to include a method for merging two sorted linked lists into a single sorted linked list. The method should take two sorted linked lists as input and return a new sorted linked list that contains all the elements from both input lists.

## Detailed Requirements

- Use the existing `Node` and `LinkedList` classes from your previous implementation.
- Implement a new method `mergeSortedLists()` in your `LinkedList` class:
  - Use two pointers (`current1` for list 1 and `current2` for list 2) to traverse both linked lists.
  - Compare the values of nodes pointed by `current1` and `current2`.
  - Append the smaller node to the merged list and move the pointer (`current1` or `current2`) forward.
  - Handle cases where one list might reach the end before the other.
  - Ensure to handle edge cases like empty lists.
  - Handle all exceptions that could be thrown during execution.

## Inputs and Expected Outputs

- Input: List1 (sorted), List2 (sorted)
- Output: MergedList (sorted)

### Example 1:
- List1: 1 -> 3 -> 5
- List2: 2 -> 4 -> 6
- Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

### Example 2:
- List1: 2 -> 3 -> 5
- List2: 10 -> 15 -> 20
- Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20

## Edge Cases

- One list is empty -> Return the non-empty list.
- Both lists are empty -> Return null.
- Lists with duplicate values -> Keep all duplicates in the merged list.

## Algorithm

1. Initialize a new empty merged linked list.
2. Initialize two pointers, `current1` for list1 and `current2` for list2, both pointing to their respective heads.
3. While both `current1` and `current2` are not null:
   - Compare the values of nodes pointed by `current1` and `current2`.
   - Append the smaller node's value to the `mergedList`.
   - Move the pointer of the list from which the node was taken forward.
4. If `current1` is not null, append the remaining nodes of list1 to `mergedList`.
5. If `current2` is not null, append the remaining nodes of list2 to `mergedList`.
6. If both input lists were initially empty, return `null`.
7. Return `mergedList`.

## Real Code

```javascript
class LinkedList {
  // ... (existing methods)
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
```

## Big O Time/Space Complexity

- Time Complexity: O(m + n), where m and n are the lengths of the two input linked lists. This is because each node is visited once.
- Space Complexity: O(m + n), as a new linked list is created to store the merged result.




## Whiteboard Image

![Whiteboard Image]("C:\Users\ghass\OneDrive\Desktop\challenges-and-data-structures\Data Structures\LinkedList\Linked-List-Implementation\docs\mergeSortedLists.png")


