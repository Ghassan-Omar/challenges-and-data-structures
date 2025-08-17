/**
 * A node in the Binary Search Tree.
 */
class Node {
    /**
     * Create a new node.
     * @param {*} value - The value to store in the node
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * A Binary Search Tree implementation with standard BST operations.
 */
class BinarySearchTree {
    /**
     * Initialize an empty Binary Search Tree.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Add a new value to the Binary Search Tree.
     * @param {*} value - The value to add to the tree
     */
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._addRecursive(this.root, value);
        }
    }

    /**
     * Recursively add a value to the tree starting from the given node.
     * @param {Node} node - The current node being examined
     * @param {*} value - The value to add
     * @private
     */
    _addRecursive(node, value) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this._addRecursive(node.left, value);
            }
        } else if (value > node.value) {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this._addRecursive(node.right, value);
            }
        }
        // If value equals node.value, we don't add duplicates
    }

    /**
     * Check if a value exists in the Binary Search Tree.
     * @param {*} value - The value to search for
     * @returns {boolean} True if the value exists, false otherwise
     */
    contains(value) {
        return this._containsRecursive(this.root, value);
    }

    /**
     * Recursively search for a value in the tree.
     * @param {Node} node - The current node being examined
     * @param {*} value - The value to search for
     * @returns {boolean} True if found, false otherwise
     * @private
     */
    _containsRecursive(node, value) {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._containsRecursive(node.left, value);
        } else {
            return this._containsRecursive(node.right, value);
        }
    }

    /**
     * Remove a value from the Binary Search Tree.
     * @param {*} value - The value to remove
     * @returns {boolean} True if the value was removed, false if not found
     */
    remove(value) {
        if (!this.contains(value)) {
            return false;
        }

        this.root = this._removeRecursive(this.root, value);
        return true;
    }

    /**
     * Recursively remove a value from the tree.
     * @param {Node} node - The current node being examined
     * @param {*} value - The value to remove
     * @returns {Node} The updated node after removal
     * @private
     */
    _removeRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeRecursive(node.right, value);
        } else {
            // Node to be deleted found
            // Case 1: Node has no children (leaf node)
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: Node has one child
            else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 3: Node has two children
            else {
                // Find the in-order successor (smallest value in right subtree)
                const successor = this._findMin(node.right);
                // Replace the node's value with successor's value
                node.value = successor.value;
                // Delete the successor
                node.right = this._removeRecursive(node.right, successor.value);
            }
        }

        return node;
    }

    /**
     * Find the node with minimum value in a subtree.
     * @param {Node} node - The root of the subtree
     * @returns {Node} The node with minimum value
     * @private
     */
    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Perform post-order traversal of the Binary Search Tree.
     * @returns {Array} An array of values in post-order sequence
     */
    postOrderTraversal() {
        const result = [];
        this._postOrderRecursive(this.root, result);
        return result;
    }

    /**
     * Recursively perform post-order traversal.
     * @param {Node} node - The current node being visited
     * @param {Array} result - The array to store traversal results
     * @private
     */
    _postOrderRecursive(node, result) {
        if (node !== null) {
            // Visit left subtree
            this._postOrderRecursive(node.left, result);
            // Visit right subtree
            this._postOrderRecursive(node.right, result);
            // Visit root
            result.push(node.value);
        }
    }

    /**
     * Perform in-order traversal of the Binary Search Tree.
     * @returns {Array} An array of values in sorted order
     */
    inOrderTraversal() {
        const result = [];
        this._inOrderRecursive(this.root, result);
        return result;
    }

    /**
     * Recursively perform in-order traversal.
     * @param {Node} node - The current node being visited
     * @param {Array} result - The array to store traversal results
     * @private
     */
    _inOrderRecursive(node, result) {
        if (node !== null) {
            // Visit left subtree
            this._inOrderRecursive(node.left, result);
            // Visit root
            result.push(node.value);
            // Visit right subtree
            this._inOrderRecursive(node.right, result);
        }
    }

    /**
     * Perform pre-order traversal of the Binary Search Tree.
     * @returns {Array} An array of values in pre-order sequence
     */
    preOrderTraversal() {
        const result = [];
        this._preOrderRecursive(this.root, result);
        return result;
    }

    /**
     * Recursively perform pre-order traversal.
     * @param {Node} node - The current node being visited
     * @param {Array} result - The array to store traversal results
     * @private
     */
    _preOrderRecursive(node, result) {
        if (node !== null) {
            // Visit root
            result.push(node.value);
            // Visit left subtree
            this._preOrderRecursive(node.left, result);
            // Visit right subtree
            this._preOrderRecursive(node.right, result);
        }
    }

    /**
     * Check if the tree is empty.
     * @returns {boolean} True if empty, false otherwise
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Get the number of nodes in the tree.
     * @returns {number} The number of nodes
     */
    size() {
        return this._sizeRecursive(this.root);
    }

    /**
     * Recursively count nodes in the tree.
     * @param {Node} node - The current node
     * @returns {number} The count of nodes in this subtree
     * @private
     */
    _sizeRecursive(node) {
        if (node === null) {
            return 0;
        }
        return 1 + this._sizeRecursive(node.left) + this._sizeRecursive(node.right);
    }

    /**
     * Get the height of the tree.
     * @returns {number} The height of the tree (-1 for empty tree)
     */
    height() {
        return this._heightRecursive(this.root);
    }

    /**
     * Recursively calculate the height of the tree.
     * @param {Node} node - The current node
     * @returns {number} The height of this subtree
     * @private
     */
    _heightRecursive(node) {
        if (node === null) {
            return -1;
        }

        const leftHeight = this._heightRecursive(node.left);
        const rightHeight = this._heightRecursive(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BinarySearchTree, Node };
}

// Export for browser environment
if (typeof window !== 'undefined') {
    window.BinarySearchTree = BinarySearchTree;
    window.Node = Node;
}

