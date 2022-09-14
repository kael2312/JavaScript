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
}

const linkedList = new LinkedList(4);
linkedList.insertHead(3);
console.log(linkedList);
