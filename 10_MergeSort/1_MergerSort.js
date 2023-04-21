// Merging function
function Merging(arr1, arr2) {
	var NewArray = []; // Create a new array to store the merged elements
	let i = 0; // Create a pointer for the first array
	let j = 0; // Create a pointer for the second array
	while (i < arr1.length && j < arr2.length) { // Compare elements from both arrays until one of them is exhausted
		if (arr1[i] <= arr2[j]) { // If element from the first array is smaller or equal
			NewArray.push(arr1[i]); // Push it to the new array
			i++; // Move the pointer of the first array to the next element
		} else { // If element from the second array is smaller
			NewArray.push(arr2[j]); // Push it to the new array
			j++; // Move the pointer of the second array to the next element
		}
	}
	// Copy any remaining elements from the first array
	while (i < arr1.length) {
		NewArray.push(arr1[i]);
		i++;
	}
	// Copy any remaining elements from the second array
	while (j < arr2.length) {
		NewArray.push(arr2[j]);
		j++;
	}
	return NewArray; // Return the merged and sorted array
}

// Splitting function
function Splitting(arr) {
	if (arr.length <= 1) return arr; // Base case: if array has 0 or 1 element, it is already sorted
	let middle = Math.floor(arr.length / 2); // Find the middle index of the array
	let left = Splitting(arr.slice(0, middle)); // Recursively split the left half of the array
	let right = Splitting(arr.slice(middle)); // Recursively split the right half of the array
	return Merging(left, right); // Merge the sorted left and right halves and return the sorted array
}

console.log(Splitting([10, 24, 76, 73, 1]));

// Time complexity is O(n log n)
// Time compleity is O( n log n )

// log n  -> it means rate of growth of splitting array
// -> if we have 32 element array we need to split it 5 times, so 2 mutiply by 5 gives 32
// -> if we have 16 element array we need to split it 3 times, so 2 mutiply by 3 gives 16

// n    -> it comes from how many times we need to merge our array it will always be samee as the number of elements
