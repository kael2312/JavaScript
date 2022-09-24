class QueueNode {
    constructor(value) {
        this.value = value;
        this.previous = null;
    }
}

class Queue {
    constructor(value) {
        let newNode = new QueueNode(value);
        this.bottom = newNode;
        this.head = newNode;
        this.length = 1;
    }

    queue(value) {
        let newNode = new QueueNode(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.head = newNode;
        } else {
            this.bottom.previous = newNode;
            this.bottom = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) return undefined;
        let tempNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.bottom = null;
        } else {
            this.head = this.head.previous;
            tempNode.previous = null;
        }
        this.length--;
        return tempNode;
    }
}

let newQueue = new Queue(4);
newQueue.queue(3);
console.log(newQueue);
