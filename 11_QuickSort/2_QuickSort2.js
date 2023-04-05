// New verssion of Quick Sort
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const leftArr = [];
	const rightArr = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Time complexity of Quick Sort -> O(n^2): worst
							//	->  O(n log n): average