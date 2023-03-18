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
