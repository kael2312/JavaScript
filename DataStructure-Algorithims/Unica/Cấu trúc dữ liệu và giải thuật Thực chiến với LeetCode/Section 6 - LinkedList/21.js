var mergeTwoLists = function (list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    if (list1.val <= list2.val) {
        let nextList1Node = list1.next;
        let newList1Node = mergeTwoLists(nextList1Node, list2);
        list1.next = newList1Node;
        return list1;
    } else {
        let nextList2Node = list2.next;
        let newList2Node = mergeTwoLists(list1, nextList2Node);
        list2.next = newList2Node;
        return list2;
    }
};
