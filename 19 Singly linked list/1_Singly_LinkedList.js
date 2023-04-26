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

	// Getting a node by its position
	Get(index) {
		if (index < 0 || index >= this.length) return null;
		var i = 0;
		var current = this.head;
		while (i !== index) {
			current = current.next;
			i++;
		}
		return current;
	}

	// Updagting the value of node based on it's position
	Set(value, index) {
		// finding the node
		if (index < 0 || index >= this.length) return console.log("Index is greater than length of linked list");
		var getNode = this.Get(index);
		getNode.data = value;
	}

	Insert(value, index) {
		var newNode = new Node(value);
		if (index > this.length) return console.log("Enter valid index number");
		else if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
		} else if (index === this.length) {
			this.tail.next = newNode;
			this.tail = newNode
			this.length++;
		} else {
			var ptr1 = this.head;
			var i = 0;
			while (i < index - 1) {
				ptr1 = ptr1.next;
				i++;
			}
			newNode.next = ptr1.next;
			ptr1.next = newNode;
			this.length++;
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
// list.shift();
// list.shift();

// console.log(list);
// Get method
// console.log("Retrieved Node is -> ", list.Get(0));

// Set Method
// list.Set("Sachin", 0);
// list.Set("Yadav", 0);
// console.log(list);

// Insert
console.log(list);
list.Insert(999, 3);
console.log("\n\nvalue at index -> ", list.Get(3));
console.log(list);
