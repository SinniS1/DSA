/* WAF averagePair. Give a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target avegae.
There may be more than one pair that matches the average target. */
function averagePair(arr, avg) {
	if (arr.length === 1) return false;
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let math = (arr[left] + arr[right]) / 2;
		if (math === avg) {
			return true;
		} else if (math < avg) {
			left++;
		} else {
			right--;
		}
	}
	return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
