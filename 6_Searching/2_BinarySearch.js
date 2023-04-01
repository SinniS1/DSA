// Binary Search
function binarySearch(array, num) {
	var left = 0;
	var right = array.length - 1;
	while (left <= right) {
		var middle = Math.floor((right + left) / 2);
		if (array[middle] === num) {
			return middle;
		} else if (array[middle] < num) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
// Bing O of Binary Search in O(log n)   its very good
