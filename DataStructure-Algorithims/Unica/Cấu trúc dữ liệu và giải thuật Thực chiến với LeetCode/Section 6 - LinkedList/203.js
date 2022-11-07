var removeElements = function (head, val) {
    if (!head) return head;
    if (head.next == null) {
        if (head.val == val) {
            head = head.next;
        }
        return head;
    }

    let currentNode = head;
    let followNode = null;
    while (currentNode) {
        if (head.val == val) {
            head = head.next;
            currentNode = currentNode.next;
        } else {
            if (currentNode.val == val) {
                currentNode = currentNode.next;
                followNode.next = currentNode;
            } else {
                followNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    return head;
};
