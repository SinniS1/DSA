function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) { // Outer loop to iterate through the entire array
		let lowest = i; // Assume the current element as the lowest
		for (let j = i + 1; j < arr.length; j++) { // Inner loop to find the index of the lowest element
			if (arr[j] < arr[lowest]) { // Compare current element with the assumed lowest element
				lowest = j; // Update the index of the lowest element if a smaller element is found
			}
		}
		if (i !== lowest) { // If the assumed lowest element is not the actual lowest element
			// Swap the current element with the lowest element
			var temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr; // Return the sorted array
}

console.log(selectionSort([1, 2, 3, 4, 5, 6, 12, 11, 25, 65, 74, 5, 24, 96, 32, 41, 22, 71]));

// Time Complexity is O(n^2)

/*
This implementation of Selection Sort algorithm iterates through the array and finds the index of the lowest element in the remaining unsorted part of the array. 
It then swaps the current element with the lowest element, effectively moving the lowest element to its correct sorted position. 
The process is repeated until the entire array is sorted. The time complexity of this implementation is O(n^2), as there are two nested loops iterating through the array. 
The provided test case sorts an array of numbers using the selectionSort function and logs the sorted array to the console. */