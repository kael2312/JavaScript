var isPalindrome = function (head) {
    if (!head) return false;
    if (head.next == null) return true;
    if (head.next.next == null) {
        if (head.val == head.next.val) {
            return true;
        }
        return false;
    }
    let numberEle = countNode(head);
    let startReverseIndex = Math.floor(number / 2);
    let currentNode = head;
    let countIndex = 0;
    while (currentNode != null) {
        if (countIndex == startReverseIndex) {
            let secondHead = reverseNotUsingTail(currentNode);
        }
        currentNode = currentNode.next;
        countIndex++;
    }
    let newReverseHead = secondHead;
    while (newReverseHead != null) {
        if (newReverseHead.val != currentNode.val) return false;
        newReverseHead = newReverseHead.next;
        currentNode = currentNode.next;
    }
};

function reverseNotUsingTail(head) {
    let currentNode = head;
    let nextNode = head.next;
    while (currentNode.next != null) {
        currentNode.next = nextNode.next;
        nextNode.next = head;
        head = nextNode;
        nextNode = currentNode.next;
    }
    return head;
}

function countNode(params) {
    let count = 1;
    let currentNode = head;
    while (currentNode) {
        currentNode = currentNode.next;
        count++;
    }
    return count;
}
