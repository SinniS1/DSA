// Doubly LinkedList is type of linkedlist which does not have any tail and head.
// Any node can be selected randomly to callout as head from which we can run our functions in it

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	Print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.data);
			current = current.next;
		}
		console.log("\n", arr, "\n");
	}

	// Push method
	Push(data) {
		var newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// Pop method
	Pop() {
		if (this.length === 0) return console.log("List is empty");
		var poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.previous;
			this.tail.next = null;
		}
		this.length--;
		return console.log(poppedNode);
	}

	// Shift -> removing a node from beginning
	Shift() {
		if (this.length === 0) return console.log("List is empty");
		var ShiftedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.previous = null;
		}
		this.length--;
		return console.log(ShiftedNode);
	}

	// UnShift -> Adding a node at beginning
	UnShift(data) {
		var newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode
		}
		this.length++;
		return this;
	}

	// Get -> accessing a node by it's position	
	Get(index){
		if(index < 0 || index >= this.length) return null;
		if(index <= this.length/2){
			// start from left side
			
		}else{
			// start from right side
		}
	}
}

var list = new DoublyLinkedList();

// console.log(list);
// Push data
console.log("\n----------------------Push Data--------------------------\n");
list.Push(50);
list.Push(51);
list.Push(52);
list.Push("Next Item");
list.Print()
console.log("\n------------------------------------------------\n");

// Pop Data
// console.log("\n----------------------Pop data--------------------------\n");
// list.Print();
// list.Pop();
// list.Print();
// console.log("\n------------------------------------------------\n");

// Shift Data
// console.log("\n----------------------Shift data--------------------------\n");
// list.Print();
// list.Shift();
// list.Print();
// console.log("\n------------------------------------------------\n");


// UnShift Data
// console.log("\n----------------------UnShift data--------------------------\n");
// list.Print();
// list.UnShift("Head Start");
// list.Print();
// console.log("\n------------------------------------------------\n");


// holding it because of sem exam. befor start Revise again from singly linked list 
