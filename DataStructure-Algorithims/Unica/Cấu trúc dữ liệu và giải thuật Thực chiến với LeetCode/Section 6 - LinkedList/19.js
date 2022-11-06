var removeNthFromEnd = function (head, n) {
    let count = 1;
    let temp = head;
    let followTemp = head;
    if (head == null) return head;
    if (temp.next == null) {
        head = null;
        return head;
    }
    if (n == 1) {
        temp = temp.next;
        while (temp.next != null) {
            temp = temp.next;
            followTemp = followTemp.next;
        }
        followTemp.next = null;
        return head;
    }
    while (temp.next != null) {
        temp = temp.next;
        count++;
        if (count > n + 1) {
            if (followTemp != null) {
                followTemp = followTemp.next;
            }
        }
    }
    if (followTemp == head) {
        if (count == n) {
            return head.next;
        }
    }
    followTemp.next = followTemp.next.next;
    return head;
};
