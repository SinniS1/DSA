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


// Algorithm
// Initialize left as 0, representing the leftmost index of the search space.
// Initialize right as the index of the last element in the array, representing the rightmost index of the search space.
// Enter a loop that continues as long as left is less than or equal to right.
// Calculate middle as the integer division of the sum of left and right by 2, rounding down to the nearest whole number.
// If the value at array[middle] is greater than val, update right to middle - 1, narrowing the search space to the left half.
// If the value at array[middle] is less than val, update left to middle + 1, narrowing the search space to the right half.
// If the value at array[middle] is equal to val, the search is successful, and the function returns middle.
// If the loop concludes without finding a match, the function returns -1 to indicate that val is not present in the array.
