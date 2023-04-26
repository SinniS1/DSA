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
		if (index > this.length || index < 0) return console.log("Enter valid index number");
		else if (index === 0) {
			this.Unshift(value);
		} else if (index === this.length) {
			this.push(value);
		} else {
			var newNode = new Node(value);
			var prevNode = this.Get(index - 1);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
			this.length++;
		}
	}

	Remove(index) {
		if (index >= this.length || index < 0) return console.log("Enter valid index number");
		else if (index === 0) {
			this.shift();
		} else if (index === this.length) {
			this.pop();
		} else {
			var prevNode = this.Get(index - 1);
			var currentNode = this.Get(index);
			prevNode.next = currentNode.next;
			this.length--;
		}
	}

	Print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.data);
			current = current.next;
		}
		console.log(arr);
	}
	Reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;

		var nextNode;
		var prevNode = null;
		for (let i = 0; i < this.length; i++) {
			nextNode = node.next;
			node.next = prevNode;
			prevNode = node;
			node = nextNode;
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

// list.Print()
// Get method
// console.log("Retrieved Node is -> ", list.Get(0));

// Set Method
// list.Set("Sachin", 0);
// list.Set("Yadav", 0);
// list.Print()

// --------------------------------------------------------------------------------------
// Insert
// list.Print();
// Head
// list.Insert(999, 0);
// console.log("value at index -> ", list.Get(0));

// Tail
// list.Insert(999, 3);
// console.log("value at index -> ", list.Get(2));

// In between
// list.Insert("Hello", 2);
// console.log("value at index -> ", list.Get(1));
// list.Print()
// --------------------------------------------------------------------------------------
//
// --------------------------------------------------------------------------------------
// Remove
// list.Print()
// Head
// list.Remove(0);
// console.log("value at index -> ", list.Get(0));

// Tail
// list.Remove(2);
// console.log("value at index -> ", list.Get(1));

// In between
// list.Remove(1);
// console.log("value at index -> ", list.Get(1));
// list.Print()
// --------------------------------------------------------------------------------------
//
// --------------------------------------------------------------------------------------
// Reverse
list.Print();
list.Reverse();
list.Print();
// --------------------------------------------------------------------------------------
//

// Time complexity of SinglyLinkedList
// Insertion   ->  O(1)
// Removal from start  -> O(1)
// 			from end 	-> O(n)
// Searching -> 	O(n)
// Access 	-> 		O(n)
