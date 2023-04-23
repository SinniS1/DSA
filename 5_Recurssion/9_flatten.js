// flatten
/* Write a recursive function called flatten which accepts an array of arrays and 
    returns a new array with all values flattened.

    - [1, 2, 3, [4, 5] ]                        -> // [1, 2, 3, 4, 5]
    - [1, [2, [3, 4], [[5]]]]                   -> // [1, 2, 3, 4, 5]
    - [[1],[2],[3]]                             -> // [1,2,3]
    - [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]       -> // [1,2,3]
 */

function flatten(array) {
	let result = [];

	function helper(arr) {
		if (!arr.length) return;
		Array.isArray(arr[0]) ? helper(arr[0]) : result.push(arr[0]);
		helper(arr.slice(1));
	}
	helper(array);
	return result;
}

console.log(flatten([1, 2, 3, [4, 5]]));

/* The flatten function is a recursive JavaScript function that takes an array array as input and 
returns a new flattened array that contains all the elements of array and its nested arrays, flattened into a single level.

Parameters
array: An array (or an array-like object) that needs to be flattened.

Return Value
Returns a new flattened array containing all the elements of array and its nested arrays, flattened into a single level.

Function Implementation
The flatten function uses a helper function called helper to recursively flatten the nested arrays.

1. The helper function takes an array arr as input.
2. If arr is empty (i.e., !arr.length is true), the function returns immediately, as there are no more elements to process.
3. If the first element of arr is an array (determined using Array.isArray(arr[0])), the helper function is recursively called with arr[0] as the argument. This step is used to flatten the nested arrays.
4. If the first element of arr is not an array, it is pushed to the result array using result.push(arr[0]). This step is used to add the non-array elements to the flattened array.
5. Finally, the helper function is called recursively with the remaining elements of arr (i.e., arr.slice(1)) to continue flattening the remaining elements.
6. The helper function is initially called with the input array array passed to the flatten function.
7. Once all the elements of array and its nested arrays are flattened, the result array is returned.
*/
