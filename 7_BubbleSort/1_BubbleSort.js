// Bubble Sorting Algorithm
function BubbleSort(arr) {
	let count = 0;
	for (let j = 0; j < arr.length; j++) {
		count++;
		for (let i = 0; i < arr.length - (j + 1); i++) {
			// console.log(arr, arr[i], arr[i + 1]);
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}
	return count;
}

console.log(BubbleSort([1, 2, 3, 50, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])," loops in BubbleSort");

// Optimization
/* So, our previous code works good, but there is one use cose which need to be optizied
What is our array is allready or mostly sorted.
So, our code will still goes to loop again and again unnecessary */

function BubbleSort2(arr) {
	let count = 0;
	var noSwap;
	for (let j = 0; j < arr.length; j++) {
		count++;
		noSwap = true;
		for (let i = 0; i < arr.length - (j + 1); i++) {
			// console.log(arr, arr[i], arr[i + 1]);
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return count;
}

console.log(BubbleSort2([1, 2, 3, 50, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])," loops in BubbleSort2");



// Time complexity of Bubble Sort
//  O( n^2 )