var swapPairs = function (head) {
    if (head == null) return head;
    if (head.next == null) return head;
    let nextNode = head.next;
    head.next = nextNode.next;
    nextNode.next = head;
    let newHead = swapPairs(head.next);
    head.next = newHead;
    return nextNode;
};
