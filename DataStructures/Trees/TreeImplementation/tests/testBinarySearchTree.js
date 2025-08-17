// Import the BST implementation
const { BinarySearchTree, Node } = require('../src/BinarySearchTree.js');

/**
 * Simple test framework for JavaScript
 */
class TestFramework {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    /**
     * Add a test case
     * @param {string} name - Test name
     * @param {Function} testFunction - Test function
     */
    test(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    /**
     * Assert that a condition is true
     * @param {boolean} condition - Condition to test
     * @param {string} message - Error message if assertion fails
     */
    assert(condition, message = 'Assertion failed') {
        if (!condition) {
            throw new Error(message);
        }
    }

    /**
     * Assert that two values are equal
     * @param {*} actual - Actual value
     * @param {*} expected - Expected value
     * @param {string} message - Error message if assertion fails
     */
    assertEqual(actual, expected, message = `Expected ${expected}, got ${actual}`) {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
            throw new Error(message);
        }
    }

    /**
     * Assert that a value is true
     * @param {*} value - Value to test
     * @param {string} message - Error message if assertion fails
     */
    assertTrue(value, message = `Expected true, got ${value}`) {
        if (value !== true) {
            throw new Error(message);
        }
    }

    /**
     * Assert that a value is false
     * @param {*} value - Value to test
     * @param {string} message - Error message if assertion fails
     */
    assertFalse(value, message = `Expected false, got ${value}`) {
        if (value !== false) {
            throw new Error(message);
        }
    }

    /**
     * Assert that a value is null
     * @param {*} value - Value to test
     * @param {string} message - Error message if assertion fails
     */
    assertNull(value, message = `Expected null, got ${value}`) {
        if (value !== null) {
            throw new Error(message);
        }
    }

    /**
     * Run all tests
     */
    run() {
        console.log('Running Binary Search Tree Tests...\n');
        
        for (const test of this.tests) {
            try {
                test.testFunction.call(this);
                console.log(` ${test.name}`);
                this.passed++;
            } catch (error) {
                console.log(` ${test.name}: ${error.message}`);
                this.failed++;
            }
        }

        console.log(`\n--- Test Results ---`);
        console.log(`Passed: ${this.passed}`);
        console.log(`Failed: ${this.failed}`);
        console.log(`Total: ${this.tests.length}`);
        
        if (this.failed === 0) {
            console.log('\n All tests passed!');
        } else {
            console.log(`\n  ${this.failed} test(s) failed.`);
        }
    }
}

// Create test framework instance
const testFramework = new TestFramework();

// Test cases for Binary Search Tree
testFramework.test('Empty tree initialization', function() {
    const bst = new BinarySearchTree();
    this.assertTrue(bst.isEmpty());
    this.assertEqual(bst.size(), 0);
    this.assertEqual(bst.height(), -1);
    this.assertNull(bst.root);
});

testFramework.test('Adding single node', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    this.assertFalse(bst.isEmpty());
    this.assertEqual(bst.size(), 1);
    this.assertEqual(bst.height(), 0);
    this.assertEqual(bst.root.value, 10);
});

testFramework.test('Adding multiple nodes', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    this.assertEqual(bst.size(), 7);
    this.assertEqual(bst.root.value, 10);
    
    // Verify BST property through in-order traversal
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [3, 5, 7, 10, 12, 15, 18]);
});

testFramework.test('Adding duplicate values', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(10); // Duplicate
    bst.add(5);
    bst.add(5);  // Duplicate
    
    this.assertEqual(bst.size(), 2);
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [5, 10]);
});

testFramework.test('Adding nodes left skewed', function() {
    const bst = new BinarySearchTree();
    const values = [10, 8, 6, 4, 2];
    values.forEach(value => bst.add(value));
    
    this.assertEqual(bst.size(), 5);
    this.assertEqual(bst.height(), 4); // Linear tree
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [2, 4, 6, 8, 10]);
});

testFramework.test('Adding nodes right skewed', function() {
    const bst = new BinarySearchTree();
    const values = [2, 4, 6, 8, 10];
    values.forEach(value => bst.add(value));
    
    this.assertEqual(bst.size(), 5);
    this.assertEqual(bst.height(), 4); // Linear tree
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [2, 4, 6, 8, 10]);
});

testFramework.test('Contains on empty tree', function() {
    const bst = new BinarySearchTree();
    this.assertFalse(bst.contains(10));
    this.assertFalse(bst.contains(0));
    this.assertFalse(bst.contains(-5));
});

testFramework.test('Contains with single node', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    this.assertTrue(bst.contains(10));
    this.assertFalse(bst.contains(5));
    this.assertFalse(bst.contains(15));
});

testFramework.test('Contains with multiple nodes', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    // Test existing values
    values.forEach(value => {
        this.assertTrue(bst.contains(value));
    });
    
    // Test non-existing values
    const nonExisting = [1, 4, 6, 8, 11, 14, 16, 20];
    nonExisting.forEach(value => {
        this.assertFalse(bst.contains(value));
    });
});

testFramework.test('Contains after modifications', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    this.assertTrue(bst.contains(10));
    this.assertTrue(bst.contains(5));
    
    bst.remove(5);
    this.assertTrue(bst.contains(10));
    this.assertFalse(bst.contains(5));
});

testFramework.test('Removing from empty tree', function() {
    const bst = new BinarySearchTree();
    const result = bst.remove(10);
    this.assertFalse(result);
    this.assertTrue(bst.isEmpty());
});

testFramework.test('Removing non-existent node', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    
    const result = bst.remove(15); // Doesn't exist
    this.assertFalse(result);
    this.assertEqual(bst.size(), 2);
    this.assertTrue(bst.contains(10));
    this.assertTrue(bst.contains(5));
});

testFramework.test('Removing leaf node', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7];
    values.forEach(value => bst.add(value));
    
    // Remove leaf node
    const result = bst.remove(3);
    this.assertTrue(result);
    this.assertFalse(bst.contains(3));
    this.assertEqual(bst.size(), 4);
    
    // Verify tree structure is maintained
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [5, 7, 10, 15]);
});

testFramework.test('Removing node with one child', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 12];
    values.forEach(value => bst.add(value));
    
    // Remove node with one child (5 has only left child 3)
    const result = bst.remove(5);
    this.assertTrue(result);
    this.assertFalse(bst.contains(5));
    this.assertEqual(bst.size(), 4);
    
    // Verify tree structure is maintained
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [3, 10, 12, 15]);
});

testFramework.test('Removing node with two children', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    // Remove node with two children
    const result = bst.remove(15); // Has children 12 and 18
    this.assertTrue(result);
    this.assertFalse(bst.contains(15));
    this.assertEqual(bst.size(), 6);
    
    // Verify tree structure is maintained
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [3, 5, 7, 10, 12, 18]);
});

testFramework.test('Removing root node', function() {
    // Test removing root with no children
    let bst = new BinarySearchTree();
    bst.add(10);
    let result = bst.remove(10);
    this.assertTrue(result);
    this.assertTrue(bst.isEmpty());
    
    // Test removing root with one child
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    result = bst.remove(10);
    this.assertTrue(result);
    this.assertEqual(bst.root.value, 5);
    
    // Test removing root with two children
    bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    result = bst.remove(10);
    this.assertTrue(result);
    this.assertFalse(bst.contains(10));
    this.assertEqual(bst.size(), 6);
    
    // Verify BST property is maintained
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [3, 5, 7, 12, 15, 18]);
});

testFramework.test('Post-order traversal empty tree', function() {
    const bst = new BinarySearchTree();
    const result = bst.postOrderTraversal();
    this.assertEqual(result, []);
});

testFramework.test('Post-order traversal single node', function() {
    const bst = new BinarySearchTree();
    bst.add(10);
    const result = bst.postOrderTraversal();
    this.assertEqual(result, [10]);
});

testFramework.test('Post-order traversal multiple nodes', function() {
    const bst = new BinarySearchTree();
    // Create a specific tree structure:
    //       10
    //      /  \\
    //     5    15
    //    / \\   / \\
    //   3   7 12  18
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    const result = bst.postOrderTraversal();
    // Post-order: left, right, root
    // Expected: 3, 7, 5, 12, 18, 15, 10
    this.assertEqual(result, [3, 7, 5, 12, 18, 15, 10]);
});

testFramework.test('Post-order traversal left skewed', function() {
    const bst = new BinarySearchTree();
    const values = [10, 8, 6, 4, 2];
    values.forEach(value => bst.add(value));
    
    const result = bst.postOrderTraversal();
    // For left-skewed tree: 2, 4, 6, 8, 10
    this.assertEqual(result, [2, 4, 6, 8, 10]);
});

testFramework.test('Post-order traversal right skewed', function() {
    const bst = new BinarySearchTree();
    const values = [2, 4, 6, 8, 10];
    values.forEach(value => bst.add(value));
    
    const result = bst.postOrderTraversal();
    // For right-skewed tree: 10, 8, 6, 4, 2
    this.assertEqual(result, [10, 8, 6, 4, 2]);
});

testFramework.test('Post-order traversal after removals', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    // Remove some nodes
    bst.remove(3);
    bst.remove(18);
    
    const result = bst.postOrderTraversal();
    // Remaining tree structure and expected post-order
    this.assertEqual(result, [7, 5, 12, 15, 10]);
});

testFramework.test('In-order traversal returns sorted values', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20];
    values.forEach(value => bst.add(value));
    
    const result = bst.inOrderTraversal();
    const expected = [...values].sort((a, b) => a - b);
    this.assertEqual(result, expected);
});

testFramework.test('Pre-order traversal', function() {
    const bst = new BinarySearchTree();
    const values = [10, 5, 15, 3, 7, 12, 18];
    values.forEach(value => bst.add(value));
    
    const result = bst.preOrderTraversal();
    // Pre-order: root, left, right
    // Expected: 10, 5, 3, 7, 15, 12, 18
    this.assertEqual(result, [10, 5, 3, 7, 15, 12, 18]);
});

testFramework.test('Large tree operations', function() {
    const bst = new BinarySearchTree();
    const values = Array.from({length: 100}, (_, i) => i + 1); // 1 to 100
    
    // Shuffle array for random insertion order
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
    
    // Add all values
    values.forEach(value => bst.add(value));
    this.assertEqual(bst.size(), 100);
    
    // Test contains for all values
    values.forEach(value => {
        this.assertTrue(bst.contains(value));
    });
    
    // Test in-order traversal is sorted
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, Array.from({length: 100}, (_, i) => i + 1));
    
    // Remove half the values
    const toRemove = values.slice(0, 50);
    toRemove.forEach(value => {
        this.assertTrue(bst.remove(value));
    });
    
    this.assertEqual(bst.size(), 50);
    
    // Verify removed values are gone
    toRemove.forEach(value => {
        this.assertFalse(bst.contains(value));
    });
});

testFramework.test('Negative values', function() {
    const bst = new BinarySearchTree();
    const values = [-10, -5, -15, -3, -7, -12, -18];
    values.forEach(value => bst.add(value));
    
    // Test all operations work with negative values
    values.forEach(value => {
        this.assertTrue(bst.contains(value));
    });
    
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [-18, -15, -12, -10, -7, -5, -3]);
    
    const postOrder = bst.postOrderTraversal();
    this.assertEqual(postOrder, [-18, -12, -15, -7, -3, -5, -10]);
});

testFramework.test('Mixed positive and negative values', function() {
    const bst = new BinarySearchTree();
    const values = [0, -5, 5, -10, -2, 2, 10];
    values.forEach(value => bst.add(value));
    
    const inOrder = bst.inOrderTraversal();
    this.assertEqual(inOrder, [-10, -5, -2, 0, 2, 5, 10]);
    
    // Test removal of zero
    this.assertTrue(bst.remove(0));
    this.assertFalse(bst.contains(0));
    
    const inOrderAfterRemoval = bst.inOrderTraversal();
    this.assertEqual(inOrderAfterRemoval, [-10, -5, -2, 2, 5, 10]);
});

// Run all tests
testFramework.run();

