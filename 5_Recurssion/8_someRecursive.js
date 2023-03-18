// someRecursive
/*  Write a recursive function called someRecursive which accepts an array and a callback. 
    The function returns true if a single value in the array returns true when passed to the callback. 
    Otherwise it returns false.
 */
const callback = (val) => val % 2 !== 0;
function someRecursive(arr, callback) {
	if (!arr.length) return false;
	let array = arr;
	if (callback(array.pop())) {
		return true;
	} else {
		return someRecursive(array, callback);
	}
}
console.log(someRecursive([2], callback));
