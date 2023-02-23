// Frequency Counter Pattern

/* WAF caleed same, which accepts two arrays. 
The func should return true if every value in the array has it's corresponding value squared in the second
array. The frequency of values must be the same.
*/

// Time complexity is O(n^2) -> for loop and another nested indexOf fun. which is a for loop under the hood
// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	for (let i = 0; i < arr1.length; i++) {
// 		const correctIndex = arr2.indexOf(arr1[i] ** 2);
// 		if (correctIndex === -1) {
// 			return false;
// 		}
// 		arr2.splice(correctIndex, 1);
// 	}
// 	return true;
// }
// console.log(same([1, 2, 1], [1, 4, 1]));

// -----------------------------------------------------------------------------------------------

// Time complexity is O(n)
// there are three for loops means 3n but costants ignored so n
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	// looping of frequecycounter1
	for (let key in frequencyCounter1) {
		// checking if key of FC1 exits as Key **2 in  FC2 or not
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		// checking frequnecy of key in FC1 is same in frequnecy of key **2 in fC2
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same([2, 2, 3, 2, 3, 5, 5], [9, 25, 4, 4, 25, 4, 9]));
