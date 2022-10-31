var LinkedNode = function (val) {
    this.value = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
};

MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new LinkedNode(val);
    if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.head;
};

MyLinkedList.prototype.get = function (index) {
    if (!this.head || index < 0 || index >= this.length) return -1;
    let tempNode = this.head;
    let countIndex = 0;
    while (index != countIndex) {
        tempNode = tempNode.next;
        countIndex++;
    }
    return tempNode.value;
};

MyLinkedList.prototype.getAtIndex = function (index) {
    if (!this.head || index < 0 || index >= this.length) return false;
    let tempNode = this.head;
    let countIndex = 0;
    while (index != countIndex) {
        tempNode = tempNode.next;
        countIndex++;
    }
    return tempNode;
};

MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new LinkedNode(val);
    if (this.head == null) return this.addAtHead(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index == 0) return this.addAtHead(val);
    if (index < 0 || index > this.length) return false;
    if (index == this.length) return this.addAtTail(val);
    let newNode = new LinkedNode(val);
    let prevNode = this.getAtIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this;
};

MyLinkedList.prototype.deleteAtIndex = function (index, value) {
    if (index == 0) {
        let prevNode = this.head;
        this.head = prevNode.next;
        return prevNode;
    }
    if (index < 0 || index >= this.length) return null;
    if ((index = this.length - 1)) {
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
    let prevNode = this.getAtIndex(index - 1);
    let deleteNode = prevNode.next;
    prevNode.next = deleteNode.next;
    deleteNode = null;
    this.length--;
    return this;
};
