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
}

let newTree = new BinaryTree();
newTree.insert(47);
newTree.insert(21);
newTree.insert(76);
newTree.insert(18);
newTree.insert(52);
newTree.insert(27);
console.log("Tree: ", newTree);
