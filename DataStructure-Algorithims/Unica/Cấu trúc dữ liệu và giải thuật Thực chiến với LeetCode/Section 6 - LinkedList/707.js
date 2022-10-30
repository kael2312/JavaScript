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
    let tempNode = this.head;
    let countIndex = 0;
    while (index != countIndex) {
        tempNode = tempNode.next;
        countIndex++;
    }
    return tempNode.value;
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
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    return this;
};

MyLinkedList.prototype.deleteAtIndex = function (index, value) {
    let prevNode = this.get(index - 1);
    let deleteNode = prevNode.next;
    prevNode.next = deleteNode.next;
    deleteNode = null;
    this.length--;
    return this;
};
