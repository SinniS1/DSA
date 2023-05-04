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
/**
 
6. Define a `insertAt` method that adds a new node at a specific position in the list. This method should create a new `Node` object with the given data, traverse the list to find the node at the desired position, set its `prev` pointer to the previous node, set the `next` pointer of the previous node to the new `Node`, set the `next` pointer of the new `Node` to the next node, and finally set the `prev` pointer of the next node to the new `Node`. Update the `size` of the list after adding the new node.
7. Define a `removeAt` method that removes a node at a specific position in the list. This method should traverse the list to find the node at the desired position, set the `next` pointer of the previous node to the next node, set the `prev` pointer of the next node to the previous node, and finally delete the node. Update the `size` of the list after removing the node.
8. Define a `traverse` method that iterates through the list and prints the data of each node in the list. 
 */
