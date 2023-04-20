function InsertionSort(array) {
	for (var i = 1; i < array.length; i++) { // Outer loop to iterate through the entire array starting from the second element
		var currentVal = array[i]; // Store the current element value
		for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) { // Inner loop to compare the current element with the previous elements
			array[j + 1] = array[j]; // Shift the elements to the right until the correct position is found for the current element
		}
		array[j + 1] = currentVal; // Place the current element at the correct sorted position
	}
	return array; // Return the sorted array
}

console.log(InsertionSort([45, 74, 1, 2, 3, 58, 4, 5, 4, 2, 9, 6, 3]));

// Time complexity is O(n^2)
/*This implementation of Insertion Sort algorithm iterates through the array starting from the second element and 
compares it with the previous elements to find the correct sorted position for the current element. 
It shifts the elements to the right until the correct position is found and then places the current element at that position. 
The process is repeated until the entire array is sorted. 
The time complexity of this implementation is O(n^2), as there are two nested loops iterating through the array. 
The provided test case sorts an array of numbers using the InsertionSort function and logs the sorted array to the console.
 */