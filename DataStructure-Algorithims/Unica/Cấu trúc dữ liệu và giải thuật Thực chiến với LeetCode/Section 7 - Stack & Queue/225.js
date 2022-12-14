var StackNode = function (value) {
    this.value = value;
    this.next = null;
};

var MyStack = function () {
    this.topNode = null;
    this.length = 0;
};

MyStack.prototype.push = function (x) {
    let newNode = new StackNode(x);
    if (!this.topNode) {
        this.topNode = newNode;
        this.length++;
        return;
    } else {
        newNode.next = this.top;
        this.topNode = newNode;
        this.length++;
        return;
    }
};

MyStack.prototype.pop = function () {
    if (!this.topNode) return null;
    let tempNode = this.topNode;
    this.topNode = this.topNode.next;
    this.length--;
    return tempNode.value;
};

MyStack.prototype.top = function () {
    if (!this.topNode) return null;
    return this.topNode.value;
};

MyStack.prototype.empty = function () {
    if (this.length == 0) return true;
    return false;
};
