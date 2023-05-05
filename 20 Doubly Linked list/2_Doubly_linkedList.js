// Doubly LinkedList is type of linkedlist which does not have any tail and head.
// Any node can be selected randomly to callout as head from which we can run our functions in it

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.previou = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}
