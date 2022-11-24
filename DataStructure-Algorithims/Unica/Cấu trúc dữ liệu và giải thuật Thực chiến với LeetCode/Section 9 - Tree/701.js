var insertIntoBST = function (root, val) {
    let newNode = new TreeNode(val);
    if (!root) {
        root = newNode;
        return root;
    }
    let tempNode = root;
    while (true) {
        if (tempNode.val == newNode.val) return root;
        if (tempNode.val < newNode.val) {
            if (!tempNode.right) {
                tempNode.right = newNode;
                return root;
            }
            tempNode = tempNode.right;
        }
        if (tempNode.val > newNode.val) {
            if (!tempNode.left) {
                tempNode.left = newNode;
                return root;
            }
            tempNode = tempNode.left;
        }
    }
};
