class LinkedNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor(value) {
        const node = new LinkedNode(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }

    insertTail(value) {
        const newNode = new LinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    removeTail() {
        if (!this.head) return undefined;
        let temp = this.head;
        let preNode = this.head;
        while (temp.next) {
            preNode = temp;
            temp = temp.next;
        }
        this.tail = preNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    insertHead(value) {
        let newNode = new LinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeHead() {
        if (!this.head) return undefined;
        this.preNode = this.head;
        this.head = this.preNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return this.preNode;
    }

    getAtIndex(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined;
        let temp = 0;
        let tempNode = this.head;
        while (temp !== index) {
            tempNode = tempNode.next;
            temp++;
        }
        return tempNode;
    }

    setValueAtIndex(value, index) {
        let node = this.getAtIndex(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insertValueAtIndex(index, value) {
        if (!this.head || index === 0) return this.insertHead(value);
        if (index === this.length) return this.insertTail(value);
        if (index < 0 || index > this.length) return false;
        let newNode = new LinkedNode(value);
        let tempNode = this.getAtIndex(index - 1);
        newNode.next = tempNode.next;
        tempNode.next = newNode;
        this.length++;
        return true;
    }

    removeAtIndex(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let beforeNode = this.getAtIndex(index - 1);
        let tempNode = beforeNode.next;
        beforeNode.next = tempNode.next;
        tempNode.next = null;
        this.length--;
        return tempNode;
    }

    reverse() {
        let tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;
        let nextNode = tempNode.next;
        let prevNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = tempNode.next;
            tempNode.next = prevNode;
            prevNode = tempNode;
            tempNode = nextNode;
        }

        return this;
    }

    reverseNotUsingTail() {
        let currentNode = this.head;
        let nextNode = this.head.next;
        while (currentNode.next != null) {
            currentNode.next = nextNode.next;
            nextNode.next = this.head;
            this.head = nextNode;
            nextNode = currentNode.next;
        }
        return this;
    }
}

function reverseUsingRecursion(head) {
    if (head == null) return null;
    let nextNode = head.next;
    if (nextNode == null) return head;
    let newHead = reverseUsingRecursion(nextNode);
    nextNode.next = head;
    head.next = null;
    return newHead;
}

function mergeTwoLists(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    if (list1.value <= list2.value) {
        nextNode = list1.next;
        newNode = mergeTwoLists(nextNode, list2);
        list1.next = newNode;
        return list1;
    } else {
        nextNode = list2.next;
        newNode = mergeTwoLists(list1, nextNode);
        list2.next = newNode;
        return list2;
    }
}

//list1: 1 -> 2 -> 4
//list2: 1 -> 3 -> 4
//1 -> 1 -> 2 -> 3 -> 4 -> 4

const linkedList = new LinkedList(4);
linkedList.insertHead(3);
linkedList.insertHead(2);
// linkedList.insertHead(1);
console.log('My linked list: ', linkedList);
// linkedList.reverse();
console.log('Reverse my linked list:', linkedList);
const linkedList1 = new LinkedList(1);
linkedList1.insertTail(3);
const linkedList2 = new LinkedList(2);
linkedList2.insertTail(4);
console.log('Linked list 1: ', linkedList1);
console.log('Linked list 2: ', linkedList2);
console.log(
    'Merge two list: ',
    mergeTwoLists(linkedList1.head, linkedList2.head)
);
