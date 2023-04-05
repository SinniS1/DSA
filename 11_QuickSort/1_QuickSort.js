// Quick Sort
// Swap Function
function Swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
// Pivot function
function Pivot(arr, start = 0, end = arr.length - 1) {
	var pivot = arr[start];
	var swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			Swap(arr, swapIdx, i);
		}
	}
	Swap(arr, start, swapIdx);
	return swapIdx;
}

function QuickSort(array, left = 0, right = array.length - 1) {
	if (left < right) {
		let PivotIndex = Pivot(array, left, right);
		// left side of array from pivot
		QuickSort(array, left, PivotIndex - 1);
		// Right side of array from pivot
		QuickSort(array, PivotIndex + 1, right);
	}
	return array;
}
var array = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10];
var NewArray = QuickSort(array);
console.log(NewArray);


// Time complexity of Quick Sort -> O(n^2): worst
							//	->  O(n log n): average