// Redix Sort
// Visualize Radix Sort  https://visualgo.net/en/sorting?slide=16
/* Radix sort is a non-comparative sorting algorithm that sorts elements by grouping them based on the digits (or other individual elements) that make up the values of the elements. 
The algorithm sorts the elements by their individual digits, starting from the least significant digit to the most significant digit. 
The digits are sorted by counting the frequency of occurrence of each digit in each element of the array and using this information to arrange the elements in the correct order. 
*/

function getPos(num, place) {
	num = Math.abs(num);
	var devisor = 1;
	for (let i = 1; i <= place; i++) {
		devisor *= 10;
	}
	return Math.floor(num / devisor) % 10;
}

function digitCount(num) {
	num = Math.abs(Math.floor(num));
	var value = num.toString();
	return value.length;
}

function mostDigit(arr) {
	let maxDigit = 0;
	arr.forEach((element) => {
		maxDigit = Math.max(maxDigit, digitCount(element));
	});
	return maxDigit;
}

function RadixSort(arr) {
	// largest no. of digit is->
	var largestDigit = mostDigit(arr);
	for (let k = 0; k < largestDigit; k++) {
		let digitBucket = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < arr.length; i++) {
			var index = getPos(arr[i], k);
			digitBucket[index].push(arr[i]);
		}
		// console.log(digitBucket);
		arr = [].concat(...digitBucket);
		// console.log(arr);
		// console.log("---------------------------------------------------------");
	}
	return arr;
}

console.log(RadixSort([122, 12, 1, 0, 55, 25, 36]));

// Time complexity of RadixSort -> O( nk )
//  n  ->  number of elements in array
//  k  ->  length of largest number
