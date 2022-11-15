var QueueNode = function (value) {
    this.value = value;
    this.next = null;
};

var MyCircularQueue = function (k) {
    this.size = k;
    this.head = null;
    this.tail = this.head;
    this.length = 0;
};

MyCircularQueue.prototype.enQueue = function (value) {
    var newNode = new QueueNode(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return true;
    }
    if (this.length < this.size) {
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
        this.length++;
        return true;
    }
    return false;
};

MyCircularQueue.prototype.deQueue = function () {
    if (!this.head) return false;
    if (this.length == 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return true;
    }
    let tempNode = this.head.next;
    this.head = tempNode;
    this.tail.next = tempNode;
    this.length--;
    return true;
};

MyCircularQueue.prototype.Front = function () {
    if (!this.head) return -1;
    return this.head;
};

MyCircularQueue.prototype.Rear = function () {
    if (!this.head) return -1;
    return this.tail;
};

MyCircularQueue.prototype.isEmpty = function () {
    if (this.length == 0) return true;
    return false;
};

MyCircularQueue.prototype.isFull = function () {
    if (this.length == this.size) return true;
    return false;
};
