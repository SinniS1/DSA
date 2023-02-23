// Multiple Pointers
/* Creating POINTERS or values that correspond to an index or position and 
move towards the beginnning,end or middle based on a certain condition.
Very efficient for solving problems with minimal space complexity as well
*/

/* WAF called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that inclueds both values that sum to zero or undefined if a pair does not eixst 
*/

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));
