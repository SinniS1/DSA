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

var first = new Node(45);
first.next = new Node("is value")
first.next.next = new Node("is inside the new node")
console.log(first);
