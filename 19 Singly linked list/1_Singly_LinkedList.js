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
}

var list = new SinglyLinkedList();
list.push("fist node");
list.push("second node");
list.push("third node");
console.log(list);
console.log("Deletion of tail node - > ", list.pop());
console.log("Deletion of tail node - > ", list.pop());
console.log("Deletion of tail node - > ", list.pop());
console.log(list);
