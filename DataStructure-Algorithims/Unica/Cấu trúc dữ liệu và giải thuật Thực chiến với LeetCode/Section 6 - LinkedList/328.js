var oddEvenList = function (head) {
    if (!head || head.next == null || head.next.next == null) return head;

    let lastOddNode = head;
    let lastEvenNode = lastOddNode.next;
    let currentNode = lastEvenNode.next;
    let tempNode = currentNode.next;
    while (currentNode) {
        currentNode.next = lastOddNode.next;
        lastOddNode.next = currentNode;
        lastEvenNode.next = tempNode;
        lastOddNode = currentNode;
        lastEvenNode = tempNode;
        if (lastEvenNode != null) {
            currentNode = lastEvenNode.next;
        } else {
            currentNode = null;
        }
        if (currentNode != null) {
            tempNode = currentNode.next;
        }
    }

    return head;
};
