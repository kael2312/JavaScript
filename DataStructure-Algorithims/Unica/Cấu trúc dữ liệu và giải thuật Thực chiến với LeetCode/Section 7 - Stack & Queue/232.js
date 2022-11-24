var QueueNode = function (value) {
    this.value = value;
    this.next = null;
};

var MyQueue = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

MyQueue.prototype.push = function (x) {
    let newNode = new QueueNode(x);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }
};

MyQueue.prototype.pop = function () {
    if (!this.head) return null;
    let tempNode = this.head;
    this.head = this.head.next;
    this.length--;
    return tempNode.value;
};

MyQueue.prototype.peek = function () {
    if (!this.head) return null;
    return this.head.value;
};

MyQueue.prototype.empty = function () {
    if (this.length == 0) return true;
    return false;
};
