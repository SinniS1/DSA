// Singly LinkedList
// It consits of numbers of Nodes which are chained with each other using pointers

// Node     -> It is a store for data
//          -> Every node has a Right pointer points to next node and Store which sotres the data

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Adding node at the end
	push(value) {
		var newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// Deleting node at the end
	pop() {
		if (!this.head) {
			return undefined;
		} else {
			var current = this.head;
			var newTail = current;
			while (current.next) {
				newTail = current;
				current = current.next;
			}
			this.tail = newTail;
			this.tail.next = null;
			this.length--;
			if (this.length === 0) {
				this.head = null;
				this.tail = null;
			}
			return current;
		}
	}

	// Adding node at the start
	Unshift(value) {
		var newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// Deleting node at the start
	shift() {
		if (!this.head) return undefined;
		else if (this.length === 1) {
			var firstNode = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return firstNode;
		} else if (this.length > 1) {
			var current = this.head;
			this.head = this.head.next;
			this.length--;
			return current;
		}
	}
}

var list = new SinglyLinkedList();
// push
list.push("fist node");
list.push("second node");
list.push("third node");

// Pop
// console.log("Deletion of tail node - > ", list.pop());
// console.log("Deletion of tail node - > ", list.pop());
// console.log("Deletion of tail node - > ", list.pop());

// UnShift
// list.Unshift(45);
// list.Unshift(46);

// shift
list.shift();
list.shift();

console.log(list);
