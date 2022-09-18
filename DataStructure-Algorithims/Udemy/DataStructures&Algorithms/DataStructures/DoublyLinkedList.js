class dbLinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const node = new dbLinkedNode(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    insertTail(value) {
        const newNode = new dbLinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    removeTail() {
        if (this.length === 0) return undefined;
        let removeNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
            removeNode.previous = null;
        }
        this.length--;
        return removeNode;
    }

    insertHead(value) {
        const newNode = new dbLinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeHead() {
        if (this.length === 0) return undefined;
        let removeNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            removeNode.next = null;
        }
        this.length--;
        return removeNode;
    }

    getAtIndex(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined;
        let tempNode = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                tempNode = tempNode.next;
            }
        } else {
            tempNode = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                tempNode = tempNode.previous;
            }
        }
        return tempNode;
    }

    setAtIndex(index, value) {
        let node = this.getAtIndex(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insertValueAtIndex(index, value) {
        if (!this.head) return this.insertHead(value);
        if (index === this.length) return this.insertTail(value);
        if (index < 0 || index > this.length) return false;
        let newNode = new dbLinkedNode(value);
        let tempNode = this.getAtIndex(index - 1);
        newNode.next = tempNode.next;
        tempNode.next.previous = newNode;
        tempNode.next = newNode;
        newNode.previous = tempNode;
        this.length++;
        return true;
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let tempNode = this.getAtIndex(index);
        tempNode.previous.next = tempNode.next;
        tempNode.next.previous = tempNode.previous;
        tempNode.next = null;
        tempNode.previous = null;
        this.length--;
        return tempNode;
    }
}

const dbLinkedList = new DoublyLinkedList(1);
// dbLinkedList.insertTail(2);
dbLinkedList.insertTail(3);
console.log(dbLinkedList);
