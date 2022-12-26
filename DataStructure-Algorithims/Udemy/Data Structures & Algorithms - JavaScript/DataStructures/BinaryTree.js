class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let tempNode = this.root;
        while (true) {
            if (newNode.value == tempNode.value) return undefined;
            if (newNode.value > tempNode.value) {
                if (!tempNode.right) {
                    tempNode.right = newNode;
                    return this;
                }
                tempNode = tempNode.right;
            }
            if (newNode.value < tempNode.value) {
                if (!tempNode.left) {
                    tempNode.left = newNode;
                    return this;
                }
                tempNode = tempNode.left;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;
        let tempNode = this.root;
        while (tempNode) {
            if (value == tempNode.value) return true;
            if (value > tempNode.value) {
                tempNode = tempNode.right;
            } else {
                tempNode = tempNode.left;
            }
        }
        return false;
    }

    findMin() {
        if (!this.root) return undefined;
        if (this.root && !this.root.left && !this.root.right) return this.root;
        let tempNode = this.root;
        while (tempNode.left) {
            tempNode = tempNode.left;
        }
        return tempNode;
    }

    preOrder() {
        let result = [];
        function traversal(node) {
            result.push(node.value);
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
        }
        traversal(this.root);
        return result;
    }

    inOrder(node) {
        let result = [];
        function traversal(node) {
            if (node.left) traversal(node.left);
            result.push(node.value);
            if (node.right) traversal(node.right);
        }
        traversal(this.root);
        return result;
    }

    postOrder(node) {
        let result = [];
        function traversal(node) {
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
            result.push(node.value);
        }
        traversal(this.root);
        return result;
    }

    maxDepth(node) {
        if (node == null) return 0;
        let heightOfLeftTree = this.maxDept(node.left);
        let heightOfRightTree = this.maxDept(node.right);
        let result =
            heightOfLeftTree > heightOfRightTree
                ? heightOfLeftTree
                : heightOfRightTree;
        return result + 1;
    }

    bfs() {
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return result;
    }
}

let newTree = new BinaryTree();
newTree.insert(47);
newTree.insert(21);
newTree.insert(76);
newTree.insert(18);
newTree.insert(52);
newTree.insert(27);
newTree.insert(82);
console.log('Tree: ', newTree);
