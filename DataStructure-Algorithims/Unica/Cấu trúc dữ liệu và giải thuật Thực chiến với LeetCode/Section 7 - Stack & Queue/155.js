var StackNode = function (value) {
    this.value = value;
    this.next = null;
};

var MinStack = function () {
    this.topNode = null;
    this.length = 0;
    this.min = null;
};

MinStack.prototype.push = function (val) {
    let newNode = new StackNode(val);
    if (!this.topNode) {
        this.topNode = newNode;
        this.min = newNode;
        this.length++;
    } else {
        if (!this.min) {
            if (this.min.value > val) {
                this.min = newNode;
            }
        }
        newNode.next = this.topNode;
        this.topNode = newNode;
        this.length++;
    }
};

MinStack.prototype.pop = function () {
    if (!this.topNode) return;
    this.topNode = this.topNode.next;
    this.length--;
};

MinStack.prototype.top = function () {
    if (!this.topNode) return;
    return this.topNode.value;
};

MinStack.prototype.getMin = function () {
    if (!this.topNode) return;
    let tempNode = this.topNode;
    let minValue = tempNode.value;
    while (tempNode) {
        if (minValue > tempNode.value) {
            minValue = tempNode.value;
        }
        tempNode = tempNode.next;
    }
    return minValue;
};
