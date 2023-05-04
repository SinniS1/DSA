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
/*

1. Define a `Node` class that has three properties: `data`, `prev`, and `next`.
2. Define a `DoublyLinkedList` class that has three properties: `head`, `tail`, and `size`.
3. Initialize the `head` and `tail` to `null`, and the `size` to `0`.
4. Define a `append` method that adds a new node to the end of the list. This method should create a new `Node` object with the given data, set its `prev` pointer to the current `tail`, set the `next` pointer of the current `tail` to the new `Node`, and finally set the `tail` to the new `Node`. Update the `size` of the list after adding the new node.
5. Define a `prepend` method that adds a new node to the beginning of the list. This method should create a new `Node` object with the given data, set its `next` pointer to the current `head`, set the `prev` pointer of the current `head` to the new `Node`, and finally set the `head` to the new `Node`. Update the `size` of the list after adding the new node.
*/