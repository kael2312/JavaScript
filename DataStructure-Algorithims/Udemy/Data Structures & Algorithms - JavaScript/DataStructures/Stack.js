class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let newNode = new StackNode(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        let newNode = new StackNode(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let tempNode = this.top;
        this.top = this.top.next;
        tempNode.next = null;
        this.length--;
        return tempNode;
    }
}

let newStack = new Stack(4);
newStack.push(3);
console.log(newStack);
