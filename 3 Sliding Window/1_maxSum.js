// SLIDING WINDOW
/* Thie pattern invoolves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increase or close (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc.
*/

/* WAF called maxSubarraySum which accepts an array of integers and a numebr called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
eg->
([1,2,5,2,8,1,5],2) => 8,2 => 10
([1,2,5,2,8,1,5],4) => 2,5,2,8 => 17
([],4) => null
 */

// Naive Pattern O(n^2)
function maxSubarraySum1(arr, num) {
	if (num > arr.length) {
		return null;
	}
	var max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		let sum = 0;
		for (let j = 0; j < num; j++) {
			sum += arr[i + j];
		}
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 21, 5], 2));

console.log("----------------------------------------------------------------------------------------------");

// Sliding Window Pattern O(n)
function maxSubarraySum2(arr, num) {
	if (arr.length < num) return null;
	let maxSum = 0;
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	} 
	tempSum = maxSum;
	// window sum
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 21, 5], 2));
