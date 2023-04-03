// Insertion Sort
function InsertionSort(array) {
	for (var i = 1; i < array.length; i++) {
		var currentVal = array[i];
		for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = currentVal;
	}
	return array;
}

console.log(InsertionSort([45, 74, 1, 2, 3, 58, 4, 5, 4, 2, 9, 6, 3]));

// Time complexity is O(n^2)
