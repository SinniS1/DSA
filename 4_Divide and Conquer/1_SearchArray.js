// Divide and Conquer

// This pattern invoolves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity

/* WAF search, that accepts a value and returns the index where the value passed to the function is located.
if the value is not found, return -1  and the parameter array is sorted */

// Use Binary Search Algorithm to solve this question with O(logn)

function search(array, val) {
	let left = 0;
	let right = array.length - 1;
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (array[middle] > val) {
			right = middle - 1;
		} else if (array[middle] < val) {
			left = middle + 1;
		} else {
			return middle;
		}
	}
	return -1;
}

console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500], 2));
console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500], 50));
console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500], 300));
console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500], 6));
