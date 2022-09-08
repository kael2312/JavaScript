// create LinkedList
// insertHead()
// printLinkedList()
// getHead()
// getTail()
// getSize()
// findIndexByData()
// findWithCallback()

function LinkedList() {
    let head = null;
    function insertHead(newData) {
        let newNode = {
            data: newData,
            next: null,
        };

        if (head == null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }

    function insertTail(newData) {
        let newNode = {
            data: newData,
            next: null,
        };

        if (head == null) {
            head = newNode;
        } else {
            let currentNode = head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
    }

    function insertAtIndex(newData, position) {
        let newNode = {
            data: newData,
            next: null,
        };

        if (head == null || position === 0) {
            insertHead(newData);
            return;
        }

        let prevNode = head;
        let aftNode = head;
        let index = 0;
        while (index < position) {
            index++;
            prevNode = aftNode;
            aftNode = aftNode.next;
        }
        prevNode.next = newNode;
        newNode.next = aftNode;
        return;
    }

    function removeHead() {
        head = head.next;
    }

    function removeTail() {
        let currentNode = head;
        let prevNode;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
    }

    function removeAtIndex(position) {
        if (head == null) return;
        let index = 0;
        let prevNode = head;
        let aftNode = head;
        while (aftNode.next != null && index < position) {
            prevNode = aftNode;
            aftNode = aftNode.next;
            index++;
        }
        prevNode.next = aftNode.next;
    }

    function printLinkedList() {
        if (head == null) return;
        let currentNode = head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    function getHead() {
        if (head == null) return;
        return head.data;
    }

    function getTail() {
        if (head == null) return;
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail.data;
    }

    function getSize() {
        if (head == null) return 0;
        let currentNode = head;
        let count = 0;
        while (currentNode) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }

    function findIndexByData(data) {
        if (head == null) return;
        let currentNode = head;
        let count = 0;
        while (currentNode) {
            if (currentNode.data == data) return count;
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }

    function findWidthCallback(callbackFn) {
        if (head == null || typeof callbackFn !== "function") return;
        let result = [];
        let currentNode = head;
        while (currentNode) {
            if (callbackFn(currentNode.data)) result.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return result;
    }

    function test() {}

    return {
        insertHead,
        insertTail,
        insertAtIndex,
        removeHead,
        removeTail,
        removeAtIndex,
        printLinkedList,
        getHead,
        getTail,
        getSize,
        findIndexByData,
        findWidthCallback,
    };
}
