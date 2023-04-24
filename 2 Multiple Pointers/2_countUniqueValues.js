/* Implement a function called countUniqueValues, Which accecpts a sorted array,and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted */
// ---------------------------------------------------------------------------------
/* Examples
[1,1,1,1,1,1,1,2] => 2 unique values
[1,2,3,4,5,5,5,7,8,9,9] => 8 unique values
[] => 0 
[-2, -1 ,-50 ,8 ]  => 4 unique values

*/

function countUniqueValues(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i + 1]) {
			count++;
		}
	}
	return count;
}

// Test cases
console.log(countUniqueValues([-2, -1, -50, 8]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 7, 8, 9, 9]));
console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
