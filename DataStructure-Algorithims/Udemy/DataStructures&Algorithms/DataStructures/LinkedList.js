class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new LinkedNode(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }
}
