var hasCycle = function (head) {
    if (!head || head.next == null) return false;
    let slowRunNode = head;
    let fastRunNode = head.next;
    while (slowRunNode.next != null) {
        while (fastRunNode != null) {
            if (fastRunNode.next == null) return false;
            fastRunNode = fastRunNode.next.next;
            if (slowRunNode == fastRunNode) return true;
            break;
        }
        slowRunNode = slowRunNode.next;
    }

    return false;
};
