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
first.next = new Node("is value");
first.next.next = new Node("is inside the new node");
console.log(first);

/*
	A singly linked list is a linear data structure that consists of a sequence of nodes, where each node contains a value and a reference (or "link") to the next node in the list. 
	The first node in the list is called the "head" and the last node is called the "tail". The tail node has a reference to null, indicating the end of the list.

	Append: Adding a new node with a given value to the end of the list. 
		This involves creating a new node with the given value and updating the next reference of the tail node to point to the new node. 
		If the list is empty, the head and tail references are both set to the new node.

	Prepend: Adding a new node with a given value to the beginning of the list. 
		This involves creating a new node with the given value and updating the next reference of the new node to point to the current head node. 
		Then, updating the head reference to point to the new node. If the list is empty, both the head and tail references are set to the new node.

	Delete: Removing a node with a given value from the list. 
		This involves searching for the node with the given value by traversing the list from the head to the tail, updating the next references of the previous node to bypass the node to be deleted. If the head or tail node is deleted, the head or tail reference is updated accordingly.


	Search: Searching for a node with a given value in the list. 
		This involves traversing the list from the head to the tail, comparing the values of each node with the given value until a match is found, or until the end of the list is reached.
	
	Get Length: Getting the number of nodes (length) in the list. This involves traversing the list from the head to the tail and counting the number of nodes encountered.

	Convert to Array: Converting the linked list to an array. This involves traversing the list from the head to the tail and adding the values of each node to an array.

	Print: Printing the linked list in a formatted string. This involves traversing the list from the head to the tail and printing the values of each node in a formatted string.
 */
