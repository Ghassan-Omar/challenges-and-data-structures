# Binary Search Tree Implementation (JavaScript)

## Overview

This project implements a complete Binary Search Tree (BST) data structure in JavaScript with full CRUD (Create, Read, Update, Delete) operations. The implementation includes comprehensive testing and follows best practices for data structure design in JavaScript.

## Features

- **Add Operation**: Insert new values while maintaining BST property
- **Contains Operation**: Search for values efficiently using BST structure
- **Remove Operation**: Delete nodes with proper handling of all cases (leaf, one child, two children)
- **Post-order Traversal**: Traverse tree in left-right-root order
- **Additional Traversals**: In-order and pre-order traversals for completeness
- **Comprehensive Testing**: Full test suite covering all operations and edge cases
- **Cross-Platform**: Works in both Node.js and browser environments

## Project Structure

```
bst-assignment-js/
├── src/
│   └── BinarySearchTree.js          # Main BST implementation
├── tests/
│   └── testBinarySearchTree.js      # Comprehensive test suite
├── whiteboard.png                   # Whiteboard diagram
└── README.md                       # This file
```

## Whiteboard Content

![Whiteboard Diagram](https://private-us-east-1.manuscdn.com/sessionFile/uh5WuHR9tKusgegXohODLG/sandbox/xzPmPIN8GjDXLUrcpEUte4-images_1755342114623_na1fn_L2hvbWUvdWJ1bnR1L2JzdC1hc3NpZ25tZW50LWpzL3doaXRlYm9hcmQ.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWg1V3VIUjl0S3VzZ2VnWG9oT0RMRy9zYW5kYm94L3h6UG1QSU44R2pEWExVcmNwRVV0ZTQtaW1hZ2VzXzE3NTUzNDIxMTQ2MjNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwySnpkQzFoYzNOcFoyNXRaVzUwTFdwekwzZG9hWFJsWW05aGNtUS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WlHlFCZwN3jAwo6GTl3jQKH~S0zYgjywOreb4mCe3pMzunj2PC1pwaos8EeTk6QxZPJ0JrV5x7Zh2ppSbb05aQfiKy9WIXX1qmp2RiK9T6K9UTUZszhXikvTD1KOkkIPfHS90cSm5hqQhE4ZUl8lfcOL1onB68sU2HCx4nDykLgOUGbCE5o9FAuMbwu1R1iRR--BJaGuHP6tlyRIwjEAYczogBuSIGKbledpuL5HxZEgAXMmhPYiwIUtTe0SNg8FjZ1VpT8rrjb3ihNlyFDGRwPGRzWTGLYc6LVl1EKxnWVAQNYU72HUfC~5RwzZg4ZOzj8umUnHWxO3ir1fY5eJcw__)

### Problem Domain

**Binary Search Tree Implementation with CRUD Operations**

A Binary Search Tree is a hierarchical data structure where each node has at most two children, and for every node:
- All values in the left subtree are less than the node's value
- All values in the right subtree are greater than the node's value
- Both left and right subtrees are also binary search trees

### Inputs and Expected Outputs

| Operation | Input | Expected Output |
|-----------|-------|----------------|
| `add(10)` | Integer value | Tree contains the value |
| `contains(5)` | Integer value | `true` if found, `false` otherwise |
| `remove(7)` | Integer value | `true` if removed, `false` if not found |
| `postOrderTraversal()` | None | Array of values in post-order sequence |

**Example Post-order Traversal:**
For tree with values [10, 5, 15, 3, 7, 12, 18]:
```javascript
Input: bst.postOrderTraversal()
Output: [3, 7, 5, 12, 18, 15, 10]
```

### Edge Cases

1. **Empty Tree**: Operations on a tree with no nodes
2. **Single Node**: Tree with only the root node
3. **Duplicate Values**: Attempting to add values that already exist
4. **Removing Root**: Deleting the root node in various scenarios
5. **Left/Right Skewed Trees**: Degenerate trees that behave like linked lists

### Visual Representation

```
       10
      /  \
     5    15
    / \   / \
   3   7 12  18
```

**Post-order Traversal Path:**
1. Visit left subtree of 10: process 5's subtree
2. Visit left subtree of 5: visit 3 → output 3
3. Visit right subtree of 5: visit 7 → output 7
4. Visit 5 → output 5
5. Visit right subtree of 10: process 15's subtree
6. Visit left subtree of 15: visit 12 → output 12
7. Visit right subtree of 15: visit 18 → output 18
8. Visit 15 → output 15
9. Visit 10 → output 10

**Result: [3, 7, 5, 12, 18, 15, 10]**

### Algorithm

**Recursive Approach for Core Operations:**

1. **Add Operation:**
   - If tree is empty, create root node
   - If value < current node, recurse left
   - If value > current node, recurse right
   - If value equals current node, do nothing (no duplicates)

2. **Contains Operation:**
   - If current node is null, return false
   - If value equals current node, return true
   - If value < current node, recurse left
   - If value > current node, recurse right

3. **Remove Operation:**
   - Find the node to remove
   - Case 1: Leaf node → simply remove
   - Case 2: One child → replace with child
   - Case 3: Two children → replace with inorder successor

4. **Post-order Traversal:**
   - Recursively visit left subtree
   - Recursively visit right subtree
   - Visit current node (add to result)

### Real Code Structure

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    add(value) {
        // Recursive implementation
    }
    
    contains(value) {
        // Recursive search
    }
    
    remove(value) {
        // Handle all removal cases
    }
    
    postOrderTraversal() {
        // Left → Right → Root
    }
}
```

### Big O Time/Space Complexity

| Operation | Average Case | Worst Case | Space Complexity |
|-----------|-------------|------------|------------------|
| **Add** | O(log n) | O(n) | O(h) |
| **Contains** | O(log n) | O(n) | O(h) |
| **Remove** | O(log n) | O(n) | O(h) |
| **Post-order Traversal** | O(n) | O(n) | O(h) |

**Where:**
- `n` = number of nodes in the tree
- `h` = height of the tree
- Average case assumes a balanced tree (h ≈ log n)
- Worst case occurs with a skewed tree (h = n)

## Installation and Usage

### Prerequisites
- Node.js 12.0 or higher (for running tests)
- Modern web browser (for browser usage)

### Running the Code

#### Node.js Environment

1. **Clone or download the project**
2. **Navigate to the project directory:**
   ```bash
   cd bst-assignment-js
   ```

3. **Run the tests:**
   ```bash
   node tests/testBinarySearchTree.js
   ```

4. **Use the BST in your Node.js code:**
   ```javascript
   const { BinarySearchTree } = require('./src/BinarySearchTree.js');
   
   // Create a new BST
   const bst = new BinarySearchTree();
   
   // Add values
   bst.add(10);
   bst.add(5);
   bst.add(15);
   
   // Check if values exist
   console.log(bst.contains(10)); // true
   console.log(bst.contains(20)); // false
   
   // Remove values
   bst.remove(5);
   
   // Get post-order traversal
   const result = bst.postOrderTraversal();
   console.log(result); // [15, 10]
   ```

#### Browser Environment

1. **Include the script in your HTML:**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>BST Example</title>
   </head>
   <body>
       <script src="src/BinarySearchTree.js"></script>
       <script>
           // Create a new BST
           const bst = new BinarySearchTree();
           
           // Add values
           bst.add(10);
           bst.add(5);
           bst.add(15);
           
           // Use the BST
           console.log(bst.contains(10)); // true
           console.log(bst.postOrderTraversal()); // [5, 15, 10]
       </script>
   </body>
   </html>
   ```

## Testing

The project includes a comprehensive test suite with 27 test cases covering:

- **Initialization**: Empty tree setup
- **Adding Nodes**: Single nodes, multiple nodes, duplicates, skewed trees
- **Contains Operation**: Empty tree, single node, multiple nodes, after modifications
- **Removing Nodes**: Empty tree, non-existent nodes, leaf nodes, nodes with one/two children, root removal
- **Post-order Traversal**: Empty tree, single node, multiple nodes, after removals
- **Edge Cases**: Large trees, negative values, mixed positive/negative values

### Test Framework

The project includes a custom lightweight test framework that provides:
- Simple test case definition
- Assertion methods (assert, assertEqual, assertTrue, assertFalse, assertNull)
- Clear test result reporting
- No external dependencies

### Test Results
All 27 tests pass successfully, ensuring the implementation is robust and handles all specified requirements.

## Implementation Details

### Key Design Decisions

1. **No Duplicate Values**: The BST does not allow duplicate values, maintaining the mathematical definition of a set
2. **Recursive Implementation**: All core operations use recursion for clean, readable code
3. **Comprehensive Error Handling**: Proper handling of edge cases like empty trees and non-existent values
4. **Cross-Platform Compatibility**: Works in both Node.js and browser environments
5. **Additional Utility Methods**: Includes helper methods for tree size, height, and multiple traversal types

### Node Removal Strategy

The implementation uses the **inorder successor** strategy for removing nodes with two children:
1. Find the smallest value in the right subtree (inorder successor)
2. Replace the target node's value with the successor's value
3. Recursively remove the successor node (which has at most one child)

This approach maintains the BST property while ensuring efficient removal.

### JavaScript-Specific Features

- **ES6 Classes**: Modern JavaScript class syntax for clean object-oriented design
- **JSDoc Comments**: Comprehensive documentation for all methods
- **Module Exports**: Support for both CommonJS (Node.js) and browser environments
- **Strict Equality**: Uses `===` and `!==` for precise comparisons
- **Array Methods**: Leverages JavaScript array methods for efficient operations

## Assignment Requirements Fulfilled

✅ **Test post-order traversal** - Comprehensive tests for post-order traversal in various scenarios  
✅ **Test adding a node** - Multiple test cases for adding nodes including edge cases  
✅ **Test checking if a node exists** - Complete contains() method testing  
✅ **Test removing a node** - Full removal testing for all node types  
✅ **README.md file with whiteboard content** - This comprehensive documentation  
✅ **Whiteboard image** - Visual diagram with all required components  
✅ **Problem Domain** - Clear explanation of BST implementation  
✅ **Inputs and Expected Outputs** - Detailed examples and specifications  
✅ **Edge Cases** - Comprehensive coverage of edge scenarios  
✅ **Visual** - Tree diagram and traversal visualization  
✅ **Algorithm** - Step-by-step algorithmic explanations  
✅ **Real Code** - Complete, working JavaScript implementation  
✅ **Big O Time/Space Complexity** - Detailed complexity analysis  

## API Reference

### BinarySearchTree Class

#### Constructor
- `new BinarySearchTree()` - Creates an empty binary search tree

#### Core Methods
- `add(value)` - Adds a value to the tree
- `contains(value)` - Returns true if value exists in tree
- `remove(value)` - Removes value from tree, returns true if successful
- `postOrderTraversal()` - Returns array of values in post-order

#### Additional Methods
- `inOrderTraversal()` - Returns array of values in sorted order
- `preOrderTraversal()` - Returns array of values in pre-order
- `isEmpty()` - Returns true if tree is empty
- `size()` - Returns number of nodes in tree
- `height()` - Returns height of tree (-1 for empty tree)

### Node Class

#### Constructor
- `new Node(value)` - Creates a new node with the given value

#### Properties
- `value` - The value stored in the node
- `left` - Reference to left child node
- `right` - Reference to right child node

## Performance Characteristics

### Time Complexity
- **Best/Average Case**: O(log n) for add, contains, remove operations
- **Worst Case**: O(n) when tree becomes skewed (like a linked list)
- **Traversals**: Always O(n) as they visit every node

### Space Complexity
- **Tree Storage**: O(n) for storing n nodes
- **Recursive Operations**: O(h) where h is the height of the tree
- **Traversal Results**: O(n) for storing traversal arrays

## Contributing

This implementation follows standard BST algorithms and can be extended with additional features such as:
- Tree balancing (AVL or Red-Black tree properties)
- Iterator implementation
- Tree visualization methods
- Serialization/deserialization
- TypeScript type definitions

## Browser Compatibility

The implementation uses modern JavaScript features and is compatible with:
- Chrome 45+
- Firefox 45+
- Safari 10+
- Edge 12+
- Node.js 12+

For older browser support, consider transpiling with Babel.

## License

This project is created for educational purposes as part of a programming assignment.

