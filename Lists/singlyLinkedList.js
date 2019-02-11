class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Add node to end of list.
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        length++;
    }
    // Remove node from end of list.
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let previous = current;
        while (current.next)
        {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Remove node from front of list.
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }
    // Add node to front of list.
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        length++;
        return this;
    }
    // Retrieve node at specified zero-based index in list.
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count != index) {
            current = current.next;
            count++;
        }
        return current;
    }
    // Update value of node at specified zero-based index in list.
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }
    // Insert new node in list at a specified index. 
    insert(index, value) {
        insertEdges(index, value);
        let newNode = new Node(value);
        let previous = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // Handle insert method edge cases separately.
    insertEdges(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value); // !! cast to bool(true).
        if (index === 0) return !!this.unshift(value);
        else {
            insert(index, value);
        }
    }
    // Remove node at specified index.
    remove(index) {
        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }
    // Handle remove method edge cases separately.
    removeEdges(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length) return this.pop(); // !! cast to bool(true).
        if (index === 0) return this.shift(value);
        else {
            remove(index);
        }
    }
    // Reverse singly linked list in-place.
    reverse() {
        if (this.length === 0) return undefined;
        if (this.length === 1) return this;
        
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = null;
        
        while (current != null)
        {
            let tempNext = current.next;
            current.next = previous;
            previous = current;
            current = tempNext;
        }
        return this;
    }
}