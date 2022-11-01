var detectCycle = function (head) {
    if (!head || head.next == null) return null;
    let currentNode = head;
    while (currentNode != null) {
        let result = checkNode(currentNode);
        if (result == -1) return null;
        else if (result == 1) return currentNode;
        else {
            currentNode = currentNode.next;
        }
    }
};

/**
 *
 * Return -1: Không tạo thành cycle
 * Return 0: Tạo thành Cycle nhưng không trùng với điểm bắt đầu
 * Return 1: Tạo thành Cycle, trùng với điểm bắt đầu
 *
 */
function checkNode(currentNode) {
    if (currentNode == null) return -1;
    let slowRunNode = currentNode;
    let fastRunNode = currentNode;
    while (
        slowRunNode != null &&
        fastRunNode != null &&
        fastRunNode.next != null
    ) {
        slowRunNode = slowRunNode.next;
        fastRunNode = fastRunNode.next.next;
        if (slowRunNode == fastRunNode) {
            if (slowRunNode == currentNode) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    return -1;
}
