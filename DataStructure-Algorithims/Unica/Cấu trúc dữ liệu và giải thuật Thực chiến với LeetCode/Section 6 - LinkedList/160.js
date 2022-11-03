var getIntersectionNode = function (headA, headB) {
    let tempA = headA;
    let tempB = headB;
    while (tempA != tempB) {
        if (tempA != null) {
            tempA = tempA.next;
        } else {
            tempA = headB;
        }

        if (tempB != null) {
            tempB = tempB.next;
        } else {
            tempB = headA;
        }
    }
    return tempA;
};
